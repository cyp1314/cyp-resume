<template>
	<view>
		<cu-custom bgColor="bg-gradual-blue">
			<block slot="content">项目经验</block>
		</cu-custom>
		
		
		<view id="swiper" class="bg-white uni-padding-wrap">
			<view class="page-section swiper">
				<view class="page-section-spacing">
					<swiper  class="card-swiper" :class="dotStyle?'square-dot':'round-dot'" :indicator-dots="true"
					 :circular="true" :autoplay="true" interval="1000" duration="600" @change="cardSwiper" indicator-color="#8799a3"
					 indicator-active-color="#0081ff">
						<swiper-item v-for="(item,index) in swiperList" :key="index" :class="cardCur==index?'cur':''">
							<view class="swiper-item">
								<image :src="item.url" mode="aspectFill" v-if="item.type=='image'"></image>
								<!-- <video :src="item.url" autoplay loop muted :show-play-btn="false" :controls="false" objectFit="cover" v-if="item.type=='video'"></video> -->
							</view>
						</swiper-item>
					</swiper>
				</view>
			</view>
		</view>
		
		<scroll-view scroll-y class="page bg-white">
			<view class="cu-timeline">
				<view class="cu-time">MNO项目</view>
				<view class="cu-item">
					<view class="content">
						<view class="cu-capsule radius">
							<view class="cu-tag bg-cyan">JAVA开发</view>
							<!-- <view class="cu-tag line-cyan">10:00</view> -->
						</view>
						<view class="margin-top">我在此项目负责了哪些工作，分别在哪些地方做得出色/和别人不一样/成长快，这个项目中，我最困难的问题是什么，我采取了什么措施，最后结果如何。这个项目中，我最自豪的技术细节是什么，为什么，实施前和实施后的数据对比如何，同事和领导对此的反应如何。</view>
					</view>
				</view>
			</view>


			<view class="cu-timeline">
				<view class="cu-time">PQR项目</view>
				<view class="cu-item">
					<view class="content">
						<view class="cu-capsule radius">
							<view class="cu-tag bg-cyan">上午</view>
							<view class="cu-tag line-cyan">10:00</view>
						</view>
						<view class="margin-top">我在此项目负责了哪些工作，分别在哪些地方做得出色/和别人不一样/成长快，这个项目中，我最困难的问题是什么，我采取了什么措施，最后结果如何。这个项目中，我最自豪的技术细节是什么，为什么，实施前和实施后的数据对比如何，同事和领导对此的反应如何。</view>
					</view>
				</view>
			</view>
			
			
			<view class="cu-timeline">
				<view class="cu-time">PQR项目</view>
				<view class="cu-item">
					<view class="content">
						<view class="cu-capsule radius">
							<view class="cu-tag bg-cyan">上午</view>
							<view class="cu-tag line-cyan">10:00</view>
						</view>
						<view class="margin-top">我在此项目负责了哪些工作，分别在哪些地方做得出色/和别人不一样/成长快，这个项目中，我最困难的问题是什么，我采取了什么措施，最后结果如何。这个项目中，我最自豪的技术细节是什么，为什么，实施前和实施后的数据对比如何，同事和领导对此的反应如何。</view>
					</view>
				</view>
			</view>
			
			
			<view class="cu-timeline">
				<view class="cu-time">PQR项目</view>
				<view class="cu-item">
					<view class="content">
						<view class="cu-capsule radius">
							<view class="cu-tag bg-cyan">上午</view>
							<view class="cu-tag line-cyan">10:00</view>
						</view>
						<view class="margin-top">我在此项目负责了哪些工作，分别在哪些地方做得出色/和别人不一样/成长快，这个项目中，我最困难的问题是什么，我采取了什么措施，最后结果如何。这个项目中，我最自豪的技术细节是什么，为什么，实施前和实施后的数据对比如何，同事和领导对此的反应如何。</view>
					</view>
				</view>
			</view>
			
			
			<view class="cu-timeline">
				<view class="cu-time">PQR项目</view>
				<view class="cu-item">
					<view class="content">
						<view class="cu-capsule radius">
							<view class="cu-tag bg-cyan">上午</view>
							<view class="cu-tag line-cyan">10:00</view>
						</view>
						<view class="margin-top">我在此项目负责了哪些工作，分别在哪些地方做得出色/和别人不一样/成长快，这个项目中，我最困难的问题是什么，我采取了什么措施，最后结果如何。这个项目中，我最自豪的技术细节是什么，为什么，实施前和实施后的数据对比如何，同事和领导对此的反应如何。</view>
					</view>
				</view>
			</view>
			<view class="cu-tabbar-height"></view>
		</scroll-view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				cardCur: 0,
				swiperList: [{
					id: 0,
					type: 'image',
					url: 'http://tva4.sinaimg.cn/large/005Tv2WXgy1ggfdpg8fs3j30rg0hyth9.jpg',
					name:'农业系统'
				}, {
					id: 1,
					type: 'image',
					url: 'http://tvax3.sinaimg.cn/large/005Tv2WXgy1ggfdqb4udfj31a90pl7wh.jpg',
					name:'环保监控'
				}, {
					id: 2,
					type: 'image',
					url: 'http://tva4.sinaimg.cn/large/005Tv2WXgy1ggfdqou37uj31hc0qk4i7.jpg',
					name:'旅游saas'
				}, {
					id: 3,
					type: 'image',
					url: 'http://tvax3.sinaimg.cn/large/005Tv2WXgy1ggfdr2w0qvj30a00hsgoc.jpg',
					name:'世证通APP'
				}, {
					id: 4,
					type: 'image',
					url: 'http://tvax2.sinaimg.cn/large/005Tv2WXgy1ggfdrj8baxj30ch0o5jw8.jpg',
					name:'环保APP'
				}, {
					id: 5,
					type: 'image',
					url: 'http://tvax2.sinaimg.cn/large/005Tv2WXgy1ggfdsjehyvj30u01t0jwa.jpg',
					name:'旅游小程序'
				}, {
					id: 6,
					type: 'image',
					url: 'http://tva2.sinaimg.cn/large/005Tv2WXgy1ggfdsx1rhvj30u01t0dmw.jpg',
					name:'旅游公众号'
				}],
				dotStyle: false,
				towerStart: 0,
				direction: ''
			};
		},
		onLoad() {
			this.TowerSwiper('swiperList');
			// 初始化towerSwiper 传已有的数组名即可
		},
		methods: {
			DotStyle(e) {
				this.dotStyle = e.detail.value
			},
			// cardSwiper
			cardSwiper(e) {
				this.cardCur = e.detail.current
			},
			// towerSwiper
			// 初始化towerSwiper
			TowerSwiper(name) {
				let list = this[name];
				for (let i = 0; i < list.length; i++) {
					list[i].zIndex = parseInt(list.length / 2) + 1 - Math.abs(i - parseInt(list.length / 2))
					list[i].mLeft = i - parseInt(list.length / 2)
				}
				this.swiperList = list
			},

			// towerSwiper触摸开始
			TowerStart(e) {
				this.towerStart = e.touches[0].pageX
			},

			// towerSwiper计算方向
			TowerMove(e) {
				this.direction = e.touches[0].pageX - this.towerStart > 0 ? 'right' : 'left'
			},

			// towerSwiper计算滚动
			TowerEnd(e) {
				let direction = this.direction;
				let list = this.swiperList;
				if (direction == 'right') {
					let mLeft = list[0].mLeft;
					let zIndex = list[0].zIndex;
					for (let i = 1; i < this.swiperList.length; i++) {
						this.swiperList[i - 1].mLeft = this.swiperList[i].mLeft
						this.swiperList[i - 1].zIndex = this.swiperList[i].zIndex
					}
					this.swiperList[list.length - 1].mLeft = mLeft;
					this.swiperList[list.length - 1].zIndex = zIndex;
				} else {
					let mLeft = list[list.length - 1].mLeft;
					let zIndex = list[list.length - 1].zIndex;
					for (let i = this.swiperList.length - 1; i > 0; i--) {
						this.swiperList[i].mLeft = this.swiperList[i - 1].mLeft
						this.swiperList[i].zIndex = this.swiperList[i - 1].zIndex
					}
					this.swiperList[0].mLeft = mLeft;
					this.swiperList[0].zIndex = zIndex;
				}
				this.direction = ""
				this.swiperList = this.swiperList
			},
		}
	}
</script>

<style>
	#swiper {
		height: 20vh;
		position: absolute;
	}

	.page {
		position: relative;
		bottom: 0px;
		height: 60vh;
	}
</style>
