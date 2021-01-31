import * as React from "react";
import styles from './LiveSearch.module.sass'
import loading from './../../assets/img/loading.gif'
import {useEffect, useState} from "react";
import {
    fetchList,
} from './actions';
import {connect} from "react-redux";

const LiveSearch = (props) => {

    let timer = null
    const handleChange = (value) => {
        if (timer !== null) {
            clearTimeout(timer)
        }
        if (value.length <= 0) {
            return;
        }
        timer = setTimeout(() => {
            props.fetchList(value);
            console.log('This will run after 1 second!')
        }, 700);


    }
    useEffect(() => {
        return () => clearTimeout(timer);
    }, []);
    return (
        <>

            <div className={styles.searchArea}>
                <div>

                </div>
                <input placeholder="Search..." className={styles.searchInput}
                       onChange={e => handleChange(e.target.value)}/>

                {
                    props.isLoading &&
                    <div className={styles.loading}>
                        <div className="loader"></div>
                    </div>
                }
                {
                    props.list.length > 0 &&
                    <div className={styles.suggestionArea}>
                        {
                            props.list.map(function (person) {
                                return (
                                    <a href="#">{person.name}, {person.family}</a>
                                );
                            })
                        }
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
        fetchList: (data) => dispatch(fetchList(data)),
    };
};
export default connect(
    mapStateToProps,
    mapDispachToProps
)(LiveSearch);
