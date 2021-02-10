import * as React from "react";
import styles from './LiveSearch.module.sass'
import loading from './../../assets/img/loading.gif'
import {useEffect, useRef, useState} from "react";
import DropDown from './DropDown'
import {
    fetchList,
    abortRequest
} from './actions/LiveSearch.action';
import {connect} from "react-redux";
import useOutsideClick from "./DropDown";
import {Link} from "react-router-dom";

const LiveSearch = (props) => {

    const ref = useRef();
    const [toggleOpen, setToggleOpen] = useState(true)
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
            props.fetchList(value);
            console.log('This will run after 1 second!')
        }, 700);


    }


    useOutsideClick(ref, () => {
        setToggleOpen(!toggleOpen)
    });

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
                       onChange={e => handleChange(e.target.value)}/>

                {
                    props.isLoading &&
                    <div className={styles.loading}>
                        <div className="loader"></div>
                    </div>
                }


                {
                    props.list.length > 0 &&
                    <div className={styles.suggestionArea} ref={ref}>
                        {
                            props.list.map(function (person, index) {
                                return (
                                    <Link to={`/user-detail/${person.id}`}
                                          key={index}>{person.name}, {person.family}</Link>
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
        abortRequest: () => dispatch(abortRequest())
    };
};
export default connect(
    mapStateToProps,
    mapDispachToProps
)(LiveSearch);
