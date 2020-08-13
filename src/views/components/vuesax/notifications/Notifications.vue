<!-- =========================================================================================
    File Name: Notifications.vue
    Description: Notifications - Imports all page portions
    ----------------------------------------------------------------------------------------
    Item Name: Tripcarte.Asia Dashboard Management Portal
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <div id="notifications-demo">

        <p class="mb-4">To proceed, please click button below. If you would like to make any changes request
</p>

        <notifications-fixed-and-function-click></notifications-fixed-and-function-click>
    </div>
</template>

<script>
import NotificationsDefault from './NotificationsDefault.vue'
import NotificationsPosition from './NotificationsPosition.vue'
import NotificationsIcon from './NotificationsIcon.vue'
import NotificationsFixedAndFunctionClick from './NotificationsFixedAndFunctionClick.vue'
import NotificationsTime from './NotificationsTime.vue'

export default{
    components: {
        NotificationsDefault,
        NotificationsPosition,
        NotificationsIcon,
        NotificationsFixedAndFunctionClick,
        NotificationsTime,
    }
}
</script>
