<template>
	<view class="contact">
		<image src="https://www.itcast.cn/2018czydz/images/gywmban.jpg"></image>
		<view class="info">
			<view @click="phone">联系电话：400-123-1233(点击拨打)</view>
			<view>校区地址：湖南省岳阳市南湖大道404号hnist</view>
			<map class="map" :longitude="longitude" :latitude="latitude" :markers="markers" :scale="scale"></map>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				longitude:113.152134,
				latitude:29.336663,
				markers:[
					{
						longitude:113.152134,
						latitude:29.336663,
						iconPath:'../../../static/icon/logo.png',
						width:30,
						height:30
					}
				],
				scale:11
			}
		},
		methods:{
			phone(){
				uni.makePhoneCall({
					phoneNumber: '400-123-1233'
				});
			}
		}
	}
</script>

<style lang="scss">
.contact{
	image{
		width: 750rpx;
		height: 320rpx;
	}
	.info{
		padding: 10rpx 20rpx;
		font-size: 30rpx;
		view{
			line-height: 80rpx;
			border-bottom: 1px solid #eee;
		}
		.map{
			width: 100%;
			height: 750rpx;
		}
	}
}
</style>