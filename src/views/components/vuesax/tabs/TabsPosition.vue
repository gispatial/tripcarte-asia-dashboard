<!-- =========================================================================================
    File Name: TabsPosition.vue
    Description: Rendering of default Tabs
    ----------------------------------------------------------------------------------------
    Item Name: Tripcarte.Asia Dashboard Management Portal
    Author: Netquest
    Author URL: http://demo.tripcarte.asia/
========================================================================================== -->

<template>
  <vs-tabs>
    <vs-tab label="SCAN QR/ BARCODE" icon-pack="feather" icon="icon-camera">
      <div class="demo-alignment">
      <vs-button text-color="primary" :color="colorx" @click="popupActive=true" type="filled">Start Scanning</vs-button>

      <vs-popup background-color="rgba(128,128,128)" :background-color-popup="colorx" class=""  title="SCAN QR" :active.sync="popupActive">

        <p><h5>CLOSE THIS WINDOWS AFTER SCANNING DONE!</h5></p>
        <p class="error">{{ error }}</p>

        <p class="decode-result">Last result: <b>{{ result }}</b></p>

        <qrcode-stream @decode="onDecode" @init="onInit" />
      </vs-popup>
  </div>
    <div>
      <div>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Or
        </p>
      </div>

      <ul>
          <div>
            <div class="flex bg-white p-6 chat-input-container">
                <vs-input class="mr-3 w-full" v-model="barcode" placeholder="Enter barcode" ></vs-input>
                <vs-button icon-pack="feather" icon="icon-send" @click="barcodesearch"></vs-button>
            </div>
    </vs-prompt>
      <!-- Append Button -->
      <vx-input-group class="mb-base">
      </vx-input-group>
      <!-- /Append Button -->
    </div>
      <vx-card>
      <h6>Order details :</h6> <li v-for="post in posts" v-text="post.order_id" v-bind:key="post.order_id"></li>
       <h6>Name :</h6> <li v-for="post in posts" v-text="post.name" v-bind:key="post.order_id"></li>
       </vx-card>
       <vx-card>
        <h6>Redeem Details:</h6> <li v-for="post in posts" v-text="post.order_items" v-bind:key="post.order_id"></li>
        </vx-card>
    </ul>
    </div>
    </vs-tab>
  </vs-tabs>
</template>

<script>
import { QrcodeStream, } from 'vue-qrcode-reader'
import { VTree, VSelectTree}  from 'vue-tree-halower'
import axios from "@../../axios"
export default {
  components: { QrcodeStream },
  data () {
    return {
      activePrompt:false,
      colorx:"#f85959",
      popupActive: false,
      posts: '',
      barcode: '',
      result: '',
      input2: '',
      error: ''
    }
  },
  methods: {
    barcodesearch() {
      axios.post('https://partners.tripcarte.asia/wp-json/tripcarte_api/v2/redeem/',{ barcode: this.barcode },  { headers: { 'Authorization': `Bearer ${localStorage.getItem("accessToken")}` } })
                  .then( (response) => this.posts = response.data )
                  .catch(error => this.posts = [{order_id: 'Invalid Barcode!'}]);
    },
    onDecode (result) {
      //this.result = result
      axios.post('https://partners.tripcarte.asia/wp-json/tripcarte_api/v2/redeem/',{ barcode: result },  { headers: { 'Authorization': `Bearer ${localStorage.getItem("accessToken")}` } })
                  .then( (response) => this.posts = response.data )
                  .catch(error => this.posts = [{order_id: 'Invalid Barcode!'}]);
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
