export const SELECT_SERVICE_OPTION = 'SELECT_SERVICE_OPTION'
export const DESELECT_SERVICE_OPTION = 'DESELECT_SERVICE_OPTION'
export const CLEAR_SELECTED_SERVICE_OPTIONS = 'CLEAR_SELECTED_SERVICE_OPTIONS'
export const SELECT_SERVICE_APPLIANCE = 'SELECT_SERVICE_APPLIANCE'
export const REMOVE_SELECTED_SERVICE_APPLIANCE = 'REMOVE_SELECTED_SERVICE_APPLIANCE'

export const services = {
  'tv-mounting': {
    id: 1,
    name: 'tv-mounting',
    optionsQuestion: 'What size is your TV?'
  },
  "home-appliances": {
    id: 2,
    name: 'home-appliances',
    optionsQuestion: 'Select the appliance you want to repair?'
  },
  "handyman-services": {
    id: 3,
    name: "handyman-services",
    optionsQuestion: 'Choose a service to get started'
  },
  "disinfection-services": {
    id: 4,
    name: "disinfection-services",
    optionsQuestion: 'What kind of property is this?'
  },
  "phone-repair": {
    id: 5,
    name: "phone-repair",
    optionsQuestion: "Select your iPhone device model"
  },
  "garage-door-repair": {
    id: 6,
    name: "garage-door-repair",
    optionsQuestion: 'What problem are you facing?'
  },
  "smart-home-installation": {
    id: 7,
    name: "smart-home-installation",
    optionsQuestion: "To get started, select what you need installed"
  },
  "plumbing-services": {
    id: 8,
    name: "plumbing-services",
    optionsQuestion: "What do you need help with?"
  },
}