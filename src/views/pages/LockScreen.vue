<!-- =========================================================================================
    File Name: LockScreen.vue
    Description: Lock Screen Page
    ----------------------------------------------------------------------------------------
    Item Name: Tripcarte.Asia Dashboard Management Portal
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <div class="h-screen flex w-full bg-img vx-row no-gutter justify-center items-center">
        <div class="vx-col sm:w-3/5 md:w-3/5 lg:w-3/4 xl:w-3/5 sm:m-0 m-4">
            <vx-card>
                <div slot="no-body" class="full-page-bg-color">
                    <div class="vx-row no-gutter">
                        <div class="vx-col hidden sm:hidden md:hidden lg:block lg:w-1/2 mx-auto self-center">
                            <img src="@/assets/images/pages/lock-screen.png" alt="login" class="mx-auto">
                        </div>

                        <div class="vx-col sm:w-full md:w-full lg:w-1/2 mx-auto self-center d-theme-dark-bg">
                            <div class="p-8">
                                <div class="vx-card__title mb-8">
                                    <h4 class="mb-4">TC BARCODE SCANNER</h4>
                                </div>

                                    <router-link to="/extensions/drag-and-drop" class="mb-4"><vs-button class="ml-2">SCAN NOW!</vs-button></router-link>

                                <div>
                                Or</div>
                                <vs-input icon-no-border icon="icon icon-lock" icon-pack="feather" type="scan" label-placeholder="Enter barcode" v-model="value2" class="w-full mb-6" />

                                <div align="center"><div class="flex justify-between flex-wrap">
                                    <router-link to="/dashboard/ecommerce" class="mb-4">
                                    <vs-button class="ml-2">Cancel</vs-button></router-link>
                                </div>
                                <barcode value="5d9e8f8499f1b" :options="{ lineColor: '#0275d8', text: 'Scan'}"><router-link to="/extensions/drag-and-drop" class="mb-4"><vs-button class="ml-2">Go!</vs-button></router-link></barcode>

</div>

                            </div>
                        </div>
                    </div>
                </div>
            </vx-card>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            value1: '',
            value2: ''
        }
    }
}


</script>
