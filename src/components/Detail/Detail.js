import * as React from "react";
import styles from './Detail.module.sass'
import {useParams} from "react-router";

import {connect, useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {Loader} from "rsuite";

import {ABORT_REQUEST, FETCH_DETAIL_BEGIN} from "./constants/Detail.constants";


const Detail = () => {
    const {id} = useParams();
    const dispatch = useDispatch()
    const detailState = useSelector(state => state.detailState)

    useEffect(() => {
        dispatch({type: FETCH_DETAIL_BEGIN, payload: id})
        // props.fetchDetailBegin(id);
        return () => {
            dispatch({type: ABORT_REQUEST})
        }
    }, []);
    return (
        <>
            <div className={styles.detailArea}>

                {
                    detailState.isLoading ?
                        <div className={styles.loadingArea}>
                            <Loader size="xs" className={styles.loading}/>
                        </div> :
                        <div>
                            <h3>Title: {detailState.detail.title}</h3>
                            <div>
                                Field: {detailState.detail.field}
                            </div>
                        </div>
                }
            </div>

        </>
    );
}

export default Detail;

//
// const mapStateToProps = (state, props) => {
//
//     return {
//         detail: state.DetailReducer.detail,
//         isLoading: state.DetailReducer.isLoading
//     };
// };
// const mapDispachToProps = (dispatch) => {
//     return {
//         fetchDetailBegin: (data) => dispatch(fetchDetailBegin(data)),
//         abortRequest: () => dispatch(abortRequest())
//     };
// };
// export default connect(
//     mapStateToProps,
//     mapDispachToProps
// )(Detail);
