import Vue from 'vue'
import App from './App'

import basics from './pages/basics/basics.vue'
Vue.component('basics',basics)

import skills from './pages/skills/skills.vue'
Vue.component('skills',skills)

import work from './pages/work/work.vue'
Vue.component('work',work)

import project from './pages/project/project.vue'
Vue.component('project',project)

import cuCustom from './colorui/components/cu-custom.vue'
Vue.component('cu-custom',cuCustom)

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()

 



