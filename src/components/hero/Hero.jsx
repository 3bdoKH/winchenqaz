import React from 'react';
import './Hero.css';
import heroBackground from '../../media/hero-background.jpg';
import { ClockCheck, PhoneCall } from 'lucide-react';
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
                <img src={heroBackground} alt="خلفية ونش السحب" />
                <div className="hero-overlay"></div>
            </div>

            <div className="hero-content">
                <div className="hero-text">
                    <h1 className="hero-title">
                        نقدم أعلى جودة من
                        <span className="hero-title-highlight"> خدمات السحب والإنقاذ</span>
                    </h1>
                    <p className="hero-subtitle">
                        خدمات سحب سريعة وغير مكلفة ومساعدة على الطريق متوفرة على مدار الساعة
                    </p>
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
                        <a href="tel:01055888893" className="phone-number">
                            01055888893
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

