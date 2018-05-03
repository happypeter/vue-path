# 路由

# 使用 vue-router

添加[vue-router](https://router.vuejs.org/zh-cn/)。

## 安装

```
npm i vue-router
```

安装 vue-router 这个包。

src/router.js

```js
import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Post from '@/components/Post'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/post',
      component: Post
    }
  ]
})
```

主体内容都写到 src/router.js 中，导入 Vue 导入 router 导入两个页面组件 Home 和 Post ，这里的 at 符，代表 src 文件夹。

Vue.use 加载 Router 中间件。

下面 export 路由配置。每一条路由还是两部分组成，一部分是用户输入的路径是什么，用 path 指定，另一部分就是用户如果输入了这个路径，程序该去执行哪个组件，这个由 component 属性指定。

components/Home.vue

```html
<template>
  <h1>Home</h1>
</template>

<script>
export default {
  name: 'Home'
}
</script>
```

Post 组件本来就有了，所以来添加一个 Home 组件。

src/main.js

```js
import router from './router'
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router
```

main.js 中导入配置，并且初始化 Vue 实例的时候来加载  它。

App.vue

```html
<template>
  <div>
    <router-view></router-view>
  </div>
</template>
```

还有一个重大的问题没有解决，就是一旦组件要显示，到底要显示到什么位置，于是要到 App.vue 中，添加 router-view ，根据官方的写法，这里不使用自闭和标签。

浏览器中，访问 / 可以看到 Home 组件，访问 /post 可以看到 Post 组件。

## 去掉路由中的 hash

vue-router 默认采用哈希路由，所以链接中会默认有哈希符。

router.js

```js
mode: 'history',
```

router.js 的路由配置对象中，添加 mode history ，就会调用浏览器底层的 history 接口，来让单页面应用看上去有多个页面的效果。

浏览器中，可以使用不带哈希符的链接了。

## 使用链接

Home.vue

```html
<template>
  <div class="home">
    <h1>Home</h1>
    <router-link to="post">Post</router-link>
  </div>
</template>
```

Home 组件中，添加 router-link 进来， to 属性中，写链接路径。

浏览器中，点一下 Post 链接，发现可以实现无刷新跳转。
