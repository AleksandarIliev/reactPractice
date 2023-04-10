import { useState } from "react";

export const TrafficLight = () =>  {
    const [walk, setWalk] = useState(true);

    function handleClick() {
        setWalk(!walk);
        alert(walk ? 'Next is stop' : 'Next is walk')
    }
    
    return (
        <>
            <button onClick={handleClick}>Change to {walk ? 'Stop' : 'Walk'}</button>
            <h5 style={{color: walk ? 'green' : 'red'}}>{walk ? 'Walk': 'Stop'}</h5>
        </>
    );
}