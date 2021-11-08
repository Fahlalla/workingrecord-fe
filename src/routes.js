import Home from "./page/Home.js";
import Profile from "./page/Profile.js";
import SummaryPayment from "./page/SummaryPayment.js";
import Summary from "./page/Summary.js";

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/profile",
    component: Profile,
  },
  {
    path: "/summary-payment",
    component: SummaryPayment,
  },
  {
    path: "/summary",
    component: Summary,
  },
];

export default routes;
