import * as React from "react";
import {Link} from "react-router-dom";
import {initialList} from "./actions/LiveSearch.action";
import {connect} from "react-redux";


const DropDown = (props) => {

    const reset = () => {
        props.initialList()
    }
    return (
        <>
            
            {
                props.list.map(function (person, index) {
                    return (
                        <Link to={`/detail/${person.id}`} onClick={reset}
                              key={index}>{person.name}, {person.family}</Link>
                    );
                })
            }

        </>
    );
}

const mapDispachToProps = (dispatch) => {
    return {
        initialList: () => dispatch(initialList())
    };
};
export default connect(
    null,
    mapDispachToProps
)(DropDown);
