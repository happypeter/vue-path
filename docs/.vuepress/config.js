module.exports = {
  head: [['link', { rel: 'icon', href: `/favicon.png` }]],
  title: 'Vue 路径',
  description: '基础加框架',

  themeConfig: {
    sidebar: {
      '/git/': [
        '' /* /foo/ */,
        'first' /* /foo/one.html */,
        'second' /* /foo/two.html */
      ],

      '/es6/': [
        '' /* /bar/ */,
        'hello' /* /bar/three.html */,
        'peter' /* /bar/four.html */
      ]
    },
    search: false,
    searchMaxSuggestions: 10,
    nav: [{ text: '首页', link: '/' }, { text: '路径', link: '/path/' }]
  }
}
