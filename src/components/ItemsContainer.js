import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { getItems } from '../actions'

class ItemsContainer extends Component {
    componentDidMount() {
        console.log('this.props.match.params.productId', this.props.match.params.productId)
        const {productId} = this.props.match.params;
        this.props.getItems(productId)
    }
    render() {
        return (
                <div>
                    <h1>Available ads:</h1>
                    <div>{this.props.itemsState.map((item,index)  =>
                        <div  key={index}>
                            <p >Ticket id: {item.id} </p>
                            <p >Author: {item.author} </p>
                            <p >Description: {item.description} </p>
                            <p >Price: {item.price} </p>
                            <img className='img' src={item.picture} alt='pic'/> <br />
                            {/* <p>"We calculated that the risk of this ticket being a fraud is XX%"</p> */}

            </div>)}</div></div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        itemsState: state.itemsReducer
    }
}

export default connect(mapStateToProps, {getItems })(ItemsContainer)