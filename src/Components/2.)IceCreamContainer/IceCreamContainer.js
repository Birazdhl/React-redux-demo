import React from 'react'
import {connect} from 'react-redux'
import {buyIceCream} from '../../Redux/Index'


function IceCreamContainer(props) {
    return (
        <div>
            <h2>Number of IceCreams - {props.numberOfIceCream}</h2>
            <button onClick={props.buyIceCream}>Buy IceCream</button>
        </div>
    )
}

const mapStateToProps = state => {
    return{
        numberOfIceCream: state.iceCream.numberOfIceCream
    }
}

const mapDispatchToProps = dispatch => {
    return{
        buyIceCream: () => dispatch(buyIceCream())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
    )
(IceCreamContainer)
