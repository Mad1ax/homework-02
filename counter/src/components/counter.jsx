import React, {useState} from 'react'

const styles = {
    button: {
        margin: 10,
    }
}

const Counter = () => {

    const [count,setCount]=useState(0)
    const tags = ['tag1', 'tag2', 'tag3']

    const formCount = () => {
        return count === 0 ? 'Ноль' : count
    }

    const getBageclasses = () => {
        let classes = 'badge m-2 bg-'
        classes +=count === 0 ? 'danger' : 'primary'
        return classes

    }

    const handleIncrement = (productId) => {
        setCount(count + 1)
    }

    const handleDecrement = (productId) => {
        count !== 0 ? setCount(count - 1) : console.log(productId)
    }

    return  (
        <>
            <span className={getBageclasses()}>{formCount()}</span>
            <button
                onClick={() => handleIncrement({id: 1})}
                className='btn btn-secondary btn-sm'>Increment</button>
            <button style={styles.button}
                onClick={() => handleDecrement({id: 1})}
                className='btn btn-secondary btn-sm'>Decrement</button>
        </>
    )
}

export default Counter