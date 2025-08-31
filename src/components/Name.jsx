import React, { useState } from 'react';
import '../App.css';


const Name = () => {
    const [count, setCount] = useState(0);
    return (
        <div>
            <h2>Never give up ! try again again.</h2>
            <p>count valaue: {count}</p>
            <div className='buttton'>
                <button onClick={() => { setCount(count - 1) }}>Decrease</button>
                <button onClick={() => setCount(0)}>Reset</button>
                <button onClick={() => setCount(count + 1)}>Increase</button>
            </div>

        </div>
    )
}

export default Name