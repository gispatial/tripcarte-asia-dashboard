<!-- =========================================================================================
    File Name: FormValidation.vue
    Description: Form validation (third-party) - Imports page portions
    ----------------------------------------------------------------------------------------
    Item Name: Tripcarte.Asia Dashboard Management Portal
      Author: Tripcarte.Asia
    Author URL: https://tripcarte.cloudns.asia/
========================================================================================== -->

<template>
    <div id="extra-component-form-validation-demo">

        <p class="mb-4">If you are an individual buying tickets for own use, please use our website <a href="https://tripcarte.asia/" target="_blank" rel="nofollow">tripcarte.asia</a></p>
        <form-validation-types></form-validation-types>
    </div>
</template>

<script>
import FormValidationSimple from "./FormValidationSimple.vue"
import FormValidationMultipleRules from "./FormValidationMultipleRules.vue"
import FormValidationCustomErrorMessages from "./FormValidationCustomErrorMessages.vue"
import FormValidationEvents from "./FormValidationEvents.vue"
import FormValidationTypes from "./FormValidationTypes.vue"

export default {
    components: {
        FormValidationSimple,
        FormValidationMultipleRules,
        FormValidationCustomErrorMessages,
        FormValidationEvents,
        FormValidationTypes,
    }
}
</script>
