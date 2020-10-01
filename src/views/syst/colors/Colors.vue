<!-- =========================================================================================
    File Name: Colors.vue
    Description: Color Pallet - Imports all page portions
    ----------------------------------------------------------------------------------------
    Item Name: Tripcarte.Asia Dashboard Management Portal
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <div id="colors-demo">
        <colors-default></colors-default>
    </div>
</template>

<script>
import ColorsDefault from './ColorsDefault.vue'

export default{
    components: {
        ColorsDefault
    }
}
</script>

<style lang="scss">
@import "@/assets/scss/vuexy/pages/colors.scss";
</style>
