<!-- =========================================================================================
    File Name: DragAndDropClone.vue
    Description: Clone from one list to another
    ----------------------------------------------------------------------------------------
    Item Name: Tripcarte.Asia Dashboard Management Portal
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <vx-card title="Barcode Scanner" code-toggler>
        <p>Clone barcode from another existing list. </p>

        <!-- List 1 -->
        <div class="vx-row">
            <div class="vx-col w-full sm:w-1/2">
                <h6 class="mt-5 mb-3">Tag Source</h6>
                <draggable :list="list1" :group="{name:'tags',  pull:'clone', put:false }" class="p-2 cursor-move">
                    <vs-chip v-for="(listItem, index) in list1" :key="index">{{ listItem }}</vs-chip>
                </draggable>
            </div>
            <div class="vx-col w-full sm:w-1/2">
                <h6 class="mt-5 mb-3">Your Tags</h6>
                <draggable :list="list2" :group="{name: 'tags'}" class="p-2 cursor-move">
                    <vs-chip v-for="(listItem, index) in list2" :key="index">{{ listItem }}</vs-chip>
                </draggable>
            </div>
        </div>

        <!-- List 2 -->
        <div class="vx-row">
            <div class="vx-col w-full sm:w-1/2">
                <prism language="js" class="rounded-lg">
Tag Source: {{ list1 }}
                </prism>
            </div>
            <div class="vx-col w-full sm:w-1/2">
                <prism language="js" class="rounded-lg">
Added tags: {{ list2 }}
                </prism>
            </div>
        </div>

        <template slot="codeContainer">
        </template>
    </vx-card>
</template>

<script>
import draggable from 'vuedraggable'
import Prism from 'vue-prism-component'

export default {
    data() {
        return {
            list1: ["youtube", "google", "facebook", "twitter", "instagram", "pinterest", "tinder", "slack", "discord", "github", "gitlab"],
            list2: ["google", "youtube"]
        }
    },
    components: {
        draggable,
        Prism
    }
}
</script>
