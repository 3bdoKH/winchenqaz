import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './AreaDetails.css';
import heroBackground from '../../media/hero-background.jpg';
import contactImage from '../../media/contact.jpg';
import { areas } from '../../data/areas';
import { phoneNumbers } from '../../data/phoneNumbers';
import { Building2, Building, Zap, Car, Wrench, MapPin, Phone, MessageCircle, CheckCircle } from 'lucide-react';
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
        'القاهرة': <Building2 size={70} color='#1565C0' />,
        'الجيزة': <Building size={70} color='#1565C0' />,
        'الإسكندرية': <Building2 size={70} color='#1565C0' />,
    };

    // Generate content based on area
    const generateContent = () => {
        const areaDisplayName = isMainArea ? mainArea.name : subarea;

        return {
            title: `خدمات ونش إنقاذ السيارات في ${areaDisplayName}`,
            intro: `نقدم أفضل خدمات ونش الإنقاذ السيارات في ${areaDisplayName} على مدار 24 ساعة طوال أيام الأسبوع. فريقنا المحترف متواجد دائماً لخدمتك بأسرع وقت استجابة وأعلى مستوى من الاحترافية. مع خبرة تزيد عن 30 عاماً في خدمة السيارات المعطلة على الطرق، نحن الاختيار الأول لأهالي ${areaDisplayName}.`,
            whyUs: [
                {
                    icon: <Zap size={70} color='#1565C0' />,
                    title: 'استجابة فورية',
                    desc: `فريقنا في ${areaDisplayName} جاهز للوصول إليك خلال 30 دقيقة أو أقل في أي وقت من اليوم أو الليل`
                },
                {
                    icon: <Car size={70} color='#1565C0' />,
                    title: 'معدات حديثة',
                    desc: `أحدث الونشات والمعدات المتخصصة متاحة في ${areaDisplayName} لضمان سلامة سيارتك أثناء النقل`
                },
                {
                    icon: <Wrench size={70} color='#1565C0' />,
                    title: 'فريق محترف',
                    desc: `فنيون مدربون ومقيمون في منطقة ${areaDisplayName} وما حولها يعرفون كل طريق وحارة في المنطقة`
                }
            ],
            services: [
                {
                    title: 'خدمة ونش الإنقاذ',
                    desc: `نقل السيارات المعطلة في ${areaDisplayName} إلى أي موقع تحدده بأمان تام وبأسعار مناسبة`
                },
                {
                    title: 'وصلة البطارية',
                    desc: `خدمة وصلة بطارية سريعة في ${areaDisplayName} خلال دقائق من اتصالك — لا تتأخر في الطريق`
                },
                {
                    title: 'تغيير الإطارات',
                    desc: `تغيير وإصلاح الإطارات في موقعك بـ${areaDisplayName} دون الحاجة لتحريك سيارتك`
                },
                {
                    title: 'توصيل الوقود',
                    desc: `توصيل جميع أنواع الوقود (بنزين ودينا سول) إلى موقعك في ${areaDisplayName} على مدار الساعة`
                },
                {
                    title: 'نقل المعدات الثقيلة',
                    desc: `نقل المعدات الثقيلة والكرفانات في ${areaDisplayName} والمناطق المحيطة بكل احترافية`
                },
                {
                    title: 'سحب السيارات العالقة',
                    desc: `إنقاذ السيارات العالقة في الوحل أو الرمال أو أي موقف صعب في ${areaDisplayName}`
                }
            ],
            coverage: isMainArea
                ? `نغطي ${mainArea.areas.length} منطقة في ${mainArea.name} وجميع الشوارع والطرق الرئيسية والفرعية.`
                : `نخدم ${subarea} كجزء من تغطيتنا الشاملة لمحافظة ${mainArea.name}.`,
            nearby: isMainArea
                ? mainArea.areas.slice(0, 8)
                : mainArea.areas.filter(a => a !== subarea).slice(0, 7),
            faq: [
                {
                    q: `كم تستغرق مدة وصول الونش في ${areaDisplayName}؟`,
                    a: `نهدف للوصول إليك في ${areaDisplayName} خلال 30 دقيقة أو أقل. في أوقات الذروة المرورية قد يصل الفريق خلال 45 دقيقة. نقدم تحديثاً فورياً عبر الهاتف عن موقع الفريق.`
                },
                {
                    q: `هل تعمل خدمة الونش في ${areaDisplayName} ليلاً وأيام الإجازات؟`,
                    a: `نعم، خدمتنا في ${areaDisplayName} متاحة 24 ساعة في اليوم، 7 أيام في الأسبوع، بما في ذلك العطلات الرسمية والأعياد. لا يوجد وقت غير مناسب للطوارئ.`
                },
                {
                    q: `ما تكلفة خدمة الونش في ${areaDisplayName}؟`,
                    a: `نقدم أسعاراً تنافسية وشفافة في ${areaDisplayName} بدون رسوم خفية. يعتمد السعر على المسافة ونوع الخدمة. اتصل بنا للحصول على سعر دقيق مجاناً.`
                },
                {
                    q: `هل سيارتي مؤمنة أثناء نقلها في ${areaDisplayName}؟`,
                    a: `بالتأكيد. جميع السيارات التي ننقلها في ${areaDisplayName} مؤمنة بالكامل ضد أي أضرار محتملة أثناء النقل. سيارتك في أيدٍ أمينة.`
                }
            ]
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
                    <p className="area-details-hero-subtitle">خدمة احترافية 24/7 في {displayName} — اتصل الآن: {phoneNumbers[0]}</p>
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
                        <div className="title-divider"></div>
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

            {/* SEO Content */}
            <section className="seo-content">
                <div className="seo-container">
                    <div className="seo-text">
                        <h2>لماذا نحن الخيار الأول لخدمات الونش في {displayName}؟</h2>
                        <p>
                            عندما تبحث عن خدمة ونش موثوقة في {displayName}، فإن اختيار الشركة المناسبة أمر
                            في غاية الأهمية. نحن نقدم خدمات إنقاذ السيارات الأكثر احترافية في {displayName}
                            مع ضمان الوصول السريع والخدمة الممتازة منذ أكثر من 30 عاماً.
                        </p>

                        <h3>خدماتنا المتكاملة في {displayName}</h3>
                        <p>
                            نحن نوفر مجموعة شاملة من خدمات الطوارئ للسيارات في {displayName}. سواء كنت بحاجة
                            إلى ونش لنقل سيارتك المعطلة، أو وصلة بطارية، أو تغيير إطار، أو توصيل وقود، فريقنا
                            في {displayName} جاهز دائماً لمساعدتك في أي وقت من اليوم أو الليل.
                        </p>

                        <h3>خبرة محلية عميقة في {displayName}</h3>
                        <p>
                            فريقنا في {displayName} يمتلك معرفة عميقة بجميع الشوارع والطرق في المنطقة — من
                            الطرق السريعة والمحاور الرئيسية إلى الشوارع الداخلية الفرعية. هذه المعرفة المحلية
                            تمكننا من الوصول إليك بأسرع طريق ممكن حتى في أوقات الذروة المرورية أو في الليل.
                        </p>

                        <h3>لماذا العملاء في {displayName} يثقون بنا؟</h3>
                        <ul className="seo-list">
                            <li><strong>السرعة:</strong> نصل خلال 30 دقيقة أو أقل في {displayName} — وهو أفضل وقت استجابة في المنطقة</li>
                            <li><strong>الأمان:</strong> نستخدم أحدث المعدات والتقنيات لحماية سيارتك بالكامل أثناء النقل</li>
                            <li><strong>الاحترافية:</strong> فريق مدرب ومعتمد على أعلى مستوى من الكفاءة والخبرة</li>
                            <li><strong>الشفافية:</strong> أسعار واضحة ومحددة بدون رسوم خفية أو مفاجآت</li>
                            <li><strong>التوفر:</strong> خدمة 24/7 في {displayName} طوال أيام السنة بما فيها الأعياد</li>
                            <li><strong>التأمين:</strong> جميع السيارات المنقولة مؤمنة بالكامل لراحة بالك</li>
                        </ul>

                        <h3>كيف تحصل على خدمة الونش في {displayName}؟</h3>
                        <p>
                            الحصول على خدمة الونش في {displayName} أمر بسيط جداً — خطوتان فقط:
                            اتصل بنا على الرقم <strong>{phoneNumbers[0]}</strong> أو أرسل رسالة واتساب، وأخبرنا
                            بموقعك الحالي في {displayName} ونوع المشكلة. سيتحرك فريقنا فوراً نحوك
                            مع تقديم تحديث مستمر عن موقع الفريق حتى وصوله إليك.
                        </p>

                        <h3>تغطية شاملة في {displayName} وما حولها</h3>
                        <p>
                            بالإضافة إلى {displayName}، نخدم أيضاً جميع المناطق المحيطة في {mainArea.name}.
                            أينما كنت في المنطقة، سواء على الطريق السريع أو في المناطق الداخلية، يمكنك
                            الاعتماد علينا للحصول على خدمة إنقاذ سريعة وموثوقة.
                        </p>

                        <h3>خدمة الونش في {displayName} — الاتصال الفوري</h3>
                        <p>
                            لا تتردد في الاتصال بنا في أي وقت. خدمة الطوارئ الخاصة بنا في {displayName}
                            متاحة على مدار الساعة، 365 يوماً في السنة. اتصل الآن على
                            <strong> {phoneNumbers[0]} </strong> وسنكون معك في أقرب وقت ممكن.
                        </p>
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
                        <div className="title-divider"></div>
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
                                مع جميع أنواع الحالات الطارئة في أسرع وقت ممكن.
                            </p>
                            <ul className="coverage-features">
                                <li><CheckCircle size={16} style={{ display: 'inline-block', marginLeft: '8px', marginBottom: '-3px', color: '#1565C0' }} /> خدمة 24 ساعة طوال أيام الأسبوع</li>
                                <li><CheckCircle size={16} style={{ display: 'inline-block', marginLeft: '8px', marginBottom: '-3px', color: '#1565C0' }} /> أسرع وقت استجابة في المنطقة</li>
                                <li><CheckCircle size={16} style={{ display: 'inline-block', marginLeft: '8px', marginBottom: '-3px', color: '#1565C0' }} /> أسعار تنافسية وشفافة بدون رسوم خفية</li>
                                <li><CheckCircle size={16} style={{ display: 'inline-block', marginLeft: '8px', marginBottom: '-3px', color: '#1565C0' }} /> فريق محترف ومدرب على أعلى مستوى</li>
                                <li><CheckCircle size={16} style={{ display: 'inline-block', marginLeft: '8px', marginBottom: '-3px', color: '#1565C0' }} /> معدات حديثة وآمنة للحفاظ على سيارتك</li>
                                <li><CheckCircle size={16} style={{ display: 'inline-block', marginLeft: '8px', marginBottom: '-3px', color: '#1565C0' }} /> تأمين شامل على جميع السيارات المنقولة</li>
                            </ul>
                            <a href="/contact" className="coverage-cta">احجز الخدمة الآن</a>
                        </div>
                        <div className="coverage-image">
                            <img src={contactImage} alt={`خدمة ونش إنقاذ في ${displayName}`} />
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
                                <span className="nearby-icon"><MapPin color='#1565C0'
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
                        اتصل بنا فوراً وسيصل فريقنا إليك في {displayName} خلال 30 دقيقة أو أقل!
                    </p>
                    <div className="emergency-buttons">
                        <a href={`tel:+2${phoneNumbers[0]}`} className="emergency-button primary">
                            <Phone color='white' style={
                                {
                                    marginBottom: '-6px'
                                }
                            } /> اتصل الآن: {phoneNumbers[0]}
                        </a>
                        <a
                            href={`https://wa.me/+2${phoneNumbers[0]}?text=${encodeURIComponent(`أحتاج خدمة ونش في ${displayName}`)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="emergency-button secondary"
                        >
                            <MessageCircle color='#1565C0' style={
                                {
                                    marginBottom: '-6px'
                                }
                            } /> واتساب
                        </a>
                    </div>
                </div>
            </section>

            {/* FAQ Section - SEO boost */}
            <section className="area-faq">
                <div className="faq-container">
                    <div className="faq-header">
                        <h3 className="section-subtitle">أسئلة شائعة</h3>
                        <h2 className="section-title">
                            الأسئلة الأكثر شيوعاً عن <span className="highlight">خدمة الونش في {displayName}</span>
                        </h2>
                        <div className="title-divider"></div>
                    </div>
                    <div className="faq-grid">
                        {content.faq.map((item, index) => (
                            <div key={index} className="faq-item">
                                <h3 className="faq-question">
                                    <span className="faq-num">س{index + 1}</span>
                                    {item.q}
                                </h3>
                                <p className="faq-answer">{item.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


        </div>
    );
};

export default AreaDetails;
