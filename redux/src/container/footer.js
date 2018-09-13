import React from 'react'
import { setFilter } from '../redux/actions';
import { connect } from 'react-redux';

// @connect(
//     dispatch: (item) => { dispatch(setFilter(item)) }
// )

const Link = ({ active, children, handleClick }) => {
    return (
        <p>
            <span onClick={() => handleClick('SHOW_ALL')}> ALl </span>
            <span onClick={() => handleClick('SHOW_ACTIVE')}> Active </span>
            <span onClick={() => handleClick('SHOW_COMPLETED')}> Completed </span>
        </p>
    )
}


const mapDispatchToProps = (dispatch) => {
    return {
        handleClick: (item) => {
            dispatch(setFilter(item))
        }
    }
}

const FilterLink = connect(
    null,
    mapDispatchToProps
)(Link)

export default FilterLink
