import React, {useEffect, useState} from 'react';
import './App.scss';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import 'bootstrap/dist/css/bootstrap.min.css';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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
import JoinAsATechScreen from './screens/headerScreens/JoinAsATechScreen';
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

// become a tech application screens
import TechForm from './screens/applicationScreens/TechForm';
import ZipCode from './screens/applicationScreens/ZipCode';
// Services Options
import TvSize  from './screens/applicationScreens/TvSize';
import SelectAppliance  from './screens/applicationScreens/SelectApplicance';
import HandymanService  from './screens/applicationScreens/HandymanService';
import DisinfectionService  from './screens/applicationScreens/DisinfectionService';
import IphoneRepair from './screens/applicationScreens/IphoneRepair';
import SmartHomeService from './screens/applicationScreens/SmartHomeService';
import Plumbing from './screens/applicationScreens/Plumbing';

// Questions Screen Import
import TvQuestions from './screens/questionScreens/TvQuestions';

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
import NewyorkCityScreen from './screens/citiesScreens/NewyorkCityScreen';
import NewyorkScreen from './screens/citiesScreens/NewyorkScreen';
import NorthCarolinaScreen from './screens/citiesScreens/NorthCarolinaScreen';
import PennsylvaniaScreen from './screens/citiesScreens/PennsylvaniaScreen';
import PhiladelphiaScreen from './screens/citiesScreens/PhiladelphiaScreen';
import PhoenixScreen from './screens/citiesScreens/PhoenixScreen';
import TexasScreen from './screens/citiesScreens/TexasScreen';
import Washington_DCScreen from './screens/citiesScreens/Washington_DCScreen';
import WashingtonDCScreen from './screens/citiesScreens/WashingtonDCScreen';
import DallasScreen from './screens/citiesScreens/DallasScreen';

// Footer Screens Imports
// copmany imports
import AboutUsScreen from './screens/footerScreens/company/AboutUsScreen';
import HowItWorksScreen from './screens/footerScreens/company/HowItWorksScreen';
import FaqScreen from './screens/footerScreens/company/FaqScreen';
import CareersScreen from './screens/footerScreens/company/CareersScreen';
import NewsroomScreen from './screens/footerScreens/company/NewsroomScreen';

// resources imports
import ResourceTvMountingScreen from './screens/footerScreens/resources/TvMountingScreen';
import ResourceGarageDoorsScreen from './screens/footerScreens/resources/GarageDoorsScreen';
import ResourceAppliancesScreen from './screens/footerScreens/resources/AppliancesScreen';
import ResourceRefrigeratorsScreen from './screens/footerScreens/resources/RefrigeratorsScreen';
import ResourceDishwashersScreen from './screens/footerScreens/resources/DishwashersScreen';
import ResourceOvensAndStovesScreen from './screens/footerScreens/resources/OvensAndStovesScreen';
import ResourceWashingMachinesScreen from './screens/footerScreens/resources/WashingMachinesScreen';
import ResourceDryerScreen from './screens/footerScreens/resources/DryerScreen';

// partnerships imports
import TclScreen from './screens/footerScreens/partnerships/TclScreen';
import SimplisafeScreen from './screens/footerScreens/partnerships/SimplisafeScreen';
import HisenseScreen from './screens/footerScreens/partnerships/HisenseScreen';
import PulsForBusinessScreen from './screens/footerScreens/partnerships/PulsForBusinessScreen';

// legals imports
import PrivacyScreen from './screens/footerScreens/legals/PrivacyScreen';
import TermsAndConditionsScreen from './screens/footerScreens/legals/TermsAndConditionsScreen';
import PulsPlusTermsScreen from './screens/footerScreens/legals/PulsPlusTermsScreen';
import GuaranteeScreen from './screens/footerScreens/legals/GuaranteeScreen';
import GarageDoorService from './screens/applicationScreens/GarageDoorSevice';
import PricingScreenOld from './screens/headerScreens/PricingScreenOld';

import CheckoutScreen from './screens/checkout/CheckoutScreen';

