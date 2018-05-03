# vue-cli 搭建开发环境

本节来用 vue-cli 搭建开发环境。

## 安装 Vue-cli

首先参考 [vue-cli]([https://github.com/vuejs/vue-cli](https://github.com/vuejs/vue-cli)) 的官网，来搭建脚手架。

```bash
npm i -g vue-cli
```

安装 vue-cli 。cli 的意思是\*\*命令\*\* 。vue-cli 是用来快速搭建 vue 开发环境的命令行工具。


装好之后，重启命令行，

```plain
vue<tab>
```


就能看到有一些 vue 打头的命令了。


```plain
vue-init webpack demo
```


`vue-init` 是刚刚装好的命令，`webpack` 是多种脚手架模板之一，`demo` 是项目名。

提示选择的各项：

* 第一项问是否要把 `demo`  作为项目名称，直接回车，表示同意。
* 第二项询问项目描述，回车，保留默认值。
* 第三项，询问作者，回车，使用默认值
* 第四项，编译工具。直接回车，选择 runtime 也就是运行时，和 compiler 也就是编译器。
* 第五项，vue-router ，也就是路由器，回答 n ，回车，先不安装
* 第六项，是否使用 ESLint 进行代码检查，选择 n ，避免新手看到过多的报错信息
* 第七项，单元测试，回答 n 。
* 第八项，e2e 测试，回答 n 。
* 第九项，直接回车，选择 npm 作为装包工具。

然后就创建好了 demo 这个项目。

下面运行这个项目

```
npm run dev
```

npm run dev 的意思是，在开发环境下运行项目，dev 是开发环境的意思。

浏览器中，访问 localhost:8080 ，可以看到一个页面运行起来了。
