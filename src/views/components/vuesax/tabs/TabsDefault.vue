<!-- =========================================================================================
    File Name: TabsDefault.vue
    Description: Rendering of default Tabs
    ----------------------------------------------------------------------------------------
    Item Name: Tripcarte.Asia Dashboard Management Portal
    Author: Netquest
    Author URL: http://demo.tripcarte.asia/
========================================================================================== -->


<template>
    <vx-card title="Default">

        <p>To implement a tabs, use the <code>vs-tabs</code> component. It must include <code>vs-tab</code> child components that represent each tab</p>

        <vs-alert color="primary" icon="new_releases" active="true" class="mt-5">
            <p>For the title of each tab the <code>label</code> property is implemented in the <code>vs-tab</code> component</p>
        </vs-alert>

        <div class="mt-5">
            <vs-tabs>
                <vs-tab label="Home">
                    <div class="tab-text">
                        <p>Go1</p>
                    </div>
                </vs-tab>
                <vs-tab label="Service">
                    <div class="tab-text">
                        <p>Go2 </p>
                        <p class="mt-2">Go3.</p>
                    </div>
                </vs-tab>
                <vs-tab label="login">
                    <div class="tab-text">
                        <p>Go4</p>
                        <p class="mt-2">Go5</p>
                    </div>
                </vs-tab>
                <vs-tab disabled label="Disabled">
                    <div class="tab-text">
                        <p>Go</p>
                        <p class="mt-2">Go</p>
                    </div>
                </vs-tab>
                <vs-tab label="Account">
                    <div class="tab-text">
                        <p>Go</p>
                        <p class="mt-2">Go</p>
                    </div>
                </vs-tab>
            </vs-tabs>
        </div>

        <template slot="codeContainer">
&lt;vs-tabs&gt;
  &lt;vs-tab label=&quot;Home&quot;&gt;
    &lt;div class=&quot;tab-text&quot;&gt;
      &lt;span&gt;Jujubes ....&lt;/span&gt;
    &lt;/div&gt;
  &lt;/vs-tab&gt;
  &lt;vs-tab label=&quot;Service&quot;&gt;
    &lt;div class=&quot;tab-text&quot;&gt;
      &lt;span&gt;Halvah ...&lt;/span&gt;
    &lt;/div&gt;
  &lt;/vs-tab&gt;
  &lt;vs-tab label=&quot;login&quot;&gt;
    &lt;div class=&quot;tab-text&quot;&gt;
      &lt;span&gt;Chocolate ....&lt;/span&gt;
    &lt;/div&gt;
  &lt;/vs-tab&gt;
  &lt;vs-tab disabled label=&quot;Disabled&quot;&gt;
    &lt;div class=&quot;tab-text&quot;&gt;
      &lt;span&gt;Macaroon ....&lt;/span&gt;
    &lt;/div&gt;
  &lt;/vs-tab&gt;
  &lt;vs-tab label=&quot;Account&quot;&gt;
    &lt;div class=&quot;tab-text&quot;&gt;
      &lt;span&gt;Cupcake ....&lt;/span&gt;
    &lt;/div&gt;
  &lt;/vs-tab&gt;
&lt;/vs-tabs&gt;
        </template>

    </vx-card>
</template>
