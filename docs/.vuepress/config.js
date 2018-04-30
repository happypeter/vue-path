module.exports = {
  head: [['link', { rel: 'icon', href: `/favicon.png` }]],
  title: 'Vue 路径',
  description: '基础加框架',

  themeConfig: {
    sidebar: toc(),
    search: false,
    searchMaxSuggestions: 10,
    nav: [{ text: '首页', link: '/' }, { text: '路径', link: '/path/' }]
  }
}

// NOTE: 侧边栏标题会显示为对应页面上的一级标题，另外，下面的页面如果不存在，会导致整个侧边栏 render 失败
// 每个小节中统一使用二级标题做部分标题，这样部分标题也会自动显示到侧边栏上
function toc() {
  return {
    '/git/': ['', 'intro'],

    '/vuex-hello/': ['', 'cli', 'comp', 'state']
  }
}
