import React from 'react'
const Count = ({text, count}) => {
    console.log(`rendering ${text} component`)
    return (
        <div>
          <h2>Your {text} is: {count}</h2>
        </div>
    )
}

export default React.memo(Count)
