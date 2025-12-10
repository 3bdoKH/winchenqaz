import React, { useState } from 'react';
import './Header.css';

const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    return (
        <header className="header">
            <nav className="navbar">
                <div className="nav-container">
                    {/* Mobile Menu Toggle */}
                    <button
                        className={`mobile-menu-toggle ${mobileMenuOpen ? 'active' : ''}`}
                        onClick={toggleMobileMenu}
                        aria-label="القائمة"
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>

                    {/* Logo */}
                    {
                        window.innerWidth < 992 && (
                            <div className="logo">
                                <div className="logo-text">
                                    <span className="logo-main">ونش انقاذ</span>
                                </div>
                            </div>
                        )
                    }

                    {/* Navigation Menu */}
                    <div className={`nav-menu-wrapper ${mobileMenuOpen ? 'active' : ''}`}>
                        {/* Right side menu */}
                        <ul className="nav-menu nav-right">
                            <li className="nav-item">
                                <a href="/" className="nav-link active">الرئيسية</a>
                            </li>
                            <li className="nav-item">
                                <a href="/about" className="nav-link">من نحن</a>
                            </li>
                            <li className="nav-item">
                                <a href="/services" className="nav-link">الخدمات</a>
                            </li>
                        </ul>
                        {
                            window.innerWidth > 992 && (
                                <div className="logo">
                                    <div className="logo-text">
                                        <span className="logo-main">ونش انقاذ</span>
                                    </div>
                                </div>
                            )
                        }
                        {/* Left side menu */}
                        <ul className="nav-menu nav-left">
                            <li className="nav-item">
                                <a href="/areas" className="nav-link">المناطق</a>
                            </li>
                            <li className="nav-item">
                                <a href="/articles" className="nav-link">المقالات</a>
                            </li>
                            <li className="nav-item">
                                <a href="/contact" className="nav-link">اتصل بنا</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;

