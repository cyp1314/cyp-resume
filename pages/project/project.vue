<template>
	<view>
		<cu-custom bgColor="bg-gradual-blue">
			<block slot="content">项目经验</block>
		</cu-custom>


		<view id="swiper" class="bg-white uni-padding-wrap">
			<view class="page-section swiper">
				<view class="page-section-spacing">
					<swiper class="card-swiper" :class="dotStyle?'square-dot':'round-dot'" :indicator-dots="true" :circular="true"
					 :autoplay="true" interval="1000" duration="600" @change="cardSwiper" indicator-color="#8799a3"
					 indicator-active-color="#0081ff">
						<swiper-item v-for="(item,index) in swiperList" :key="index" :class="cardCur==index?'cur':''">
							<view class="swiper-item">
								<image :src="item.url" mode="aspectFill" v-if="item.type=='image'"></image>
							</view>
						</swiper-item>
					</swiper>
				</view>
			</view>
		</view>

		<scroll-view scroll-y class="page bg-white">
			<view class="cu-timeline">
				<view class="cu-time" style="display: inline;">中粮数字农业平台</view>
				<view class="cu-item">
					<view class="content">
						<view class="" class="radius">
							<text class="text-bold text-left text-blue">担任角色:</text>
							<view class="sm radius cu-tag bg-gradual-blue">架构</view>
							<view class="sm radius cu-tag bg-gradual-blue">开发</view>
						</view>
						<view class="" class="radius">
							<text class="text-bold text-left text-blue">技术栈:</text>
							<view class="sm radius cu-tag bg-gradual-blue">SpringBoot</view>
							<view class="sm radius cu-tag bg-gradual-blue">Dubbo</view>
							<view class="sm radius cu-tag bg-gradual-blue">Tidb</view>
							<view class="sm radius cu-tag bg-gradual-blue">MyBatis-Plus</view>
							<view class="sm radius cu-tag bg-gradual-blue">Redis</view>
							<view class="sm radius cu-tag bg-gradual-blue">Security Oauth2</view>
							<view class="sm radius cu-tag bg-gradual-blue">YApi</view>
						</view>
						<image src="http://tva4.sinaimg.cn/large/005Tv2WXgy1ggfdpg8fs3j30rg0hyth9.jpg" mode="aspectFill"></image>
						<view class="margin-top-lg">
							<text class="text-bold text-left text-blue">描述:</text>
							<text>我在此项目负责了基础架构的选型及代码架构搭建和环境搭建，并参与了农业基础运营平台的开发和认证中心的开发。这个项目中，我最困难的问题是团队进度把控和功能拆分给不同项目组同事进行开发，我采取了禅道项目把控，代码进行 SonarQube 扫描，并把有问题代码进行二次分配跟踪和一起解决。最后项目得到了CTO的赞赏。</text>
						</view>
					</view>
				</view>
			</view>


			<view class="cu-timeline">
				<view class="cu-time" style="display: inline;">环保APP</view>
				<view class="cu-item">
					<view class="content">
						<view class="" class="radius">
							<text class="text-bold text-left text-blue">担任角色:</text>
							<view class="sm radius cu-tag bg-gradual-blue">开发</view>
						</view>
						<view class="" class="radius">
							<text class="text-bold text-left text-blue">技术栈:</text>
							<view class="sm radius cu-tag bg-gradual-blue">Java</view>
							<view class="sm radius cu-tag bg-gradual-blue">Android</view>
						</view>
						<image src="http://tvax2.sinaimg.cn/large/005Tv2WXgy1ggfdrj8baxj30ch0o5jw8.jpg" mode="aspectFill"></image>
						<view class="margin-top-lg">
							<text class="text-bold text-left text-blue">描述:</text>
							<text>整个APP都是我一个人参与完成。按照蓝湖UI原型参与开发，主要功能是对某个地区的空气质量在地图上实时标注，并引入图表同级某个地区的空气参数。对某个地区的污染源进行上报处理和巡查。</text>
						</view>
					</view>
				</view>
			</view>
			
			<view class="cu-timeline">
				<view class="cu-time" style="display: inline;">世证通</view>
				<view class="cu-item">
					<view class="content">
						<view class="" class="radius">
							<text class="text-bold text-left text-blue">担任角色:</text>
							<view class="sm radius cu-tag bg-gradual-blue">开发</view>
						</view>
						<view class="" class="radius">
							<text class="text-bold text-left text-blue">技术栈:</text>
							<view class="sm radius cu-tag bg-gradual-blue">Java</view>
							<view class="sm radius cu-tag bg-gradual-blue">Android</view>
							<view class="sm radius cu-tag bg-gradual-blue">H5</view>
						</view>
						<image src="http://tvax3.sinaimg.cn/large/005Tv2WXgy1ggfdr2w0qvj30a00hsgoc.jpg" mode="aspectFill"></image>
						<view class="margin-top-lg">
							<text class="text-bold text-left text-blue">描述:</text>
							<text>可在android市场搜索次APP，本APP也是独立完成开发。按照产品要求完成Android端、和后端。后端使用Springboot框架开发而成。
							此APP主要功能就是实现身份证、驾驶证等系列证件的电子化。APP端集成了百度人脸识别、调用公安部人脸比对、酒店入住扣费（微信支付、支付宝支付）等系列使用场景。</text>
						</view>
					</view>
				</view>
			</view>
			
			<view class="cu-timeline">
				<view class="cu-time" style="display: inline;">景区SAAS票务系统</view>
				<view class="cu-item">
					<view class="content">
						<view class="" class="radius">
							<text class="text-bold text-left text-blue">担任角色:</text>
							<view class="sm radius cu-tag bg-gradual-blue">架构</view>
						</view>
						<view class="" class="radius">
							<text class="text-bold text-left text-blue">技术栈:</text>
							<view class="sm radius cu-tag bg-gradual-blue">Springboot</view>
							<view class="sm radius cu-tag bg-gradual-blue">MySQL</view>
							<view class="sm radius cu-tag bg-gradual-blue">Mybatis</view>
							<view class="sm radius cu-tag bg-gradual-blue">Redis</view>
							<view class="sm radius cu-tag bg-gradual-blue">Shrio</view>
							<view class="sm radius cu-tag bg-gradual-blue">Mongodb</view>
						</view>
						<view class="margin-top-lg">
							<text class="text-bold text-left text-blue">描述:</text>
							<text>我在此项目负责了哪些工作，分别在哪些地方做得出色/和别人不一样/成长快，这个项目中，我最困难的问题是什么，我采取了什么措施，最后结果如何。这个项目中，我最自豪的技术细节是什么，为什么，实施前和实施后的数据对比如何，同事和领导对此的反应如何。</text>
						</view>
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
					name: '农业系统'
				}, {
					id: 1,
					type: 'image',
					url: 'http://tvax3.sinaimg.cn/large/005Tv2WXgy1ggfdqb4udfj31a90pl7wh.jpg',
					name: '环保监控'
				}, {
					id: 2,
					type: 'image',
					url: 'http://tva4.sinaimg.cn/large/005Tv2WXgy1ggfdqou37uj31hc0qk4i7.jpg',
					name: '旅游saas'
				}, {
					id: 3,
					type: 'image',
					url: 'http://tvax3.sinaimg.cn/large/005Tv2WXgy1ggfdr2w0qvj30a00hsgoc.jpg',
					name: '世证通APP'
				}, {
					id: 4,
					type: 'image',
					url: 'http://tvax2.sinaimg.cn/large/005Tv2WXgy1ggfdrj8baxj30ch0o5jw8.jpg',
					name: '环保APP'
				}, {
					id: 5,
					type: 'image',
					url: 'http://tvax2.sinaimg.cn/large/005Tv2WXgy1ggfdsjehyvj30u01t0jwa.jpg',
					name: '旅游小程序'
				}, {
					id: 6,
					type: 'image',
					url: 'http://tva2.sinaimg.cn/large/005Tv2WXgy1ggfdsx1rhvj30u01t0dmw.jpg',
					name: '旅游公众号'
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
