import { MMRLInterfaceFactory } from "mmrl";
const mmrl = MMRLInterfaceFactory("net_switch");

// inject MMRL CSS
mmrl.injectStyleSheets();

// handle no-js-api permission
//if (!mmrl.hasAccessToAdvancedKernelSuAPI) {
  // soon, maybe modal warning idk
//}
