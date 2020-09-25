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
            <vs-list-header icon-pack="feather" icon="icon-shopping-cart" title="TRIPCARTE.ASIA"></vs-list-header>
    <vs-list-item icon-pack="feather" icon="icon-check" title="The Dashboard Management Portal" subtitle="Prototype Ver-1.0"></vs-list-item>
            <div>
              &nbsp;
            </div>
              <img src="@/assets/images/pages/login.png" alt="login" class="mx-auto" width="90%">
               <vx-tooltip
               title="Discounted Definition?"
               color="danger"
               text="Sale of attraction will be deduct from normal rates pricing with all terms & condition apply!">
              <vs-button color="dark" type="flat">Get Discounted with Attraction Tickets for your Guests</vs-button>
             </vx-tooltip>
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
                    <div>
                      &nbsp;
                    </div>
                    <vs-list-header icon-pack="feather" title="WELCOME BACK"></vs-list-header>
                  <p>
                    <vx-tooltip
                    color="danger"
                    icon-pack="feather" icon="icon-check"
                  text="Access merchant dashboard with your existing credentials. Signup are not required, if youre our returning existing merchant!">
                 <vs-button color="dark" type="flat">Please log to access your current profile.</vs-button><div></div>
               </vx-tooltip></p>
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
