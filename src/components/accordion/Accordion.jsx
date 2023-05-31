import './style.scss';
import { ReactComponent as Minus } from '../../asessts/icMinus.svg';
import { ReactComponent as Plus } from '../../asessts/icPlus.svg';
import { useState } from 'react';

export const Accordion = ({ title, text }) => {
    const [selected, setSelected] = useState(false);

    const isSelected = () => {
        setSelected(state => !state);
    }

    return (
        <div className="accord">
            <div className="accord__content">
                <p className="accord__content__title">{title}</p>
                <div className={`accord__content__text${selected ? "active" : ''}`}>
                    <span className="accord__content__text__info">
                        {text}
                    </span>
                </div>
            </div>
            <div className='accord__push'>
                <button className="accord__push__btn" onClick={() => isSelected()}>
                    {selected ? <Minus /> : <Plus />}
                </button>
            </div>
        </div>

    )

}