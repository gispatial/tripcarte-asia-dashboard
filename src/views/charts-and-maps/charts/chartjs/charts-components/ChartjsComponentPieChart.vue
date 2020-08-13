<!-- =========================================================================================
	File Name: ChartjsComponentPieChart.vue
	Description: Chartjs component - Pie Chart
	----------------------------------------------------------------------------------------
	Item Name: Tripcarte.Asia Dashboard Management Portal
		Author: Tripcarte.Asia
	Staging URL: http://tripcarte.gispatial.tech/api
========================================================================================== -->


<script>
import { Pie } from 'vue-chartjs'

export default {
    extends: Pie,
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
