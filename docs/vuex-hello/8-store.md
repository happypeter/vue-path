# vuex store

下一步，我在 CommentBox 组件中，添加评论，希望能够实时的在 PostBody 中看到评论数。这个涉及到了组件间如何进行数据通信。在 Vue 框架下，是通过 [vuex](https://vuex.vuejs.org/zh-cn/) 来完成的。本节先来实现把数据搬家到 vuex 的 store 中。

## 装包

```
npm i vuex
```

vuex 作为 npm 包进行安装。

## 创建 store

store/index.js

```js
import Vue from 'vue'
import Vuex from 'vuex'
import comment from './modules/comment'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    comment
  }
})
```

导入 Vue 和 Vuex 导入一个模块 comment , Vue 实例中加载 Vuex ，导出一个新建的 store ，store 可以由多个数据 **模块** ( `module` ) 组成，目前只有一个 `comment` 模块。

store/modules/comment.js

```js
const state = {
  all: [
    {
      id: '1',
      body: '评论1'
    },
    {
      id: '2',
      body: '评论2'
    }
  ]
}

export default {
  state
}
```

模块文件 comment.js 中，定义初始化状态值 state ，评论数组作为 all 属性的值来存放。导出 state 。

src/main.js

```js
import store from './store'

new Vue({
  store
})
```

main.js 中导入并加载 store 。

CommentBox.vue

```js
    computed: {
      comments() { return this.$store.state.comment.all },
      reversedComments() { return this.comments.slice().reverse() }
    }
```

`comments` 数据已经移动到了 store 的模块中，所以 CommentBox 组件内 `data` 部分的 `comments` 数据就可以删除了，取而代之的是添加一个 comments 计算属性，返回值是 `this.$store.comment.all` 。

浏览器中，可以看到评论列表照常可以显示。
