<template>
    <div id="access-conttrol-editor">
        <vx-card>

            <p>Your current role is <strong>{{ $acl.get[0] }}</strong>.</p>

            <vx-card title="Thanks for login" no-shadow card-border code-toggler class="mt-base">
              <p>You can add <strong>route protection</strong> using vue-acl. Only admin can visit eCommerce Dashboard.</p>
              <vs-button to="/dashboard/ecommerce" class="mt-4" :color="$acl.check('admin') ? 'primary' : 'danger'">visit</vs-button>
            </vx-card>
        </vx-card>
    </div>
</template>

<script>
export default{
  data() {
    return {
      userRole: this.$acl.get[0]
    }
  },
  watch: {
    userRole(val) {
      this.$store.dispatch('updateUserRole', {aclChangeRole: this.$acl.change, userRole: val})
    }
  }
}
</script>
