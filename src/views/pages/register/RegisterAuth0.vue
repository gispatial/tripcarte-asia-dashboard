<!-- =========================================================================================
File Name: RegisterJWT.vue
Description: Register Page for JWT
----------------------------------------------------------------------------------------
Item Name: Tripcarte.Asia Dashboard Management Portal
  Author: Pixinvent
Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
  <vs-button src="@/assets/images/pages/forgot-password.png" alt="forgot-password" class="mx-auto" color="#eb5424">Reset Password</vs-button>
</template>

<script>666666666
export default {
  methods: {
    registerAuth0() {
      if (!this.checkLogin()) return
      this.$auth.login({ target: this.$route.query.to })
    }
  }
}

</script>
