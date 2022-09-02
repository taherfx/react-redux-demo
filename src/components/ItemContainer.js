import React from 'react'
import { connect } from 'react-redux'
import { buyCake, buyIceCream } from './redux'

const ItemContainer = (props) => {
  return (
    <div>
        <h2>item - {props.item} </h2>
        <button onClick={props.buyItem}>Buy items({props.itemName})</button>
    </div>
  )
}

const mapStateToPorps = (state, ownProps) => {
    const itemState = ownProps.cake ? state.cake.noOfCake : state.iceCream.numOfIceCream

    return {
        item: itemState,
        itemName: ownProps.cake ? "Cake" : "Ice Cream"
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    const dispatchFunction = ownProps.cake ? 
    () => dispatch(buyCake()) :
    () => dispatch(buyIceCream())
    return {
        buyItem : dispatchFunction
    }
}

export default connect(mapStateToPorps,mapDispatchToProps)(ItemContainer)