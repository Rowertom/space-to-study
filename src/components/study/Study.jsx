import './style.scss';

export const Study = () => {

    return (
        <div className='study'>
            <span className="study__title">
                О курсах
            </span>
            <span className="study__explain">
                Все обучающие материалы находятся на одной платформе
            </span>
            <div className="study__container">
                <div className="study__container__content left first">
                    <span className="study__container__content__number">1</span>
                    <span className="study__container__content__title">
                        Каждый <a className='study__link' href="/">модуль</a> включает в себя:
                    </span>
                    <span className="study__container__content__text underline">Разбор теоретического материала</span>
                    <span className="study__container__content__text underline">Практические задания<br /> для&nbsp;закрепления материала</span>
                    <span className="study__container__content__text underline">Мини-лекции от наших преподавателей</span>
                    <span className="study__container__content__text">
                        Аудио - и видеоматериалы
                    </span>
                </div>
            </div>
            <div className="study__container">
                <div className="study__container__content right second">
                    <span className="study__container__content__number">2</span>
                    <span className="study__container__content__text">Готовим <a className='study__link' href="/">понятные методички</a> для&nbsp;более быстрого усвоения материала нашими учениками</span>
                </div>
            </div>
            <div className="study__container">
                <div className="study__container__content left third">
                    <span className="study__container__content__number">3</span>
                    <span className="study__container__content__text underline">Каждую неделю проводим<br /> онлайн-занятия с преподавателем<br /> в <a className='study__link' href="/">мини-группах от 5 до 20</a> человек</span>
                    <span className="study__container__content__text">Все <a className='study__link' href="/">записи занятий</a> доступны на<br /> платформе в любое время</span>
                </div>
            </div>
            <div className="study__container">
                <div className="study__container__content right fourth">
                    <span className="study__container__content__number">4</span>
                    <span className="study__container__content__text underline">Раз в месяц <a className='study__link' href="/">проводим пробный экзамен<br /></a> для&nbsp;проверки и мониторинга знаний ученика,<br /> чтобы скорректировать вектор дальнейшего<br /> обучения для достижения наилучшего<br /> результата</span>
                    <span className="study__container__content__text">Каждый пробный экзамен <a className='study__link' href="/">проверяется вручную</a> нашими педагогами</span>
                </div>
            </div>
        </div >
    )
}