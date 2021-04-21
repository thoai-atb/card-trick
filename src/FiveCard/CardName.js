import React from 'react'

export default function CardName({result=false, selectFnc, listKey, selected, value, suit}) {
    
    const onClick = () => {
        if(selectFnc != null)
            selectFnc(listKey)
    }
    return (
        <div onClick={onClick} className={'cardname' + (selected ? ' selected' : '') + (result ? ' result' : '')}>
            <div className='cardvalue'>{value}</div>
            <div className={'cardsuit' + (['♥', '♦'].includes(suit) ? ' cardsuit-red' : ' cardsuit-black')}>{suit}</div>
        </div>
    )
}
