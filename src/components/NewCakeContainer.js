import React, { useState } from 'react'
import { connect } from 'react-redux'
import { buyCake } from './redux'

const CakeContainer = (props) => {
    const [number, setNumber] = useState(null)
  return (
    <div>
        <h2>Buy the new Cake - ({props.noOfCake})</h2>
        <input type='text' value={number} onChange={(e) => setNumber(e.target.value)} />
        <button onClick={() => props.dispatch(number)}>Buy {number} Cake</button>
    </div>
  )
}

const mapStateToPorps = state => {
    return {
        noOfCake: state.cake.noOfCake
    }
}

const mapDispatchToProps = dispatch => {
    return {
        dispatch: (number) => dispatch(buyCake(number))
    }
}

export default connect(mapStateToPorps, mapDispatchToProps)(CakeContainer)