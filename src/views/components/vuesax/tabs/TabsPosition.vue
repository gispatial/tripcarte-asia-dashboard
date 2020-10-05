<!-- =========================================================================================
    File Name: TabsPosition.vue
    Description: Rendering of default Tabs
    ----------------------------------------------------------------------------------------
    Item Name: Tripcarte.Asia Dashboard Management Portal
    Developer: Netquest's TripcarteDev Team
    GitHub URL: https://github.com/gispatial/tripcarte-asia-JWT
========================================================================================== -->

<template>
  <vs-tabs>
  <vs-tab label="WEB REDEMPTION" icon-pack="feather" icon="icon-camera">
    <div class="demo-alignment">
      <vs-button text-color="white" :color="colorx" @click="popupActive=true" type="filled">Start Scanning</vs-button>
       <vs-popup background-color="#5b5b5b" :background-color-popup="colorx" class="" fullscreen title="SCAN YOUR QR" :active.sync="popupActive">
         <p class="error"><div v-bind:style="{ color: activeColor, fontSize: fontSize + 'px' }">{{ error }}</div></p>
          <qrcode-stream @decode="onDecode" @init="onInit" />
          <div></div>
         <div align="center">
           <div>&nbsp;</div>
        <H5>CLOSE LID TO VIEW RESULTS.</H5></div>
      </vs-popup></div>
      <div>
        &nbsp;
      </div>
      <div align ="left">
      &nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;
      <b>Or</b>
      </div>
      <div>
      </div>
        <p>
      </p></div>
      <ul><div>
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
      <div id="vue-root">
  <datatable :columns="columns" :data="rows"></datatable>
      </div>
       <vx-card>
         <template slot-scope="{data}">
      <div align="left">
     <table style="width:100%">
<thead>
  <tr>
    <th>
       Order details :<br>
       <vs-button size="small">
         <li v-for="post in posts" v-text="post.order_id"></li></vs-button><br>
       Name :<br>
       <vs-button size="small">
         <li v-for="post in posts" v-text="post.name"></li></vs-button>
     </th>
    <th></th>
    <th><img src="./tc-code.svg" width="48"></th>
    <th></th>
  </tr>
</thead>
  <thead>
  <tr>
  <th>Item</th>
  <th>Purchase</th>
  <th><div align="left">Remaining</div></th>
  <th><div align="left">Redeem</div></th>
  </tr>
  </thead>
  <tbody>
  <tr>
  <td>
 <li><h5>UNDERWATER WORLD LANGKAWI</h5></li>
  <h6>Person Type:</h6> Adult<br>
  <h6>Ticket Type:</h6> Malaysian - with MyKad
  </td>
  <td><div align="center">3</div></td>
  <td><div align="center">0</div></td>
  <td><div align="center">0</div></td>
  </tr>
  </tbody>
  <div>
  </div>
  <thead>
    </thead>
    <tbody>
    <tr>
    <td>
   <li><h5>UNDERWATER WORLD LANGKAWI</h5></li>
    <h6>Person Type:</h6> Child (3 - 12 years old)<br>
    <h6>Ticket Type:</h6> Malaysian - with MyKad
   </td>
    <td><div align="center">1</div></td>
    <td><div align="center">0</div></td>
    <td><div align="center">0</div></td>
    </tr>
    </tbody>
 </table>
    <td>
      </td>
        </table>
        <!-- <table style="width:100%"> -->
      <tr>
    <th>
      <div>
      </div>
  <div>
  </div>
  <div>
    </div>
      </td>
      </th>
    <div>
  <!--  <vs-table :data="users">
   <template slot="thead">
   <vs-th>Item</vs-th>
   <vs-th>Purchased</vs-th>
   <vs-th>Remaining</vs-th>
   <vs-th>Redeem</vs-th>
 </template> -->
   <template slot-scope="{data}">
     <vs-tr :state="indextr == 2 || indextr == 5 ? 'success':indextr == 6 ? 'danger':null" :key="indextr" v-for="(tr, indextr) in data">
       <vs-td :data="data[indextr].website">
      <li>UNDERWATER WORLD LANGKAWI</li>
      <b>Person Type:</b> Adult<br>
       <b>Ticket Type:</b> Malaysian - with MyKad
       </vs-td>
       <vs-td :data="data[indextr].id">
       <li>3</li>
       </vs-td>
       <vs-td :data="data[indextr].website">
       <li>0</li>
       </vs-td>
       <vs-td :data="data[indextr].username">
       <li>0</li>
       </vs-td>
     </vs-tr>
   </template>
 </vs-table>
    </div>
    <div v-cloak>
    <qr-canvas :options="options"></qr-canvas>
   </div>
  <li></li>
  </tr>
 </td>
</table></div><table>
  <p><tr></tr>
  <tr><td>
    </td>
        <td>
        </vx-input-group>
      </td>
        <div>
        </div>
        <!--  <vs-button @click="randomCenter(barcodesearch)" color="success" type="gradient">Redeem</vs-button> -->
        <td>
          <h7>&nbsp;</h7>
          <li v-if="post in posts" v-text="" v-bind:key=""></li>
        </td></tr>
      </table>
    </vs-td>
  </vs-td>
        </tbody>
        </template>
        <div class="demo-alignment">

      <vs-button @click="randomCenter()" color="danger" type="gradient">Position Top Center Random Color</vs-button>
  </div>
 </vx-card>
    </ul>
    </div>
    </vs-tab>
  </vs-tabs>

</template>
</template>

<script>
import { QrcodeStream, } from 'vue-qrcode-reader'
import { VTree, VSelectTree}  from 'vue-tree-halower'
import axios from "@../../axios"
export default {
  components: { QrcodeStream },
  data () {
    return {
      colorx:"#5b5b5b",
      popupActive: false,
      users: [
          {
              "id": 1,
              "name": "Leanne Graham",
              "username": "Bret",
              "email": "Sincere@april.biz",
              "website": "hildegard.org",
            },
              {
                "id": 1,
                "name": "Leanne Graham",
                "username": "0",
                "email": "Sincere@april.biz",
                "website": "0"
              }],
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
