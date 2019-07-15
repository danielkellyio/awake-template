import Vue from 'vue'
import Globals from '~/config/_siteConfig'
if (global) global.siteConfig = Globals
if (!global) window.siteConfig = Globals

Vue.prototype.$siteConfig = Globals
