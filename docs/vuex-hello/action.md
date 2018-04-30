# action

参考：[https://vuex.vuejs.org/zh-cn/actions.html](https://vuex.vuejs.org/zh-cn/actions.html)

通常组件中直接触发的不是 mutation ，而是 action 。

CommentBox.vue

```js
    this.$store.dispatch({ type: 'addComment', comment })
```

触发 action 就不用 commit 了，而是用 dispatch 。发出一个对象，类型为 `addComment` ，负载数据是 comment 。

modules/comment.js

```js
const actions = {
  addComment ({ commit }, { comment }) {
    commit('addComment', comment)
  }
}

export default {
  state,
  mutations,
  actions
}
```

跟 mutations 的格式类似，来添加 actions 对象，里面添加一个 action 函数 addComment ，参数都使用解构赋值的形式，第一个参数可以拿到 commit 方法，第二个参数能拿到负载数据 comment 。

执行 `commit` 触发 `addComment` 这个 mutation ，同时把 comment 对象作为第二个参数传递过去。

浏览器中，发评论功能一样工作良好。但是问题来了，action 有什么作用呢？官网上有说明，mutation 必须是一个同步函数，里面不能发网络请求，所以 action 中通常用来执行网络请求等异步操作。
