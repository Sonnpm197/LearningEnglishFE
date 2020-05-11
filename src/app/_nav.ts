import {INavData} from '@coreui/angular';

export const navItems: INavData[] = [
  {
    title: true,
    name: 'Learning English'
  },
  {
    name: 'Listening',
    url: '',
    icon: 'icon-earphones',
    children: [
      {
        name: 'Learn',
        url: '/listening/learning',
        icon: 'icon-question'
      },
      {
        name: 'Test',
        url: '/listening/testing',
        icon: 'icon-graduation'
      }
    ]
  },
  {
    name: 'Reading',
    url: '',
    icon: 'icon-book-open',
    children: [
      {
        name: 'Learn',
        url: '/reading/learning',
        icon: 'icon-question'
      },
      {
        name: 'Test',
        url: '/reading/testing',
        icon: 'icon-graduation'
      }
    ]
  },
  {
    name: 'Writing',
    url: '',
    icon: 'icon-pencil',
    children: [
      {
        name: 'Learn',
        url: '/writing/learning',
        icon: 'icon-question'
      },
      {
        name: 'Test',
        url: '/writing/testing',
        icon: 'icon-graduation'
      }
    ]
  },
  {
    name: 'Speaking',
    url: '',
    icon: 'icon-speech',
    children: [
      {
        name: 'Learn',
        url: '/speaking/learning',
        icon: 'icon-question'
      },
      {
        name: 'Test',
        url: '/speaking/testing',
        icon: 'icon-graduation'
      }
    ]
  },
  {
    name: 'Grammar',
    url: '',
    icon: 'icon-user-following',
    children: [
      {
        name: 'Learn',
        url: '/grammar/learning',
        icon: 'icon-question'
      },
      {
        name: 'Test',
        url: '/grammar/testing',
        icon: 'icon-graduation'
      }
    ]
  },
  {
    name: 'Vocabulary',
    url: '',
    icon: 'icon-eyeglass',
    children: [
      {
        name: 'Learn',
        url: '/vocabulary/learning',
        icon: 'icon-question'
      },
      {
        name: 'Test',
        url: '/vocabulary/testing',
        icon: 'icon-graduation'
      }
    ]
  }
];
