<!-- =========================================================================================
    File Name: Checkbox.vue
    Description: Checkbox Element - Imports all page portions.
    ----------------------------------------------------------------------------------------
    Item Name: Tripcarte.Asia Dashboard Management Portal
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
<div class="vx-row">
  <!-- CARD 9: DISPATCHED ORDERS -->
  <div class="vx-col w-full">
<!-- TABLE ACTION COL-2: SEARCH & EXPORT AS CSV -->
<div class="flex flex-wrap items-center justify-between ag-grid-table-actions-right">
  <vs-input class="mb-2 md:mb-0 mr-2" v-model="searchQuery" @input="updateSearchQuery" placeholder="Search..." />
  <vs-button class="btn-drop" type="line" color="blue" icon-pack="feather" icon="icon-chevron-down" click="">Sort</vs-button>

<div><vs-button class="mb-4 md:mb-0" @click="gridApi.exportDataAsCsv()">Export as CSV</vs-button></div>
</div>
    <vx-card title="Transaction History">
      <div slot="no-body" class="mt-4">
        <vs-table :data="dispatchedOrders" class="table-dark-inverted">
          <template slot="thead">
            <vs-th>Order ID</vs-th>
            <vs-th>Item</vs-th>
            <vs-th>Commission</vs-th>
            <vs-th>Redeemed Qty</vs-th>
            <vs-th>Redeemed Date</vs-th>
            <vs-th>Redempt Stats</vs-th>
            <vs-th>Pymnt Stats</vs-th>
            <vs-th>Pymnt Date</vs-th>
            <vs-th>Pymnt Reff</vs-th>
          </template>
        </vs-table>
      </div>

    </vx-card>
  </div>
</div>
</template>

<script>
import CheckboxState from './CheckboxState.vue'
import CheckboxColor from './CheckboxColor.vue'
import CheckboxBooleanValue from './CheckboxBooleanValue.vue'
import CheckboxStringValue from './CheckboxStringValue.vue'
import CheckboxArrayValue from './CheckboxArrayValue.vue'
import CheckboxArrayObjectValue from './CheckboxArrayObjectValue.vue'
import CheckboxChangeIcon from './CheckboxChangeIcon.vue'

export default{
    components: {
        CheckboxState,
        CheckboxColor,
        CheckboxBooleanValue,
        CheckboxStringValue,
        CheckboxArrayValue,
        CheckboxArrayObjectValue,
        CheckboxChangeIcon
    }
}
</script>
