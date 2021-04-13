import React from 'react'

export default function CardName({selectFnc, listKey, selected, value, suit}) {
    
    const onClick = () => {
        if(selectFnc != null)
            selectFnc(listKey)
    }
    return (
        <div onClick={onClick} className={'cardname' + (selected ? ' selected' : '')}>
            <div className='cardvalue'>{value}</div>
            <div className='cardsuit'>{suit}</div>
        </div>
    )
}
