<template>
	<view>
		<cu-custom bgColor="bg-gradual-blue">
			<block slot="content">个人技能</block>
		</cu-custom>
		<scroll-view scroll-y class="page">

			<view class="margin bg-white  shadow-lg shadow-warp shadow-blur" style="border-radius: 4px;">
				<view class="solid-bottom">
					<view class="cu-bar">
						<view class="action sub-title">
							<text class="text-xl text-bold text-blue">开发方向</text>
							<text class="text-ABC text-blue">Language</text>
						</view>
					</view>
					<view class="flex">
						<view class="flex-sub radius">
							<view class="radius cu-tag light bg-blue">SprongBoot</view>
						</view>
						<view class="flex-treble radius" style="margin: auto 0;">
							<view class="cu-progress round sm striped active">
								<view class="bg-green" style="width:90%;"></view>
							</view>
						</view>
					</view>
					<view class="flex">
						<view class="flex-sub radius">
							<view class="radius cu-tag light bg-blue">SprongCloud</view>
						</view>
						<view class="flex-treble radius" style="margin: auto 0;">
							<view class="cu-progress round sm striped active">
								<view class="bg-green" style="width:80%;"></view>
							</view>
						</view>
					</view>
					<view class="flex">
						<view class="flex-sub radius">
							<view class="radius cu-tag light bg-blue">SprongCloud Alibaba</view>
						</view>
						<view class="flex-treble radius" style="margin: auto 0;">
							<view class="cu-progress round sm striped active">
								<view class="bg-green" style="width:85%;"></view>
							</view>
						</view>
					</view>
					<view class="flex">
						<view class="flex-sub radius">
							<view class="radius cu-tag light bg-blue">小程序、公众号</view>
						</view>
						<view class="flex-treble radius" style="margin: auto 0;">
							<view class="cu-progress round sm striped active">
								<view class="bg-green" style="width:75%;"></view>
							</view>
						</view>
					</view>
					<view class="flex">
						<view class="flex-sub radius">
							<view class="radius cu-tag light bg-blue">Native Android</view>
						</view>
						<view class="flex-treble radius" style="margin: auto 0;">
							<view class="cu-progress round sm striped active">
								<view class="bg-green" style="width:65%;"></view>
							</view>
						</view>
					</view>
					<view class="flex">
						<view class="flex-sub radius">
							<view class="radius cu-tag light bg-blue">Hybrid App</view>
						</view>
						<view class="flex-treble radius" style="margin: auto 0;">
							<view class="cu-progress round sm striped active">
								<view class="bg-green" style="width:65%;"></view>
							</view>
						</view>
					</view>
				</view>
			</view>


			<view class="margin bg-white  shadow-lg shadow-warp shadow-blur" style="border-radius: 4px;">
				<view class="solid-bottom">
					<view class="cu-bar">
						<view class="action sub-title">
							<text class="text-xl text-bold text-blue">后端开发语言</text>
							<text class="text-ABC text-blue">Language</text>
						</view>
					</view>
					<view class="flex flex-wrap justify-between">
						<view class="padding-xs">
							<view class="radius cu-tag light bg-blue">JAVA</view>
							<view class="radius cu-tag light bg-blue">Python</view>
							<view class="radius cu-tag light bg-blue">C</view>
							<view class="radius cu-tag light bg-blue">C++</view>
							<view class="radius cu-tag light bg-blue">PHP</view>
							<view class="radius cu-tag light bg-blue">Go</view>
							<view class="radius cu-tag light bg-blue">Kotlin</view>
							<view class="radius cu-tag light bg-blue">MySQL</view>
							<view class="radius cu-tag light bg-blue">Go</view>
							<view class="radius cu-tag light bg-blue">Kotlin</view>
							<view class="radius cu-tag light bg-blue">MySQL</view>
							<view class="radius cu-tag light bg-blue">MySQL</view>
						</view>
					</view>
				</view>
				<view class="padding-sm">
					<view class="cu-progress round sm striped active">
						<view class="bg-green" style="width:85%"></view>
					</view>
				</view>
			</view>



			<view class="margin bg-white  shadow-lg shadow-warp shadow-blur" style="border-radius: 4px;">
				<view class="solid-bottom">
					<view class="cu-bar">
						<view class="action sub-title">
							<text class="text-xl text-bold text-blue">前端开发语言</text>
							<text class="text-ABC text-blue">Language</text>
						</view>
					</view>
					<view class="flex flex-wrap justify-between">
						<view class="padding-xs">
							<view class="radius cu-tag light bg-blue">HTML/HTML5</view>
							<view class="radius cu-tag light bg-blue">CSS/CSS3</view>
							<view class="radius cu-tag light bg-blue">JavaScript</view>
							<view class="radius cu-tag light bg-blue">TypeScript</view>
							<view class="radius cu-tag light bg-blue">Jquery</view>
							<view class="radius cu-tag light bg-blue">Vue</view>
							<view class="radius cu-tag light bg-blue">React</view>
						</view>
					</view>
				</view>
				<view class="padding-sm">
					<view class="cu-progress round sm striped active">
						<view class="bg-green" style="width:75%"></view>
					</view>
				</view>
			</view>

			<view class="margin bg-white  shadow-lg shadow-warp shadow-blur" style="border-radius: 4px;">
				<view class="solid-bottom">
					<view class="cu-bar">
						<view class="action sub-title">
							<text class="text-xl text-bold text-blue">中间件</text>
							<text class="text-ABC text-blue">Language</text>
						</view>
					</view>
					<view class="flex flex-wrap justify-between">
						<view class="padding-xs">
							<view class="radius cu-tag light bg-blue">Redis</view>
							<view class="radius cu-tag light bg-blue">Mongodb</view>
							<view class="radius cu-tag light bg-blue">Elasticsearch</view>
							<view class="radius cu-tag light bg-blue">Logstash</view>
							<view class="radius cu-tag light bg-blue">Kibana</view>
							<view class="radius cu-tag light bg-blue">Kafka</view>
							<view class="radius cu-tag light bg-blue">RabitMQ</view>
							<view class="radius cu-tag light bg-blue">RocketMQ</view>
							<view class="radius cu-tag light bg-blue">Seata</view>
							<view class="radius cu-tag light bg-blue">Tidb</view>
						</view>
					</view>
				</view>
				<view class="padding-sm">
					<view class="cu-progress round sm striped active">
						<view class="bg-green" style="width:80%"></view>
					</view>
				</view>
			</view>


			<view class="margin bg-white  shadow-lg shadow-warp shadow-blur" style="border-radius: 4px;">
				<view class="solid-bottom">
					<view class="cu-bar">
						<view class="action sub-title">
							<text class="text-xl text-bold text-blue">开发工具</text>
							<text class="text-ABC text-blue">Tool</text>
						</view>
					</view>
					<view class="flex flex-wrap justify-between">
						<view class="padding-xs">
							<view class="radius cu-tag light bg-blue">Idea</view>
							<view class="radius cu-tag light bg-blue">VsCode</view>
							<view class="radius cu-tag light bg-blue">Eclipse</view>
							<view class="radius cu-tag light bg-blue">MyEclipse</view>
							<view class="radius cu-tag light bg-blue">Navicat</view>
							<view class="radius cu-tag light bg-blue">Sourcetree</view>
						</view>
					</view>
				</view>

				<view class="padding-sm">
					<view class="cu-progress round sm striped active">
						<view class="bg-green" style="width:100%"></view>
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

			}
		},
		methods: {

		}
	}
</script>

<style>
	.page {
		height: 100vh;
	}

	.cu-tag {
		padding: 2px 2px;
		margin: 4px 4px;
	}
</style>
