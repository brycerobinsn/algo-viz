import React, {useState} from 'react';
import BubbleSort from './BubbleSort';

const AlgorithmVisualizer = () => {
    const [algorithm, setAlgorithm] = useState('bubbleSort');
    const [array, setArray] = useState([5, 3, 8, 4, 2]);
    const [start, setStart] = useState(false);

    const handleAlgorithmChange = (e) => {
        setAlgorithm(e.target.value);
    }

    const handleStart = () => {
        setStart(true);
        setArray([5,3,8,4,2]);
    }

    return (
        <div>
            <div id='controls'>
                <select onChange={handleAlgorithmChange}>
                    <option value='bubbleSort'>Bubble Sort</option>
                </select>
                <button onClick={handleStart}>Start</button>
            </div>
            <div id='visualization'>
                {algorithm === 'bubbleSort' && start && <BubbleSort array={array} />}
            </div>
        </div>
    )
}

export default AlgorithmVisualizer;