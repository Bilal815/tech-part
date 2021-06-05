import React from 'react';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import axios from 'axios';

import DefaultHeader from './components/globalComponents/headers/DefaultHeader';
import Footer from './components/globalComponents/Footer';

// Header Screens Imports
import HomeScreen from './screens/HomeScreen';
import Error404Screen from './screens/Error404Screen';
import PricingScreen from './screens/headerScreens/PricingScreen';
import MembersScreen from './screens/headerScreens/MembersScreen';
import BecomeATechScreen from './screens/headerScreens/BecomeATechScreen';
import PropertyManagerScreen from './screens/headerScreens/PropertyManagerScreen';
import DisinfectionServicesScreen from './screens/headerScreens/services/DisinfectionServicesScreen';
import GarageDoorRepairScreen from './screens/headerScreens/services/GarageDoorRepairScreen';
import HandymanServicesScreen from './screens/headerScreens/services/HandymanServicesScreen';
import HomeAppliancesScreen from './screens/headerScreens/services/HomeAppliancesScreen';
import IhponeRepairScreen from './screens/headerScreens/services/IhponeRepairScreen';
import PlumbingServicesScreen from './screens/headerScreens/services/PlumbingServicesScreen';
import SmartHomeInstallationScreen from './screens/headerScreens/services/SmartHomeInstallationScreen';
import TvMountingScreen from './screens/headerScreens/services/TvMountingScreen';
import BookAServiceScreen from './screens/headerScreens/services/BookAServiceScreen';

// Footer Screens Imports
import AboutUsScreen from './screens/footerScreens/company/AboutUsScreen';
import HowItWorkScreen from './screens/footerScreens/company/HowItWorkScreen';
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
        {/* home and header routes  */}
        <Route exact path='/' component={HomeScreen} />
        <Route exact path='/' component={PricingScreen} />
        <Route exact path='/' component={MembersScreen} />
        <Route exact path='/' component={BecomeATechScreen} />
        <Route exact path='/' component={PropertyManagerScreen} />
        <Route exact path='/' component={DisinfectionServicesScreen} />
        <Route exact path='/' component={GarageDoorRepairScreen} />
        <Route exact path='/' component={HandymanServicesScreen} />
        <Route exact path='/' component={HomeAppliancesScreen} />
        <Route exact path='/' component={IhponeRepairScreen} />
        <Route exact path='/' component={PlumbingServicesScreen} />
        <Route exact path='/' component={SmartHomeInstallationScreen} />
        <Route exact path='/' component={TvMountingScreen} />
        <Route exact path='/' component={BookAServiceScreen} />

        <Route exact path='/' component={AboutUsScreen} />
        <Route exact path='/' component={HowItWorkScreen} />
        <Route exact path='/' component={FaqScreen} />
        <Route exact path='/' component={CareersScreen} />
        <Route exact path='/' component={NewsRoomScreen} />
        <Route exact path='/' component={TclScreen} />
        <Route exact path='/' component={SimplisafeScreen} />
        <Route exact path='/' component={HisenseScreen} />
        <Route exact path='/' component={PulsForBusinessScreen} />
        <Route exact path='/' component={PrivacyScreen} />
        <Route exact path='/' component={TermsAndConditionsScreen} />
        <Route exact path='/' component={PulsPlusTermsScreen} />
        <Route exact path='/' component={GuaranteeScreen} />

        <Route path='*' component={Error404Screen} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
