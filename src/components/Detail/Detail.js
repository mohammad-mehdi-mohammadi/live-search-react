import * as React from "react";
import styles from './Detail.module.sass'
import {useParams} from "react-router";

import {connect} from "react-redux";
import {useEffect} from "react";
import {fetchDetailBegin} from "./actions/Detail.actions";


const Detail = (props) => {
    const {id} = useParams();

    useEffect(() => {
        props.fetchDetailBegin(id);
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
                            <h3>Title</h3>
                            <div>
                                Field
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
        fetchDetailBegin: (data) => dispatch(fetchDetailBegin(data))
    };
};
export default connect(
    mapStateToProps,
    mapDispachToProps
)(Detail);
