# VueRoutesGenerator

[![npm](https://img.shields.io/npm/v/vue-routes-generator.svg)](https://www.npmjs.com/package/vue-routes-generator) [![vue2](https://img.shields.io/badge/vue-2.x-brightgreen.svg)](https://vuejs.org/)

> A VueJS 2.x routes generator

## Installation

```bash
npm install --save vue-routes-generator
```

## Usage

### Bundler (Webpack, Rollup)


```js
// main.js
import Vue from 'vue'
import VueRoutesGenerator from 'vue-routes-generator'
import VueRouter from 'vue-router'
import MainModuleSetup from './routes.js'
/*
    You can add as many modules as you can, and add his routes dinamically
    import Module2 from './module2/routes.js'
    import Module3 from './module3/routes.js'
    import Module4 from './module4/routes.js'
*/

Vue.use(VueRouter)
Vue.use(MainModuleSetup)

/*
    You can add as many modules as you can, and add his routes dinamically
    Vue.use(Module2)
    Vue.use(Module3)
    Vue.use(Module4)
*/

const router = new VueRouter({
  routes: VueRoutesGenerator.export()
})

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app')
```

```js
// routes.js
import MainComponent from './main.component.vue'
import MainChildComponent from './main-child.component.vue'
import SecondaryComponent from './secondary.component.vue'
import VueRoutesGenerator from 'vue-routes-generator'

export default {
    install: (Vue) => {
        VueRouterGenerator.route('/main', {
            name: 'Main route',
            component: MainComponent
        })
        
        VueEouterGenerator.route('/main').child('/child', {
            name: 'Child main route',
            component: MainChildComponent
        })
        
        VueRouterGenerator.route('/secondary', {
            name: 'Secondary route',
            component: SecondaryComponent
        })
    }
}
```
