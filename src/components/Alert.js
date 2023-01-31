import React from 'react'

export default function Alert(props) {
     
    const capitalize = (letter)=>{
        let makeCapital = letter.toLowerCase();
         return makeCapital.charAt(0).toUpperCase() + makeCapital.slice(1);
    }

    return (
        props.alert1 && <div>
            <div className={`alert alert-${props.alert1.type} alert-dismissible fade show`} role="alert">
                <strong>{capitalize(props.alert1.type)}</strong>: {props.alert1.msg}
                
            </div>
        </div>
    )
}



