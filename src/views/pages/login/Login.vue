<!-- =========================================================================================
    File Name: Login.vue
    Description: Login Page
    ----------------------------------------------------------------------------------------
    Item Name: Tripcarte.Asia Dashboard Management Portal
    Author: Netquest
    Author URL: http://demo.tripcarte.asia/
========================================================================================== -->


<template>
  <div class="h-screen flex w-full bg-img vx-row no-gutter items-center justify-center" id="page-login">
    <div class="vx-col sm:w-1/2 md:w-1/2 lg:w-3/4 xl:w-3/5 sm:m-0 m-4">
      <vx-card>
        <div slot="no-body" class="full-page-bg-color">

          <div class="vx-row no-gutter justify-center items-center">

            <div class="vx-col hidden lg:block lg:w-1/2">

            <div align="center">
              <vx-card>
                <div>&nbsp;</div>
              <h3> <b>TRIPCARTE.ASIA</b></h3><br>  &nbsp;&nbsp;NEW VERSION DASHBOARD & MANAGEMENT PORTAL<br>
              <div>&nbsp;</div>
          </vx-card></div>
              <img src="@/assets/images/pages/login.png" alt="login" class="mx-auto" width="100%">
              <div align="center">
                <vx-card><b>"Get Discounted with your purchases on Attraction Tickets for your guests"</b>
          <div>&nbsp;</div>
              </vx-card>
              </div>
              <div align="left"></div>
            </div>

            <div class="vx-col sm:w-full md:w-full lg:w-1/2 d-theme-dark-bg">
              <div class="px-8 pt-8 login-tabs-container">
                <div class="vx-card__title mb-4">
                  <img src="@/assets/images/pages/logo-login.png" alt="login" class="mx-auto" width="38%">
                  <div>&nbsp;</div>
                  <p>Welcome back, <b>Merchants & Partners</b>, Please sign-in back to your existing account.</p>
                </div><div>&nbsp;</div>
                <vs-tabs>
                  <vs-tab label="LOGIN">
                    <login-jwt></login-jwt>
                  </vs-tab>
                </vs-tabs>

              </div>
            </div>
          </div>
        </div>
      </vx-card>
    </div>
  </div>
</template>


<script>
import LoginJwt from "./LoginJWT.vue"

export default {
  components: {
    LoginJwt
  }
}
</script>

<style lang="scss">
.login-tabs-container {
  min-height: 505px;

  .con-tab {
    padding-bottom: 14px;
  }

  .con-slot-tabs {
    margin-top: 1rem;
  }
}
</style>
