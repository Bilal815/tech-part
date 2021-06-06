import React from 'react';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import axios from 'axios';

import DefaultHeader from './components/globalComponents/headers/DefaultHeader';
import Footer from './components/globalComponents/Footer';

// Home and Header Screens Imports
import HomeScreen from './screens/HomeScreen';
import Error404Screen from './screens/Error404Screen';
import PricingScreen from './screens/headerScreens/PricingScreen';
import MembersScreen from './screens/headerScreens/MembersScreen';
import BecomeATechScreen from './screens/headerScreens/BecomeATechScreen';
import PropertyManagerScreen from './screens/headerScreens/PropertyManagerScreen';

import InviteAFriendScreen from './screens/headerScreens/InviteAFriendScreen';

import BookAServiceScreen from './screens/servicesScreen/bookAService/index';
import DisinfectionServicesScreen from './screens/servicesScreen/disinfectionServices/index';
import GarageDoorRepairScreen from './screens/servicesScreen/garageDoorRepair/index';
import HandymanServicesScreen from './screens/servicesScreen/handymanServices/index';
import HomeAppliancesScreen from './screens/servicesScreen/homeAppliances/index';
import IhponeRepairScreen from './screens/servicesScreen/iphoneRepair/index';
import PlumbingServicesScreen from './screens/servicesScreen/plumbingServices/index';
import SmartHomeInstallationScreen from './screens/servicesScreen/smartHomeInstallation/index';
import TvMountingScreen from './screens/servicesScreen/tvMounting/index';
import SecuritySystemScreen from './screens/servicesScreen/securitySystem/index';

// Cities Screen Imports
import ArizonaScreen from './screens/citiesScreens/ArizonaScreen';
import AtlantaScreen from './screens/citiesScreens/AtlantaScreen';
import BostonScreen from './screens/citiesScreens/BostonScreen';
import CaliforniaScreen from './screens/citiesScreens/CaliforniaScreen';
import CharlotteScreen from './screens/citiesScreens/CharlotteScreen';
import GeorgiaScreen from './screens/citiesScreens/GeorgiaScreen';
import HoustonScreen from './screens/citiesScreens/HoustonScreen';
import LosAngelesScreen from './screens/citiesScreens/LosAngelesScreen';
import MassachusettsScreen from './screens/citiesScreens/MassachusettsScreen';
import MiamiScreen from './screens/citiesScreens/MiamiScreen';
import NewYorkCityScreen from './screens/citiesScreens/NewYorkCityScreen';
import NewYorkScreen from './screens/citiesScreens/NewYorkScreen';
import NorthCarolinaScreen from './screens/citiesScreens/NorthCarolinaScreen';
import PennsylvaniaScreen from './screens/citiesScreens/PennsylvaniaScreen';
import PhiladelphiaScreen from './screens/citiesScreens/PhiladelphiaScreen';
import PhoenixScreen from './screens/citiesScreens/PhoenixScreen';
import TexasScreen from './screens/citiesScreens/TexasScreen';
import Washington_DCScreen from './screens/citiesScreens/Washington_DCScreen';
import WashingtonDCScreen from './screens/citiesScreens/WashingtonDCScreen';

// Footer Screens Imports
import AboutUsScreen from './screens/footerScreens/company/AboutUsScreen';
import HowItWorksScreen from './screens/footerScreens/company/HowItWorksScreen';
import FaqScreen from './screens/footerScreens/company/FaqScreen';
import CareersScreen from './screens/footerScreens/company/CareersScreen';
import NewsRoomScreen from './screens/footerScreens/company/NewsRoomScreen';

import TclScreen from './screens/footerScreens/partnerships/TclScreen';
import SimplisafeScreen from './screens/footerScreens/partnerships/SimplisafeScreen';
import HisenseScreen from './screens/footerScreens/partnerships/HisenseScreen';
import PulsForBusinessScreen from './screens/footerScreens/partnerships/PulsForBusinessScreen';

import PrivacyScreen from './screens/footerScreens/legals/PrivacyScreen';
import TermsAndConditionsScreen from './screens/footerScreens/legals/TermsAndConditionsScreen';
import PulsPlusTermsScreen from './screens/footerScreens/legals/PulsPlusTermsScreen';
import GuaranteeScreen from './screens/footerScreens/legals/GuaranteeScreen';

