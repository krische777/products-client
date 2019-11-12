import request from 'superagent'
export const GET_PRODUCTS = 'GET_PRODUCTS'
export const ADD_PRODUCTS='ADD_PRODUCTS'
const url = 'http://localhost:5555'

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