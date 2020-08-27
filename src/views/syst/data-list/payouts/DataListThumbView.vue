<!-- =========================================================================================
  File Name: DataListListView.vue
  Description: Data List - List View
  ----------------------------------------------------------------------------------------
  Item Name: Tripcarte.Asia Dashboard Management Portal
  Developer: Netquest's TripcarteDev Team
  GitHub URL: https://github.com/gispatial/tripcarte-asia-JWT
========================================================================================== -->

<template>
  <div id="data-list-list-view" class="data-list-container">

    <data-view-sidebar :isSidebarActive="addNewDataSidebar" @closeSidebar="toggleDataSidebar" :data="sidebarData" />

    <vs-table ref="table" multiple v-model="selected" pagination :max-items="itemsPerPage" search :data="commissions">

      <div slot="header" class="flex flex-wrap-reverse items-center flex-grow justify-between">

        <div class="flex flex-wrap-reverse items-center data-list-btn-container">
          <vs-prompt title="Export To Excel" class="export-options" @cancle="clearFields" @accept="exportToExcel" accept-text="Export" @close="clearFields" :active.sync="activePrompt">
              <vs-input v-model="fileName" placeholder="Enter File Name.." class="w-full" />
              <div class="flex">
                <span class="mr-4">Cell Auto Width:</span>
                <vs-switch v-model="cellAutoWidth">Cell Auto Width</vs-switch>
              </div>
          </vs-prompt>

          <!-- ADD NEW -->
          <div>
              <vs-button class="mb-4 md:mb-0" @click="activePrompt=true">&nbsp;&nbsp;Export</vs-button>
          </div>
        </div>

        <!-- ITEMS PER PAGE -->
        <vs-dropdown vs-trigger-click class="cursor-pointer mb-4 mr-4 items-per-page-handler">
          <div class="p-4 border border-solid d-theme-border-grey-light rounded-full d-theme-dark-bg cursor-pointer flex items-center justify-between font-medium">
            <span class="mr-2">{{ currentPage * itemsPerPage - (itemsPerPage - 1) }} - {{ commissions.length - currentPage * itemsPerPage > 0 ? currentPage * itemsPerPage : commissions.length }} of {{ queriedItems }}</span>
            <feather-icon icon="ChevronDownIcon" svgClasses="h-4 w-4" />
          </div>

          <!-- <vs-button class="btn-drop" type="line" color="primary" icon-pack="feather" icon="icon-chevron-down"></vs-button> -->
          <vs-dropdown-menu>

            <vs-dropdown-item @click="itemsPerPage=4">
              <span>4</span>
            </vs-dropdown-item>
            <vs-dropdown-item @click="itemsPerPage=10">
              <span>10</span>
            </vs-dropdown-item>
            <vs-dropdown-item @click="itemsPerPage=15">
              <span>15</span>
            </vs-dropdown-item>
            <vs-dropdown-item @click="itemsPerPage=20">
              <span>20</span>
            </vs-dropdown-item>
          </vs-dropdown-menu>
        </vs-dropdown>
      </div>
      <template slot="thead">
        <vs-th>Order ID</vs-th>
        <vs-th>Item</vs-th>
        <vs-th>Item Price</vs-th>
        <vs-th>Total Tickets</vs-th>
        <vs-th>Total Redeemed</vs-th>
        <vs-th>Redeemed Date</vs-th>
        <vs-th>Redeemed By</vs-th>
        <vs-th>Redemption Status</vs-th>
        <vs-th sort-key="commission_status">Payment Status</vs-th>
        <vs-th>Payment Date</vs-th>
      </template>

        <template slot-scope="{data}">
          <tbody>
            <vs-tr :data="rd" :key="keys" v-for="(rd, keys) in data">

              <vs-td>
                <p>{{ rd.order_id }}</p>
              </vs-td>

              <vs-td>
                <p class="font-medium truncate">{{ rd.product_name }}</p>
                <div :key="key" v-for="(att, key) in rd.attributes">
                <vs-chip :color="getOrderStatusColor(rd.attributes)" class="product-order-status"> {{att.option_name}}</vs-chip>
                </div>
              </vs-td>

              <template>
              <vs-td>
                <p>RM {{ rd.product_amount }}</p>
                  <p>&nbsp;</p>
              </vs-td>
              </template>
              <vs-td>
                <p>{{ rd.product_quantity }}</p>
                  <p>&nbsp;</p>
              </vs-td>
              <vs-td>
                <p>{{ rd.redeem_qty }}</p>
                  <p>&nbsp;</p>
              </vs-td>
              <vs-td>
                <p class="font-medium">{{ rd.redeem_date_gmt }}</p>
              </vs-td>
              <vs-td>
                <p>{{ rd.redeem_user }}</p>
              </vs-td>
              <vs-td>
              <p class="font-small">RM {{ rd.redeem_qty*rd.product_amount | Redeemed }}</p>
              <p class="font-medium"><vs-chip :color="getOrderStatusColor(rd.order_status)" class="product-order_status" data="myData" isActive="myIsActive"> Redeemed </vs-chip></p>
              </vs-td>
              <vs-td>
                <p>&nbsp;</p>
              <vs-chip :color="getOrderStatusColor(rd.order_status)" class="product-order-status">{{ rd.commission_status | title }}</vs-chip>
              </vs-td>
              <vs-td>
                <p>{{ rd.paid_date }}</p>
              </vs-td>

              <!--
              <vs-td class="whitespace-no-wrap">
              <feather-icon icon="UploadIcon" svgClasses="w-5 h-5 hover:text-danger stroke-current" class="ml-2" @click="activePrompt=true" />
            </vs-td>
            -->

            </vs-tr>
          </tbody>
        </template>

        <!--
        <template slot-scope="{data}">
          <tbody>
            <vs-tr :data="tr" :key="indextr" v-for="(tr, indextr) in data">
              <vs-td>
                <p class="product-name font-medium truncate">{{ tr.name }}</p>
              </vs-td>
              <vs-td>
                <p class="product-category">{{ tr.category | title }}</p>
              </vs-td>
              <vs-td>
                <vs-progress :percent="Number(tr.popularity)" :color="getPopularityColor(Number(tr.popularity))" class="shadow-md" />
              </vs-td>
              <vs-td>
                <vs-chip :color="getOrderStatusColor(tr.order_status)" class="product-order-status">{{ tr.order_status | title }}</vs-chip>
              </vs-td>
              <vs-td>
                <p class="product-price">${{ tr.price }}</p>
              </vs-td>
              <vs-td class="whitespace-no-wrap">
                <feather-icon icon="EditIcon" svgClasses="w-5 h-5 hover:text-primary stroke-current" @click.stop="editData(tr)" />
                <feather-icon icon="TrashIcon" svgClasses="w-5 h-5 hover:text-danger stroke-current" class="ml-2" @click.stop="deleteData(tr.id)" />
              </vs-td>
            </vs-tr>
          </tbody>
        </template>
        -->
    </vs-table>
  </div>
