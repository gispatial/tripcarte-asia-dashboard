<!-- =========================================================================================
    File Name: DragAndDropMultipleLists.vue
    Description: Drag and Drop to multiple lists
    ----------------------------------------------------------------------------------------
    Item Name: Tripcarte.Asia Dashboard Management Portal
      Author: Tripcarte.Dev
    Author URL: http://tripcarte.asia/
========================================================================================== -->


<template>
    <div class="h-screen flex w-full bg-img vx-row no-gutter justify-center items-center">
        <div class="vx-col sm:w-3/5 md:w-3/5 lg:w-3/4 xl:w-3/5 sm:m-0 m-4">
            <vx-card>
                <div slot="no-body" class="full-page-bg-color">
                    <div class="vx-row no-gutter">
                        <div class="vx-col hidden sm:hidden md:hidden lg:block lg:w-1/2 mx-auto self-center">
                            <img src="@/assets/images/pages/bar.png" alt="barcode" class="mx-auto">
                        </div>
                        <div class="vx-col sm:w-full md:w-full lg:w-1/2 mx-auto self-center d-theme-dark-bg">
                            <div class="p-8">
                                <div class="vx-card__title mb-8">
                                    <h4 class="mb-4">Barcode Camera</h4>
                                </div>
                                <div id="extra-component-drag-and-drop-demo">

                                    <p class="mb-4">Point your barcode to camera scanner</p>

                                    <drag-and-drop-multiple-lists></drag-and-drop-multiple-lists>
                                </div>
                                <div>
                                  <p class="error">{{ error }}</p>

                                  <p class="decode-result">Last result: <b>{{ result }}</b></p>

                                  <qrcode-stream @decode="onDecode" @init="onInit" />
                                </div>
                                <div align="center"><div class="flex justify-between flex-wrap">
                                    <router-link to="/dashboard/ecommerce" class="mb-4">
                                    <vs-button class="ml-2">Cancel Scanning</vs-button></router-link>
                                </div></div>

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

<script>
import { QrcodeStream } from 'vue-qrcode-reader'

export default {

  components: { QrcodeStream },

  data () {
    return {
      result: '',
      error: ''
    }
  },

  methods: {
    onDecode (result) {
      this.result = result
    },

    async onInit (promise) {
      try {
        await promise
      } catch (error) {
        if (error.name === 'NotAllowedError') {
          this.error = "ERROR: you need to grant camera access permisson"
        } else if (error.name === 'NotFoundError') {
          this.error = "ERROR: no camera on this device"
        } else if (error.name === 'NotSupportedError') {
          this.error = "ERROR: secure context required (HTTPS, localhost)"
        } else if (error.name === 'NotReadableError') {
          this.error = "ERROR: is the camera already in use?"
        } else if (error.name === 'OverconstrainedError') {
          this.error = "ERROR: installed cameras are not suitable"
        } else if (error.name === 'StreamApiNotSupportedError') {
          this.error = "ERROR: Stream API is not supported in this browser"
        }
      }
    }
  }
}
</script>
<style scoped>
.error {
  font-weight: bold;
  color: red;
}
</style>
