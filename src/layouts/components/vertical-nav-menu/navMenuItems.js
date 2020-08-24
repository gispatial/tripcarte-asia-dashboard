/*=========================================================================================
  File Name: sidebarItems.js
  Description: Sidebar Items list. Add / Remove menu items from here.
  Strucutre:
          url     => router path
          name    => name to display in sidebar
          slug    => router path name
          icon    => Feather Icon component/icon name
          tag     => text to display on badge
          tagColor  => class to apply on badge element
          i18n    => Internationalization
          submenu   => submenu of current item (current item will become dropdown )
                NOTE: Submenu don't have any icon(you can add icon if u want to display)
          isDisabled  => disable sidebar item/group
  ----------------------------------------------------------------------------------------
  Item Name: Tripcarte.Asia Dashboard Management Portal
  Developer: Tripcarte Development Team
  Author URL: http://tripcarte.asia/
==========================================================================================*/


export default [
  // {
  //   url: "/apps/email",
  //   name: "Email",
  //   slug: "email",
  //   icon: "MailIcon",
  //   i18n: "Email",
  // },

  {
    header: "MERCHANT PANEL",
    icon: "LayersIcon",
    i18n: "ADMINISTRATION PANEL",
    items: [
    {
      url: '/syst/card/statistics',
      name: "DASHBOARD",
      slug: "colors",
      icon: "MonitorIcon",
      i18n: "DASHBOARD",
      permissionName: "read_product",
    },
    {
      url: '/syst/ag-grid-table',
      name: "PAYOUTS",
      tagColor: "primary",
      icon: "DollarSignIcon",
      i18n: "PAYOUTS",
    },
    {
      url: '/syst/data-list/list-view',
      name: "REDEMPTIONS",
      tagColor: "primary",
      icon: "AwardIcon",
      i18n: "REDEMPTIONS",
    },
    {
      url: '/syst/data-list/payouts',
          name: "PAYOUTS",
          tagColor: "primary",
          icon: "DollarSignIcon",
          i18n: "PAYOUTS",
          permissionName: [ 'get_permissions', 'read_product' ]
        },
        {
          url: '/syst/data-list/redeem',
          name: "REDEMPTIONS",
          tagColor: "primary",
          icon: "AwardIcon",
          i18n: "REDEMPTIONS",
          permissionName: [ 'tripcarte_asia_redemption_report' ]
        },
        {
          url: '/apps/reviews/all',
          name: "REVIEWS",
          tagColor: "primary",
          icon: "FeatherIcon",
          i18n: "REVIEWS",
          permissionName: [ 'get_reviews', 'get_my_reviews' ]
        },
        {
  url: '/components/tabs',
  name: "SCAN TICKETS",
  icon: "ApertureIcon",
  i18n: "SCAN TICKETS",
  permissionName: [ 'tripcarte_asia_redeem_ticket', 'tripcarte_asia_scan_ticket' ]
        },
        {
  url: '/components/tabs',
  name: "SCAN TICKETS",
  icon: "ApertureIcon",
  i18n: "SCAN TICKETS",
},
{
  url: null,
  name: "FINANCE ADMIN",
  icon: "ActivityIcon",
  i18n: "FINANCE ADMIN",
  permissionName: "read_product",
},
{
  url: null,
  name: "SETTINGS",
  icon: "SettingsIcon",
  i18n: "SETTINGS",
  permissionName: "read_product",
},
{
url: null,
name: "FINANCE ADMIN",
icon: "ActivityIcon",
i18n: "FINANCE ADMIN",
},
        {
          url: '/pages/login',
          name: 'LOGIN',
          slug: 'pages-login',
          i18n: 'LOGIN',
          permissionName: "read_product",
          target: '_blank'
        },
{
  url: 'https://tripcarte.asia/registration/',
  name: "REGISTER",
  slug: "external",
  i18n: "REGISTER",
  permissionName: "read_product",
  target: "_blank"
},
{
  url: '/apps/chat',
  name: 'SUPPORT',
  slug: 'pages-login',
  i18n: 'SUPPORT',
  permissionName: "read_product",
  target: '_blank'
},
//{
        //url: null,
        //name: "FINANCE ADMIN",
        //icon: "ActivityIcon",
        //i18n: "FINANCE ADMIN",
        //submenu: [
          // {
          //   name: "Import/Export",
          //   i18n: "Import/Export",
          //   submenu: [

          //   ]
          // },
          //{
            //url: "/syst/card/statistics",
            //name: "Dashboard",
            //icon: "HomeIcon",
            //slug: "import",
            //i18n: "Dashboard"
          //},
          //{
            //url: "/syst/ag-grid-table",
            //name: "PAYOUTS",
            //icon: "HomeIcon",
            //slug: "export",
            //i18n: "PAYOUTS"
        //  }
      //  ]
      //},
    //  {
      //  url: null,
        //name: "SETTINGS",
        //icon: "SettingsIcon",
        //i18n: "SETTINGS",
        //permissionName: "read_product",
        //submenu: [
        //  {
        //    url: '/extensions/i18n',
        //    name: 'Language Settings',
        //    slug: 'pages-lock-screen',
        //    i18n: 'Language Settings',
        //    permissionName: "read_product",
        //    target: '_blank'
        //  },
        //  {
          //  url: '/pages/login',
          //  name: 'SignIn/ SignOut',
          //  slug: 'pages-login',
          //  i18n: 'SignIn/ SignOut',
          //  permissionName: "read_product",
          //  target: '_blank'
          //},
        //  {
          //  url: 'https://tripcarte.asia/registration/',
          //  name: "Register",
          //  icon: "LifeBuoyIcon",
          //  slug: "external",
          //  i18n: "Register",
          //  permissionName: "read_product",
          //  target: "_blank"
          //},
        //  {
          //  url: '/apps/chat',
          //  name: 'Chat with Support',
          //  slug: 'pages-login',
          //  i18n: 'Chat with Support',
          //  permissionName: "read_product",
          //  target: '_blank'
          //},
          ]
        },

    ]
    //  },
//]
