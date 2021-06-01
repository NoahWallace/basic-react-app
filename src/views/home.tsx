import React, {FC, useState} from 'react';
import {CustomButton} from "../common/CustomButton";

export const Home:FC<{}> = () => {
    const [flipped, setFlipped] = useState(false);
    const setFlippedState = () => {setFlipped(!flipped)}
    return (
        <div>
            <h3>Home Application</h3>
            <CustomButton onClick={setFlippedState} title={flipped ? "Im Flipped": "My Custom Button"}/>
        </div>
    )
}