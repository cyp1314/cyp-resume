<template>
	<view>
		<cu-custom bgColor="bg-gradual-blue">
			<block slot="content">工作经验</block>
		</cu-custom>

		<scroll-view scroll-y class="page bg-white">
			<view class="cu-timeline">
				<view class="cu-time" style="display: inline;">2019年4月-目前</view>
				<view class="cu-item cur">
					<view class="bg-gradual-blue content">
						<view class="">
							<view class="text-bold text-xl">
								<text>北京慧辰资道咨询有限公司</text>
								<text class="text-orange" style="float: right;">科创板</text>
							</view>
							<view class="padding-top-xl text-bold text-df">
								<text>规模：400人</text>
								<text class="text-orange" style="float: right;">JAVA开发</text>
							</view>
							<view class="padding-top-xl text-ls">
								主要从事Java开发，参与了华为问卷系统开发、旅游SAAS平台、中山陵旅游小程序、环保Android App原生开发、世政通Android 混合APP开发、中粮数字农业平台。</view>
						</view>
					</view>
				</view>
			</view>

			<view class="cu-timeline">
				<view class="cu-time" style="display: inline;">2016年6月-2019年4月</view>
				<view class="cu-item cur">
					<view class="bg-gradual-blue content">
						<view class="">
							<view class="text-bold text-xl">
								<text>精励联讯(北京)科技有限公司</text>
								<text class="text-orange" style="float: right;">外企</text>
							</view>
							<view class="padding-top-xl text-bold text-df">
								<text>规模：120人</text>
								<text class="text-orange" style="float: right;">JAVA开发</text>
							</view>
							<view class="padding-top-xl text-ls">
								主要从事Java开发，主要参与开发了车型数据管理平台及vin码解析平台。</view>
						</view>
					</view>
				</view>
			</view>


			<view class="cu-tabbar-height bg-white"></view>
		</scroll-view>
	</view>

</template>

<script>
	export default {
		data() {
			return {

			};
		}
	}
</script>

<style>
	.page {
		height: 100vh;
	}
</style>
