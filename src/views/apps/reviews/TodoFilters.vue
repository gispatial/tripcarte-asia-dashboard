<!-- =========================================================================================
    File Name: TodoAddNew.vue
    Description: Add new todo component
    ----------------------------------------------------------------------------------------
    Item Name: Tripcarte.Asia Dashboard Management Portal
      Author: Tripcarte.Asia
    Staging URL: http://tripcarte.gispatial.tech/api
========================================================================================== -->


<template>
    <div class="todo__filters-container">

        <!-- all -->
        <div class="px-6 py-4">
            <router-link tag="span" class="flex cursor-pointer" :class="{'text-primary': todoFilter == 'all'}" :to="`${baseUrl}/all`">
                <feather-icon icon="LayersIcon" :svgClasses="[{'text-primary stroke-current': todoFilter == 'all'}, 'h-6 w-6']"></feather-icon>
                <span class="text-lg ml-3"><b>All</b></span>
            </router-link>
        </div>

        <!-- starred --><!-- starred -->
        <div class="px-6 py-4">
            <h5><b>LABELS</b></h5>

            <template v-for="filter in todoFilters">
                <router-link tag="span" class="flex mt-6 cursor-pointer" :class="{'text-primary': todoFilter == filter.filter}" :to="`${baseUrl}/${filter.filter}`" :key="filter.filter">
                    <feather-icon :icon="filter.icon" :svgClasses="[{'text-primary stroke-current': todoFilter == filter.filter}, 'h-6 w-6']"></feather-icon>
                    <span class="text-lg ml-3">{{ filter.filterName }}</span>
                </router-link>
            </template>

        </div>

        <vs-divider></vs-divider>

        <div class="px-6 py-4">
            <div class="todo__lables-list">
                <router-link tag="span" class="todo__label flex items-center mt-6 cursor-pointer" v-for="(tag, index) in taskTags" :key="index" :to="`${baseUrl}/${tag.value}`">
                    <div class="ml-1 h-3 w-3 rounded-full mr-4" :class="'border-2 border-solid border-' + tag.color" />
                    <span class="text-lg" :class="{'text-primary': todoFilter == tag.value}">{{ tag.text }}</span>
                </router-link>
            </div>
        </div>

    </div>
</template>

<script>
export default{
    data() {
        return {
            todoFilters: [
                { filterName: 'Spent less than 1 hour', filter: 'starred', icon: 'InfoIcon' },
                { filterName: 'Spent 1 hour', filter: 'important', icon: 'InfoIcon' },
                { filterName: 'Spent 2 hours', filter: 'completed', icon: 'InfoIcon' },
                { filterName: 'Spent 3 hours', filter: 'trashed', icon: 'InfoIcon' },
                { filterName: 'Spent 4 hours', filter: 'trashed', icon: 'InfoIcon' },
                { filterName: 'Spent more than 4 hours', filter: 'trashed', icon: 'InfoIcon' },
                { filterName: 'Solo Traveler', filter: 'trashed', icon: 'InfoIcon' },
                { filterName: 'Couple', filter: 'trashed', icon: 'InfoIcon' },
                { filterName: 'Family with Children', filter: 'trashed', icon: 'InfoIcon' },
                { filterName: 'Group of Friends', filter: 'trashed', icon: 'InfoIcon' },
                { filterName: 'Company / Corporate', filter: 'trashed', icon: 'InfoIcon' },
            ]
        }
    },
    computed: {
        taskTags() {
            return this.$store.state.todo.taskTags;
        },
        todoFilter() {
            return this.$route.params.filter
        },
        baseUrl() {
          const path = this.$route.path
          return path.slice(0, path.lastIndexOf("/"))
        }
    }
}
</script>
