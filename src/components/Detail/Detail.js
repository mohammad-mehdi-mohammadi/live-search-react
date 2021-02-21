import * as React from "react";
import styles from './Detail.module.sass'
import {useParams} from "react-router";
import {abortRequest, fetchList, fetchListBegin} from "../LiveSearch/actions/LiveSearch.action";
import {connect} from "react-redux";


const Detail = (props) => {
    const {id} = useParams();


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
        list: state.LiveSearchReducer.list,
        isLoading: state.LiveSearchReducer.isLoading
    };
};
const mapDispachToProps = (dispatch) => {
    return {
        fetchList: (data) => dispatch(fetchListBegin(data)),
        abortRequest: () => dispatch(abortRequest())
    };
};
export default connect(
    mapStateToProps,
    mapDispachToProps
)(Detail);
