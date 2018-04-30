# API

本节来用 [json-server](https://github.com/typicode/json-server) 来搭建测试 API 。

### 用 json-server 搭建 API

```
npm i -g json-server
```

全局安装 json-server 。

/api/db.json

```json
{
  "comments": [
    {
      "id": "1",
      "body": "评论1"
    },
    {
      "id": "2",
      "body": "评论2"
    }
  ]
}
```

项目顶级位置创建 api 文件夹，里面添加 db.json 文件。Json 的一大特点就是属性名都用双引号包裹，属性值基本上也都用双引号，不要用单引号。

```
cd api/
json-server --watch db.json -p 3008
```

进入 db.json 所在的文件夹，启动 json-server ，--watch 之后跟 db.json 文件名，然后 -p 之后跟端口号，这里使用3008做端口号。

浏览器中，访问 localhost:3008/comments 能够显示评论数组，访问 localhost:3008/comments/1 能够显示 id 为 1 的评论对象。这样表示 api server 就搭建好了。

### 加载 api 数据

来用 api 提供的 comments 数组填充 vuex store 。

```
npm i axios
```

先来安装 axios 。

App.vue

```js
  created: function () {
    this.$store.dispatch({ type: 'loadComments' })
  }
```

App.vue 中添加生命周期函数 created ，当 App 组件加载的时候，自动发出一个 action 叫做 loadComments 。

modules/comments.js

```js
import axios from 'axios'

const state = {
  all: []
}

const mutations = {
  loadComments(state, comments) {
    state.all = comments
  }
}

const actions = {
  loadComments({ commit }) {
    const uri = 'http://localhost:3008/comments'
    axios.get(uri).then(
      res => {
        let comments = res.data
        commit('loadComments', comments)
      }
    )
  }
}
```

modules/comments.js 文件中，导入 axios 。来实现一个名为 loadComments 的 action 。

把 API 链接存放到 uri 常量中，使用 axios 发 get 请求到 API ，返回的数据 res.data 中就可以拿到评论数组了。

但是 action 自己是不被允许修改 state 的，所以 commit 也就是执行一个同名的 mutation ，把 comments 发送给 mutation 。

到 mutations 对象中来新建一个 mutation 叫做 loadComments 。里面的任务就是用网络请求得到的 comments 数组，填充 state.all 。

state.all 本来的数据就可以删除了，保留 all 为空数组。

浏览器中，可以看到评论依然能够正确显示，表示加载 API 数据的操作成功了。
