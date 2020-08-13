<!-- =========================================================================================
	File Name: ChartjsComponentScatterChart.vue
	Description: Chartjs component - Scatter Chart
	----------------------------------------------------------------------------------------
	Item Name: Tripcarte.Asia Dashboard Management Portal
		Author: Tripcarte.Asia
	Staging URL: http://tripcarte.gispatial.tech/api
========================================================================================== -->


<script>
import { Scatter } from 'vue-chartjs'

export default {
    extends: Scatter,
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
