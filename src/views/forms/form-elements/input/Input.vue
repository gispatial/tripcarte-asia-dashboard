<!-- =========================================================================================
    File Name: Input.vue
    Description: Input Element - Imports all page portions.
    ----------------------------------------------------------------------------------------
    Item Name: Tripcarte.Asia Dashboard Management Portal
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
<!-- CARD 9: DISPATCHED ORDERS -->
<div class="vx-col w-full">
<!-- TABLE ACTION COL-2: SEARCH & EXPORT AS CSV -->
<div class="flex flex-wrap items-center justify-between ag-grid-table-actions-right">
  <vs-input class="mb-2 md:mb-0 mr-2" v-model="searchQuery" @input="updateSearchQuery" placeholder="Search..." />
  <vs-button class="btn-drop" type="line" color="blue" icon-pack="feather" icon="icon-chevron-down" click="">Sort</vs-button>

<div><vs-button class="mb-4 md:mb-0" @click="gridApi.exportDataAsCsv()">Export as CSV</vs-button></div>
</div>
  <vx-card title="BOOKINGS">
    <div slot="no-body" class="mt-4">
      <vs-table :data="dispatchedOrders" class="table-dark-inverted">
        <template slot="thead">
          <vs-th>Order ID</vs-th>
          <vs-th>Item</vs-th>
          <vs-th>Quantity</vs-th>
          <vs-th>Customer</vs-th>
          <vs-th>Selected Date</vs-th>
        </template>
      </vs-table>
    </div>

  </vx-card>
</div>
</div>
</template>

<script>
import InputDefault from './InputDefault.vue'
import InputLabel from './InputLabel.vue'
import InputLabelPlaceholder from './InputLabelPlaceholder.vue'
import InputIcon from './InputIcon.vue'
import InputColor from './InputColor.vue'
import InputValidation from './InputValidation.vue'
import InputSize from './InputSize.vue'

export default{
    components: {
        InputDefault,
        InputLabel,
        InputLabelPlaceholder,
        InputIcon,
        InputColor,
        InputValidation,
        InputSize,
    }
}
</script>
