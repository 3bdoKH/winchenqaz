import React, { useState, useMemo } from 'react';
import './Areas.css';
import heroBackground from '../../media/hero-background.jpg';
import contactImage from '../../media/contact.jpg';
import { areas } from '../../data/areas';
import { phoneNumbers } from '../../data/phoneNumbers';
import { Building2, Building, Rocket, Map, Zap, Phone, Search, X } from 'lucide-react';
const Areas = () => {
    const [selectedArea, setSelectedArea] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');

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

    // Filtered areas: apply governorate filter + subarea text search
    const filteredAreas = useMemo(() => {
        return areas
            .filter(mainArea => !selectedArea || mainArea.name === selectedArea)
            .map(mainArea => ({
                ...mainArea,
                areas: mainArea.areas.filter(sub =>
                    sub.includes(searchTerm.trim())
                )
            }))
            .filter(mainArea => mainArea.areas.length > 0);
    }, [selectedArea, searchTerm]);

    const totalResults = filteredAreas.reduce((t, a) => t + a.areas.length, 0);

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
                        <div className="stat-box-areas">
                            <div className="stat-number-areas">{areas.length}</div>
                            <div className="stat-label-areas">محافظات رئيسية</div>
                        </div>
                        <div className="stat-box-areas">
                            <div className="stat-number-areas">{getTotalSubareas()}+</div>
                            <div className="stat-label-areas">منطقة مخدومة</div>
                        </div>
                        <div className="stat-box-areas">
                            <div className="stat-number-areas">24/7</div>
                            <div className="stat-label-areas">خدمة متواصلة</div>
                        </div>
                        <div className="stat-box-areas">
                            <div className="stat-number-areas">30</div>
                            <div className="stat-label-areas">دقيقة وقت وصول</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Search & Filter */}
            <section className="areas-search-section">
                <div className="areas-search-container">
                    {/* Search Bar */}
                    <div className="areas-search-box">
                        <span className="areas-search-icon"><Search size={20} /></span>
                        <input
                            type="text"
                            className="areas-search-input"
                            placeholder="ابحث عن منطقة... مثال: المعادي، الدقي"
                            value={searchTerm}
                            onChange={e => setSearchTerm(e.target.value)}
                            dir="rtl"
                        />
                        {searchTerm && (
                            <button className="areas-search-clear" onClick={() => setSearchTerm('')}>
                                <X size={16} />
                            </button>
                        )}
                    </div>

                    {/* Governorate Filter Pills */}
                    <div className="areas-filter-pills">
                        <button
                            className={`areas-filter-pill ${!selectedArea ? 'active' : ''}`}
                            onClick={() => setSelectedArea(null)}
                        >
                            الكل
                            <span className="pill-count">{getTotalSubareas()}</span>
                        </button>
                        {areas.map((area, index) => (
                            <button
                                key={index}
                                className={`areas-filter-pill ${selectedArea === area.name ? 'active' : ''}`}
                                onClick={() => setSelectedArea(selectedArea === area.name ? null : area.name)}
                            >
                                <span className="pill-icon">{areaIcons[area.name]}</span>
                                {area.name}
                                <span className="pill-count">{area.areas.length}</span>
                            </button>
                        ))}
                    </div>

                    {/* Results count */}
                    <p className="areas-results-count" dir="rtl">
                        {searchTerm || selectedArea
                            ? `عرض ${totalResults} منطقة`
                            : `إجمالي ${getTotalSubareas()} منطقة مخدومة`
                        }
                    </p>
                </div>
            </section>

            {/* Main Areas Display */}
            {filteredAreas.length > 0 ? (
                filteredAreas.map((mainArea, index) => (
                    <section
                        key={index}
                        className="area-section"
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
                ))
            ) : (
                <section className="areas-no-results">
                    <div className="no-results-inner">
                        <Search size={64} color="var(--primary)" />
                        <h3>لا توجد نتائج لـ "{searchTerm}"</h3>
                        <p>جرّب كلمة بحث أخرى أو اختر محافظة مختلفة</p>
                        <button className="areas-filter-pill active" onClick={() => { setSearchTerm(''); setSelectedArea(null); }}>
                            عرض كل المناطق
                        </button>
                    </div>
                </section>
            )}

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

