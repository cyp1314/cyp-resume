<template>

	<view class="vbox">
		<image class="top_back_img" src="../../static/person/set-top-bg_1.png" mode="aspectFit"></image>
		<view class="top">
			<view class="circle" @tap="showModal" data-target="myPhoto">
				<image class="head" src="https://wx1.sinaimg.cn/mw690/005Tv2WXgy1ggfh9e8zomj30u0140mzf.jpg" mode="aspectFill"></image>
			</view>
			<view class="top-texts">
				<text class="name">陈永鹏</text>
				<view class="other">
					<text>工作方向：</text>
					<text>JAVA开发</text>
				</view>
				<view class="other">
					<text>手机号：</text>
					<text>155-1000-7550</text>
				</view>
			</view>
		</view>

		<view class="cu-modal" :class="modalName=='myPhoto'?'show':''">
			<view class="cu-dialog">
				<view class="bg-img" style="background-image: url(https://wx1.sinaimg.cn/mw690/005Tv2WXgy1ggfh9e8zomj30u0140mzf.jpg);height: 400px;">
					<!-- <image src="../../static/person/you.jpg" mode="widthFix"></image> -->
					<view class="cu-bar justify-end text-white">
						<view class="action" @tap="hideModal">
							<text class="cuIcon-close"></text>
						</view>
					</view>
				</view>
			</view>
		</view>

		<!-- 中间部分 -->
		<view class="middle">
			<view class="middle-left">
				<image class="middle-icon" src="../../static/person/cust.png"></image>
				<text>年龄：</text>
				<text class="middle-num">27</text>
			</view>
			<view class="middle-line"></view>
			<view class="middle-right">
				<image class="middle-icon" src="../../static/person/loan.png"></image>
				<text>工作经验：</text>
				<text class="middle-num">5年</text>
			</view>
		</view>

		<view class="justify-between flex lign-center flex-twice" style="width: 100%;margin-top: -30px;">

			<view @tap="call" class="margin shadow-lg flex-sub " style="border-radius: 4px;">
				<button class="bg-gradual-blue cuIcon-weixinmargin text-white text-left">
					<text class="cuIcon-phone text-grey text-white">立即拨打电话</text>
				</button>
			</view>

			<view class="margin shadow-lg flex-sub " style="border-radius: 4px;">
				<button class="bg-gradual-blue cuIcon-weixinmargin text-white text-left" open-type="contact">
					<text class="cuIcon-weixin text-grey text-white">发起微信会话</text>
				</button>
			</view>
		</view>

		<scroll-view scroll-y class="page">
			<view class="margin bg-white shadow-lg shadow-warp shadow-blur" style="border-radius: 4px;">
				<view class="solid-bottom">
					<view class="cu-bar">
						<view class="action sub-title">
							<text class="text-xl text-bold text-blue">基本信息</text>
							<text class="text-ABC text-blue">Personal</text>
						</view>
					</view>
					<view class="flex flex-wrap justify-between">
						<view class="padding-xs">
							<view class="padding-xs">学历：本科</view>
							<view class="padding-xs">专业：计算机科学与技术（网络方向）</view>
							<view class="padding-xs">现居地：北京</view>
							<view class="padding-xs">期望薪资：面议</view>
						</view>
					</view>
				</view>
			</view>

			<view class="margin bg-white shadow-lg shadow-warp shadow-blur" style="border-radius: 4px;">
				<view class="solid-bottom">
					<view class="cu-bar">
						<view class="action sub-title">
							<text class="text-xl text-bold text-blue">个人站点</text>
							<text class="text-ABC text-blue">Website</text>
						</view>
					</view>
					<view class="flex flex-wrap justify-between">
						<view class="">
							<view class="content padding-xs" @tap="tonewurl('https://gitee.com/chenyp')">
								<text class="cuIcon-list text-green"></text>
								<text class="text-grey">博客：www.chenyongpeng.wang</text>
							</view>
							<view class="content padding-xs" @tap="tonewurl('https://gitee.com/chenyp')">
								<text class="cuIcon-list text-green"></text>
								<text class="text-grey">GITEE：https://github.com/cyp1314</text>
							</view>
							<view class="content padding-xs" @tap="tonewurl('https://gitee.com/chenyp')">
								<text class="cuIcon-list text-green"></text>
								<text class="text-grey">GITHUB：https://github.com/cyp1314</text>
							</view>
						</view>
					</view>
				</view>
			</view>


			<view class="margin bg-white shadow-lg shadow-warp shadow-blur" style="border-radius: 4px;">
				<view class="solid-bottom">
					<view class="cu-bar">
						<view class="action sub-title">
							<text class="text-xl text-bold text-blue">个人总结</text>
							<text class="text-ABC text-blue">Summary</text>
						</view>
					</view>
					<view class="flex flex-wrap justify-between">
						<view class="padding-xs">
							<view class="cu-item arrow">
								<view class="content">
									<text class="cuIcon-list text-green"></text>
									<text class="text-grey">熟悉Java/JEE， 基础扎实，熟练掌握常用Java技术框架，能编写高质量简洁清晰的代码</text>
								</view>
								<view class="content">
									<text class="cuIcon-list text-green"></text>
									<text class="text-grey">对于Java基础技术体系（包括JVM、类装载机制、多线程并发、IO、网络）有一定的掌握和应用经验</text>
								</view>
								<view class="content">
									<text class="cuIcon-list text-green"></text>
									<text class="text-grey">良好的面向对象设计理解，熟悉面向对象设计原则，掌握设计模式及应用场景</text>
								</view>
								<view class="content">
									<text class="cuIcon-list text-green"></text>
									<text class="text-grey">具有比较强的问题分析和处理能力，有比较优秀的动手能力，热衷技术，精益求精，有一定的技术癖</text>
								</view>
								<view class="content">
									<text class="cuIcon-list text-green"></text>
									<text class="text-grey">熟悉底层中间件、分布式技术（包括缓存、消息系统、热部署、JMX等）</text>
								</view>
								<view class="content">
									<text class="cuIcon-list text-green"></text>
									<text class="text-grey">有互联网行业高并发、高稳定可用性、高性能、大数据处理相关的开发、设计经验</text>
								</view>
							</view>
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
				modalName: null,
			}
		},
		methods: {
			call() {
				uni.makePhoneCall({
					phoneNumber: '15510007550'
				});
			},
			showModal(e) {
				this.modalName = e.currentTarget.dataset.target
			},
			hideModal(e) {
				this.modalName = null
			},
			// 跳转外部链接
			tonewurl(url) {
				console.info(url)
				if (url == null) {
					return false;
				}
				uni.navigateTo({
					url: '../webpage/webpage?url='+url
				});
			},
		}
	}
