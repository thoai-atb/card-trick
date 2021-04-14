import React from 'react'
import CardKeyBoardButton from './CardKeyBoardButton'

export default function CardKeyBoard({onKeyPress}) {
    return (
        <div className='card'>
            <h2>Keyboard</h2>
            <hr></hr>
            <div className='card-keyboard-group'>
                <CardKeyBoardButton onKeyPress={onKeyPress} value={'♠'}/>
                <CardKeyBoardButton onKeyPress={onKeyPress} value={'♥'}/>
                <CardKeyBoardButton onKeyPress={onKeyPress} value={'♣'}/>
                <CardKeyBoardButton onKeyPress={onKeyPress} value={'♦'}/>
            </div>
            <div className='card-keyboard-group'>
                <CardKeyBoardButton onKeyPress={onKeyPress} value={'A'}/>
                <CardKeyBoardButton onKeyPress={onKeyPress} value={'2'}/>
                <CardKeyBoardButton onKeyPress={onKeyPress} value={'3'}/>
                <CardKeyBoardButton onKeyPress={onKeyPress} value={'4'}/>
                <CardKeyBoardButton onKeyPress={onKeyPress} value={'5'}/>
                <CardKeyBoardButton onKeyPress={onKeyPress} value={'6'}/>
                <CardKeyBoardButton onKeyPress={onKeyPress} value={'7'}/>
                <CardKeyBoardButton onKeyPress={onKeyPress} value={'8'}/>
                <CardKeyBoardButton onKeyPress={onKeyPress} value={'9'}/>
                <CardKeyBoardButton onKeyPress={onKeyPress} value={'10'}/>
                <CardKeyBoardButton onKeyPress={onKeyPress} value={'J'}/>
                <CardKeyBoardButton onKeyPress={onKeyPress} value={'Q'}/>
                <CardKeyBoardButton onKeyPress={onKeyPress} value={'K'}/>
            </div>
        </div>
    )
}
