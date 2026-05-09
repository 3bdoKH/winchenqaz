import React from 'react';
import './Hero.css';
import heroBackground from '../../media/hero-background.jpg';
import { ClockCheck, PhoneCall, ShieldCheck, Star } from 'lucide-react';
import { phoneNumbers } from '../../data/phoneNumbers';
const Hero = () => {

    return (
        <section className="hero">
            <div className="hero-container">
                <div className="hero-content">
                    <div className="hero-text">
                        <div className="hero-badge">
                            <Star size={14} /> خدمة طوارئ موثوقة
                        </div>
                        <h1 className="hero-title">
                            نقدم أعلى جودة من
                            <span className="hero-title-highlight"> خدمات السحب والإنقاذ</span>
                        </h1>
                        <p className="hero-subtitle">
                            ونش إنقاذ سريع وأسعار تنافسية — متاح 24 ساعة على مدار الأسبوع في الإسكندرية والمناطق المحيطة
                        </p>
                        <div className="hero-actions">
                            <a href={`tel:${phoneNumbers[0]}`} className="hero-cta-btn">
                                <PhoneCall size={20} />
                                اتصل الآن: {phoneNumbers[0]}
                            </a>
                            <a href="/areas" className="hero-cta-outline">
                                مناطق الخدمة ←
                            </a>
                        </div>
                        <div className="hero-trust">
                            <div className="trust-item">
                                <ShieldCheck size={16} />
                                <span>مؤمن بالكامل</span>
                            </div>
                            <div className="trust-item">
                                <ClockCheck size={16} />
                                <span>وصول خلال 30 دقيقة</span>
                            </div>
                            <div className="trust-item">
                                <Star size={16} />
                                <span>+5000 عميل راضٍ</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="hero-image-wrapper">
                    <div className="hero-image-inner">
                        <img src={heroBackground} alt="ونش سحب وإنقاذ سيارات على الطريق السريع" className="hero-image" />
                    </div>

                    <div className="hero-floating-card">
                        <div className="floating-card-icon"><ClockCheck size={24} /></div>
                        <div className="floating-card-text">
                            <span className="floating-card-title">استجابة سريعة</span>
                            <span className="floating-card-desc">أقل من 30 دقيقة</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;

