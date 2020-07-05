<template>
	<view>
		<cu-custom bgColor="bg-gradual-blue">
			<block slot="content">工作经验</block>
		</cu-custom>

		<scroll-view scroll-y class="page bg-white">
			<view class="cu-timeline">
				<view class="cu-time">2019-目前</view>
				<view class="cu-item cur">
					<view class="bg-gradual-blue content">
						<view class="">
							<view class="text-bold text-xl">
								<text>北京慧辰资道咨询有限公司</text>
								<text class="text-orange" style="float: right;">外企</text>
							</view>
							<view class="padding-top-xl text-bold text-df">
								<text>规模：120人</text>
								<text class="text-orange" style="float: right;">JAVA开发</text>
							</view>
							<view class="padding-top-xl text-ls">
								北京慧辰资道咨询有限公司
								北京慧辰资道咨询有限公司
								北京慧辰资道咨询有限公司</view>
						</view>
					</view>
				</view>
			</view>

			<view class="cu-timeline">
				<view class="cu-time">2016-06</view>
				<view class="cu-item cur">
					<view class="bg-gradual-blue content">
						<view class="">
							<view class="text-bold text-xl">
								<text>北京慧辰资道咨询有限公司</text>
								<text class="text-orange" style="float: right;">外企</text>
							</view>
							<view class="padding-top-xl text-bold text-df">
								<text>规模：120人</text>
								<text class="text-orange" style="float: right;">JAVA开发</text>
							</view>
							<view class="padding-top-xl text-ls">
								北京慧辰资道咨询有限公司
								北京慧辰资道咨询有限公司
								北京慧辰资道咨询有限公司</view>
						</view>
					</view>
				</view>
			</view>


			<view class="cu-timeline">
				<view class="cu-time">2015-12</view>
				<view class="cu-item cur">
					<view class="bg-gradual-blue content">
						<view class="">
							<view class="text-bold text-xl">
								<view class="cu-tag bg-cyan">实习</view>
								<text>北京慧辰资道咨询</text>
								<text class="text-orange" style="float: right;">外企</text>
							</view>
							<view class="padding-top-xl text-bold text-df">
								<text>规模：120人</text>
								<text class="text-orange" style="float: right;">JAVA开发</text>
							</view>
							<view class="padding-top-xl text-ls">
								北京慧辰资道咨询有限公司
								北京慧辰资道咨询有限公司
								北京慧辰资道咨询有限公司</view>
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
