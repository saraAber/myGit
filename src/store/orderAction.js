export const add = "ADD";
export const subtraction = "SUBTRACTION";


export const orderAction = {

    add: (product) => (dispatch, getState) => {
        console.log(getState());
        const list = { ...getState().order.orderList }
        let count = getState().order.count
        console.log(list)
        if (!list[product.id]) {
            count += 1;
            list[product.id] = { ...product }
            list[product.id].count = 1
        }
        else {
            list[product.id].count = list[product.id].count + 1
        }
        console.log(list)

        dispatch({ type: add, value: { orderList: list, count: count } })
    },

    subtraction: (product) => (dispatch, getState) => {
        console.log(getState());
        const list = { ...getState().order.orderList }
        let count = getState().order.count
        console.log(list[product.id])
        if (list[product.id].count === 1) {
            count -= 1;
            delete list[product.id]
        }
        else {
            list[product.id].count = list[product.id].count - 1
        }
        console.log(list)

        dispatch({ type: subtraction, value: { orderList: list, count: count } })
    }

}