const App = () => {
  // setting default headers and base URL
  // const userLogin = useSelector((state) => state.userLogin);
  const token = '';
  axios.defaults.baseURL = 'base-url-goes-here';
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
  axios.defaults.headers.post['Content-Type'] = 'application/json';

  return (
    <Router>
      <DefaultHeader />
      <Switch>
        {/* Home and Header section routes  */}
        <Route exact path='/' component={HomeScreen} />
        <Route exact path='/pricing' component={PricingScreen} />
        <Route exact path='/members' component={MembersScreen} />
        <Route exact path='/become-a-tech' component={BecomeATechScreen} />
        <Route exact path='/property-manager' component={PropertyManagerScreen} />

        <Route exact path='/invite-a-friend' component={InviteAFriendScreen} />

        <Route exact path='/book-a-service' component={BookAServiceScreen} />
        <Route exact path='/services/disinfection' component={DisinfectionServicesScreen} />
        <Route exact path='/services/garage-door-repair' component={GarageDoorRepairScreen} />
        <Route exact path='/services/handyman' component={HandymanServicesScreen} />
        <Route exact path='/services/home-appliances' component={HomeAppliancesScreen} />
        <Route exact path='/services/iphone-repair' component={IhponeRepairScreen} />
        <Route exact path='/services/plumbing' component={PlumbingServicesScreen} />
        <Route
          exact
          path='/services/smart-home-installation'
          component={SmartHomeInstallationScreen}
        />
        <Route exact path='/services/tv-mounting' component={TvMountingScreen} />
        <Route exact path='/services/security-system' component={SecuritySystemScreen} />

        {/* Cities section routes  */}
        <Route exact path='/cities/az' component={ArizonaScreen} />
        <Route exact path='/cities/az/phoenix' component={PhoenixScreen} />
        <Route exact path='/cities/ca' component={CaliforniaScreen} />
        <Route exact path='/cities/ca/los-angeles' component={LosAngelesScreen} />
        <Route exact path='/cities/fl/miami' component={MiamiScreen} />
        <Route exact path='/cities/ga' component={GeorgiaScreen} />
        <Route exact path='/cities/ga/atlanta' component={AtlantaScreen} />
        <Route exact path='/cities/ma' component={MassachusettsScreen} />
        <Route exact path='/cities/ma/boston' component={BostonScreen} />
        <Route exact path='/cities/ny' component={NewYorkScreen} />
        <Route exact path='/cities/ny/new-york-city' component={NewYorkCityScreen} />
        <Route exact path='/cities/nc' component={NorthCarolinaScreen} />
        <Route exact path='/cities/nc/charlotte' component={CharlotteScreen} />
        <Route exact path='/cities/pa' component={PennsylvaniaScreen} />
        <Route exact path='/cities/pa/philadelphia' component={PhiladelphiaScreen} />
        <Route exact path='/cities/tx' component={TexasScreen} />
        <Route exact path='/cities/tx/houston' component={HoustonScreen} />
        <Route exact path='/cities/dc' component={WashingtonDCScreen} />
        <Route exact path='/cities/dc/washington-dc' component={Washington_DCScreen} />

        {/* Footer section routes */}
        <Route exact path='/about-us' component={AboutUsScreen} />
        <Route exact path='/how-it-works' component={HowItWorksScreen} />
        <Route exact path='/faq' component={FaqScreen} />
        <Route exact path='/careers' component={CareersScreen} />
        <Route exact path='/news-room' component={NewsRoomScreen} />
        <Route exact path='/tcl' component={TclScreen} />
        <Route exact path='/simplisafe' component={SimplisafeScreen} />
        <Route exact path='/hisense' component={HisenseScreen} />
        <Route exact path='/puls-for-business' component={PulsForBusinessScreen} />
        <Route exact path='/privacy' component={PrivacyScreen} />
        <Route exact path='/terms-and-conditions' component={TermsAndConditionsScreen} />
        <Route exact path='/puls-plus-terms' component={PulsPlusTermsScreen} />
        <Route exact path='/guarantee' component={GuaranteeScreen} />

        <Route path='*' component={Error404Screen} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
