
## 常用结构
<!-- 粉底红字 -->
<u-tag text="标签" shape="circle" borderColor="#FFECE8" bgColor="#FFECE8" color="#f53f3f"> </u-tag>
<!--  红色渐变 tag -->
<u-tag text="面部护肤" shape="circle" borderColor="#FFECE8"
	bgColor="linear-gradient(90deg, #FF7B7B 0%, #F53F3F 100%)" color="#fff">
</u-tag>

<!--  灰低黑字 -->
<u-tag text="标签" shape="circle" borderColor="#F5F6F8" bgColor="#F5F6F8" color="#444444"> </u-tag>

<!--  白底黑字 tag -->
<u-tag text="面部护肤" shape="circle" borderColor="#ffffff" bgColor="#ffffff" color="#444444"></u-tag>		
			

<!-- 渐变按钮 -->		
<u-button text="转换为我的链接" shape='circle' type='primary' size='small' color='linear-gradient(90deg, #FF7B7B 0%, #F53F3F 100%)'></u-button>
<cn-money class='u-m-l-10' color='#f53f3f' :money="68.45" :size="28"></cn-money>

env(safe-area-inset-top)

env(safe-area-inset-bottom)


<!--  商品形式 -->
<!-- 横版商品 例如跟着买 -->
<goods-list-row-item></goods-list-row-item>


<!-- 表单切换分类 -->
<circle-tabs :tabList="classifyList" defaultCurrent="jsyp"></circle-tabs>