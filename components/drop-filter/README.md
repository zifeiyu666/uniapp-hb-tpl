# drop-filter
下拉式筛选菜单

商城，团购常用的下拉式筛选菜单

## 属性说明

|属性名|类型|默认值|说明|
| -- | -- | --|--|
| meunVisible | Boolean | true | 是否展示菜单 |
| dataList | Array | [] | 菜单数据 |

## 使用示例

```html
	<button @click="openVisible">点击展示菜单</button>

	<drop-filter :searchData.sync='searchData' v-model='visible'></drop-filter>

```

```javascript
import dropFilter from '@/components/drop-filter/drop-filter.vue'
export default {
  components: {
    dropFilter
  },
  data() {
    return {
	  visible:false,
      searchData: {
        min_price: '',
        max_price: '',
        cos_ratio: '',
        cos_fee: '',
        comment_score: '',
        sort_field: '',
        sort_order: ''
      },
    }
  },
  methods:{
	  openVisible(){
	  	this.visible = true
	  },
  },
  watch:{
  	searchData(news){
  		console.log(news,'监听最新的值')
  	}
  },
}
```

## 效果图

暂无
