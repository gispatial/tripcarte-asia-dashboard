<!-- =========================================================================================
    File Name: DragAndDrop.vue
    Description: Drag and Drop (third-party) - Imports page portions
    ----------------------------------------------------------------------------------------
    Item Name: Tripcarte.Asia Dashboard Management Portal
      Author: NetquestDev
    Staging URL: https://tripcarte.cloudns.asia/
========================================================================================== -->

<template>

    <div id="extra-component-drag-and-drop-demo">

        <p class="mb-4">Please scan your ticket</p>

        <drag-and-drop-multiple-lists></drag-and-drop-multiple-lists>
    </div>
</template>

<script>
import DragAndDropSimple from "./DragAndDropSimple.vue"
import DragAndDropMultipleLists from "./DragAndDropMultipleLists.vue"
import DragAndDropCloneList from "./DragAndDropCloneList.vue"
import DragAndDropAnimation from "./DragAndDropAnimation.vue"

export default {
    components: {
        DragAndDropSimple,
        DragAndDropMultipleLists,
        DragAndDropCloneList,
        DragAndDropAnimation,
    }
}
</script>
