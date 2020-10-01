<!-- =========================================================================================
    File Name: TheFooter.vue
    Description: Footer component
    Component Name: TheFooter
    ----------------------------------------------------------------------------------------
    Item Name: Tripcarte.Asia Dashboard Management Portal
    Developer: Tripcarte Development Team
    Author URL: http://tripcarte.asia/
========================================================================================== -->


<template functional>
    <footer class="the-footer flex-wrap justify-between" :class="classes">
        <span>&copy; {{ new Date().getFullYear() }} <a href="https://tripcarte.asia/" target="_blank" rel="nofollow">Tripcarte.Asia</a>, All Rights Reserved.</span>
        <span class="md:flex hidden items-center">
          <feather-icon icon="BookIcon" svgClasses="stroke-current text-danger w-6 h-6" class="ml-2" />
            &nbsp;<span>Developed by NetquestDev. &copy; 2020. Staging Ncov_0.0.5<br></span>
        </span>

        <!-- buyNow component -->
        <component :is="injections.components.BuyNow"></component>
    </footer>
</template>

<script>
import BuyNow from '../../components/BuyNow.vue'

export default {
    name: "the-footer",
    props: {
        classes: {
            type: String,
        },
    },
    inject: {
      components:{
          default: {
            BuyNow
          }
      }
    }
}
</script>
