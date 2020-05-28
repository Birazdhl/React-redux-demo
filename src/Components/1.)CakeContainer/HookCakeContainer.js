import React from 'react'
import {useSelector} from 'react-redux'

function HookCakeContainer() {

  const numberOfCakes =   useSelector(state => state.numberOfCakes)

    return (
        <div>
            <h2>Number of Cake - {numberOfCakes}</h2>
            <button>Buy Cake</button>
        </div>
    )
}

export default HookCakeContainer
