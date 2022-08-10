<template>
	<view>
		<view class="news_item" v-for="item in data" :key="item.id" @click="navigator(item.id)">
			<image :src="item.img_url"></image>
			<view class="right">
				<view class="title">{{item.title}}</view>
				<view class="info">
					<text>发表时间：{{item.add_time | formatDate}}</text>
					<text>浏览：{{item.click+123+'次'}}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			data:Array
		},
		methods:{
			navigator(id){
				this.$emit('itemClick',id)
			}
		}
	}
</script>

<style lang="scss">
	.news_item {
		display: flex;
		padding: 10rpx 20rpx;
		border-bottom: 1rpx solid $shop-color;

		image {
			min-width: 200rpx;
			max-width: 200rpx;
			height: 150rpx;
		}

		.right {
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			padding: 10rpx 20rpx;

			.title {
				font-size: 30rpx;
			}

			.info {
				font-size: 24rpx;

				text:nth-child(2) {
					margin-left: 40rpx;
				}
			}
		}
	}
</style>
