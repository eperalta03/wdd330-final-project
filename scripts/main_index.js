import { setupNavigation } from "./modules/nav.js";
import { setupFooter } from "./modules/footer.js";
import { loadAPOD } from "./modules/display-apod.js";
import { getLastVisit } from "./modules/last-visit.js";

setupNavigation();
setupFooter();

loadAPOD();
getLastVisit();


