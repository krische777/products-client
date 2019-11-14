import { GET_ITEMS } from "../actions"
export default function (state = [], action = {}) {
    switch (action.type) {
        case GET_ITEMS:
            return action.payload;
        default:
            return state
    }
}