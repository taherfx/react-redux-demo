import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { buyCake } from './redux'

const HookCakeContainer = () => {
    const noOfCake = useSelector(state => state.cake.noOfCake)
    const dispatch = useDispatch()
  return (
    <div>        
        <h2>Num of Cake - {noOfCake}</h2>
        <button onClick={() => dispatch(buyCake())}>Buy Cake</button>
    </div>
  )
}

export default HookCakeContainer