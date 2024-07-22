import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addScore } from '../components/slices/scoreSlice';
import './PopupForm.css';
import { FaWindowClose } from "react-icons/fa";

interface PopupFormProps {
    onClose: () => void;
  }

const PopupForm: React.FC<PopupFormProps> = ({onClose}) => {
    const [username, setUsername] = useState('');
    const [time, setTime] = useState('');

    useState(true);
    const dispatch = useDispatch();

    const handleSubmit = () => {
        dispatch(addScore({ username, time }));
        setUsername('');
        setTime('');
        onClose();
    };

    return (
        <div className="add-score-popup-container">
            <div className='add-score-popup'>
                <div className='close-btn' onClick={onClose}><FaWindowClose /></div>
                <h2>Add Score</h2>
                <div className='details-div'>

                    <div className='input-div'>
                        <label htmlFor='username'>Name </label>
                        <input
                            name="username"
                            type="text"
                            placeholder="Name"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>


                    <div className='input-div'>
                        <label htmlFor='username'>Time </label>
                        <input
                            type="text"
                            placeholder="Time (MM:SS:MS)"
                            value={time}
                            onChange={(e) => setTime(e.target.value)}
                        />
                    </div>

                    <div >
                        <button className='add-btn' onClick={handleSubmit}>Add</button>
                    </div>


                </div>
            </div>





        </div>
    )
}

export default PopupForm
