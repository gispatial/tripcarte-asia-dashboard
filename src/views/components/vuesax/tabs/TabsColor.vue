<!-- =========================================================================================
    File Name: TabsColor.vue
    Description: Change color color of underline in tabs
    ----------------------------------------------------------------------------------------
  	Item Name: TDMP - NETQUEST SOLUTIONS SB
  	Author: TripcarteDev
  	Author URL: http://tripcarte.gispatial.now.sh/
========================================================================================== -->

<template>
    <vx-card title="">
      <vx-card>
        <div align="center">
          <table style="width:100%">
      <tr>
      <th><h4>ORDER DETAILS :</h4><br>
        <div>

          <vs-button size="large">
        <li v-for="post in posts" v-text="post.order_id"></li></vs-button>
        </div>
        NAME :<br>
      </th></tr>
    </vx-card>

          <div>
      <vs-button size="large">
      <li v-for="post in posts" v-text="post.name"></li></vs-button>
          </div>
        </td>
      </th>

      <div>
        &nbsp;
      </div>
      <div v-cloak>
      <qr-canvas :options="options"></qr-canvas>
      </div>

      <table>

        <thead>
          <th>Purchased</th>
          <th>Remaining</th>
          <th>Redeem</th>
        </thead>

        <tbody>
          <tr v-for='(person, index) in persons'>
            <td>{{ index }}</td>
            <td>{{ person.name }}</td>
            <td>{{ person.age }}</td>
          </tr>
        </tbody>

      <tbody>
        <tr v-for='(person, index) in persons'>
          <td>{{ index }}</td>
          <td>{{ person.name }}</td>
          <td>{{ person.age }}</td>
        </tr>
      </tbody>

    </table>

        <div class="demo-alignment">
            <vs-list>


  <vs-list-item title="Items">
        <vs-chip color="warning">UNDERWATER WORLD LANGKAWI</vs-chip>
  </vs-list-item>

  <vs-list-item title="Person Type:">
      <vs-chip color="warning">Adult</vs-chip>
  </vs-list-item>

  <vs-list-item title="Ticket Type:">
        <vs-chip color="warning">Malaysian - with MyKad</vs-chip>
        <div>

      </table></div>
  </vs-list-item>

  <vs-list-item title="" subtitle="">
        <vs-button color="danger">Redeem</vs-button>
  </vs-list-item>
</vs-list>

        </div>

        <template slot="codeContainer">
  &lt;vs-list&gt;
    &lt;vs-list-item title=&quot;One text&quot;&gt;&lt;/vs-list-item&gt;
    &lt;vs-list-item title=&quot;Another text&quot; subtitle=&quot;A little text&quot;&gt;&lt;/vs-list-item&gt;
    &lt;vs-list-item title=&quot;Some more text&quot;&gt;&lt;/vs-list-item&gt;
    &lt;vs-list-item title=&quot;Even more text&quot; subtitle=&quot;Another little text&quot;&gt;&lt;/vs-list-item&gt;
  &lt;/vs-list&gt;
        </template>

    </vx-card>
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
    return {users: [
        {
            "id": 3,
            "name": "UnderWater World Ticketing",
            "username": "norsyafiqah binti norashid",
            "email": "UNDERWATER WORLD LANGKAWI",
            "id": "0",
        },
        {
            "id": 1,
            "name": "UnderWater World Ticketing",
            "username": "norsyafiqah binti norashid",
            "email": "UNDERWATER WORLD LANGKAWI",
            "id": "0",
        },
    ],
      options: {
      cellSize: 8,
      correctLevel: 'H',
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
