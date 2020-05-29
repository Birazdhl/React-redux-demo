import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {buyCake} from '../../Redux/Index'

function HookCakeContainer() {

  const numberOfCakes =   useSelector(state => state.cake.numberOfCakes)
  const dispatch = useDispatch()

    return (
        <div>
            <h2>Number of Cake - {numberOfCakes}</h2>
            <button onClick={() => dispatch(buyCake())}>Buy Cake</button>
        </div>
    )
}

export default HookCakeContainer
