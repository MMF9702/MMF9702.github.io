import type { DefaultTheme } from 'vitepress';

export const nav: DefaultTheme.Config['nav'] = [
  {
    text: '我的分类',
    items: [
      { text: 'Bug鱼龙汇', link: '/categories/issues/index', activeMatch: '/categories/issues/' },
      { text: '"杂碎"逆袭史', link: '/categories/fragments/index', activeMatch: '/categories/fragments/' },
      { text: '工具四海谈', link: '/categories/tools/index', activeMatch: '/categories/tools/' },
      { text: '方案春秋志', link: '/categories/solutions/index', activeMatch: '/categories/solutions/' },
      { text: '诗词与散文', link: '/categories/poem_prose/index', activeMatch: '/categories/poem_prose/' }
    ],
    activeMatch: '/categories/'
  },
  {
    text: '我的小册',
    items: [
      { text: '安全测试', link: '/courses/safetyTesting/index', activeMatch: '/courses/safetyTesting/' },
      { text: '管理学入门', link: '/courses/manager/index', activeMatch: '/courses/manager/' },
      { text: 'MySQL快速入门', link: '/courses/mysql/index', activeMatch: '/courses/mysql/' },
      { text: '自动化测试框架的搭建', link: '/courses/auto_test_framework/index', activeMatch: '/courses/auto_test_framework/' }
    ],
    activeMatch: '/courses/'
  },
  {
    text: '我的标签',
    link: '/tags',
    activeMatch: '/tags'
  },
  {
    text: '我的归档',
    link: '/archives',
    activeMatch: '/archives'
  },
  {
    text: '关于',
    items: [
      { text: '关于知识库', link: '/about/index', activeMatch: '/about/index' },
      { text: '关于我', link: '/about/me', activeMatch: '/about/me' }
    ],
    activeMatch: '/about/' // // 当前页面处于匹配路径下时, 对应导航菜单将突出显示
  },
];
