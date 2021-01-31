import * as React from "react";
import styles from './LiveSearch.module.sass'
import loading from './../../assets/img/loading.gif'
import {useEffect, useState} from "react";
import {
    fetchList,
} from './actions';
import {connect} from "react-redux";

const LiveSearch = (props) => {
    const [loading, setLoading] = useState(false)
    let timer = null
    const handleChange = (value) => {
        if (timer !== null) {
            clearTimeout(timer)
        }
        if (value.length <= 0) {
            return;
        }
        timer = setTimeout(() => {
            props.fetchList();
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
                    {
                        props.list.map(function (person) {
                            return (
                                <div>
                                    {person.avatar_url}, {person.login}
                                </div>
                            );
                        })
                    }
                </div>
                <input placeholder="Search..." className={styles.searchInput}
                       onChange={e => handleChange(e.target.value)}/>

                {
                    loading &&
                    <div className={styles.loading}>
                        <div className="loader"></div>
                    </div>
                }
                <div className={styles.suggestionArea}>
                    <a href="#">title</a>
                    <a href="#">title</a>
                    <a href="#">title</a>
                </div>
            </div>
        </>
    );
}

const mapStateToProps = (state, props) => {

    return {
        list: state.LiveSearchReducer.list
    };
};
const mapDispachToProps = (dispatch) => {
    return {
        fetchList: () => dispatch(fetchList()),
    };
};
export default connect(
    mapStateToProps,
    mapDispachToProps
)(LiveSearch);
