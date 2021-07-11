import React from 'react'
import { connect } from 'react-redux'
import {buyCake} from '../redux/index'

function CakeContainer(props){
    return (
        <div>
            <div>Number Of Cakes {props.numOfCakes}</div>
            <button onClick={props.buyCake}>Buy Cake</button>
        </div>
        
    )
}

const mapStateToProps = state => {
    console.log(state)
    return {
        numOfCakes: state.cake.numOfCakes
    }
}
const mapDispatchToProps = dispatch => {
    return {
        buyCake: () => dispatch(buyCake())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(CakeContainer)