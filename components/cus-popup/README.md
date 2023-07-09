# cus-popup
遮罩弹框

支持上中下左右类型

## 属性说明

|属性名|类型|默认值|说明|
| -- | -- | --|--|
| value | Boolean | true | 是否显示弹窗 |
| position | String | center | 弹窗方式 center	居中	√		left 左	√		right	右	√		top	上		bottom	下 |
| duration | Number | 100 | 隐藏间隔时间 |
| headerIsCustom | Boolean | false | 自定义头部高度是否包含 |
| allowMarkClose | Boolean | true | 是否允许点击mark区域关闭 |
| zIndex | Number | 10000 | 弹窗层级 |

## 使用示例

```html
<cus-popup position="center" :zIndex="100" v-model="visible" :allowMarkClose="allowMarkClose"  popup-wrap-custom="custom-pop">
	<view class="">
		这是居中的弹窗
	</view>
</cus-popup>
```

```javascript
import cusPopup from "@/components/cus-popup/popup.vue"
export default {
  components: {
    cusPopup
  },
  data() {
    return {
      allowMarkClose:true,
      visible:true
    }
  }
}
```

## 效果图

暂无
