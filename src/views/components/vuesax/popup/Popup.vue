<!-- =========================================================================================
    File Name: Popup.vue
    Description: Popup - Imports all page portions
    ----------------------------------------------------------------------------------------
    Item Name: Tripcarte.Asia Dashboard Management Portal
    Author: Netquest
    Author URL: http://demo.tripcarte.asia/
========================================================================================== -->


<template>
    <div id="popup-demo">
        <popup-default></popup-default>
        <popup-background></popup-background>
    </div>
</template>

<script>
import PopupDefault from './PopupDefault.vue'
import PopupBackground from './PopupBackground.vue'

export default{
    components: {
        PopupDefault,
        PopupBackground,
    }
}
</script>
