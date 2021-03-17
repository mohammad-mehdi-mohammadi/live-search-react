import * as React from "react";
import {Link} from "react-router-dom";

import {useEffect, useRef} from "react";
import styles from "./DropDown.module.sass";


const DropDown = (props) => {
    const node = useRef();

    const handleClick = e => {
        if (node.current.contains(e.target)) {
            return;
        }
        props.onClickOutside();
    };
    useEffect(() => {
        document.addEventListener("mousedown", handleClick);
        return () => {
            document.removeEventListener("mousedown", handleClick);
        };
    }, []);
    return (
        <>
            <div className={styles.suggestionArea} ref={node}>
                {
                    props.list.length > 0 ? (
                        props.list.map(function (person, index) {
                            return (
                                <Link to={`/detail/${person.id}`}
                                      key={index}>{person.name}, {person.family}</Link>
                            );
                        })
                    ) : (
                        <div className={styles.noData}>
                            No Data
                        </div>
                    )
                }
            </div>


        </>
    );
}

export default DropDown;
