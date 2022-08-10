<template>
	<view class="news">
		<news-list :data="news" @itemClick="goDetail"></news-list>
	</view>
</template>

<script>
	import newsList from '../../components/news-list/news-list.vue'
	export default{
		data(){
			return {
				news:[]
			}
		},
		onLoad(){
			this.getnewslist()
		},
		components:{'news-list':newsList},
		methods:{
			async getnewslist(){
				const res = await this.$myRequest({
					url:"/api/getnewslist"
				})
				// console.log(res)
				this.news = res.data.message
			},
			goDetail(id){
				// console.log(id)
				uni.navigateTo({
					url: '/pages/news-detail/news-detail?id='+id
				})
			}
		}
	}
</script>
