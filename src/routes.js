import Home from "./page/Home.js";
import Profile from "./page/Profile.js";
import SummaryPayment from "./page/SummaryPayment.js";

const routes = [
  {
      path: '/',
      component: Home
  },
  {
      path: '/profile',
      component: Profile,
  },
  {
    path: '/summary-payment',
    component: SummaryPayment
  }
]

export default routes;