import * as React from "react";
import styles from './LiveSearch.module.sass'
import {useEffect, useState} from "react";
import {
    fetchListBegin,
    abortRequest
} from './actions/LiveSearch.action';
import {useDispatch} from "react-redux";
import { useSelector } from 'react-redux'
import DropDown from "./components/DropDown/DropDown";
import {Input, Loader} from "rsuite";

const LiveSearch = (props) => {
    const dispatch = useDispatch()
    const liveSearchList = useSelector(state => state.liveSearchList)
    const [visible, setVisible] = useState(false)
    let timer = null
    const handleChange = (value) => {
        if (timer !== null) {
            clearTimeout(timer)
        }
        if (value.length <= 0) {
            dispatch({ type: 'dasda/abortRequestx' })
            return;
        }
        timer = setTimeout(() => {
            dispatch({ type: 'liveSearchList/fetchListBegin', payload: value })
        }, 700);
    }
    const onFocusHandle = () => {
        setVisible(true)
    }
    const handleClickOutside = () => {
        setVisible(false)
    }
    useEffect(() => {
        return () => {
            clearTimeout(timer);
            dispatch({ type: 'dasda/abortRequestx' })
        }
    }, []);
    return (
        <>
            <div className={styles.searchArea}>
                <Input placeholder="Search..." className={styles.searchInput} onFocus={onFocusHandle}
                       onChange={handleChange}/>
                {
                    liveSearchList.isLoading &&
                    <Loader size="xs" className={styles.loading}/>
                }
                {
                    visible &&
                    <div>
                        <DropDown list={liveSearchList.list} onClickOutside = {handleClickOutside}></DropDown>
                    </div>
                }

            </div>
        </>
    );
}
export default LiveSearch;
// const mapStateToProps = (state) => {
//
//     return {
//         list: state.LiveSearchReducer.list,
//         isLoading: state.LiveSearchReducer.isLoading
//     };
// };
// const mapDispachToProps = (dispatch) => {
//     return {
//         fetchListBegin: (data) => dispatch(fetchListBegin(data)),
//         abortRequest: () => dispatch(abortRequest())
//     };
// };
// export default connect(
//     mapStateToProps,
//     mapDispachToProps
// )(LiveSearch);
