import React, {useState} from 'react'
import {connect} from 'react-redux'
import {buyCake} from '../../Redux/Index'


function NewCakeContainer(props) {

    const [number, setNumber] = useState(1)

    return (
        <div>
            <h2>Number of Cakes - {props.numberOfCakes}</h2>
            <input type="text" value={number} onChange={e => setNumber(e.target.value)}></input>
            <button onClick={() => props.buyCake(number)}>Buy {number} Cake</button>
        </div>
    )
}

const mapStateToProps = state => {
    return{
        numberOfCakes: state.cake.numberOfCakes
    }
}

const mapDispatchToProps = dispatch => {
    return{
        buyCake: (number) => dispatch(buyCake(number))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
    )
(NewCakeContainer)