const App = () => {
  // setting default headers and base URL
  // const userLogin = useSelector((state) => state.userLogin);
  const [services, _services] = useState([]);

  const token = '';
  axios.defaults.withCredentials = true;
  // axios.defaults.baseURL = "http://localhost:8000";
  axios.defaults.baseURL = "http://217.160.170.83:8000";
  //axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  //axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
  //axios.defaults.headers.post['Content-Type'] = 'application/json';

  useEffect(() => {
    axios.get('/sanctum/csrf-cookie').then(res => {      
      axios.post('/login', {
        email: "admin@admin.com",
        password: "password",
      }).then(res => {
        getServicesFromServer();
      });
    }).catch(err => {
      /*console.log('catch response', err);*/
    })
  }, []);

  const getServicesFromServer = () => {
    // return("");
    axios.post('/api/services', {}).then(res => {
      // console.log('services api response:', res.data.response.detail);
      _services([...res.data.response.detail]);
    }).catch(res => {
      console.log('services api catch:', res);
    });
  }

  return (
    <Router >
      <DefaultHeader services={services} />
      <Switch>
        {/* Home and Header section routes  */}
        <Route exact path='/' component={HomeScreen} />
        <Route exact path='/pricing' render={()=>{ return <PricingScreen services={services} />}} />
        <Route exact path='/pricing-plans' component={PricingScreen} />
        {/* <Route exact path='/members' component={MembersScreen} /> */}
        <Route exact path='/members' component={PricingScreenOld} />
        <Route exact path='/become-a-tech' component={BecomeATechScreen} />
        <Route exact path='/join-as-a-tech' 
            render={()=>(<JoinAsATechScreen services={services} />)}
         />
        {/* <Route exact path='/application-tv' component={TechForm} />
        <Route exact path='/application-appliance' component={TechForm} />
        <Route exact path='/application-handy' component={TechForm} />
        <Route exact path='/application-phone' component={TechForm} />
        <Route exact path='/application-plumbing' component={TechForm} /> */}
        <Route exact path='/tech-form/:service_id' component={TechForm} />
        <Route exact path='/zip-code' component={ZipCode} />        

        <Route exact path='/property-manager' component={PropertyManagerScreen} />
        <Route exact path='/invite-a-friend' component={InviteAFriendScreen} />
        <Route exact path='/book-a-service' 
            render={()=>< BookAServiceScreen services={services}/> }           
        />
        
        {/* {services.length > 0 ?
          services.map(()=>{
            return (
                <> */}

                  <Route exact path='/services/tv-mounting' component={()=><TvMountingScreen services={services} />} /> 
                  <Route exact path='/services/home-appliances' component={()=><HomeAppliancesScreen services={services} />} />
                  <Route exact path='/services/handyman-services' component={()=><HandymanServicesScreen services={services} />} />
                  <Route exact path='/services/disinfection-services' render={()=><DisinfectionServicesScreen services={services} />} />
                  <Route exact path='/services/phone-repair' component={()=><IhponeRepairScreen services={services} />} />
                  <Route exact path='/services/garage-door-repair' component={()=><GarageDoorRepairScreen services={services}/>} />
                  <Route exact path='/services/smart-home-installation' component={()=><SmartHomeInstallationScreen services={services}/>} />
                  <Route exact path='/services/plumbing-services' component={()=><PlumbingServicesScreen services={services}/>} />
                  {/* <Route exact path='/services/security-system' component={()=><SecuritySystemScreen services={services}/>} /> */}
                  
                  <Route exact path='/book-a-service/service/tv-mounting/:service_id' component={TvSize} />
                  <Route exact path='/book-a-service/service/home-appliances/:service_id' component={SelectAppliance} />
                  <Route exact path='/book-a-service/service/handyman-services/:service_id' component={HandymanService} />
                  <Route exact path='/book-a-service/service/disinfection-services/:service_id' component={DisinfectionService} />
                  <Route exact path='/book-a-service/service/phone-repair/:service_id' component={IphoneRepair} />
                  <Route exact path='/book-a-service/service/smart-home-installation/:service_id' component={SmartHomeService} />
                  <Route exact path='/book-a-service/service/plumbing-services/:service_id' component={Plumbing} />
                  <Route exact path='/book-a-service/service/garage-door-repair/:service_id' component={GarageDoorService} />

                  <Route exact path='/book-a-service/service/tv-mounting/:service_id/:question' component={TvQuestions} />
                  <Route exact path='/book-a-service/service/home-appliances/:service_id/:question' component={TvQuestions} />
                  <Route exact path='/book-a-service/service/handyman-services/:service_id/:question' component={TvQuestions} />
                  <Route exact path='/book-a-service/service/disinfection-services/:service_id/:question' component={TvQuestions} />
                  <Route exact path='/book-a-service/service/phone-repair/:service_id/:question' component={TvQuestions} />
                  <Route exact path='/book-a-service/service/smart-home-installation/:service_id/:question' component={TvQuestions} />
                  <Route exact path='/book-a-service/service/plumbing-services/:service_id/:question' component={TvQuestions} />
                  <Route exact path='/book-a-service/service/garage-door-repair/:service_id/:question' component={TvQuestions} />
                {/* </>
              )
            })
          : <Route exact path={['/services/*','/book-a-service/service/*']} render={()=><div style={{height:"30vh"}}></div>} />
        } */}

        {/* checkout screen */}
        <Route exact path='/checkout' component={CheckoutScreen} />
        
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
        <Route exact path='/cities/ny' component={NewyorkScreen} />
        <Route exact path='/cities/ny/newyork-city' component={NewyorkCityScreen} />
        <Route exact path='/cities/nc' component={NorthCarolinaScreen} />
        <Route exact path='/cities/nc/charlotte' component={CharlotteScreen} />
        <Route exact path='/cities/pa' component={PennsylvaniaScreen} />
        <Route exact path='/cities/pa/philadelphia' component={PhiladelphiaScreen} />
        <Route exact path='/cities/tx' component={TexasScreen} />
        <Route exact path='/cities/tx/dallas' component={DallasScreen} />
        <Route exact path='/cities/tx/houston' component={HoustonScreen} />
        <Route exact path='/cities/dc' component={WashingtonDCScreen} />
        <Route exact path='/cities/dc/washington-dc' component={Washington_DCScreen} />

        {/* https://s3.amazonaws.com/static.puls.com/website/SEO/NYC.png */}
        {/* Footer section routes */}
        {/* company imports */}
        <Route exact path='/about-us' component={AboutUsScreen} />
        <Route exact path='/how-it-works' component={HowItWorksScreen} />
        <Route exact path='/faq' component={FaqScreen} />
        <Route exact path='/careers' component={CareersScreen} />
        <Route exact path='/newsroom' component={NewsroomScreen} />
        {/* resource imports  */}
        <Route exact path='/resource/tv-mounting' component={ResourceTvMountingScreen} />
        <Route exact path='/resource/garage-doors' component={ResourceGarageDoorsScreen} />
        <Route exact path='/resource/appliances' component={ResourceAppliancesScreen} />
        <Route exact path='/resource/refrigerators' component={ResourceRefrigeratorsScreen} />
        <Route exact path='/resource/dishwashers' component={ResourceDishwashersScreen} />
        <Route exact path='/resource/ovens-and-stoves' component={ResourceOvensAndStovesScreen} />
        <Route exact path='/resource/washing-machines' component={ResourceWashingMachinesScreen} />
        <Route exact path='/resource/dryer' component={ResourceDryerScreen} />

        {/* partnerships imports  */}
        <Route exact path='/tcl' component={TclScreen} />
        <Route exact path='/simplisafe' component={SimplisafeScreen} />
        <Route exact path='/hisense' component={HisenseScreen} />
        <Route exact path='/puls-for-business' component={PulsForBusinessScreen} />
        {/* legals impotts  */}
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
