<!-- =========================================================================================
	File Name: DialogsPrompt.vue
	Description: Add dialog of type prompt
	----------------------------------------------------------------------------------------
	Item Name: Tripcarte.Asia Dashboard Management Portal
	Author: Netquest
	Author URL: http://demo.tripcarte.asia/
========================================================================================== -->


<template>
	<vx-card title="Scan QR code">

		<p>

		<div class="demo-alignment">
		<vs-button @click="activePrompt = true" color="primary" type="border">Start Scanning</vs-button>
		<div class="vx-col w-full sm:w-1/1 md:w-1/1 lg:w-1/1 xl:w-1/1 mb-base">
    <div>
		<h5>Or</h5>
		</div>
		<div class="demo-alignment"></span
		<barcode v-model="code"></barcode>
		<div class="con-exemple-prompt"><vs-input placeholder="Enter barcode" vs-placeholder="Enter barcode" v-model="code" class="mt-3 w-full" />

		<vs-button @click="activePrompt2 = true" color="primary" type="border">Go</vs-button>
		</div>
		</div>

		</div>

		<div>
		<p>
		</p>
  </div>
  <div><div class="op-block">Results: {{ val == null ? 'null' : code }}</div>
  </div>
</div>

		<vs-prompt
			@close="close"
			:active.sync="activePrompt">
					<div class="p-8">
					<iframe src="/components/tabs" frameborder="0" width="328" height="490" scrolling="auto">
			</iframe>
					</div>

		</vs-prompt>

		<vs-prompt
			@cancel="clearValMultiple"
			@accept="acceptAlert"
			@close="close"
			:is-valid="validName"
			:active.sync="activePrompt2">
			<div class="">
				Scan your barcode now to <b>continue</b>
			<vs-alert :active="!validName" color="danger" vs-icon="new_releases" class="mt-4" >

			<label>Result:</label>
			<barcode v-model="code" :options="options"></barcode>
<div>
</div>
			</vs-alert>
			</div>
		</vs-prompt>

		<template slot="codeContainer">
&lt;template&gt;
    &lt;div class=&quot;demo-alignment&quot;&gt;
      &lt;vs-button @click=&quot;activePrompt = true&quot; color=&quot;primary&quot; type=&quot;border&quot;&gt;Run prompt&lt;/vs-button&gt;
      &lt;vs-button @click=&quot;activePrompt2 = true&quot; color=&quot;primary&quot; type=&quot;border&quot;&gt;Run prompt inputs&lt;/vs-button&gt;
      &lt;div class=&quot;op-block&quot;&gt;Security Code: {{ "\{\{ val == null ? 'null' : val \}\}" }} &lt;/div&gt;
      &lt;div class=&quot;op-block&quot;&gt;
        Name: {{ "\{\{ valMultipe.value1 \}\}" }} | Last Name: {{ "\{\{ valMultipe.value2 \}\}" }}
      &lt;/div&gt;

    &lt;/div&gt;

    &lt;vs-prompt
      @cancel=&quot;val=''&quot;
      @close=&quot;close&quot;
      :active.sync=&quot;activePrompt&quot;&gt;
      &lt;div class=&quot;con-exemple-prompt&quot;&gt;
        &lt;span&gt;Enter the security code&lt;/span&gt;
      &lt;vs-input placeholder=&quot;Code&quot; vs-placeholder=&quot;Code&quot; v-model=&quot;val&quot; class=&quot;mt-3 w-full&quot; /&gt;
      &lt;/div&gt;
    &lt;/vs-prompt&gt;

    &lt;vs-prompt
      @cancel=&quot;clearValMultiple&quot;
      @close=&quot;close&quot;
      :is-valid=&quot;validName&quot;
      :active.sync=&quot;activePrompt2&quot;&gt;
      &lt;div class=&quot;con-exemple-prompt&quot;&gt;
        Enter your first and last name to &lt;b&gt;continue&lt;/b&gt;.
      &lt;vs-input placeholder=&quot;Name&quot; v-model=&quot;valMultipe.value1&quot; class=&quot;mt-4 mb-2 w-full&quot; /&gt;
      &lt;vs-input placeholder=&quot;Last Name&quot; v-model=&quot;valMultipe.value2&quot; class=&quot;w-full&quot; /&gt;

      &lt;vs-alert :vs-active=&quot;!validName&quot; color=&quot;danger&quot; vs-icon=&quot;new_releases&quot; &gt;
        Fields can not be empty please enter the data
      &lt;/vs-alert&gt;
      &lt;/div&gt;
    &lt;/vs-prompt&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
  data(){
    return {
      activePrompt:false,
      activePrompt2:false,
      val:'',
      valMultipe:{
        value1:'',
        value2:''
      },
    }
  },
  computed:{
    validName(){
      return (this.valMultipe.value1.length &gt; 0 &amp;&amp; this.valMultipe.value2.length &gt; 0)
    }
  },
  methods:{
async onDetect (promise) {
	try {
		const {
			imageData,
			content,
			location
		} = await promise

		if (content === null) {
			 // decoded nothing
		} else {
			 // ...
		}
	} catch (error) {
		// ...
	}
}
},
    close(){
      this.$vs.notify({
        color:'danger',
        title:'Closed',
        text:'You close a dialog!'
      })
    },
    clearValMultiple() {
      this.valMultipe.value1 = &quot;&quot;;
      this.valMultipe.value2 = &quot;&quot;;
    }
  }
}
&lt;/script&gt;
		</template>

	</vx-card>
