# 使用 Getter 简化代码

在 [vuex 官网](https://vuex.vuejs.org/zh-cn/) 可以看到 vuex 的五大概念，只有一个还没有讲，那就是 getter 。

## 显示评论数

PostBody.vue

```js
      commentCount() {
        return this.$store.state.comment.all.filter(
          t => t.post === this.postId
        ).length
      },
```

到 PostBody 组件中，显示正确的评论数。也就是从所有评论中筛选出属于当前文章的评论。

浏览器中，可以看到评论数量显示正确了。

## 代码移动到 getter

这个筛选逻辑其实很多地方都会用到，重复去写，不仅维护成本高，而且代码也需要重复运算，浪费资源。

modules/comment.js

```js
const getters = {
  getComments: state => id => {
    return state.all.filter(t => t.post === id)
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
```

到 comment 模块中，添加 getters 对象，其中每一个成员函数就是一个 getter 。这里来添加 getComments ，参数是当前状态值。

返回值是一个函数，参数是 id ，里面是根据 post id 筛选评论的逻辑。

导出 getters 。

CommentBox.vue

```js
      comments() {
        return this.$store.getters.getComments(this.postId)
      },
```

CommentBox 来用一下，注意要传递 post id 作为参数。

PostBody.vue

```js
      commentCount() {
        return this.$store.getters.getComments(this.postId).length
      },
```

PostBody 中也来用一下。

浏览器中，看到数据显示依然完美。
