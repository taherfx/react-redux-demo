import React from 'react'
import { connect } from 'react-redux'
import { buyIceCream } from './redux'

const IceCreamContainer = (props) => {
  return (
    <div>
        <h2>Buy the new Ice Cream - ({props.numOfIceCream})</h2>
        <button onClick={props.dispatch}>Buy Ice Cream</button>
    </div>
  )
}

const mapStateToPorps = state => {
    return {
        numOfIceCream: state.iceCream.numOfIceCream
    }
}

const mapDispatchToProps = dispatch => {
    return {
        dispatch: () => dispatch(buyIceCream())
    }
}

export default connect(mapStateToPorps, mapDispatchToProps)(IceCreamContainer)