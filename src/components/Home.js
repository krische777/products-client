import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { getProducts } from '../actions'
class Home extends Component {

    componentDidMount() {
        this.props.getProducts()
    }

    render() {

        return (
            <div className="homepage-wrapper">
                <h1>The best online products in one place</h1>

                <p>See our offers</p>

                <p>Add new ads. Every registered and logged in user can add new ads</p>

                <div >{this.props.productState.map((product, index)=>
                    <div className='eventClass' key={index}><p></p>
                        <p>Product type: {product.productType}</p>
                        <p>Description: {product.description}</p>
                        <img className='img' src={product.picture} alt='pic' />

                        <Link to={`/product/${product.id}/items`}>View all ads for {product.productType}</Link>
                    </div>)}</div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state)

    return {
        productState: state.productsReducer
    }
}

export default connect(mapStateToProps, { getProducts })(Home)