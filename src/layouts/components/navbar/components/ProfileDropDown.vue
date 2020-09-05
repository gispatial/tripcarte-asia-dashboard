<template>
  <div class="the-navbar__user-meta flex items-center" v-if="activeUserInfo.user_display_name">

    <div class="text-right leading-tight hidden sm:block">
      <p class="font-semibold">{{ activeUserInfo.user_display_name }}</p>
    </div>

    <!-- Extra codes for logout -->
    <div class="text-right leading-tight hidden sm:block">
      <div class="flex py-2 px-4 cursor-pointer hover:bg-primary hover:text-white"
            @click="logout">
            <span class="ml-2"><b>Logout</b></span>&nbsp;
            <feather-icon icon="LogOutIcon" svgClasses="w-4 h-4" />
      </div>
    </div>


    <vs-dropdown vs-custom-content vs-trigger-click class="cursor-pointer">

      <div class="con-img ml-3">
        <img v-if="activeUserInfo.photoURL" key="onlineImg" :src="activeUserInfo.photoURL" alt="user-img" width="40" height="40" class="rounded-full shadow-md cursor-pointer block" />
      </div>

      <vs-dropdown-menu class="vx-navbar-dropdown">
        <ul style="min-width: 9rem">

          <li
            class="flex py-2 px-4 cursor-pointer hover:bg-primary hover:text-white"
            @click="$router.push('/apps/todo').catch(() => {})">
            <feather-icon icon="CheckSquareIcon" svgClasses="w-4 h-4" />
            <span class="ml-2">Reviews</span>
          </li>

          <li
            class="flex py-2 px-4 cursor-pointer hover:bg-primary hover:text-white"
            @click="$router.push('/apps/chat').catch(() => {})">
            <feather-icon icon="MessageSquareIcon" svgClasses="w-4 h-4" />
            <span class="ml-2">Support</span>
          </li>

          <vs-divider class="m-1" />

          <li
            class="flex py-2 px-4 cursor-pointer hover:bg-primary hover:text-white"
            @click="logout">
            <feather-icon icon="LogOutIcon" svgClasses="w-4 h-4" />
            <span class="ml-2">Logout</span>
          </li>
        </ul>
      </vs-dropdown-menu>
    </vs-dropdown>
  </div>
</template>

<script>
//import firebase from 'firebase/app'
//import 'firebase/auth'

export default {
  data() {
    return {

    }
  },
  computed: {
    activeUserInfo() {
      return this.$store.state.AppActiveUser
    }
  },
  methods: {
    logout() {
        // If JWT login
        if(localStorage.getItem("accessToken")) {
          localStorage.removeItem("accessToken")
          this.$router.push('/pages/login').catch(() => {})
        }
this.$store.state.AppActiveUser = {};
        // Change role on logout. Same value as initialRole of acj.js
        this.$acl.change('admin')
        localStorage.removeItem('userInfo')

        // This is just for demo Purpose. If user clicks on logout -> redirect
        this.$router.push('/pages/login').catch(() => {})
    },
  }
}
</script>
