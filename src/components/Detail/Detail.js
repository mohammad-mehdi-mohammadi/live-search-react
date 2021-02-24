import * as React from "react";
import styles from './Detail.module.sass'
import {useParams} from "react-router";

import {connect} from "react-redux";
import {useEffect} from "react";
import {fetchDetailBegin, abortRequest} from "./actions/Detail.actions";



const Detail = (props) => {
    const {id} = useParams();


    useEffect(() => {
        props.fetchDetailBegin(id);
        return () => {
            props.abortRequest();
        }
    }, []);
    return (
        <>
            <div className={styles.detailArea}>

                {
                    props.isLoading ?
                        <div className={styles.loading}>
                            <div className="loader"></div>
                        </div> :
                        <div>
                            <h3>Title: {props.detail.title}</h3>
                            <div>
                                Field: {props.detail.field}
                            </div>
                        </div>
                }
            </div>

        </>
    );
}

const mapStateToProps = (state, props) => {

    return {
        detail: state.DetailReducer.detail,
        isLoading: state.DetailReducer.isLoading
    };
};
const mapDispachToProps = (dispatch) => {
    return {
        fetchDetailBegin: (data) => dispatch(fetchDetailBegin(data)),
        abortRequest: () => dispatch(abortRequest())
    };
};
export default connect(
    mapStateToProps,
    mapDispachToProps
)(Detail);
