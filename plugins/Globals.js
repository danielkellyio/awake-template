import Vue from 'vue'
import Globals from '~/config/global'
if (global) global.siteGlobals = Globals
if (!global) window.siteGlobals = Globals

Vue.prototype.$globals = Globals
