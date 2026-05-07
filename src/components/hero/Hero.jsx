import React from 'react';
import './Hero.css';
import heroBackground from '../../media/hero-background.jpg';
import { ClockCheck, PhoneCall, ShieldCheck, Star } from 'lucide-react';
const Hero = () => {
    const scrollToContent = () => {
        window.scrollBy({
            top: window.innerHeight,
            behavior: 'smooth'
        });
    };

    return (
        <section className="hero">
            <div className="hero-background">
                <img src={heroBackground} alt="ونش سحب وإنقاذ سيارات على الطريق السريع" />
                <div className="hero-overlay"></div>
            </div>

            <div className="hero-content">
                <div className="hero-text">
                    <div className="hero-badge">
                        <Star size={14} /> خدمة طوارئ موثوقة منذ 1988
                    </div>
                    <h1 className="hero-title">
                        نقدم أعلى جودة من
                        <span className="hero-title-highlight"> خدمات السحب والإنقاذ</span>
                    </h1>
                    <p className="hero-subtitle">
                        ونش إنقاذ سريع وأسعار تنافسية — متاح 24 ساعة على مدار الأسبوع في الإسكندرية والمناطق المحيطة
                    </p>
                    <div className="hero-actions">
                        <a href="tel:01234567890" className="hero-cta-btn">
                            <PhoneCall size={20} />
                            اتصل الآن: 01234567890
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

                <div className="scroll-indicator" onClick={scrollToContent}>
                    <div className="mouse">
                        <div className="wheel"></div>
                    </div>
                    <p>تمرير</p>
                </div>
            </div>

            <div className="hero-banner">
                <div className="banner-container">
                    <div className="banner-item arrival">
                        <div className="banner-icon">
                            <ClockCheck />
                        </div>
                        <div className="banner-text">
                            <span className="banner-label">أقل من</span>
                            <span className="banner-highlight"> 30 دقيقة</span>
                            <span className="banner-label"> وصول</span>
                        </div>
                    </div>

                    <div className="banner-item phone">
                        <a href="tel:01234567890" className="phone-number">
                            01234567890
                        </a>
                    </div>

                    <div className="banner-item service">
                        <div className="banner-icon">
                            <PhoneCall />
                        </div>
                        <div className="banner-text">
                            <span className="banner-highlight">متاح 24/7</span>
                            <span className="banner-label"> خدمة السحب</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;

