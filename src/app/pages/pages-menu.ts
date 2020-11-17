import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
 
  {
    title: 'Fund Information',
    group: true,
  },
  {
    title: 'Quarterly Statements',
    icon: 'archive-outline',
    home: true,

    children: [
      {
        title: 'June 2020',
        link: '/pages/layout/stepper',
      },
      {
        title: 'September 2020',
        link: '/pages/layout/list',
      },
    
      {
        title: 'December 2020',
        link: '/pages/layout/list',
      },

      {
        title: 'March 2021',
        link: '/pages/layout/list',
      },

      {
        title: 'K1',
        link: '/pages/layout/list',
      },

    ],
  },
  
  {
    title: 'Newsletter',
    icon: 'layout-outline',
    home: true,

    children: [
      {
        title: 'June 2020',
        link: '/pages/layout/stepper',
      },
      {
        title: 'September 2020',
        link: '/pages/layout/list',
      },
    
      {
        title: 'December 2020',
        link: '/pages/layout/list',
      },

      {
        title: 'March 2021',
        link: '/pages/layout/list',
      },

      // {
      //   title: 'K1',
      //   link: '/pages/layout/list',
      // },

    ],
  },
  

  
  
  {
    title: 'Helpful Info',
    icon: 'calendar-outline',
    children: [
      {
        title: 'Calendar',
        link: '/pages/extra-components/calendar',
      },
      
    ],
  },
  
  {
    title: 'Analytics',
    icon: 'pie-chart-outline',
    children: [
      {
        title: 'Fund Info',
        link: '/pages/charts/echarts',
      },
     
    
    ],
  },
  // {
  //   title: 'Quarterly Statements',
  //   icon: 'save-outline',
  //   link: '/pages/dashboard',
  // },
  
  {
    title: 'Auth',
    icon: 'lock-outline',
    children: [
      {
        title: 'Login',
        link: '/auth/login',
      },
      {
        title: 'Register',
        link: '/auth/register',
      },
      {
        title: 'Request Password',
        link: '/auth/request-password',
      },
      {
        title: 'Reset Password',
        link: '/auth/reset-password',
      },
    ],
  },
];
