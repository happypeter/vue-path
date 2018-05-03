# 处理数据关系

评论应该从属于特定一篇文章。

## 添加底层数据

db.json

```json
{
  "comments": [
    {
      "id": "1",
      "body": "评论1",
      "post": "1"
    },
    {
      "id": "2",
      "body": "评论2",
      "post": "1"
    },
    {
      "body": "hello",
      "id": "HJPNS0cNf",
      "post": "2"
    }
  ]
}
```

每个 comment 都添加 post 属性，值是所在文章的 id 。

CommentBox.vue

```js
      postId() { return this.$route.params.id },
      comments() {
        return this.$store.state.comment.all.filter(
          t => t.post === this.postId
        )
      },
```

添加运算属性 postId ，拿到当前文章的 id 。

comments 运算属性中，现在要对评论进行筛选，只保留属于当前文章的评论。

浏览器中，可以看到每篇文章只显示自己的评论了。

## 提交评论

CommentBox.vue

```js
      submitComment () {
        let comment = {
          body: this.message,
          post: this.postId
        }
      }
```

只需要在提交评论的时候，多添加一个 post 数据即可，值是当前文章 id 。

浏览器中，可以看到新评论只会显示到当前文章。