</template>

<script>
import vSelect from 'vue-select'
import DataViewSidebar from '../DataViewSidebar.vue'
import moduleCommission from "@/store/commission/moduleCommission.js"

export default {
  components: {
    DataViewSidebar,
    vSelect
  },
  data() {
    return {
      selected: [],
      //redemptions: [],
      products: [],
      itemsPerPage: 5,
      isMounted: false,
      // Data Sidebar
      addNewDataSidebar: false,
      sidebarData: {},
      fileName: "",
      formats:["xlsx", "csv", "txt"] ,
      cellAutoWidth: true,
      selectedFormat: "xlsx",
      headerTitle: ["Order ID", "Item", "Item Price", "Total Tickets", "Total Redeemed", "Redeemed Date", "Redeemed By", "Redemption Status", "Payment Status", "Payment Date"],
      headerVal: ["order_id", "product_name", "product_amount","product_quantity", "redeem_qty", "redeem_date_gmt", "redeem_user", "paid_date", "paid_date", "paid_date"],
      activePrompt: false,
    }
  },
  computed: {
    currentPage() {
      if(this.isMounted) {
        return this.$refs.table.currentx
      }
      return 0
    },
    commissions()     { return this.$store.state.commission.commissions },
    queriedItems() {
      //return this.$refs.table ? this.$refs.table.queriedResults.length : this.products.length
      return this.$refs.table ? this.$refs.table.queriedResults.length : this.commissions.length
    }
  },

  methods: {
    exportToExcel() {
      import('@/vendor/Export2Excel').then(excel => {
        const list = this.selected
        const data = this.formatJson(this.headerVal, list)
        excel.export_json_to_excel({
          header: this.headerTitle,
          data,
          filename: this.fileName,
          autoWidth: this.cellAutoWidth,
          bookType: this.selectedFormat
        })
        this.clearFields()
      })
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
    getPopularityColor(num) {
      if(num > 90) return "success"
      if(num >70) return "primary"
      if(num >= 50) return "warning"
      if(num < 50) return "danger"
      return "primary"
    },
    toggleDataSidebar(val=false) {
      this.addNewDataSidebar = val
    }
  },
  created() {
    if(!moduleCommission.isRegistered) {
      this.$store.registerModule('commission', moduleCommission)
      moduleCommission.isRegistered = true
    }
    //this.$store.dispatch("dataList/fetchDataListItems")
  },
  mounted() {
    this.$store.dispatch("commission/getCommissions")
    this.isMounted = true
  }
}
</script>

<style lang="scss">
#data-list-list-view {
  .vs-con-table {
    /*
      Below media-queries is fix for responsiveness of action buttons
      Note: If you change action buttons or layout of this page, Please remove below style
    */
    @media (max-width: 689px) {
      .vs-table--search {
        margin-left: 0;
        max-width: unset;
        width: 100%;
        .vs-table--search-input {
          width: 100%;
        }
      }
    }
    @media (max-width: 461px) {
      .items-per-page-handler {
        display: none;
      }
    }
    @media (max-width: 341px) {
      .data-list-btn-container {
        width: 100%;
        .dd-actions,
        .btn-add-new {
          width: 100%;
          margin-right: 0 !important;
        }
      }
    }
    .product-name {
      max-width: 23rem;
    }
    .vs-table--header {
      display: flex;
      flex-wrap: wrap;
      margin-left: 1.5rem;
      margin-right: 1.5rem;
      > span {
        display: flex;
        flex-grow: 1;
      }
      .vs-table--search{
        padding-top: 0;
        .vs-table--search-input {
          padding: 0.9rem 2.5rem;
          font-size: 1rem;
          &+i {
            left: 1rem;
          }
          &:focus+i {
            left: 1rem;
          }
        }
      }
    }
    .vs-table {
      border-collapse: separate;
      border-spacing: 0 1.3rem;
      padding: 0 1rem;
      tr{
          box-shadow: 0 4px 20px 0 rgba(0,0,0,.05);
          td{
            padding: 20px;
            &:first-child{
              border-top-left-radius: .5rem;
              border-bottom-left-radius: .5rem;
            }
            &:last-child{
              border-top-right-radius: .5rem;
              border-bottom-right-radius: .5rem;
            }
          }
          td.td-check{
            padding: 20px !important;
          }
      }
    }
    .vs-table--thead{
      th {
        padding-top: 0;
        padding-bottom: 0;
        .vs-table-text{
          text-transform: uppercase;
          font-weight: 600;
        }
      }
      th.td-check{
        padding: 0 15px !important;
      }
      tr{
        background: none;
        box-shadow: none;
      }
    }
    .vs-table--pagination {
      justify-content: center;
    }
  }
}
</style>
