<!-- =========================================================================================
    File Name: NotificationsFixedAndFunctionClick.vue
    Description: Rendering of default notifications
    ----------------------------------------------------------------------------------------
    Item Name: Tripcarte.Asia Dashboard Management Portal
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <vx-card title="SUPPORT TICKET: A CHANGES FOR SUBMISSION REQUEST" code-toggler>



        <vs-button @click="myFunction()" type="gradient" color="success" class="mt-4">SUBMIT NOW!</vs-button>

        <template slot="codeContainer">
&lt;template&gt;
  &lt;vs-button @click=&quot;myFunction()&quot; type=&quot;gradient&quot; color=&quot;success&quot; class=&quot;my-4&quot;&gt;Run Example&lt;/vs-button&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
  methods: {
    myFunction() {
      this.$vs.notify({
        title: &apos;Function click&apos;,
        text: &apos;Click on me to execute function&apos;,
        color: &apos;primary&apos;,
        fixed: true,
        click: () =&gt; {
          // Secondary function
          this.$vs.notify({
            title: &apos;Secondary function&apos;,
            text: &apos;Executed the function when clicking&apos;,
            color: &apos;success&apos;,
            iconPack: &apos;feather&apos;,
            icon: &apos;icon-check&apos;
          })
        },
      })
    },
  }
}
&lt;/script&gt;
        </template>

    </vx-card>
</template>

<script>
export default {
    methods: {
        myFunction() {
            this.$vs.notify({
                title: 'Notification Reminder!',
                text: 'Your request would take around 1-3 working days for our support to process your submission.<br> Agree on our terms & condition?<p> CLICK TO PROCEED ...',
                color: 'primary',
                fixed: true,
                click: () => {
                    // Secondary function
                    this.$vs.notify({
                        title: 'Success!',
                        text: 'Thank-you. Your request has been sent to merchant@tripcarte.asia',
                        color: 'success',
                        iconPack: 'feather',
                        icon: 'icon-check'
                    })
                },
            })
        },
    }
}
</script>