</script>

<style scoped>
	.index {
		display: flex;
		flex-direction: column;
		width: 100%;
		background-color: white;
		border-top: 1px solid #cccccc;
	}

	.vbox {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.top_back_img {
		z-index: -1;
		position: absolute;
		top: 0upx;
		width: 100%;
		height: 420upx;

	}

	.top {
		display: flex;
		width: 100%;
		height: 420upx;
		align-items: center;
	}

	.circle {
		margin-left: 80upx;
		width: 240upx;
		height: 240upx;
		border: 10upx solid #a4f4f6;
		/* border-radius: 240upx; */
		overflow: hidden;
	}

	.head {
		width: 240upx;
		height: 240upx;
		/* border-radius: 240upx; */
	}

	.top-texts {
		display: flex;
		flex-direction: column;
		margin-left: 15upx;
		color: white;
	}

	.name {
		font-size: 48upx;
		font-weight: 500;
	}

	.other {
		font-size: 36upx;
		font-weight: 500;
	}

	.set-top-hr {
		width: 210upx;
		height: 6upx;
	}

	.top-changeInfo {
		margin-top: 250upx;
		width: 120upx;
		height: 28upx;
		line-height: 28upx;
		background-color: #FFFFFF;
		border-radius: 15upx;
		padding: 10upx;
		color: #33dce8;
	}

	.middle {
		display: flex;
		align-items: center;
		position: relative;
		top: -50upx;
		width: 80%;
		height: 100upx;
		background-color: white;
		border-radius: 15upx;
	}

	.middle-line {
		width: 2upx;
		height: 80upx;
		background-color: #eeeeee;
	}

	.middle-left {
		flex-grow: 1;
		color: #666666;
		display: flex;
		align-items: center;
		text-align: center;
	}

	.middle-right {
		flex-grow: 1;
		color: #666666;
		display: flex;
		align-items: center;
		text-align: center;
	}

	.middle-icon {
		width: 40upx;
		height: 40upx;
		margin-left: 20upx;
	}

	.middle-num {
		color: #fcac45;
		-webkit-font-smoothing: antialiased;
	}
</style>
