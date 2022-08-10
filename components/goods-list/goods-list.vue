<template>
	<view class="goods_list">
		<view class="goods_item" v-for="item in goods" :key="item.id" @click="handle(item.id)">
			<image :src="item.img_url"></image>
			<view class="price">
				<text>{{item.sell_price}}</text>
				<text>{{item.market_price}}</text>
			</view>
			<view class="item_name">{{item.title}}</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			goods: Array
		},
		methods:{
			handle(id){
				this.$emit('itemClick',id)
			}
		}
	}
</script>

<style lang="scss">
	.goods_list {
		display: flex;
		padding: 0 15rpx;
		justify-content: space-between;
		overflow: hidden;
		flex-wrap: wrap;

		.goods_item {
			width: 355rpx;
			margin-bottom: 15rpx;
			background-color: #ffffff;
			padding: 20rpx;
			box-sizing: border-box;

			image {
				height: 300rpx;
				width: 300rpx;
				margin: 20rpx auto;
			}

			.price {
				font-size: 36rpx;
				color: red;
				padding: 16rpx 0;

				text:nth-child(2) {
					color: #ccc;
					text-decoration: line-through;
					margin-left: 20rpx;
					font-size: 26rpx;
				}
			}

			.item_name {
				font-size: 28rpx;
			}
		}
	}
</style>
