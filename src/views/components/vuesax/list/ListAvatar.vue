<!-- =========================================================================================
    File Name: ListAvatar.vue
    Description: You can add avatar to list also
    ----------------------------------------------------------------------------------------
    Item Name: Tripcarte.Asia Dashboard Management Portal
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <vx-card title="Web Redemption" code-toggler>

        <p>START SCANNING<br> OR<br> <code>ENTER BARCODE</code></p>

        <vs-alert color="primary" icon="new_releases" active="true" class="mt-5">
              <vs-list-header title="Order details :" color="danger"></vs-list-header>

        </vs-alert>

        <div class="demo-alignment">

            <vs-list>
                <vs-list-header title="Name :" color="danger"></vs-list-header>
            </vs-list>
          </div>
        <template slot="codeContainer">
&lt;vs-list&gt;
  &lt;vs-list-header title=&quot;Users&quot; color=&quot;danger&quot;&gt;&lt;/vs-list-header&gt;

  &lt;vs-list-item title=&quot;Steve Jobes&quot; subtitle=&quot;Top Contributor&quot;&gt;
    &lt;template slot=&quot;avatar&quot;&gt;
      &lt;vs-avatar /&gt;
    &lt;/template&gt;
  &lt;/vs-list-item&gt;

  &lt;vs-list-item title=&quot;Matt&quot; subtitle=&quot;11 Points&quot;&gt;
    &lt;template slot=&quot;avatar&quot;&gt;
      &lt;vs-avatar vs-text=&quot;Vuexy&quot;/&gt;
    &lt;/template&gt;
  &lt;/vs-list-item&gt;

  &lt;vs-list-header title=&quot;Profile photo&quot; color=&quot;warning&quot;&gt;&lt;/vs-list-header&gt;

  &lt;vs-list-item title=&quot;Xian Famous Foods&quot; subtitle=&quot;A taste of Shaanxi&apos;s delicious culinary traditions, with delights like spicy cold noodles and lamb burgers.&quot;&gt;
    &lt;template slot=&quot;avatar&quot;&gt;
      &lt;vs-avatar vs-text=&quot;Vue&quot;/&gt;
    &lt;/template&gt;
  &lt;/vs-list-item&gt;
&lt;/vs-list&gt;
        </template>

    </vx-card>
</template>
