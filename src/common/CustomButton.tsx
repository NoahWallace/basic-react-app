import React, {FC} from 'react';

// @ts-ignore
import styles from  './CustomButton.module.css'

export const CustomButton: FC<{title?: string, onClick: ()=>void}> = ({title, onClick}) => {

    return (
    <button className={styles.customButton} onClick={()=>onClick()}>{ title }</button>
)
}