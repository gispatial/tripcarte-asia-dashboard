<!-- =========================================================================================
	File Name: ChartjsComponentPolarAreaChart.vue
	Description: Chartjs component - Polar Area Chart
	----------------------------------------------------------------------------------------
	Item Name: Tripcarte.Asia Dashboard Management Portal
		Author: Tripcarte.Asia
	Staging URL: http://tripcarte.gispatial.tech/api
========================================================================================== -->


<script>
import { PolarArea } from 'vue-chartjs'

export default {
    extends: PolarArea,
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
