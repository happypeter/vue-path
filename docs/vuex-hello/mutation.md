# mutation

本节来修改 store 中的数据。

### 添加 mutation

Vue 修改 store 中的数据，要通过 mutation 来完成。

store/modules/comment.js

```js
const mutations = {
  addComment (state, comment) {
    state.all.push(comment)
  }
}

export default {
  state,
  mutations
}
```

定义 mutations 对象，里面的每一个成员函数就是一个 mutation ，这里来添加 addComment ，第一个参数是初始状态值 state ，首次执行时也就是上面我们定义的 state 对象。第二个参数是载荷数据，这里期待一个 comment 对象，muation 中的语句就是对初始状态值的修改操作，这里通过 push 把 comment 对象添加到了 state.all 中。对于学习过 redux 的朋友，需要注意的是这里不需要考虑不变性。

### 呼叫 mutations

这个就是到对应组件中，由用户去触发了。

CommentBox.vue

```js
        this.$store.commit('addComment', comment)
        this.message = ''
      }
```

删除 this.comment.push 语句，改用 mutation 来修改 store 中存储的数据。

浏览器中，可以看到评论发送成功了。

### PostBody 中显示评论数量

PostBody.vue

```html
<template>
  <div class="post-body">
    <div class="comment-count">
      {{ commentCount }} 评论
    </div>
  </div>
</template>

<script>
  export default {
    computed: {
      commentCount() { return this.$store.state.comment.all.length }
    }
  }
</script>

<style>
  .post-body {
    position: relative;
  }

  .comment-count {
    position: absolute;
    bottom: 10px;
    right: 10px;
    border-bottom: 1px solid gray;
  }
</style>
```

模板中添加 commentCount 数据。

到 script 标签中，添加 computed 属性 commentCount ，从 store 中把数据读取出来。

下面再来添加点样式，利用 postion: relative 和 postion: absolute 配合，让评论数显示到 PostBody 区域的右下角。

浏览器中，看到每次提交评论，评论数都会变化。
