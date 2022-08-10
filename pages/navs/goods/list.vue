<template>
	<view class="container">
		<goods-list :goods="goods" @itemClick='goGoodDetail'></goods-list>
		<view class="over_line" v-if="flag">----------我是有底线的----------</view>
	</view>
</template>

<script>
	import goodsList from '../../../components/goods-list/goods-list.vue'
	export default {
		data(){
			return{
				goods:[],
				pageIndex:1,
				flag:false
			}
		},
		onLoad(){
			this.getGoods()
		},
		// 页面下拉到底部的生命周期函数
		onReachBottom(){
			if(this.pageIndex*10>this.goods.length){
					return this.flag = true
			}
			this.pageIndex++;
			this.getGoods()
		},
		onPullDownRefresh() {
		  this.goods = []
		  this.pageIndex = 1
		  this.flag = false 
		  setTimeout(()=>{
		    this.getGoods(()=>{
		      uni.stopPullDownRefresh()
		    })
		  },1000)
		},
		components:{'goods-list':goodsList},
		methods:{
			async getGoods (callback) {
				const res = await this.$myRequest({
					url: `/api/getgoods?pageindex=${this.pageIndex}`
				})
				// this.goods = res.data.message
				this.goods = [...this.goods,...res.data.message]
				callback && callback()
			},
			goGoodDetail(id){
				console.log(id)
				uni.navigateTo({
					url: '/pages/good-detail/good-detail?id='+id
				})
			}
		}
	}
</script>

<style lang="scss">
.container{
	background-color: #eee;
	.over_line{
		width: 100%;
		height:100rpx;
		line-height: 100rpx;
		background-color: #fff;
		text-align: center;
		margin: 10rpx 0;
		font-size: 20rpx;
	}
}
</style>