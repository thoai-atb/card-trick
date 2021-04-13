import React from 'react'

export default function CardKeyBoardButton({value, onKeyPress}) {

    function onClick() {
        onKeyPress(value);
    }

    return (
        <div className='card-keyboard-button' onClick={onClick}>{value}</div>
    )
}
