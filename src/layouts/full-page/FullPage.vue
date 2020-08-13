<!-- =========================================================================================
  File Name: FullPage.vue
  Description: Full page layout
  ----------------------------------------------------------------------------------------
  Item Name: Tripcarte.Asia Dashboard Management Portal
  Developer: Tripcarte Development Team
  Author URL: http://tripcarte.asia/
========================================================================================== -->


<template>
  <div class="layout--full-page">
  <vs-navbar-item index="0">
  <a href="#">Home</a>
  </vs-navbar-item>
  <vs-navbar-item index="1">
  <a href="#">News</a>
  </vs-navbar-item>
  <vs-navbar-item index="2">
  <a href="#">Update</a>
  </vs-navbar-item>
    <router-view></router-view>
  </div>
</template>
