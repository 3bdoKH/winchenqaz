import React from 'react';
import './WhatWeOffer.css';
import truckImage from '../../media/what-we-offer.png';

const WhatWeOffer = () => {
    const features = [
        {
            id: 1,
            text: 'أكثر من ',
            highlight: '30 عامًا من الخبرة',
            suffix: ''
        },
        {
            id: 2,
            text: 'وقت وصول قصير ',
            highlight: '30 دقيقة أو أقل',
            suffix: ''
        },
        {
            id: 3,
            text: 'أسعار تنافسية صادقة - ',
            highlight: 'بدون رسوم خفية',
            suffix: ''
        },
        {
            id: 4,
            text: 'خدمة ودية و',
            highlight: 'احترافية',
            suffix: ''
        },
        {
            id: 5,
            text: 'متاح ',
            highlight: '24 ساعة',
            suffix: ' في اليوم، ',
            highlight2: '7 أيام',
            suffix2: ' في الأسبوع'
        }
    ];

    return (
        <section className="what-we-offer">
            <div className="offer-container">
                <div className="offer-image">
                    <img src={truckImage} alt="شاحنة سحب" />
                </div>

                <div className="offer-content">
                    <div className="offer-header">
                        <h3 className="offer-subtitle">نقل فعال بالشاحنات المسطحة</h3>
                        <h2 className="offer-title">
                            ماذا <span className="highlight">نقدم</span>
                        </h2>
                        <div className="offer-divider">
                            <span className="star">★</span>
                            <span className="star">★</span>
                            <span className="star">★</span>
                            <span className="star">★</span>
                        </div>
                    </div>

                    <p className="offer-description">
                        نحن نقدم خدمات سحب سريعة ومهذبة وغير مكلفة في جميع أنحاء المنطقة.
                        نحن مؤمنون بالكامل ونعمل في هذا المجال منذ عام 1988. نحن مستعدون
                        للاستجابة لجميع احتياجات الطوارئ الخاصة بمركبتك على مدار 24 ساعة
                        في اليوم، سبعة أيام في الأسبوع.
                    </p>

                    <ul className="offer-features">
                        {features.map((feature) => (
                            <li key={feature.id} className="feature-item">
                                <span className="checkmark">✓</span>
                                <span className="feature-text">
                                    {feature.text}
                                    <strong>{feature.highlight}</strong>
                                    {feature.suffix}
                                    {feature.highlight2 && (
                                        <>
                                            <strong>{feature.highlight2}</strong>
                                            {feature.suffix2}
                                        </>
                                    )}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default WhatWeOffer;

