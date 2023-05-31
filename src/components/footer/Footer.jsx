import './style.scss';
import { ReactComponent as VK } from '../../asessts/vk.svg';
import { ReactComponent as Telegram } from '../../asessts/telegram.svg';

export const Footer = () => {

    return (
        <div className="footer">
            <div className="footer__content">
                <div className="footer__content__meta">
                    <span className="footer__content__meta__title">
                        Контакты
                    </span>
                    <span className="footer__content__meta__firm">
                        ООО &#171;СПЕЙСТУСТАДИ&#187;
                    </span>
                    <span className="footer__content__meta__contacts">
                        8 (919) 007-49-37
                    </span>
                    <span className="footer__content__meta__contacts">
                        spacetostudyonlineschool@gmail.com
                    </span>
                    <span className="footer__content__meta__adress">
                        602267, Владимирская обл.,<br />г.Муром, ул. Артема, д. 20, кв.63
                    </span>
                </div>
                <div className="footer__content__meta">
                    <span className="footer__content__meta__title">
                        Социальные сети
                    </span>
                    <div className="footer__content__meta__icons">
                        <VK />
                        <Telegram />
                    </div>
                </div>
                <div className="footer__content__meta">
                    <div className="footer__content__meta__licens"></div>
                    <span className="footer__content__meta__adress">
                        Образовательная<br /> лицензия
                    </span>
                </div>
            </div>
            <div className="footer__links">
                <nav className="footer__links__rules">
                    <a href="" className="footer__links__rules__content">
                        пользовательское соглашение
                    </a>
                    <a href="" className="footer__links__rules__content">
                        правовая информация
                    </a>
                    <a href="" className="footer__links__rules__content">
                        политика обработки персональных данных
                    </a>
                    <a href="" className="footer__links__rules__content">
                        договор оферты
                    </a>
                </nav>
                <div className="footer__links__inn">
                    <span className="footer__links__inn__data">
                        ИНН 3334024101
                    </span>
                    <span className="footer__links__inn__data">
                        ОГРН 1233300002363
                    </span>
                </div>
            </div>
        </div>
    )
}