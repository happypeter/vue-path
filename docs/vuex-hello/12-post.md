# 发评论

本节来实现发布评论到服务器的功能。

## 提交评论到服务器

modules/comment.js

```js
const actions = {
  addComment({ commit }, { comment }) {
    const { body } = comment
    const uri = 'http://localhost:3008/comments'
    axios.post(uri, { body }).then(res => {
      console.log('res.data', res.data)
    })
  }
}
```

addComment Action 中，解构拿到评论内容 body ，axios 发 post 请求，可以写数据到服务器，负载数据是一个对象，里面只包含 body 即可，不需要 id ，因为服务器会自动生成 id 的。返回信息 res.data 打印一下。

浏览器中，执行发布评论操作。终端中打印出来的返回信息是一个包括 id 和 body 的对象。同时打开 db.json 可以看到这次提交的评论已经成功保存了。

## 完善发送过程

服务器会自动生成 id ，所以客户端代码中自己生成 id 的代码可以删除了。

CommentBox.vue

```js
 submitComment () {
        let comment = {
          body: this.message
        }
```

CommentBox.vue 中，把 id 一项删除。

store/modules/comment.js

```js
  addComment({ commit }, { comment } ) {
    const uri = 'http://localhost:3008/comments'
    axios.post(uri, comment).then(res => {
      const comment = res.data
      commit('addComment', comment)
    })
  }
```

这样，comment 中就只有 body 对象了，直接发送给服务器即可。comment 对象本身没有 id 也不能直接发送给 mutation ，所以把 commit 移动到 then 内部，也就是把服务器端返回的包含 id 的 comment 发送给 mutation 。

浏览器中，试一下，发评论功能工作正常了。
