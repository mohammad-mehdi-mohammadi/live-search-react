import * as React from "react";
import styles from './LiveSearch.module.sass'
import {useEffect} from "react";
import {
    fetchListBegin,
    abortRequest
} from './actions/LiveSearch.action';
import {connect} from "react-redux";

import DropDown from "./DropDown";

const LiveSearch = (props) => {

    let timer = null
    const handleChange = (value) => {
        if (timer !== null) {
            clearTimeout(timer)
        }
        if (value.length <= 0) {
            props.abortRequest();
            return;
        }
        timer = setTimeout(() => {

            props.fetchListBegin(value);
        }, 700);
    }


    useEffect(() => {
        return () => {
            clearTimeout(timer);
            props.abortRequest();
        }
    }, []);
    return (
        <>

            <div className={styles.searchArea}>

                <input placeholder="Search..." className={styles.searchInput}
                       onChange={e => handleChange(e.target.value)} title="dummyInput"/>

                {
                    props.isLoading &&
                    <div className={styles.loading}>
                        <div className="loader"></div>
                    </div>
                }


                {
                    props.list.length > 0 &&
                    <div className={styles.suggestionArea}>
                        <DropDown list ={props.list}></DropDown>
                    </div>
                }

            </div>
        </>
    );
}

const mapStateToProps = (state, props) => {

    return {
        list: state.LiveSearchReducer.list,
        isLoading: state.LiveSearchReducer.isLoading
    };
};
const mapDispachToProps = (dispatch) => {
    return {
        fetchListBegin: (data) => dispatch(fetchListBegin(data)),
        abortRequest: () => dispatch(abortRequest())
    };
};
export default connect(
    mapStateToProps,
    mapDispachToProps
)(LiveSearch);
