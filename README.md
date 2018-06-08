# vue-routes

> Routes generator library for VueJS 2.x

## Build Setup

``` bash
# install 
npm install vue-routes-generator
```

## Usage
``` javascript
import VueRouter from 'vue-router'
import myRoutes from 'vue-routes-generator'

myRoutes.route('/main', {
	name: 'Main page',
	component: MainComponent
})

myRoutes.route('/main').child('welcome', {
	name: 'Welcome page',
	component: WelcomeComponent
})

const router = new VueRouter({
	routes: myRoutes.export()
})

new Vue({
	el: '#app',
	router,
	template: '<App/>',
	components: { App }
})
```