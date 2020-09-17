<template>
    <div>

        <!-- ROW 3 -->
        <div class="vx-row">
            <div class="vx-col w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4">

            <vs-button icon-pack="feather" icon="icon-chevrons-right" icon-after class="shadow-md w-full lg:mt-0 mt-4" href="/apps/reviews/all">View Details</vs-button>
                <statistics-card-line icon="FeatherIcon" statistic="1.4k" statisticTitle="Total Reviews Collected"></statistics-card-line>
            </div>

            <div class="vx-col w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4">
            <vs-button icon-pack="feather" icon="icon-chevrons-right" icon-after class="shadow-md w-full lg:mt-0 mt-4" href="/syst/ag-grid-table">View Details</vs-button>
                <statistics-card-line icon="LayersIcon" statistic="350 tickets .+1" statisticTitle="Total Redemption this week"></statistics-card-line>
            </div>

            <div class="vx-col w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4">
                <img src="@/assets/images/elements/divider.png" height="36" >
                <statistics-card-line icon="ShoppingBagIcon" statistic="14k" statisticTitle="Total Redemption this year">
                </statistics-card-line>
            </div>
            <div class="vx-col w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4">
                <img src="@/assets/images/elements/divider.png" height="36" >
                <statistics-card-line icon="DollarSignIcon" statistic="RM 2300" statisticTitle="Total Pending Payout"></statistics-card-line>
            </div>
        </div>

    </div>
</template>

<script>
import StatisticsCardLine from '@/components/statistics-cards/StatisticsCardLine.vue'

export default{
    components: {
        StatisticsCardLine
    },
    data() {
        return {
            // Area charts
            subscribersGained: {},
            revenueGenerated: {},
            quarterlySales: {},
            ordersReceived: {},

            // Line Charts
            siteTraffic: {},
            activeUsers: {},
            newsletter: {},
        }
    },
    created() {
      // Subscribers gained
      this.$http.get("/api/card/card-statistics/subscribers")
        .then((response) => { this.subscribersGained = response.data })
        .catch((error) => { console.log(error) })

      // Revenue Generated
      this.$http.get("/api/card/card-statistics/revenue")
        .then((response) => { this.revenueGenerated = response.data })
        .catch((error) => { console.log(error) })

      // Sales
      this.$http.get("/api/card/card-statistics/sales")
        .then((response) => { this.quarterlySales = response.data })
        .catch((error) => { console.log(error) })

      // Orders
      this.$http.get("/api/card/card-statistics/orders")
        .then((response) => { this.ordersRecevied = response.data })
        .catch((error) => { console.log(error) })

      // Site Traffic gained
      this.$http.get("/api/card/card-statistics/site-traffic")
        .then((response) => { this.siteTraffic = response.data })
        .catch((error) => { console.log(error) })

      // Active Users
      this.$http.get("/api/card/card-statistics/active-users")
        .then((response) => { this.activeUsers = response.data })
        .catch((error) => { console.log(error) })

      // Site Traffic gained
      this.$http.get("/api/card/card-statistics/newsletter")
        .then((response) => { this.newsletter = response.data })
        .catch((error) => { console.log(error) })
    }
}
</script>
