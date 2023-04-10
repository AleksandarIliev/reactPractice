import { useState, Fragment } from "react";

const Count = (props) => {
    const [ count, setCount ] = useState(props.start);
    
    const incrementHandler = () => {
        setCount(x => x + 1);
    }

    const decrementHandler = () => {
        setCount(x => x - 1);
    }

    const resetHandler = () => {
        setCount(0);
    }

    return (
        <Fragment>
            <h3>Added items: {count}</h3>
            {count > 0 ? <button onClick={decrementHandler}>-</button> : <button onClick={decrementHandler} disabled>-</button>}
            {count < 18 ? <button onClick={incrementHandler}>+</button> :  null}
            {count === 0 ? null : <button onClick={resetHandler}>Reset</button>}
           
        </Fragment>
    );
}

export default Count;