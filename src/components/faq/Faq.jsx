import { Accordion } from '../accordion/Accordion';
import './style.scss';
import { faqData } from '../../constant/faqData';

export const Faq = () => {

    return (
        <div className="faq">
            <span className="faq__title">FAQ</span>
            <div className="faq__container">
                {faqData.map((e, i) => {
                    return <Accordion
                        key={i}
                        title={e.title}
                        text={e.text}
                    />
                }
                )}
            </div>
        </div>
    )
}