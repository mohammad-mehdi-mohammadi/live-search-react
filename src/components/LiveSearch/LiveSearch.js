import * as React from "react";
import styles from './LiveSearch.module.sass'
import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {useSelector} from 'react-redux'
import DropDown from "./components/DropDown/DropDown";
import {Input, Loader} from "rsuite";

import {
    ABORT_REQUEST,

    FETCH_LIST_BEGIN
} from './constants/LiveSearch.constant';

let timer = null
const LiveSearch = () => {
    const dispatch = useDispatch()
    const liveSearchState = useSelector(state => state.liveSearchState)
    const [visible, setVisible] = useState(false)

    const handleChange = (value) => {
        clearTimeoutHandle();
        if (value.length <= 0) {
            dispatch({type: ABORT_REQUEST})
            return;
        }

        timer = setTimeout(() => {

            dispatch({type: FETCH_LIST_BEGIN, payload: value})

        }, 1000);
    }
    const onFocusHandle = () => {
        setVisible(true)
    }
    const handleClickOutside = () => {
        setVisible(false)
    }
    useEffect(() => {
        return () => {
            clearTimeoutHandle();
            dispatch({type: ABORT_REQUEST})
        }
    }, []);
    const clearTimeoutHandle = () => {
        if (timer) {
            clearTimeout(timer)
        }
    }
    return (
        <>
            <div className={styles.searchArea}>
                <Input placeholder="Search..." className={styles.searchInput} onFocus={onFocusHandle}
                       onChange={handleChange}/>
                {
                    liveSearchState.isLoading &&
                    <Loader size="xs" className={styles.loading}/>
                }
                {
                    visible &&
                    <div>
                        <DropDown list={liveSearchState.list} onClickOutside={handleClickOutside}></DropDown>
                    </div>
                }

            </div>
        </>
    );
}
export default LiveSearch;
