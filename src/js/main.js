import {Jane} from './jane.js'

import '../css/style.scss'

$(document).ready(function () {
  Jane.backToTop()
  Jane.mobileNavbar()
  Jane.toc()
  Jane.fancybox()
  Jane.mermaid()
  Jane.highlight()
})

hljs.initHighlighting()