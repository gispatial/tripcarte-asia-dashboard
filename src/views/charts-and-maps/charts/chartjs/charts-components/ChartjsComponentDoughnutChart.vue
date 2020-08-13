<!-- =========================================================================================
	File Name: ChartjsComponentDoughnutChart.vue
	Description: Chartjs component - Doughnut Chart
	----------------------------------------------------------------------------------------
	Item Name: Tripcarte.Asia Dashboard Management Portal
		Author: Tripcarte.Asia
	Staging URL: http://tripcarte.gispatial.tech/api
========================================================================================== -->


<script>
import { Doughnut } from 'vue-chartjs'

export default {
    extends: Doughnut,
    props: {
        data: {
            type: Object,
            default: null,
        },
        options: {
            type: Object,
            default: null,
        }
    },
    mounted() {
        this.renderChart(this.data, this.options)
    }
}
</script>
