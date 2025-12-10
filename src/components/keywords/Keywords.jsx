import React from 'react';
import './Keywords.css';

const Keywords = () => {
    const keywords = [
        'ونش القاهرة',
        'خدمات إنقاذ السيارات',
        'ونش 24 ساعة',
        'نقل سيارات معطلة',
        'ونش الجيزة',
        'خدمات طوارئ الطريق',
        'تغيير إطارات',
        'وصلة بطارية',
        'ونش الإسكندرية',
        'نقل معدات ثقيلة',
        'ونش سريع',
        'إنقاذ سيارات مصر',
        'خدمة ونش احترافية',
        'نقل كرفانات',
        'ونش طرق سريعة',
        'توصيل وقود',
        'ونش حوادث',
        'خدمات ونش رخيصة',
        'ونش الطريق الصحراوي',
        'نقل سيارات فاخرة',
        'ونش شاحنات',
        'خدمات طوارئ سيارات',
        'ونش الساحل الشمالي',
        'إصلاح سيارات على الطريق',
        'ونش العاصمة الإدارية',
        'نقل سيارات آمن',
        'ونش مدينة نصر',
        'خدمات ونش موثوقة',
        'ونش الشيخ زايد',
        'إنقاذ سيارات عالقة'
    ];

    return (
        <section className="keywords-section">
            <div className="keywords-container">
                <div className="keywords-header">
                    <h3 className="keywords-subtitle">ابحث عن خدماتنا</h3>
                    <h2 className="keywords-title">
                        كلمات <span className="highlight">بحث ذات صلة</span>
                    </h2>
                    <div className="keywords-divider">
                        <span className="star">★</span>
                        <span className="star">★</span>
                        <span className="star">★</span>
                        <span className="star">★</span>
                    </div>
                </div>

                <div className="keywords-cloud">
                    {keywords.map((keyword, index) => (
                        <span key={index} className="keyword-tag">
                            {keyword}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Keywords;

