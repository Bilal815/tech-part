import { combineReducers } from 'redux';

import { userLoginReducer, userRegisterReducer } from './userReducers';
import { servicesQuestionsReducer } from './servicesQuestionsReducer'

// import {
//   allListsReducer,
//   cityListReducer,
//   countryListReducer,
//   industryListReducer,
//   stateListReducer,
// } from './setupStoreReducers';

export const rootReducer = combineReducers({
  userRegister: userRegisterReducer,
  userLogin: userLoginReducer,
  servicesQnA: servicesQuestionsReducer
  //   userForgotPassword: userForgotPasswordReducer,
  //   userChangePassword: userChangePasswordReducer,
  //   countryList: countryListReducer,
  //   stateList: stateListReducer,
  //   cityList: cityListReducer,
  //   industryList: industryListReducer,
  //   allLists: allListsReducer,
});
