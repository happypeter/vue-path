# 方法


来完成提交评论的功能。

### 事件处理

可以参考[官方事件处理的文档](https://cn.vuejs.org/v2/guide/events.html)。

CommentBox.vue

```js
    methods: {
      submitComment () {
        console.log('submitComment')
      }
    }
```

到 script 下，跟 data 和 computed 平级，添加 methods 也就是“方法”这一项。值是一个对象，里面就可以定义函数了。submitComment 中，暂时只打印一个字符串。

```js
    <button @click="submitComment">提交</button>
```

模板中，添加一个按钮 button ，添加事件可以用 v-on: ，或者用 at 符，后面跟上事件名，这里是 click 。等号后面的双引号中，添加方法名。

浏览器中，点按钮，发现 submitComment 确实可以执行。

### 获取表单中填写的内容

参考[表单文档](https://cn.vuejs.org/v2/guide/forms.html) 采用 v-model 的形式来获取表单中用户填写的内容。

先来看看 v-model 怎么使用。

CommentBox.vue

```html
<template>
  <div class="comment-box">
    <input v-model="message" placeholder="请填写评论" />
    <button @click="submitComment">提交</button>
  </div>
</template>

<script>
  export default {
    name: 'CommentBox',
    data: () => ({
      message: '',
    }),
    methods: {
      submitComment () {
        console.log('submitComment', this.message)
        this.message = ''
      }
    }
  }
</script>
```

v- 的作用是提示编译环境这不是一个 html 的原生属性，而是一个 vue 指令。model 的意思是数据模型，在这里我们简单理解为数据就行。

使用 v-model 有三个注意点：

* 第一，要使用 v-model 指令，等号后面是一个字符串，里面写变量名，这里是 message
* 第二，变量要声明一下才能使用，也就是要到 data 里面，添加 message 冒号，值是空字符串
* 第三，真正在 script 标签中用的时候，变量名前面要添加 this

这样，我们就可以在 submitComment 方法中打印出用户的输入了。

浏览器中，输入内容，然后点提交按钮。终端中可以打印出输入内容。

### 修改评论数组

跟 react 有明显区别的是 vue 组件的数据是允许直接修改的，所以要提交评论，就直接修改评论数组即可。

CommentBox.vue

```js
        let comment = {
          id: (this.comments.length + 1).toString(),
          body: this.message
        }
        this.comments.push(comment)
```

script 标签中，新建 comment 变量存储新评论，id 是数组长度加一，body 是用户输入内容。然后直接把新评论 Push 进 comments 数组。

浏览器中，可以看到评论列表能够自动刷新，显示出新评论的。

### 不变性原则

Vue 在各种场合会绕开不变性原则，这个对新手来讲可以容易上手一些。但是不变性作为编程原则自然不是可以完全通过框架来屏蔽掉的。

例如，现在提交评论，会发现评论列表是会不断改变排序的。原因就是代码中直接修改了原始数据，违背了不变性原则。

Comment.vue

```js
   computed: {
      reversedComments: function () { return this.comments.slice().reverse() }
    },
```

对 this.comments 进行一下 slice 这样就可以获得 this.comments 的一个拷贝，于是在拷贝之上运行 reverse 也就是逆序操作，就不会修改原始数据 this.comments 了。

浏览器中，可以看到每次提交评论，评论的排序都会一直不变。

### 美化一下样式

先来控制一下表单的布局。

CommentBox.vue

```html
<template>
  <div class="comment-box">
    <div class="comment-form">
      <input v-model="message" placeholder="请填写评论" />
      <button @click="submitComment">提交</button>
    </div>
  </div>

  .comment-box {
    padding: 20px;
  }
  
  .comment-form {
    display: flex;
    margin-bottom: 20px;
  }

  .comment-form input {
    flex-grow: 1;
  }

  .comment-form button {
    margin-left: 5px;
  }
</style>
```

首先把 input 和 button 都包裹到一个 div 中，class 名为 comment-form 。

comment-form 紧贴 comment-box 的边缘不好看，所以给 comment-box 加20像素的 padding 。

comment-form 内部，想要达成一个 button 顶到最右侧，input 占据所有剩余空间的效果，所以使用 flexbox 技巧，让 input 的 flex-grow 等于1即可。

App.vue

```html
<style>
  * {
    box-sizing: border-box;
  }
</style>
```

App.vue 中再来添加 box-sizing 设置，保证元素添加了 padding 后，自己不会变胖。

浏览器中，看到样式舒服一些了。
