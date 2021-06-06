import { SET_SIZES } from "../constants/tvMountingConstants";
export const tvSizesReducer = (state = { sizes: ["40in", "50in", "60in"] }, action) => {
    switch (action.type) {
        case SET_SIZES: {
            return state.sizes = { ...state, sizes: [...state.sizes, action.paylaod] }
        }
        default:
            return state
    }
}