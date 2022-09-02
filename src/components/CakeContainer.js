import React from 'react'
import { connect } from 'react-redux'
import { buyCake } from './redux'

const CakeContainer = (props) => {
  return (
    <div>
        <h2>Buy the new Cake - ({props.noOfCake})</h2>
        <button onClick={props.dispatch}>Buy Cake</button>
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
        dispatch: () => dispatch(buyCake())
    }
}

export default connect(mapStateToPorps, mapDispatchToProps)(CakeContainer)