import { useState } from 'react';
import './style.scss';

export const SubjectButton = ({ text, color }) => {
    const [active, setActive] = useState(false);

    const isActive = () => {
        setActive(state => !state);
    }

    return (
        <button onClick={isActive} className={`sub__btn ${active ? color : ''}`}>{text}</button>
    )

}