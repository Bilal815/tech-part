import { CLEAR_SELECTED_SERVICE_OPTIONS, DESELECT_SERVICE_OPTION, REMOVE_SELECTED_SERVICE_APPLIANCE, SELECT_SERVICE_APPLIANCE, SELECT_SERVICE_OPTION } from "../constants/servicesConstants"

export const selectServiceOption = (serviceOption) => {
  return {
    type: SELECT_SERVICE_OPTION,
    payload: {}
  }
}

export const deselectServiceOption = (serviceOption) => {
  return {
    type: DESELECT_SERVICE_OPTION,
    payload: {}
  }
}

export const clearSelectedServiceOptions = () => {
  return {
    type: CLEAR_SELECTED_SERVICE_OPTIONS,
  }
}

export const selectServiceAppliance = (serviceAppliance) => {
  return {
    type: SELECT_SERVICE_APPLIANCE,
    payload: serviceAppliance
  }
}

export const removeSelectedServiceAppliance = () => {
  return {
    type: REMOVE_SELECTED_SERVICE_APPLIANCE
  }
}