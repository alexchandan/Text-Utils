import React from 'react'

export default function Alert(props) {
    const capitalize = (word) => {
        let lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
    return (
        props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show p-2 mb-1`} role="alert">
            <strong>{capitalize(props.alert.type)}</strong> {props.alert.msg}
            <button type="button" className="btn-close d-flex align-items-center px-3 pt-1" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>

    )
}
