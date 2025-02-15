import { Router, Route } from "@solidjs/router";
import Layout from "../components/Layout";
import App from "../App";
import Software from "../Pages/Software";
import CyberSecurity from "../Pages/CyberSecurity";
import DataAnalytics from "../Pages/DataAnalytics";
import DigitalMarketing from "../Pages/DigitalMarketing";
import ITConculting from "../Pages/ITConculting";
import Suppliers from "../Pages/Suppliers";

const Routers = () => {
  return (
    <Router>
      <Route path="/" component={Layout}>
        <Route path="/" component={App} />
        <Route path="/Home" component={App} />
        <Route path="/Services/Software-Development" component={Software} />
        <Route path="/Services/Cybersecurity" component={CyberSecurity} />
        <Route path="/Services/Data-Analytics" component={DataAnalytics} />
        <Route path="/Services/Digital-Marketing" component={DigitalMarketing} />
        <Route path="/Services/IT-Consulting" component={ITConculting} />
        <Route path="/Services/Suppliers-of-IT-Equipment-and-Accessories" component={Suppliers} />
      </Route>
    </Router>
  );
};

export default Routers;
