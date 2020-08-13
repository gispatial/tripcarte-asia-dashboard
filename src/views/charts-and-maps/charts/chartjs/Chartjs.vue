<!-- =========================================================================================
    File Name: Charts.vue
    Description: Chartjs (third-party) - Imports page portions
    ----------------------------------------------------------------------------------------
    Item Name: Tripcarte.Asia Dashboard Management Portal
      Author: Tripcarte.Asia
    Staging URL: http://tripcarte.gispatial.tech/api
========================================================================================== -->

<template>
    <div id="extra-component-chartjs-demo">
        <p class="mb-4">You can easily create reuseable chart components. <a href="https://vue-chartjs.org/" target="_blank" rel="nofollow">vue-chartjs</a> is a wrapper for Chart.js. Read full documnetation <a href="https://vue-chartjs.org/guide/" target="_blank" rel="nofollow">here</a></p>

        <div class="vx-row">

        <div class="vx-col w-full">
            <chartjs-scatter-chart></chartjs-scatter-chart>
        </div>
            <div class="vx-col w-full md:w-1/2">
                <chartjs-line-chart></chartjs-line-chart>
            </div>
            <div class="vx-col w-full md:w-1/2">
                <chartjs-bar-chart></chartjs-bar-chart>
            </div>
            <div class="vx-col w-full md:w-1/2">
                <chartjs-horizontal-bar-chart></chartjs-horizontal-bar-chart>
            </div>
            <div class="vx-col w-full md:w-1/2">
                <chartjs-pie-chart></chartjs-pie-chart>
            </div>
        </div>
    </div>
</template>

<script>
import ChartjsBarChart from "./ChartjsBarChart.vue"
import ChartjsLineChart from "./ChartjsLineChart.vue"
import ChartjsPieChart from "./ChartjsPieChart.vue"
import ChartjsRadarChart from "./ChartjsRadarChart.vue"
import ChartjsPolarAreaChart from "./ChartjsPolarAreaChart.vue"
import ChartjsDoughnutChart from "./ChartjsDoughnutChart.vue"
import ChartjsHorizontalBarChart from "./ChartjsHorizontalBarChart.vue"
import ChartjsBubbleChart from "./ChartjsBubbleChart.vue"
import ChartjsScatterChart from "./ChartjsScatterChart.vue"

export default {
    components: {
        ChartjsBarChart,
        ChartjsLineChart,
        ChartjsPieChart,
        ChartjsRadarChart,
        ChartjsPolarAreaChart,
        ChartjsDoughnutChart,
        ChartjsHorizontalBarChart,
        ChartjsScatterChart,
        ChartjsBubbleChart,
    }
}
</script>
