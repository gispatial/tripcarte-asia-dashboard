<!-- =========================================================================================
    File Name: DragAndDrop.vue
    Description: Drag and Drop (third-party) - Imports page portions
    ----------------------------------------------------------------------------------------
    Item Name: Tripcarte.Asia Dashboard Management Portal
      Author: NetquestDev
    Staging URL: https://tripcarte.cloudns.asia/
========================================================================================== -->

<template>


    <vx-card title="Ticket Counter">


        <vs-table :data="users">

            <template slot="thead">
                <vs-th>Item</vs-th>
                <vs-th>Purchased</vs-th>
                <vs-th>Remaining</vs-th>
                <vs-th>Redeem</vs-th>
            </template>

            <template slot-scope="{data}">
                <vs-tr :key="indextr" v-for="(tr, indextr) in data">

                    <vs-td :data="tr.title">
                        {{tr.title}}
                        <template slot="edit">
                            <vs-input v-model="tr.email" class="inputx" placeholder="title" />
                        </template>
                    </vs-td>

                    <vs-td :data="tr.username">
                        {{tr.username}}
                        <template slot="edit">
                            <vs-select label="User" v-model="tr.username">
                                <vs-select-item :key="index" :value="item.name" :text="item.name" v-for="(item,index) in users" />
                            </vs-select>
                        </template>
                    </vs-td>

                    <vs-td :data="tr.id">
                        {{tr.id}}
                        <template slot="edit">
                            <vs-slider :max="20" v-model="tr.id" />
                        </template>
                    </vs-td>

                    <vs-td :data="tr.id">
                        {{tr.id}}
                        <template slot="edit">
                          <vs-input-number v-model="tr.id" />
                        </template>
                    </vs-td>

                </vs-tr>
                </div>
            </template>
        </vs-table>



        <template slot="codeContainer">
&lt;template&gt;
  &lt;vs-table :data=&quot;users&quot;&gt;

    &lt;template slot=&quot;thead&quot;&gt;
      &lt;vs-th&gt;Item&lt;/vs-th&gt;
      &lt;vs-th&gt;Purchase&lt;/vs-th&gt;
      &lt;vs-th&gt;Remaining&lt;/vs-th&gt;
      &lt;vs-th&gt;Redeem&lt;/vs-th&gt;
    &lt;/template&gt;

    &lt;template slot-scope=&quot;{data}&quot;&gt;
      &lt;vs-tr :key=&quot;indextr&quot; v-for=&quot;(tr, indextr) in data&quot;&gt;

        &lt;vs-td :data=&quot;tr.meta_data&quot;&gt;
          {{ "\{\{ tr.email \}\}" }}
          &lt;template slot=&quot;edit&quot;&gt;
            &lt;vs-input v-model=&quot;tr.email&quot; class=&quot;inputx&quot; placeholder=&quot;Email&quot; /&gt;
          &lt;/template&gt;
        &lt;/vs-td&gt;

        &lt;vs-td :data=&quot;tr.username&quot;&gt;
          {{ "\{\{ tr.username \}\}" }}
          &lt;template slot=&quot;edit&quot;&gt;
            &lt;vs-select label=&quot;Users&quot; v-model=&quot;tr.username&quot;&gt;
              &lt;vs-select-item :key=&quot;index&quot; :value=&quot;item.name&quot; :text=&quot;item.name&quot; v-for=&quot;(item,index) in users&quot; /&gt;
            &lt;/vs-select&gt;
          &lt;/template&gt;
        &lt;/vs-td&gt;

        &lt;vs-td :data=&quot;tr.id&quot;&gt;
          {{ "\{\{ tr.id \}\}" }}
          &lt;template slot=&quot;edit&quot;&gt;
            &lt;vs-input-number v-model=&quot;tr.id&quot; /&gt;
          &lt;/template&gt;
        &lt;/vs-td&gt;

        &lt;vs-td :data=&quot;tr.id&quot;&gt;
          {{ "\{\{ tr.id \}\}" }}
          &lt;template slot=&quot;edit&quot;&gt;
            &lt;vs-slider :max=&quot;20&quot; v-model=&quot;tr.id&quot; /&gt;
          &lt;/template&gt;
        &lt;/vs-td&gt;

      &lt;/vs-tr&gt;
    &lt;/template&gt;
  &lt;/vs-table&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
  data() {
    return {
      users: [......]
    }
  },
}
&lt;/script&gt;
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
    return {
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

<script>
export default {
    data() {
        return {
            users: [
                {
                    "id": "3",
                    "name": "norsyafiqah binti norashid",
                    "username": "3",
                    "email": "UNDERWATER WORLD LANGKAWI",
                    "title": "UNDERWATER WORLD LANGKAWI",
                },
                {
                    "title": "Malaysian - with MyKad",
                    "name": "Malaysian - with MyKad",
                },
            ]
        }
    },
}
</script>


                    "Person Type": "Adult",
                    "Ticket Type": "Malaysian - with MyKad"
