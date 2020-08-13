<!-- =========================================================================================
  File Name: DashboardAnalytics.vue
  Description: Dashboard Analytics
  ----------------------------------------------------------------------------------------
	Item Name: TDMP - NETQUEST SOLUTIONS SB
	Author: TripcarteDev
	Author URL: http://tripcarte.gispatial.now.sh/
========================================================================================== -->

<template>
  <div id="dashboard-analytics">
    <div class="vx-row">
    <!-- CARD 9: DISPATCHED ORDERS -->

    <div class="vx-row">
    <div class="vx-col w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/3 mb-base">
    </div>

      <!-- CARD 3: ORDER RECEIVED -->
      <div class="vx-col w-full sm:w-1/1 md:w-1/1 lg:w-1/1 xl:w-1/1 mb-base">

      <vx-card slot="no-body" class="text-center bg-success-gradient greet-user">
                  <img src="@/assets/images/elements/decore-left.png" class="decore-left" alt="Decore Left" width="200" >
                  <img src="@/assets/images/elements/decore-right.png" class="decore-right" alt="Decore Right" width="175">
        <feather-icon icon="AwardIcon" class="p-6 mb-8 bg-primary inline-flex rounded-full text-white shadow" svgClasses="h-8 w-8"></feather-icon>
        <h1 class="mb-6 text-white">WELCOME TO TRIPCARTE DASHBOARD MANAGEMENT PORTAL</h1>
        <div class="vx-row">
            <div class="vx-col w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4">
            <vs-button icon-pack="feather" icon="icon-chevrons-right" icon-after class="shadow-md w-full lg:mt-0 mt-4" href="/apps/reviews/all">Details</vs-button>
                <statistics-card-line icon="FeatherIcon" statisticTitle="Total Reviews Collected - 1.4k"></statistics-card-line>
            </div>

            <div class="vx-col w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4">
            <vs-button icon-pack="feather" icon="icon-chevrons-right" icon-after class="shadow-md w-full lg:mt-0 mt-4" href="/syst/ag-grid-table">Details</vs-button>
                <statistics-card-line icon="LayersIcon" statisticTitle="Total Redemption this week - 350 tickets .+1"></statistics-card-line>
            </div>

            <div class="vx-col w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4">
            <h5 class="mb-6 text-white">&nbsp;</h5>
                <statistics-card-line icon="ShoppingBagIcon" statisticTitle="Total Redemption this year - 14k"></statistics-card-line>
            </div>
            <div class="vx-col w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4">
            <h5 class="mb-6 text-white">&nbsp;</h5>
                <statistics-card-line icon="DollarSignIcon" statisticTitle="Total Pending Payout - RM 2300"></statistics-card-line>
            </div>
        </div>
        <p class="xl:w-3/4 lg:w-4/5 md:w-2/3 w-4/5 mx-auto text-white">This is default home.</p>
      </vx-card>
      </div>

      <!-- CARD 2: SUBSCRIBERS GAINED -->
      <div class="vx-col w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 mb-base">
      <div>
      <vx-card>
      </vx-card>
      </div>
      </div>

      <!-- CARD 3: ORDER RECIEVED -->
      <div class="vx-col w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 mb-base">
      <div>
      <vx-card>
      </vx-card>
      </div>
      </div>
    </div>
    </div>
    <div>-- Tripcarte.Asia Merchants Dashboard Prototype Version-0.0.1 --</div>

  </div>
</template>

<script>
import VueApexCharts from 'vue-apexcharts'
import StatisticsCardLine from '@/components/statistics-cards/StatisticsCardLine.vue'
import analyticsData from './syst/card/analyticsData.js'
import ChangeTimeDurationDropdown from '@/components/ChangeTimeDurationDropdown.vue'
import VxTimeline from "@/components/timeline/VxTimeline"

export default {
    data() {
        return {
            checkpointReward: {},
            subscribersGained: {},
            ordersRecevied: {},
            salesBarSession: {},
            supportTracker: {},
            productsOrder: {},
            salesRadar: {},

            timelineData: [
              {
                color: "primary",
                icon: "PlusIcon",
                title: "Client Meeting",
                desc: "Bonbon macaroon jelly beans gummi bears jelly lollipop apple",
                time: "25 mins Ago"
              },
              {
                color: "warning",
                icon: "MailIcon",
                title: "Email Newsletter",
                desc: "Cupcake gummi bears soufflé caramels candy",
                time: "15 Days Ago"
              },
              {
                color: "danger",
                icon: "UsersIcon",
                title: "Plan Webinar",
                desc: "Candy ice cream cake. Halvah gummi bears",
                time: "20 days ago"
              },
              {
                color: "success",
                icon: "LayoutIcon",
                title: "Launch Website",
                desc: "Candy ice cream cake. Halvah gummi bears Cupcake gummi bears soufflé caramels candy.",
                time: "25 days ago"
              },
              {
                color: "primary",
                icon: "TvIcon",
                title: "Marketing",
                desc: "Candy ice cream cake. Halvah gummi bears Cupcake gummi bears.",
                time: "28 days ago"
              }
            ],


            analyticsData: analyticsData,
            dispatchedOrders: [],
        }
    },
    components: {
        VueApexCharts,
        StatisticsCardLine,
        ChangeTimeDurationDropdown,
        VxTimeline
    },
    created() {
      //  User Reward Card
      this.$http.get("/api/user/checkpoint-reward")
        .then((response) => { this.checkpointReward = response.data })
        .catch((error)   => { console.log(error) })

      // Subscribers gained - Statistics
      this.$http.get("/api/card/card-statistics/subscribers")
        .then((response) => { this.subscribersGained = response.data })
        .catch((error)   => { console.log(error) })

      // Orders - Statistics
      this.$http.get("/api/card/card-statistics/orders")
        .then((response) => { this.ordersRecevied = response.data })
        .catch((error)   => { console.log(error) })

      // Sales bar - Analytics
      this.$http.get("/api/card/card-analytics/sales/bar")
        .then((response) => { this.salesBarSession = response.data })
        .catch((error)   => { console.log(error) })

      // Support Tracker
      this.$http.get("/api/card/card-analytics/support-tracker")
        .then((response) => { this.supportTracker = response.data })
        .catch((error)   => { console.log(error) })

      // Products Order
      this.$http.get("/api/card/card-analytics/products-orders")
        .then((response) => { this.productsOrder = response.data })
        .catch((error)   => { console.log(error) })

      // Sales Radar
      this.$http.get("/api/card/card-analytics/sales/radar")
        .then((response) => { this.salesRadar = response.data })
        .catch((error)   => { console.log(error) })

      // Dispatched Orders
      this.$http.get("/api/table/dispatched-orders")
        .then((response) => { this.dispatchedOrders = response.data })
        .catch((error)   => { console.log(error) })
    }
}
</script>

<style lang="scss">
/*! rtl:begin:ignore */
#dashboard-analytics {
  .greet-user{
    position: relative;

    .decore-left{
      position: absolute;
      left:0;
      top: 0;
    }
    .decore-right{
      position: absolute;
      right:0;
      top: 0;
    }
  }

}
/*! rtl:end:ignore */
</style>
