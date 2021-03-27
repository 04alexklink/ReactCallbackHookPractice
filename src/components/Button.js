import React from 'react'
const Button = ({handleClick, text}) => {
    console.log(`rendering ${text} button component`)
    return (
        <div>
        <button onClick={() => handleClick()}>{text}</button>
        </div>
    )
}

export default React.memo(Button)
