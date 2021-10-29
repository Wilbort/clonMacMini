import { handleActiveMenu } from "./modules/menu.js";
import { activePanel } from "./modules/active-panel.js";
import { securityPanelScroll } from "./modules/padlock-animate.js";
import { handleActiveTabs } from "./modules/tabs.js";

handleActiveMenu();
activePanel();
securityPanelScroll();
handleActiveTabs();