import React, { useState, useEffect } from 'react'
import './CardTrick.css'
import CardName from './CardName'
import CardKeyBoard from './CardKeyBoard'

const makeCards = () => {
    let cards = []
    for(let i = 0; i<4; i++)
        cards.push({
            value: '-',
            suit: '-'
        })
    return cards
}

const suits = ['♠', '♥', '♣', '♦']
const values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']

export default function CardTrick() {

    const [cards, setCards] = useState (makeCards())

    const [currentCardIdx, setCurrentCardIdx] = useState(0)
    const [allCardsFilled, setAllCardsFilled] = useState(false)
    const [guessResult, setGuessResult] = useState(null)

    useEffect (() => {
      if(currentCardIdx >= cards.length)
          setAllCardsFilled(true)
    }, [currentCardIdx, cards])

    useEffect (() => {
        const compareCards = (c1, c2) => {
            if (values.indexOf(c1.value) === values.indexOf(c2.value))
                return suits.indexOf(c2.suit) - suits.indexOf(c1.suit) // reversed
            return values.indexOf(c1.value) - values.indexOf(c2.value)
        }
        const guess = () => {
            let threeCards = [cards[1], cards[2], cards[3]]
            let sorted = [...threeCards].sort(compareCards)
            let order = ''
            for(let c of threeCards) {
                if(c === sorted[0])
                    order += 'l'
                if(c === sorted[1])
                    order += 'm'
                if(c === sorted[2])
                    order += 'h'
            }
            let offset = ['porn', 'lmh', 'lhm', 'mlh', 'mhl', 'hlm', 'hml'].indexOf(order)
            setGuessResult({
                value: values[(values.indexOf(cards[0].value) + offset) % values.length],
                suit: cards[0].suit
            })
        }
        if(allCardsFilled) guess()
    }, [allCardsFilled, cards])

    const receiveKey = (key) => {
        if (allCardsFilled)
            return

        if (suits.includes(key)) {
            cards[currentCardIdx].suit = key;
            setCards([...cards]);
            if (values.includes(cards[currentCardIdx].value))
                setCurrentCardIdx(currentCardIdx + 1)
        }

        if (values.includes(key)) {
            cards[currentCardIdx].value = key;
            setCards([...cards]);
            if (suits.includes(cards[currentCardIdx].suit))
                setCurrentCardIdx(currentCardIdx + 1)
        }
    }

    const reset = () => {
        setCurrentCardIdx(0)
        setGuessResult(null)
        setAllCardsFilled(false)
        setCards(makeCards)
    }

    return (
        <div>
            <div>
                <div className='card'>
                    <h2>🎩 I will guess your card 🎩</h2>
                    <hr></hr>
                    <div>
                        {
                            cards && cards.map((card, idx)=> {
                                return <CardName key={idx} listKey={idx} selectFnc={setCurrentCardIdx} value={card.value} selected={idx === currentCardIdx} suit={card.suit}/>
                            })
                        }
                    </div>
                    {
                        guessResult && (
                            <>
                                <h3>I'm thinking of:</h3>
                                <div>
                                    <CardName value={guessResult.value} suit={guessResult.suit}/>
                                </div>
                                <button onClick={reset}>Okay</button>
                            </>
                        )
                    }
                </div>
            </div>
            <div>
                <CardKeyBoard onKeyPress={receiveKey} />
            </div>
        </div>
    )
}
