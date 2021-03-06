/**
 * 自动注册的路由，title和path是有固定的对应关系的
 * 非自动注册的需要手动指定title，后端数据参考前端路由配置 router/index.js
 */
export default [
  {
    path: '/',
    title: 'home',
    icon: 'el-icon-s-home'
  },
  {
    path: '/system',
    title: 'Components',
    icon: 'el-icon-setting',
    children: [
      {
        path: '/table',
        title: 'Simple Table Demo'
      },
      {
        path: '/form-input',
        title: 'Simple Form Input'
      },
      {
        path: '/form-select',
        title: 'Simple Form Select'
      }
    ]
  },
  {
    path: '/foo',
    title: 'foo.main',
    icon: 'icon-tree',
    children: [
      {
        path: '/foo/bar',
        title: 'foo.bar',
        icon: 'icon-tree'
      }
    ]
  },
  {
    path: '/formmaker',
    title: '表单设计器'
  },
  {
    path: '/1-1',
    title: '1-1',
    icon: 'icon-tree',
    children: [
      {
        path: '/2-1',
        title: '2-1',
        children: [
          {
            path: '/3-1',
            title: '3-1'
          },
          {
            path: '/3-2',
            title: '3-2',
            children: [
              {
                path: '/4-1',
                title: '4-1',
                icon: 'icon-tree'
              },
              {
                path: '/4-2',
                title: '4-2'
              }
            ]
          }
        ]
      },
      {
        path: '/2-2',
        title: '2-2'
      }
    ]
  }
]
