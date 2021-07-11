import React from 'react'
import { connect } from 'react-redux'
import {buyIceCream} from '../redux/index'

function IceCreamContainer(props){
    return (
        <div>
            <div>Number Of icecreams {props.numOficeCream}</div>
            <button onClick={props.buyIceCream}>Buy Icecream</button>
        </div>
        
    )
}
const mapStateToProps = state => {
    console.log(state)
    return {
        numOficeCream: state.iceCream.numOficeCream
    }
}
const mapDispatchToProps = dispatch => {
    return {
        buyIceCream: () => dispatch(buyIceCream())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(IceCreamContainer)