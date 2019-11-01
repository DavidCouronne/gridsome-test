// Import main css
//require("prismjs/themes/prism-solarizedlight.css")
require('prismjs/themes/prism-tomorrow.css');
require("prismjs/plugins/line-numbers/prism-line-numbers.css")
require("prismjs/plugins/command-line/prism-command-line.css")
import '~/assets/style/index.css'
import '~/assets/style/index.scss'


// Import default layout so we don't need to import it to every page
import DefaultLayout from '~/layouts/Default.vue'

// The Client API can be used here. Learn more: gridsome.org/docs/client-api
export default function (Vue, { router, head, isClient }) {
  // Add a meta tag
  head.meta.push({
    name: 'X-Frame-Options',
    content: 'DENY'
  })
  
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
}