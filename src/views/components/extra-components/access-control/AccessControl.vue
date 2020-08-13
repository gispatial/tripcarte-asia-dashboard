<template>
    <div id="access-conttrol-editor">
        <vx-card>

            <p>Your current role is <strong>{{ $acl.get[0] }}</strong>.</p>
            <div class="demo-alignment mb-base">
                <vs-radio v-model="userRole" vs-value="editor">Editor</vs-radio>
                <vs-radio v-model="userRole" vs-value="admin">Admin</vs-radio>
            </div>

             <vx-card title="Buttons" no-shadow card-border code-toggler>
                <vs-button v-show="$acl.check('editor')" class="mr-4 mb-2">Editor And Admin</vs-button>
                <vs-button v-show="$acl.check('admin')">Only Admin</vs-button>
                <template slot="codeContainer">
&lt;vs-button v-show=&quot;$acl.check('editor')&quot; class=&quot;mr-4&quot;&gt;Editor And Admin&lt;/vs-button&gt;
&lt;vs-button v-show=&quot;$acl.check('admin')&quot;&gt;Only Admin&lt;/vs-button&gt;
                </template>
            </vx-card>

            <vx-card title="Collapse" class="mt-base" no-shadow card-border code-toggler>

              <div slot="no-body">
                <vs-collapse>

                  <vs-collapse-item>

                    <div slot="header">Article 1</div>
                    My name is luka
                    <br><br>
                    I live on 2nd floor.
                  </vs-collapse-item>

                  <vs-collapse-item>

                    <div slot="header">Article 2</div>


                    My name is luka
                    <br><br>
                    I live on 2nd floor.
                  </vs-collapse-item>

                  <vs-collapse-item v-show="$acl.check('admin')">

                    <div slot="header">Article 3 - Only Admin</div>

                    Suspendisse aliquet condimentum diam, sed aliquam nisl dapibus et. Aliquam euismod ullamcorper dolor eu
                  </vs-collapse-item>

                  <vs-collapse-item>

                    <div slot="header">Article 4</div>

                    Suspendisse aliquet condimentum diam, sed aliquam nisl dapibus et. Aliquam euismod ullamcorper dolor eu imperdiet. Nullam eget odio at magna gravida suscipit sed vestibulum odio. Maecenas porta elit vel lectus molestie, eget aliquam enim feugiat. Vivamus nec faucibus nisl. Nunc venenatis tempus finibus.
                  </vs-collapse-item>
                </vs-collapse>
                <template slot="codeContainer">
&lt;vs-collapse&gt;
    &lt;vs-collapse-item&gt;
        &lt;div slot=&quot;header&quot;&gt;
            Article 1
        &lt;/div&gt;
        Lorem....metus.
    &lt;/vs-collapse-item&gt;
    &lt;vs-collapse-item&gt;
        &lt;div slot=&quot;header&quot;&gt;
            Article 2
        &lt;/div&gt;
        Nunc....maximus.
    &lt;/vs-collapse-item&gt;
    &lt;vs-collapse-item v-show=&quot;$acl.check('admin')&quot;&gt;
        &lt;div slot=&quot;header&quot;&gt;
            Article 3 - Only Admin
        &lt;/div&gt;
        Suspendisse....eu
    &lt;/vs-collapse-item&gt;
    &lt;vs-collapse-item&gt;
        &lt;div slot=&quot;header&quot;&gt;
            Article 4
        &lt;/div&gt;
        Suspendisse....finibus.
    &lt;/vs-collapse-item&gt;
&lt;/vs-collapse&gt;
                </template>
                </div>
            </vx-card>

            <vx-card title="Route Protection" no-shadow card-border code-toggler class="mt-base">
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
