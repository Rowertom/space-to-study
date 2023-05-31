import './style.scss';

export const Banner = () => {

    return (
        <div className="banner">
            <span className="banner__title">Подготовимся к ЕГЭ вместе</span>
            <span className="banner__date">
                только
                <span className="banner__date__before">
                    &#160;до 3 сентября
                </span>
            </span>
            <span className="banner__formula">1+1=3</span>
            <span className="banner__explain">три курса по цене двух</span>
            <div className="banner__btn">
                <button className="banner__btn__more">Подробнее</button>
                <button className="banner__btn__buy">Купить</button>
            </div>
        </div>
    )
}