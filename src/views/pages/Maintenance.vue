<!-- =========================================================================================
    File Name: Maintenance.vue
    Description: Maintenance Page
    ----------------------------------------------------------------------------------------
    Item Name: Tripcarte.Asia Dashboard Management Portal
    Author: Netquest
    Author URL: http://demo.tripcarte.asia/
========================================================================================== -->


<template>
    <div class="h-screen flex w-full bg-img">
        <div class="vx-col flex items-center justify-center flex-col sm:w-1/2 md:w-3/5 lg:w-3/4 xl:w-1/2 mx-auto text-center">
            <img src="@/assets/images/pages/796925f256cacaade1.png" alt="graphic-maintenance" class="mx-auto mb-4">
            <h1 class="sm:mx-0 mx-4 mb-6 text-5xl d-theme-heading-color">Order Retrieved.</h1>
            <p class="sm:mx-0 mx-4 mb-6 d-theme-text-inverse">"status": 200,
        "order_id": 79692,
        "name": "norsyafiqah binti norashid",
        "order_items": {
            "45428": {
                "name": "UNDERWATER WORLD LANGKAWI",
                "meta_data": {
                    "Person Type": "Adult",
                    "Ticket Type": "Malaysian - with MyKad"
                },
                "quantity": 3,
                "remaining": 0
            },
            "45429": {
                "name": "UNDERWATER WORLD LANGKAWI",
                "meta_data": {
                    "Person Type": "Child (3 - 12 years old)",
                    "Ticket Type": "Malaysian - with MyKad"
                },
                "quantity": 1,
                "remaining": 0</p>
            <vs-button size="large" to="/">Back to Home</vs-button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            value1: ''
        }
    }
}
</script>
