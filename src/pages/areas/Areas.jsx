import React, { useState } from 'react';
import './Areas.css';
import heroBackground from '../../media/hero-background.jpg';
import contactImage from '../../media/contact.jpg';
import { areas } from '../../data/areas';
import { phoneNumbers } from '../../data/phoneNumbers';
import { Building2, Building, Rocket, Map, Zap, Phone } from 'lucide-react';
const Areas = () => {
    const [selectedArea, setSelectedArea] = useState(null);

    const areaIcons = {
        'القاهرة': <Building2 color='#1565C0' />,
        'الجيزة': <Building color='#1565C0' />,
        'الإسكندرية': <Building2 color='#1565C0' />,
    };

    const areaColors = {
        'القاهرة': '#E53935',
        'الجيزة': '#C62828',
        'الإسكندرية': '#B71C1C'
    };

    const getTotalSubareas = () => {
        return areas.reduce((total, area) => total + area.areas.length, 0);
    };

    return (
        <div className="areas-page">
            {/* Hero Section */}
            <section className="areas-hero" style={{ backgroundImage: `url(${heroBackground})` }}>
                <div className="areas-hero-overlay"></div>
                <div className="areas-hero-content">
                    <h1 className="areas-hero-title">مناطق <span className="highlight">خدمتنا</span></h1>
                    <p className="areas-hero-subtitle">نخدمك في جميع أنحاء مصر على مدار الساعة</p>
                    <div className="breadcrumb">
                        <a href="/">الرئيسية</a>
                        <span className="separator">/</span>
                        <span>المناطق</span>
                    </div>
                </div>
            </section>

            {/* Overview Section */}
            <section className="areas-overview">
                <div className="overview-container">
                    <div className="overview-header">
                        <h3 className="section-subtitle">تغطية شاملة</h3>
                        <h2 className="section-title">
                            نخدم <span className="highlight">جميع المناطق</span>
                        </h2>
                        <div className="title-divider"></div>
                        <p className="overview-description">
                            نفخر بتقديم خدماتنا في {getTotalSubareas()} منطقة عبر {areas.length} محافظات رئيسية.
                            أينما كنت في مصر، فريقنا جاهز للوصول إليك في أسرع وقت ممكن بأعلى مستوى من
                            الاحترافية والأمان.
                        </p>
                    </div>

                    {/* Stats */}
                    <div className="coverage-stats">
                        <div className="stat-box">
                            <div className="stat-number">{areas.length}</div>
                            <div className="stat-label">محافظات رئيسية</div>
                        </div>
                        <div className="stat-box">
                            <div className="stat-number">{getTotalSubareas()}+</div>
                            <div className="stat-label">منطقة مخدومة</div>
                        </div>
                        <div className="stat-box">
                            <div className="stat-number">24/7</div>
                            <div className="stat-label">خدمة متواصلة</div>
                        </div>
                        <div className="stat-box">
                            <div className="stat-number">30</div>
                            <div className="stat-label">دقيقة وقت وصول</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Quick Navigation */}
            <section className="quick-nav">
                <div className="quick-nav-container">
                    <h3 className="quick-nav-title">اختر المحافظة</h3>
                    <div className="quick-nav-buttons">
                        {areas.map((area, index) => (
                            <button
                                key={index}
                                className={`nav-button ${selectedArea === area.name ? 'active' : ''}`}
                                onClick={() => setSelectedArea(selectedArea === area.name ? null : area.name)}
                            >
                                <span className="nav-icon">{areaIcons[area.name]}</span>
                                <span className="nav-text">{area.name}</span>
                                <span className="nav-count">({area.areas.length})</span>
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Main Areas Display */}
            {areas.map((mainArea, index) => (
                <section
                    key={index}
                    className={`area-section ${selectedArea && selectedArea !== mainArea.name ? 'hidden' : ''}`}
                    id={mainArea.name}
                >
                    <div className="area-container">
                        <div className="area-header">
                            <a href={`/areas/${encodeURIComponent(mainArea.name)}`} className="area-header-content">
                                <div className="area-header-text">
                                    <h2 className="area-title">{mainArea.name}</h2>
                                    <p className="area-count">{mainArea.areas.length} منطقة مخدومة</p>
                                </div>
                            </a>
                        </div>

                        <div className="subareas-grid">
                            {mainArea.areas.map((subarea, subIndex) => (
                                <a
                                    key={subIndex}
                                    href={`/areas/${encodeURIComponent(subarea)}`}
                                    className="subarea-card"
                                    style={{ borderColor: areaColors[mainArea.name] }}
                                >
                                    <div className="subarea-image" style={{ backgroundImage: `url(${contactImage})` }}>
                                        <div className="subarea-overlay"></div>
                                    </div>
                                    <div className="subarea-content">
                                        <h3 className="subarea-name">ونش انقاذ {subarea}</h3>
                                        <p className="subarea-info">خدمة متاحة 24/7</p>
                                        <div className="subarea-footer">
                                            <span className="subarea-badge">متاح الآن</span>
                                        </div>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>
                </section>
            ))}

            {/* Why Choose Us for These Areas */}
            <section className="why-areas">
                <div className="why-areas-container">
                    <div className="why-areas-header">
                        <h3 className="subtitle">تغطية محلية شاملة</h3>
                        <h2 className="section-title">
                            لماذا نغطي هذه المناطق
                        </h2>
                        <div className="title-divider"></div>
                    </div>
                    <div className="why-areas-grid">
                        <div className="why-area-card">
                            <div className="why-area-icon"><Rocket size={70} color='#1565C0' /></div>
                            <h3>استجابة سريعة</h3>
                            <p>وجودنا في هذه المناطق يضمن وصولنا إليك خلال 30 دقيقة أو أقل</p>
                        </div>
                        <div className="why-area-card">
                            <div className="why-area-icon"><Map size={70} color='#1565C0' /></div>
                            <h3>معرفة محلية</h3>
                            <p>فريقنا يعرف كل شارع وزقاق في المناطق التي نخدمها</p>
                        </div>
                        <div className="why-area-card">
                            <div className="why-area-icon"><Zap size={70} color='#1565C0' /></div>
                            <h3>توزيع استراتيجي</h3>
                            <p>ونشاتنا موزعة بشكل استراتيجي لتغطية جميع المناطق</p>
                        </div>
                        <div className="why-area-card">
                            <div className="why-area-icon"><Phone size={70} color='#1565C0' /></div>
                            <h3>دعم محلي</h3>
                            <p>فريق دعم متخصص لكل منطقة يفهم احتياجاتك</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="areas-cta">
                <div className="cta-content">
                    <h2 className="cta-title">هل منطقتك غير موجودة؟</h2>
                    <p className="cta-description">
                        نحن نتوسع باستمرار لتغطية المزيد من المناطق. اتصل بنا الآن للتأكد من توفر الخدمة في منطقتك.
                    </p>
                    <div className="cta-buttons">
                        <a href={`tel:+2${phoneNumbers[0]}`} className="cta-button primary">
                            اتصل للاستفسار: {phoneNumbers[0]}
                        </a>
                        <a href="/contact" className="cta-button secondary">
                            أرسل رسالة
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Areas;

