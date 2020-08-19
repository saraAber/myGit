const { act } = require("react-dom/test-utils")

const initliseState = {
    orderList: {},
    count: 0,
    price: 0
}
const reducer = (state = initliseState, action) => {
    switch (action.type) {
        case "ADD":
            return {
                ...state,
                ...action.value
            }
            case "SUBTRACTION":
            return {
                ...state,
                ...action.value
            }
        default: return state;
    }
}

export default reducer;