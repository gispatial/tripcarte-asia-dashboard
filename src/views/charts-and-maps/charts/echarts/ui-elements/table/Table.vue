<!-- =========================================================================================
    File Name: Table.vue
    Description: Table demo - Imports all table demos
    ----------------------------------------------------------------------------------------
    Item Name: Tripcarte.Asia Dashboard Management Portal
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <div id="table-demo">
        <table-pagination></table-pagination>
    </div>
</template>

<script>
import TableDefault from './TableDefault.vue'
import TableStriped from './TableStriped.vue'
import TableState from './TableState.vue'
import TablePagination from './TablePagination.vue'
import TableSingleSelected from './TableSingleSelected.vue'
import TableMultipleSelected from './TableMultipleSelected.vue'
import TableExpandableData from './TableExpandableData.vue'
import TableEditDataTable from './TableEditDataTable.vue'
import TableFilterSorter from './TableFilterSorter.vue'
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
