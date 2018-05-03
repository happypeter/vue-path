# 动态路由

所谓动态路由，就是路径中有动态参数。

## 添加动态路由

Home.vue

```html
<template>
    <router-link to="post/123">Post123</router-link>
</template>
```

Home 组件中，把链接路径后面加上 123 。默认这个链接是无法响应的。

router.js

```js
{
  path: '/post/:id',
  component: Post
}
```

所以 router.js 中，把 path 改一下，post 后面加个动态参数 id ，冒号体现出了 id 是作为一个参数来使用的。

浏览器中，看到访问链接，可以顺利打开页面了。

## 读取路由参数

Post.vue

```js
<template>
  <div class="post">
    <div class="upper">
      <PostBody :postId="postId" />
    </div>
</template>

<script>
    computed: {
      postId() {
        return this.$route.params.id
      }
    },
</script>
```

Post.vue 中是可以拿到路由参数的值的，具体的方式就是用 [this.$route.params.id](http://this.$route.params.id) ，把它赋值给一个运算属性 postId ，这样当前组件中就多了一个数据也就是 postId 。

把 postId 作为属性值传递给 PostBody 组件。

PostBody.vue

```js
<template>
  <div class="post-body">
    <h1>{{ postId }}</h1>
  </div>
</template>

<script>
  export default {
    name: 'PostBody',
    props: ['postId']
  }
</script>
```

把原来的 title 改成 postId 属性。

浏览器中，可以看到动态参数可以显示到 PostBody 组件中了。
