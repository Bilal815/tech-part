import {
  SELECT_SERVICE_OPTION,
  DESELECT_SERVICE_OPTION,
  CLEAR_SELECTED_SERVICE_OPTIONS,
  SELECT_SERVICE_APPLIANCE,
  REMOVE_SELECTED_SERVICE_APPLIANCE
} from '../constants/servicesConstants'

const initialState = {
  serviceApplianceOptionsSelected: {},
  selectedServiceAppliance: {}
};

export const servicesQuestionsReducer = (state = initialState, action) => {
  if (action.type === SELECT_SERVICE_OPTION) {

    const newServiceApplianceOptionsSelected = {...state.serviceApplianceOptionsSelected, ...action.payload}
    const quesNos = Object.keys(newServiceApplianceOptionsSelected);
    const quesIndex = quesNos.indexOf(Object.keys(action.payload)[0]);
    const newQuestions = Object.entries(newServiceApplianceOptionsSelected).slice(0, quesIndex+1).reduce((acc, [key, value]) => {
      acc[key] = value;
      return acc;
    },{})

    console.log({newQuestions,quesIndex});

    return {
      ...state,
      serviceApplianceOptionsSelected: newQuestions 
    }
  }
  // if (action.type === DESELECT_SERVICE_OPTION) {
  //   return {
  //     ...state,
  //     serviceApplianceOptionsSelected: state.serviceApplianceOptionsSelected.filter(option => option !== action.payload)
  //   }
  // }
  if (action.type === CLEAR_SELECTED_SERVICE_OPTIONS) {
    return {
      ...state,
      serviceApplianceOptionsSelected: {}
    }
  }
  if (action.type === SELECT_SERVICE_APPLIANCE) {
    return {
      ...state,
      selectedServiceAppliance: action.payload
    }
  }
  if (action.type === REMOVE_SELECTED_SERVICE_APPLIANCE) {
    return {
      ...state,
      selectedServiceAppliance: {}
    }
  }
  return state;
}