import request from 'superagent'
export const GET_PRODUCTS = 'GET_PRODUCTS'
export const ADD_PRODUCTS='ADD_PRODUCTS'
export const GET_ITEMS = 'GET_ITEMS'

const url = 'http://localhost:4000'

function getProductsAction(payload) {
    return {
        type: GET_PRODUCTS,
        payload: payload
    }
}

export const getProducts = () => (dispatch) => {
    request
        .get(`${url}/product`)
        .then(res => {
            const action = getProductsAction(res.body)
            dispatch(action)
        })
        .catch(error => {
            console.log(error)
        })
}

function addProductsAction(payload) {
    return {
        type: ADD_PRODUCTS,
        payload: payload
    }
}

export const addProduct = (productType, productPicture, productDescription) => (dispatch) => {

    request
        .post(`${url}/product`)
        // .set(authHeader())
        .send({
            productType: productType, picture: productPicture,
            description: productDescription,
        })
        .then(res => {
            const action = (res.body)
            dispatch(action)
        })
        .catch(console.error)
}

function getItemsAction(payload) {
    return {
        type: GET_ITEMS,
        payload: payload
    }
}

export const getItems = (productId) => (dispatch) => {
    request
        .get(`${url}/product/${productId}/items`)
        .then(res => {
            console.log('res.body', res.body)

            const action = getItemsAction(res.body)
            dispatch(action)
        })
        .catch(error => {
            console.log(error)
        })
}