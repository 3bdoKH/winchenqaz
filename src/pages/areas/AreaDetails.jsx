import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './AreaDetails.css';
import heroBackground from '../../media/hero-background.jpg';
import contactImage from '../../media/contact.jpg';
import { areas } from '../../data/areas';
import { Building2, Building, Zap, Car, Wrench, MapPin, Phone, MessageCircle } from 'lucide-react';
const AreaDetails = () => {
    const { areaName } = useParams();
    const navigate = useNavigate();

    // Decode the URL parameter
    const decodedAreaName = decodeURIComponent(areaName);

    // Find the main area and subarea
    let mainArea = null;
    let subarea = null;
    let isMainArea = false;

    // Check if it's a main area
    const mainAreaObj = areas.find(a => a.name === decodedAreaName);
    if (mainAreaObj) {
        mainArea = mainAreaObj;
        isMainArea = true;
    } else {
        // It's a subarea, find which main area it belongs to
        for (let area of areas) {
            if (area.areas.includes(decodedAreaName)) {
                mainArea = area;
                subarea = decodedAreaName;
                break;
            }
        }
    }

    // If area not found, redirect to areas page
    if (!mainArea) {
        navigate('/areas');
        return null;
    }

    const areaIcons = {
        'القاهرة': <Building2 size={70} color='#FDB913' />,
        'الجيزة': <Building size={70} color='#FDB913' />,
        'الإسكندرية': <Building2 size={70} color='#FDB913' />,
    };

    // Generate content based on area
    const generateContent = () => {
        const areaDisplayName = isMainArea ? mainArea.name : subarea;

        return {
            title: `خدمات ونش إنقاذ السيارات في ${areaDisplayName}`,
            intro: `نقدم أفضل خدمات ونش الإنقاذ السيارات في ${areaDisplayName} على مدار 24 ساعة طوال أيام الأسبوع. فريقنا المحترف متواجد دائماً لخدمتك بأسرع وقت استجابة وأعلى مستوى من الاحترافية.`,
            whyUs: [
                {
                    icon: <Zap size={70} color='#FDB913' />,
                    title: 'استجابة فورية',
                    desc: `فريقنا في ${areaDisplayName} جاهز للوصول إليك خلال 30 دقيقة أو أقل`
                },
                {
                    icon: <Car size={70} color='#FDB913' />,
                    title: 'معدات حديثة',
                    desc: `أحدث الونشات والمعدات المتخصصة متاحة في ${areaDisplayName}`
                },
                {
                    icon: <Wrench size={70} color='#FDB913' />,
                    title: 'فريق محترف',
                    desc: `فنيون مدربون ومقيمون في منطقة ${areaDisplayName} وما حولها`
                }
            ],
            services: [
                {
                    title: 'خدمة ونش الإنقاذ',
                    desc: `نقل السيارات المعطلة في ${areaDisplayName} إلى أي موقع تحدده بأمان تام`
                },
                {
                    title: 'وصلة البطارية',
                    desc: `خدمة وصلة بطارية سريعة في ${areaDisplayName} خلال دقائق من اتصالك`
                },
                {
                    title: 'تغيير الإطارات',
                    desc: `تغيير وإصلاح الإطارات في موقعك في ${areaDisplayName}`
                },
                {
                    title: 'توصيل الوقود',
                    desc: `توصيل جميع أنواع الوقود إلى موقعك في ${areaDisplayName}`
                },
                {
                    title: 'نقل المعدات',
                    desc: `نقل المعدات الثقيلة والكرفانات في ${areaDisplayName} والمناطق المحيطة`
                },
                {
                    title: 'سحب السيارات العالقة',
                    desc: `إنقاذ السيارات العالقة في أي موقف صعب في ${areaDisplayName}`
                }
            ],
            coverage: isMainArea
                ? `نغطي ${mainArea.areas.length} منطقة في ${mainArea.name} وجميع الشوارع والطرق الرئيسية والفرعية.`
                : `نخدم ${subarea} كجزء من تغطيتنا الشاملة لمحافظة ${mainArea.name}.`,
            nearby: isMainArea
                ? mainArea.areas.slice(0, 8)
                : mainArea.areas.filter(a => a !== subarea).slice(0, 7)
        };
    };

    const content = generateContent();
    const displayName = isMainArea ? mainArea.name : subarea;

    return (
        <div className="area-details-page">
            {/* Hero Section */}
            <section className="area-details-hero" style={{ backgroundImage: `url(${heroBackground})` }}>
                <div className="area-details-hero-overlay"></div>
                <div className="area-details-hero-content">
                    <div className="hero-icon">{areaIcons[mainArea.name]}</div>
                    <h1 className="area-details-hero-title">
                        ونش إنقاذ <span className="highlight">{displayName}</span>
                    </h1>
                    <p className="area-details-hero-subtitle">خدمة احترافية 24/7 في {displayName}</p>
                    <div className="breadcrumb">
                        <a href="/">الرئيسية</a>
                        <span className="separator">/</span>
                        <a href="/areas">المناطق</a>
                        <span className="separator">/</span>
                        {!isMainArea && (
                            <>
                                <a href={`/areas/${mainArea.name}`}>{mainArea.name}</a>
                                <span className="separator">/</span>
                            </>
                        )}
                        <span>{displayName}</span>
                    </div>
                </div>
            </section>

            {/* Introduction */}
            <section className="area-intro">
                <div className="intro-container">
                    <div className="intro-content">
                        <h2 className="intro-title">{content.title}</h2>
                        <p className="intro-text">{content.intro}</p>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="area-why-us">
                <div className="why-us-container">
                    <div className="why-us-header">
                        <h3 className="section-subtitle">مميزات الخدمة</h3>
                        <h2 className="section-title">
                            لماذا نحن الأفضل في <span className="highlight">{displayName}</span>
                        </h2>
                        <div className="title-divider">
                            <span className="star">★</span>
                            <span className="star">★</span>
                            <span className="star">★</span>
                            <span className="star">★</span>
                        </div>
                    </div>
                    <div className="why-us-grid">
                        {content.whyUs.map((item, index) => (
                            <div key={index} className="why-us-card">
                                <div className="why-us-icon">{item.icon}</div>
                                <h3 className="why-us-title">{item.title}</h3>
                                <p className="why-us-desc">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services Offered */}
            <section className="area-services">
                <div className="services-container">
                    <div className="services-header">
                        <h3 className="section-subtitle">ما نقدمه</h3>
                        <h2 className="section-title">
                            خدماتنا في <span className="highlight">{displayName}</span>
                        </h2>
                        <div className="title-divider">
                            <span className="star">★</span>
                            <span className="star">★</span>
                            <span className="star">★</span>
                            <span className="star">★</span>
                        </div>
                    </div>
                    <div className="services-grid">
                        {content.services.map((service, index) => (
                            <div key={index} className="service-item">
                                <div className="service-number">{String(index + 1).padStart(2, '0')}</div>
                                <h3 className="service-title">{service.title}</h3>
                                <p className="service-desc">{service.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Coverage Info */}
            <section className="coverage-info">
                <div className="coverage-container">
                    <div className="coverage-content">
                        <div className="coverage-text">
                            <h2 className="coverage-title">تغطية شاملة في {displayName}</h2>
                            <p className="coverage-description">{content.coverage}</p>
                            <p className="coverage-description">
                                نحن نفخر بكوننا الشركة الأكثر موثوقية في {displayName}، مع سجل حافل بآلاف
                                عمليات الإنقاذ الناجحة. فريقنا يعرف المنطقة جيداً ويمتلك الخبرة اللازمة للتعامل
                                مع جميع أنواع الحالات الطارئة.
                            </p>
                            <ul className="coverage-features">
                                <li>✓ خدمة 24 ساعة طوال أيام الأسبوع</li>
                                <li>✓ أسرع وقت استجابة في المنطقة</li>
                                <li>✓ أسعار تنافسية وشفافة</li>
                                <li>✓ فريق محترف ومدرب</li>
                                <li>✓ معدات حديثة وآمنة</li>
                                <li>✓ تأمين شامل على السيارات</li>
                            </ul>
                            <a href="/contact" className="coverage-cta">احجز الخدمة الآن</a>
                        </div>
                        <div className="coverage-image">
                            <img src={contactImage} alt={displayName} />
                        </div>
                    </div>
                </div>
            </section>

            {/* Nearby Areas */}
            <section className="nearby-areas">
                <div className="nearby-container">
                    <h3 className="nearby-title">مناطق قريبة نخدمها أيضاً</h3>
                    <div className="nearby-grid">
                        {content.nearby.map((nearbyArea, index) => (
                            <a
                                key={index}
                                href={`/areas/${nearbyArea}`}
                                className="nearby-card"
                            >
                                <span className="nearby-icon"><MapPin color='#FDB913'
                                    style={
                                        {
                                            marginBottom: '-6px'
                                        }
                                    }
                                /></span>
                                <span className="nearby-name">ونش {nearbyArea}</span>
                            </a>
                        ))}
                    </div>
                    <a href="/areas" className="view-all-areas">عرض جميع المناطق ←</a>
                </div>
            </section>

            {/* Emergency Contact */}
            <section className="area-emergency">
                <div className="emergency-content">
                    <h2 className="emergency-title">
                        تحتاج ونش في {displayName} الآن؟
                    </h2>
                    <p className="emergency-description">
                        اتصل بنا فوراً وسيصل فريقنا إليك في {displayName} خلال دقائق!
                    </p>
                    <div className="emergency-buttons">
                        <a href="tel:+20012456789" className="emergency-button primary">
                            <Phone color='black' style={
                                {
                                    marginBottom: '-6px'
                                }
                            } /> اتصل الآن: 012456789
                        </a>
                        <a
                            href={`https://wa.me/20012456789?text=${encodeURIComponent(`أحتاج خدمة ونش في ${displayName}`)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="emergency-button secondary"
                        >
                            <MessageCircle color='#FDB913' style={
                                {
                                    marginBottom: '-6px'
                                }
                            } /> واتساب
                        </a>
                    </div>
                </div>
            </section>

            {/* SEO Content */}
            <section className="seo-content">
                <div className="seo-container">
                    <div className="seo-text">
                        <h2>لماذا نحن الخيار الأول لخدمات الونش في {displayName}؟</h2>
                        <p>
                            عندما تبحث عن خدمة ونش موثوقة في {displayName}، فإن اختيار الشركة المناسبة أمر
                            في غاية الأهمية. نحن نقدم خدمات إنقاذ السيارات الأكثر احترافية في {displayName}
                            مع ضمان الوصول السريع والخدمة الممتازة.
                        </p>

                        <h3>خدماتنا المتكاملة في {displayName}</h3>
                        <p>
                            نحن نوفر مجموعة شاملة من خدمات الطوارئ للسيارات في {displayName}. سواء كنت بحاجة
                            إلى ونش لنقل سيارتك المعطلة، أو وصلة بطارية، أو تغيير إطار، أو توصيل وقود، فريقنا
                            في {displayName} جاهز دائماً لمساعدتك.
                        </p>

                        <h3>خبرة محلية في {displayName}</h3>
                        <p>
                            فريقنا في {displayName} يمتلك معرفة عميقة بجميع الشوارع والطرق في المنطقة. هذه
                            المعرفة المحلية تمكننا من الوصول إليك بأسرع طريق ممكن، حتى في أوقات الذروة المرورية.
                        </p>

                        <h3>لماذا العملاء في {displayName} يثقون بنا؟</h3>
                        <ul className="seo-list">
                            <li><strong>السرعة:</strong> نصل خلال 30 دقيقة أو أقل في {displayName}</li>
                            <li><strong>الأمان:</strong> نستخدم أحدث المعدات لحماية سيارتك</li>
                            <li><strong>الاحترافية:</strong> فريق مدرب على أعلى مستوى</li>
                            <li><strong>الشفافية:</strong> أسعار واضحة بدون رسوم خفية</li>
                            <li><strong>التوفر:</strong> خدمة 24/7 في {displayName}</li>
                            <li><strong>التأمين:</strong> جميع السيارات المنقولة مؤمنة بالكامل</li>
                        </ul>

                        <h3>كيف تحصل على خدمة الونش في {displayName}؟</h3>
                        <p>
                            الحصول على خدمة الونش في {displayName} أمر بسيط جداً. كل ما عليك فعله هو الاتصال
                            بنا على الرقم الموحد أو إرسال رسالة واتساب، وسنطلب منك موقعك الحالي في {displayName}
                            ونوع المشكلة التي تواجهها. سيتحرك فريقنا فوراً للوصول إليك.
                        </p>

                        <h3>تغطية شاملة في {displayName} وما حولها</h3>
                        <p>
                            بالإضافة إلى {displayName}، نحن نخدم أيضاً جميع المناطق المحيطة في {mainArea.name}.
                            أينما كنت في المنطقة، يمكنك الاعتماد علينا للحصول على خدمة إنقاذ سريعة وموثوقة.
                        </p>

                        <h3>اتصل بنا الآن للحصول على خدمة ونش في {displayName}</h3>
                        <p>
                            لا تتردد في الاتصال بنا في أي وقت من اليوم أو الليل. خدمة الطوارئ الخاصة بنا
                            في {displayName} متاحة على مدار الساعة، وفريقنا جاهز دائماً للاستجابة لطلبك
                            بأسرع وقت ممكن.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AreaDetails;

