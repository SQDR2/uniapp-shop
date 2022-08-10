<template>
	<view>
		<view class="news_detail">
				<view class="news_title">
					{{newsDetail.title}}
				</view>
				<view class="info">
					<text>发表时间：{{newsDetail.add_time|formatDate}}</text>
					<text>浏览：{{newsDetail.click+123+'次'}}</text>
				</view>
				<view class="content">
					<rich-text :nodes="newsDetail.content"></rich-text>
				</view>
			</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				newsDetail:[]
			}
		},
		onLoad(options){
			console.log(options)
			this.getnewdetail(options.id)
		},
		methods:{
			async getnewdetail(id){
				const res = await this.$myRequest({
				      url: '/api/getnew/'+id
					})
				console.log(res)
				this.newsDetail = res.data.message[0]
			}
		}
	}
</script>

<style lang="scss">
	.news_detail{
		padding: 15rpx;
		.news_title{
			text-align: center;
			font-size:32rpx;
		}
		.info{
			font-size: 28rpx;
			display: flex;
			justify-content: space-between
		}
	}
</style>