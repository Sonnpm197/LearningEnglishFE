import {INavData} from '@coreui/angular';

export const navItems: INavData[] = [
  {
    title: true,
    name: 'Learning English'
  },
  {
    name: 'Listening',
    url: '/base',
    icon: 'icon-puzzle',
    children: [
      {
        name: 'Learn',
        url: '/base/cards',
        icon: 'icon-puzzle'
      },
      {
        name: 'Test',
        url: '/base/carousels',
        icon: 'icon-puzzle'
      }
    ]
  },
  {
    name: 'Reading',
    url: '/base',
    icon: 'icon-puzzle',
    children: [
      {
        name: 'Learn',
        url: '/base/cards',
        icon: 'icon-puzzle'
      },
      {
        name: 'Test',
        url: '/base/carousels',
        icon: 'icon-puzzle'
      }
    ]
  },
  {
    name: 'Writing',
    url: '/base',
    icon: 'icon-puzzle',
    children: [
      {
        name: 'Learn',
        url: '/base/cards',
        icon: 'icon-puzzle'
      },
      {
        name: 'Test',
        url: '/base/carousels',
        icon: 'icon-puzzle'
      }
    ]
  },
  {
    name: 'Speaking',
    url: '/base',
    icon: 'icon-puzzle',
    children: [
      {
        name: 'Learn',
        url: '/base/cards',
        icon: 'icon-puzzle'
      },
      {
        name: 'Test',
        url: '/base/carousels',
        icon: 'icon-puzzle'
      }
    ]
  },
  {
    name: 'Grammar',
    url: '/base',
    icon: 'icon-puzzle',
    children: [
      {
        name: 'Learn',
        url: '/base/cards',
        icon: 'icon-puzzle'
      },
      {
        name: 'Test',
        url: '/base/carousels',
        icon: 'icon-puzzle'
      }
    ]
  },
  {
    name: 'Vocabulary',
    url: '/base',
    icon: 'icon-puzzle',
    children: [
      {
        name: 'Learn',
        url: '/base/cards',
        icon: 'icon-puzzle'
      },
      {
        name: 'Test',
        url: '/base/carousels',
        icon: 'icon-puzzle'
      }
    ]
  }
];
