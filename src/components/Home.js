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
            <div style={{textAlign: "center",
                justifyContent: "center"}}>
                <h1 style={{ color: "#ccffda"}}>The best online products in one place</h1>

                <p style={{ color: "#ccffda"}}>Add new ads. Every registered and logged in user can add new ads</p>
                <div style={{
                    display:"flex",
                    flexDirection:"row",
                    flexWrap:"wrap",
                    flexFlow: "row wrap",
                    flex: "1 0 auto",
                    marginLeft:"50px",
                    marginRight:"50px",
                    justifyContent: "center"}}>
                {this.props.productState.map((product, index)=>
                    <div className="card" style={{width: "18rem", backgroundColor: "#ccffda", margin: "10px"}}>
                    <div class="card-body" key={index}
                         style={{padding:"0px"}}><p></p>
                        <img style={{ height: "10rem"}} className="card-img-top" src={product.picture} alt="Card image cap" />
                        < h5 class="card-title">Product type: {product.productType}</h5>
                        <p class="card-text">Description: {product.description}</p>

                        {/*<img className='img' src={product.picture} alt='pic' />*/}
                        {/*    <a href="#" className="btn btn-primary">View all ads for {product.productType}</a>*/}
                            <Link to={`/product/${product.id}/items`} className="btn btn-primary">View all ads for {product.productType}</Link>
                    </div></div>)}</div>

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