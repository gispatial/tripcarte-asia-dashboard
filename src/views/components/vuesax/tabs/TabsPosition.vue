<!-- =========================================================================================
    File Name: TabsPosition.vue
    Description: Rendering of default Tabs
    ----------------------------------------------------------------------------------------
    Item Name: Tripcarte.Asia Dashboard Management Portal
    Developer: Netquest's TripcarteDev Team
    GitHub URL: https://github.com/gispatial/tripcarte-asia-JWT
========================================================================================== -->
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
             <div>
             </div>
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
      <div align="center">
        <table style="width:100%">
  <tr>
    <th>Order details : </th>
    <th colspan="2">Qr Code :</th>
  </tr>
  <tr>
    <td><vs-button size="large">
     Order details : <li v-for="post in posts" v-text="post.order_id"></li>
     <br>
    Name : <li v-for="post in posts" v-text="post.name"></li></vs-button></td>
    <td></td>
    <td><img src="./tc-code.svg" width="167"></td>
  </tr>
</table>
      <td>
      </td>
        </table>
        <table style="width:100%">
  <tr>
    <th>
      <div>
      </div>
  <div>
  </div>

        <div>

        </div></td></th>


    <div>


 <vs-table :data="users">

   <template slot="thead">
     <vs-th>Item</vs-th>
     <vs-th>Purchased</vs-th>
     <vs-th>Remaining</vs-th>
     <vs-th>Redeem</vs-th>
   </template>

   <template slot-scope="{data}">
     <vs-tr :state="indextr == 2 || indextr == 5 ? 'success':indextr == 6 ? 'danger':null" :key="indextr" v-for="(tr, indextr) in data">

       <vs-td :data="data[indextr].website">
      <li>UNDERWATER WORLD LANGKAWI</li>
      Person Type: Adult<br>
      Ticket Type: Malaysian - with MyKad
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
</table>
      </div>

<table>
  <p>
  <tr>
  </tr>
  <tr>
    <td></td>
        <td>
        </vx-input-group>
      </td>
        <div>
        </div>
        <!--  <vs-button @click="randomCenter(barcodesearch)" color="success" type="gradient">Redeem</vs-button> -->
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
    return { users: [
        {
            "id": 1,
            "username": "norsyafiqah binti norashid",
            "name": "0",
            "email": "UNDERWATER WORLD LANGKAWI",
            "website": "1",
        },
        {
            "id": 2,
            "username": "norsyafiqah binti norashid",
            "name": "0",
            "email": "UNDERWATER WORLD LANGKAWI",
            "website": "0",
        },
    ],
      options: {
      cellSize: 8,
      correctLevel: 'H',
      data: 'post.order_items',
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
.v-cloak {
  display: none;
}
</style>



import LineChart from './Chart.vue'

export default {
  name: 'LineChartContainer',
  components: { LineChart },
  data: () => ({
    loaded: false,
    chartdata: null
  }),
  async mounted () {
    this.loaded = false
    try {
      const { userlist } = await fetch('/api/userlist')
      this.chartdata = userlist
      this.loaded = true
    } catch (e) {
      console.error(e)
    }
  }
}
