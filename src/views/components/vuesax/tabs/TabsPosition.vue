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
      <vs-button text-color="primary" :color="colorx" @click="popupActive=true" type="filled">Start Scanning</vs-button>
      <vs-popup fullscreen title="SCAN QR" :active.sync="popupActive">
        <p class="error"><div v-bind:style="{ color: activeColor, fontSize: fontSize + 'px' }">{{ error }}</div></p>

         <qrcode-stream @decode="onDecode" @init="onInit" />
           <div></div>
           <div align="center"><h4><b>CLOSE THIS LID TO VIEW DETAILS OF YOUR SCAN RESULTS.</b></h4></div>
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
         <h6>REDEMPTION STATUS:</h6>
         <template slot="thead">
           <vs-td>ITEM</vs-td>
           <vs-td>PURCHASED</vs-td>
         </template>

         <template slot-scope="{data}">

    <vx-card>
      <div align="center">
        <table style="width:100%">
  <tr>
    <th><br><h4>ORDER DETAILS :</h4><br>
      <div>
        &nbsp;
      </div>
<li v-for="post in posts" v-text="post.order_id" v-bind:key="post.order_id"></li>
  <div>
    &nbsp;
  </div>
      NAME :<br>
        <div>

    <vs-button size="large">
    <li v-for="post in posts" v-text="post.name" v-bind:key="post.order_id"></li></vs-button>
        </div></td></th>

    <div>
      &nbsp;
    </div>
  <img src="./qr3.png" width="24%">
        <li>796925f256cacaade1</li>
  </tr>
</td>
</table>
      </div>
    </vx-card>

<table>
  <p>
  <tr>
    <th><b>ITEM</b></th>
    <th><b>PURCHASED</b></th>
    <th><b>REMAINING</b></th>
    <th><b>REDEEM</b></th>
  </tr>
  <tr>
    <td>UNDERWATER WORLD LANGKAWI<p></p>
      <h7><b>Person Type:</b></h7> Adult
  </td>
    <td>
      <li v-for="post in posts" v-text="3.0" v-bind:key="post.order_id"></li>
      </li>
    <td>
      <li v-for="post in posts" v-text="0.0" v-bind:key="post.order_id">
      </li>
    <td>
      <vx-tooltip text="Tooltip Default">
      <vs-input-number v-model="number1" />
      </vx-tooltip>
  </vx-input-group>
    <td>
      <li v-for="post in posts" v-text="" v-bind:key="post.quantity"></li>
</td>
  </tr>
  <tr>
    <td><h7><b>Ticket Type:</b></h7> Malaysian - with MyKad</td>
    <td><li v-for="post in posts" v-text="0.0" v-bind:key="post.quantity"></li></td>
        <td><li v-for="post in posts" v-text="0.0" v-bind:key="post.quantity"></li>
        </vx-input-group>
      </td>
        <div>

            <vx-tooltip text="Tooltip Default">
            <vs-input-number v-model="number2" />
            </vx-tooltip>
        </div>

        <li v-for="post in posts" v-text="post.order_items" v-bind:key=""></li>
          <vs-button @click="randomCenter(barcodesearch)" color="success" type="gradient">Redeem</vs-button>
        <td>
          <h7>&nbsp;</h7>
          <li v-if="post in posts" v-text="" v-bind:key=""></li>
</td>
  </tr>
</table>
    </vs-td>
  </vs-td>
           </tbody>
         </template>
        </vx-card>
    </ul>
    </div>
    </vs-tab>
  </vs-tabs>
</template>

<script>
import { QRCanvas } from 'qrcanvas-vue'
import { QrcodeStream, } from 'vue-qrcode-reader'
import { VTree, VSelectTree}  from 'vue-tree-halower'
import axios from "@../../axios"
export default {
  components: { QRCanvas,
    QrcodeStream },
  data () {
    return {
      options: {
        data: 'post.order_id',
      },
      number1: '0',
      number2: '0',
      title: '',
      username: '',
      siteUsername: '',
      amount: '',
      textarea: '',
      activePrompt:false,
      colorx:"#f16565",
      popupActive: false,
      posts: '',
      barcode: '',
      result: '',
      input2: '',
      activeColor: '#d71414',
      fontSize: 12,
      error: ''
    }
  },
      computed: {
        currentPage() {
          if(this.isMounted) {
            return this.$refs.table.currentx
          }
          return 0
        },
        queriedItems() {
          //return this.$refs.table ? this.$refs.table.queriedResults.length : this.products.length
          return this.$refs.table ? this.$refs.table.queriedResults.length : this.commissions.length
        }
      },

  methods: {
    randomCenter() {
      function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
      }
      let color = `rgb(${getRandomInt(0,255)})`
      this.$vs.notify({ title: 'Success!', text: 'Code has been redeemed', color: color, position: 'top-center' })
    },
    barcodesearch() {
      axios.post('https://partners.tripcarte.asia/wp-json/tripcarte_api/v2/redeem/',{ barcode: this.barcode },  { headers: { 'Authorization': `Bearer ${localStorage.getItem("accessToken")}` } })
                  .then( (response) => this.posts = response.data )
                  .catch(error => this.posts = [{order_id: 'Invalid Barcode!'}]);
    },
    onDecode (result) {
      //this.result = result
      axios.post('https://partners.tripcarte.asia/wp-json/tripcarte_api/v2/redeem/',{ barcode: result },  { headers: { 'Authorization': `Bearer ${localStorage.getItem("accessToken")}` } })
                  .then( (response) => this.posts = response.post.redeem )
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
    },

  commissions()
  { return this.$store.state.commission.commissions },
  queriedItems() {
    //return this.$refs.table ? this.$refs.table.queriedResults.length : this.products.length
    return this.$refs.table ? this.$refs.table.queriedResults.length : this.commissions.length
  }
},

formatJson(filterVal, jsonData) {
  return jsonData.map(v => filterVal.map(j => {
    // Add col name which needs to be translated
    // if (j === 'timestamp') {
    //   return parseTime(v[j])
    // } else {
    //   return v[j]
    // }

    return v[j]
  }))
},

clearFields() {
  this.fileName = ""
  this.cellAutoWidth = true
  this.selectedFormat = "xlsx"
},
addNewData() {
  this.sidebarData = {}
  this.toggleDataSidebar(true)
},
deleteData(id) {
  this.$store.dispatch("dataList/removeItem", id).catch(err => { console.error(err) })
},
editData(data) {
  this.sidebarData = JSON.parse(JSON.stringify(this.blankData))
  this.sidebarData = data
  this.toggleDataSidebar(true)
},
getOrderStatusColor(status) {
  if(status == 'Unpaid') return "warning"
  if(status == 'Redeemed') return "success"
  if(status == 'Unpaid') return "danger"
  return "primary"
},
created() {
if(!moduleCommission.isRegistered) {
  this.$store.registerModule('commission', moduleCommission)
  moduleCommission.isRegistered = true
}
//this.$store.dispatch("dataList/fetchDataListItems")
},
}
</script>

<style lang="scss">
table {
  border-spacing: 0;
}

td {
  padding: 2px 5px;
}

.jsonOdd {
  background: #eee;
}
</style>
