<!-- =========================================================================================
    File Name: Table.vue
    Description: Table demo - Imports all table demos
    ----------------------------------------------------------------------------------------
    Item Name: Tripcarte.Asia Dashboard Management Portal
      Developer: TripcartDev
    Team URL: https://github.com/gispatial/tripcarte-asia-dashboard
========================================================================================== -->


<template>
    <div id="table-demo">
        <table-pagination></table-pagination>
    </div>
</template>

<script>
import TableMiscellaneous from './TableMiscellaneous.vue'
import TableSsr from './TableSSR.vue'

export default{
    components: {
        TableDefault,
        TableStriped,
        TableState,
        TablePagination,
        TableSingleSelected,
        TableMultipleSelected,
        TableExpandableData,
        TableEditDataTable,
        TableFilterSorter,
        TableMiscellaneous,
        TableSsr,
    }
}
</script>
