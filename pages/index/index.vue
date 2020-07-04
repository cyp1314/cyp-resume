<template>
	<view>
		<basics v-if="PageCur=='basics'"></basics>
		<skills v-if="PageCur=='skills'"></skills>
		<work v-if="PageCur=='work'"></work>
		<project v-if="PageCur=='project'"></project>
		
		<view class="cu-bar tabbar bg-white shadow foot">
			<view class="action" @click="NavChange" data-cur="basics">
				<view class='cuIcon-cu-image'>
					<image :src="'/static/tabbar/basics' + [PageCur=='basics'?'_cur':''] + '.png'"></image>
				</view>
				<view :class="PageCur=='basics'?'text-blue':'text-gray'">基本信息</view>
			</view>
			
			<view class="action" @click="NavChange" data-cur="skills">
				<view class='cuIcon-cu-image'>
					<image :src="'/static/tabbar/skills' + [PageCur == 'skills'?'_cur':''] + '.png'"></image>
				</view>
				<view :class="PageCur=='skills'?'text-blue':'text-gray'">主要技能</view>
			</view>
			
			
			<view class="action" @click="NavChange" data-cur="work">
				<view class='cuIcon-cu-image'>
					<image :src="'/static/tabbar/work' + [PageCur == 'work'?'_cur':''] + '.png'"></image>
				</view>
				<view :class="PageCur=='work'?'text-blue':'text-gray'">工作经验</view>
			</view>
			
			
			<view class="action" @click="NavChange" data-cur="project">
				<view class='cuIcon-cu-image'>
					<image :src="'/static/tabbar/project' + [PageCur == 'project'?'_cur':''] + '.png'"></image>
				</view>
				<view :class="PageCur=='project'?'text-blue':'text-gray'">项目经验</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
		return {
				PageCur: 'basics'
			}
		},
		methods: {
			NavChange: function(e) {
				this.PageCur = e.currentTarget.dataset.cur
			}
		}
	}
</script>

<style>

</style>