</template>


<script>
    module.exports = {
      data: function () {
        return {
          scanned: ''
        }
      },
      methods: {
        codeScanned (event) {
          this.scanned = event.detail[0];
        }
      }
    }
</script>
		<script>
		export default {
		  data() {
		    return {
		      colorx:"#F57E7E",
		      popupActive: false,
		    }
		  }
		}
		</script>

<script>
import Vue from 'vue'
import VueBarcodeScanner from 'vue-barcode-scanner'

Vue.use(VueBarcodeScanner)

export default {
  data(){
    return {
      activePrompt:false,
      activePrompt2:false,
      val:'',
      valMultipe:{
        value1:'',
        value2:''
      },
    }
  },
  computed:{
    validName(){
      return (this.valMultipe.value1.length > 0 && this.valMultipe.value2.length > 0)
    }
  },
  methods:{
    acceptAlert(){
      this.$vs.notify({
        color:'success',
        title:'Scan Accepted',
        text:'Please check your status'
      })
    },
    close(){
      this.$vs.notify({
        color:'danger',
        title:'Closed',
        text:'You close the scanner | qrcode'
      })
    },
    clearValMultiple() {
      this.valMultipe.value1 = "";
      this.valMultipe.value2 = "";
    }
  }
}
</script>


import { QrcodeStream } from 'vue-qrcode-reader'

export default {

  components: { QrcodeStream },

  data () {
    return {
      result: '',
      error: ''
    }
  },

  methods: {
    onDecode (result) {
      this.result = result
    },

    async onInit (promise) {
      try {
        await promise
      } catch (error) {
        if (error.name === 'NotAllowedError') {
          this.error = "ERROR: you need to grant camera access permisson"
        } else if (error.name === 'NotFoundError') {
          this.error = "ERROR: no camera on this device"
        } else if (error.name === 'NotSupportedError') {
          this.error = "ERROR: secure context required (HTTPS, localhost)"
        } else if (error.name === 'NotReadableError') {
          this.error = "ERROR: is the camera already in use?"
        } else if (error.name === 'OverconstrainedError') {
          this.error = "ERROR: installed cameras are not suitable"
        } else if (error.name === 'StreamApiNotSupportedError') {
          this.error = "ERROR: Stream API is not supported in this browser"
        }
      }
    }
  }
}

Quagga.init({
    inputStream : {
      name : "Live",
      type : "LiveStream",
      target: document.querySelector('#yourElement')    /
    },
    decoder : {
      readers : ["code_128_reader"]
    }
  }, function(err) {
      if (err) {
          console.log(err);
          return
      }
      console.log("Initialization finished. Ready to start");
      Quagga.start();
  });

	const imgSrc = '01.png';
const imgDomId = 'img-to-decode';

codeReader
  .decodeFromImage(imgDomId, imgSrc)
  .then(result => console.log(result.text))
  .catch(err => console.error(err));


	const codeReader = new ZXing.BrowserQRCodeReader();
const videoSrc = 'your url to a video';

codeReader
  .decodeFromVideo('video', videoSrc)
  .then(result => console.log(result.text))
  .catch(err => console.error(err));


	export default {
    data: () => ({
      loading: false
    }),
    created () {
      // Pass an options object with `eventBus: true` to receive an eventBus back
      // which emits `start` and `finish` events
      const eventBus = this.$barcodeScanner.init(this.onBarcodeScanned, { eventBus: true })
      if (eventBus) {
        eventBus.$on('start', () => { this.loading = true })
        eventBus.$on('finish', () => { this.loading = false })
      }
    },
    destroyed () {
      // Remove listener when component is destroyed
      this.$barcodeScanner.destroy()
    },
    methods: {
      // Create callback function to receive barcode when the scanner is already done
      onBarcodeScanned (barcode) {
        console.log(barcode)
        // do something...
      },
      // Reset to the last barcode before hitting enter (whatever anything in the input box)
      resetBarcode () {
        let barcode = this.$barcodeScanner.getPreviousCode()
        // do something...
      }
    }
  }

	Vue.component(tuiVueBarcode.name, tuiVueBarcode);

const app = new Vue({
  el:'#app',
  data() {
    return {
      code: 'lorem ipsum',
      height: 100
    }
  },
  computed: {
    options() {
      return {
        height: this.height
      }
    }
  }
})

data () {
  return {
    camera: 'auto'
  }
},

methods: {
  startFrontCamera () {
    this.camera = 'front'
  },

  onCameraChange (promise) {
    promise.catch(error => {
      const cameraMissingError = error.name === 'OverconstrainedError'
      const triedFrontCamera = this.camera === 'front'

      if (triedFrontCamera && cameraMissingError) {
      }
    })
  }
},


</script>
