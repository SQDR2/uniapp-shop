<template>
	<view class="home">
		<swiper indicator-dots indicator-active-color="#ff0000" autoplay :interval="2000" circular>
			<swiper-item v-for="item in swipers" :key="item.id">
				<image :src="item.img"></image>
			</swiper-item>
		</swiper>
		<!-- 导航栏 -->
		<view class="nav">
			<view class="nav_item" v-for="(item,index) in navs" :key="index" @click="goNavigator(item.path)">
				<view :class="item.icons"></view>
				<text>{{item.title}}</text>
			</view>
		</view>
		<!-- 推荐商品 -->
		<view class="hot_goods">
			<!--标题 -->
			<view class="title">
				推荐商品
			</view>
			<!-- 展示 -->
			<goods-list :goods="goods" @itemClick='goGoodDetail'></goods-list>
		</view>
	</view>
</template>

<script>
	import goodsList from '../../components/goods-list/goods-list.vue'
	export default {
		data() {
			return {
				// 存放轮播图数据
				swipers: [],
				// 存放商品列表数据
				goods: [],
				//导航菜单数据
				navs: [{
						icons: "iconfont icon-ziyuan",
						title: "在线超市",
						path: "/pages/navs/goods/list"
					},
					{
						icons: "iconfont icon-guanyuwomen",
						title: "联系我们",
						path: "/pages/navs/contact/contact"
					},
				 {
						icons: "iconfont icon-tupian",
						title: "社区图片",
						path: "/pages/navs/pics/pics"
					},
					{
						icons: "iconfont icon-shipin",
				 	title: "学习视频",
						path: "/pages/navs/videos/videos"
					}
				]
			}
		},
		components: {
			"goods-list":goodsList
		},
		onLoad() {
			// 获取轮播图数据
			this.getSwipers(),
			// 执行获取商品列表数据
			this.getGoods()
		},
		methods: {
			// 获取轮播图数据
			async getSwipers() {
				const res = await this.$myRequest({
					method: 'GET',
					url: '/api/getlunbo'
				})
				this.swipers = res.data.message
			},
			// 获取推荐商品
			async getGoods() {
				const res = await this.$myRequest({
					url: '/api/getgoods?pageindex=1'
				})
				this.goods = res.data.message
			},
			// 导航栏点击跳转方法
			goNavigator(url){
				uni.navigateTo({
					url
				})
			},
			goGoodDetail(id){
				console.log(id)
				uni.navigateTo({
					url:'/pages/good-detail/good-detail?id='+id
				})
			}
		}
	}
</script>

<style lang="scss">
	.home {
		swiper {
			height: 380rpx;

			image {
				width: 750rpx;
				height: 380rpx;
			}
		}

		.nav {
			display: flex;
			.nav_item {
				width: 25%;
				text-align: center;

				view {
					width: 120rpx;
					height: 120rpx;
					border-radius: 50%;
					background-color: $shop-color;
					margin: 10rpx auto;
					line-height: 120rpx;
					color: #ffffff;
					font-size: 50rpx;
				}

				.icon-tupian {
					font-size: 45rpx;
				}

				text {
					font-size: 30rpx;
				}
			}
		}

		.hot_goods {
			background-color: #eee;
			overflow: hidden;

			.title {
				height: 50rpx;
				line-height: 50rpx;
				color: $shop-color;
				text-align: center;
				letter-spacing: 20rpx;
				background-color: #ffffff;
				margin: 7rpx 0;
			}


		}
	}
</style>
