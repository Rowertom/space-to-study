import './style.scss';
import { subjects } from '../../constant/subjects';
import { SubjectButton } from '../subjectButton/SubjectButton';
import { useState } from 'react';

export const Teachers = () => {
    const [name, setName] = useState('');
    const [url, setUrl] = useState('');

    fetch('https://mocki.io/v1/32e1c37b-c1d9-4427-9ea4-e5fde8eec41b').then((res) => { return res.ok ? res.json() : Promise.reject("Error") }).then((data) => {
        setName(data.name);
        setUrl(data.url);
    });


    return (
        <div className="teacher">
            <span className="teacher__title">
                Преподаватели
            </span>
            <button className="teacher__btn">ЕГЭ</button>
            <div className="teacher__subjects">
                {subjects.map((e) => {
                    return (
                        <SubjectButton
                            key={e.id}
                            text={e.id}
                            color={e.color}
                        />
                    )
                })}
            </div>
            <div className="teacher__person">
                <div className="teacher__person__image">
                    <img className='teacher__person__image__pic' src={url} alt="Photo" />
                </div>
                <div className="teacher__person__content">
                    <span className="teacher__person__content__name">{name}</span>
                    <ul className="teacher__person__content__text">
                        <li>Опыт</li>
                        <li>Сколько учеников</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}