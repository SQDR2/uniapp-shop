<template>
	<view class="pics">
		<scroll-view class="left" scroll-y>
			<view :class="handleIndex === item.id?'active':''" v-for="item in leftlist" :key="item.id" @click="handleCate(item.id)">{{item.title}}</view>
		</scroll-view>
		<scroll-view class="right" scroll-y="true" >
			<view class="item">
				<image src="../../../static/icon/logo.png" @click="previewImage"></image>
				<text>uiwhdiqwbdqwudbbqw</text>
			</view>
			<view class="item" v-for="item in rightlist" :key="id">
				<image src="item.img_url" @click="previewImage(item.img_url)"></image>
				<text>{{item.title}}</text>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				leftlist:[
					{title:'家居生活',id:14},
					{title:'摄影设计',id:15},
					{title:'明星美女',id:16},
					{title:'空间设计',id:17},
					{title:'户型装饰',id:18},
					{title:'广告摄影',id:19},
					{title:'摄影学习',id:20},
					{title:'生活器材',id:21},
					{title:'数码产品',id:22},
					{title:'家用电器',id:23},
					{title:'果蔬生鲜',id:24}
				],
				handleIndex:20,
				rightlist:[]
			}
		},
		onLoad(){
			this.handleCate(this.handleIndex)
		},
		methods:{
			async handleCate(id){
				this.handleIndex = id
			  const res = await	this.$myRequest({
					url:'/api/getimages/'+id
				})
				console.log(res)
				this.rightlist = res.data.message
			},
			previewImage(img){
				const urls = this.rightlist.map(item=>{
					return item.img_url
				})
				// console.log(urls)
				uni.previewImage({
					current:img,
					urls
				})
			}
		}
	}
</script>

<style lang="scss">
	page{
		height: 100%;
	}
	.pics{
		display: flex;
		height: 100%;
		.left{
			width: 200rpx;
			height: 100%;
			border-right: 1px solid #eee;
			view{
				height: 120rpx;
				line-height: 120rpx;
				color: #333;
				text-align: center;
				font-size: 30rpx;
				border-top: 1px solid #eee;
			}
			.active{
				background-color: $shop-color;
				color: #fff;
			}
		}
		.right{
			heigth:100%;
			width: 520rpx;
			margin: 10rpx auto;
			.item{
				border: 1px solid #eee;
				margin: 20rpx 0;
				image{
					width:520rpx;
					height: 520rpx;
					border-radius: 5px;
				}
				text{
					font-size: 30rpx;
					line-height: 60rpx;
				}
			}
		}
	}
</style>