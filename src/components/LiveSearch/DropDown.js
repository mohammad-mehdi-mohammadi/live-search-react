import * as React from "react";
import {Link} from "react-router-dom";
import {initialList} from "./actions/LiveSearch.action";
import {connect} from "react-redux";
import {useEffect, useRef} from "react";
import styles from "./LiveSearch.module.sass";


const DropDown = (props) => {
    const node = useRef();
    const reset = () => {
        props.initialList()
    }
    const handleClick = e => {
        if (node.current.contains(e.target)) {
            // inside click
            console.log('inside')
            return;
        }  // outside click
        console.log('outside')
    };
    useEffect(() => {
        // add when mounted
        document.addEventListener("mousedown", handleClick);  // return function to be called when unmounted
        return () => {
            document.removeEventListener("mousedown", handleClick);
        };
    }, []);
    return (
        <>
            <div className={styles.suggestionArea} ref={node}>
                ...
            </div>
            {/*{*/}
            {/*    props.list.map(function (person, index) {*/}
            {/*        return (*/}
            {/*            <Link to={`/detail/${person.id}`} onClick={reset}*/}
            {/*                  key={index}>{person.name}, {person.family}</Link>*/}
            {/*        );*/}
            {/*    })*/}
            {/*}*/}

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
