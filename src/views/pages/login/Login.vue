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
            </div>

              <img src="@/assets/images/pages/new-login.png" alt="login" class="mx-auto" width="100%">

            <vs-list-header icon-pack="feather" icon="icon-shopping-cart" title="TRIPCARTE.ASIA"></vs-list-header>
    <vs-list-item icon-pack="feather" icon="icon-check" title="The Dashboard Management Portal" subtitle="Get Discounted with Attraction Tickets for your Guests"></vs-list-item>
            <div>
              &nbsp;
            </div>
              <div align="center"><b> </b></div>
              <div>
                &nbsp;
              </div>
              <div>
                &nbsp;
              </div>
              <div>
                &nbsp;
              </div>
              <div>
                &nbsp;
              </div>
              <div>
              <div></div>
              </div>
              <div align="left"></div>
            </div>

            <div class="vx-col sm:w-full md:w-full lg:w-1/2 d-theme-dark-bg">
              <div class="px-8 pt-8 login-tabs-container">

                <div class="vx-card__title mb-4">
                    <img src="@/assets/images/pages/logo-t2.png" alt="login" class="mx-auto" width="100%">
                        <div>&nbsp;</div>
                        <div class="vx-card__title mb-4">
                            <h6 class="mb-4">LOGIN / REGISTER TO TRIPCARTE ASIA</h6>
                            <p><h6>✔ Earn points</h6></p>
                            <p><h6>✔ Redeem points for cheaper tickets</h6></p>
                            <p><h6>✔ See your tickets on all your devices</h6></p>
                            <p><h6>✔ Change / Cancel / Refund orders easily</h6></p>
                        </div>
                </div>
                <vs-tabs>
                    <vs-tab label="LOGIN"></vs-tab></vs-tabs>
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
