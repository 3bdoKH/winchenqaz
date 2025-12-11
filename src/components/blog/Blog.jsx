import React from 'react';
import './Blog.css';
import { articles } from '../../data/articles';
import { Link } from 'react-router-dom';

const Blog = () => {
    // Get the first 3 articles
    const featuredArticles = articles.slice(0, 3);

    // Function to format date to Arabic
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return date.toLocaleDateString('ar-EG', options);
    };

    return (
        <section className="blog-section">
            <div className="blog-container">
                <div className="blog-header">
                    <h3 className="blog-subtitle">في أي مكان، في أي وقت</h3>
                    <h2 className="blog-title">
                        مدونتنا <span className="highlight">الإخبارية</span>
                    </h2>
                    <div className="blog-divider">
                        <span className="star">★</span>
                        <span className="star">★</span>
                        <span className="star">★</span>
                        <span className="star">★</span>
                    </div>
                </div>

                <div className="blog-grid">
                    {featuredArticles.map((article) => (
                        <a
                            key={article.id}
                            href={`/articles/${article.slug}`}
                            className="blog-card"
                        >
                            <div className="blog-image-wrapper">
                                <img src={article.image} alt={article.title} className="blog-image" />
                                <div className="blog-image-overlay"></div>
                            </div>
                            <div className="blog-card-content">
                                <h3 className="blog-card-title">{article.title}</h3>
                                <p className="blog-card-excerpt">{article.excerpt}</p>
                                <div className="blog-card-footer">
                                    <span className="blog-date">{formatDate(article.date)}</span>
                                    <span className="blog-author">بواسطة {article.author}</span>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
                <div className="blog-button-container">
                    <Link to="/articles" className="blog-button">
                        عرض الكل
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Blog;

