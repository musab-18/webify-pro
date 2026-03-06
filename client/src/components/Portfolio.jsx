import React, { useState } from 'react';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';

const projects = [
    {
        title: "WEB DEVELOPMENT",
        category: "Web Development",
        image: "/images/web-dev.jpg",
        link: "#",
        tags: ["Java", "React", "Node.js", "MERN"]
    },
    {
        title: "DIGITAL MEDIA Marketing",
        category: "Digital Marketing",
        image: "/images/digital-media-marketing.png",
        link: "#",
        tags: ["Meta Ads", "Facebook", "Growth"]
    },
    {
        title: "MOBILE application development",
        category: "Mobile Application",
        image: "/images/app-dev-ui.jpg",
        link: "#",
        tags: ["Flutter", "Dart", "Firebase"]
    },
];

const categories = ["All", "Web Development", "Digital Marketing", "Mobile Application"];

const Portfolio = () => {
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredProjects = activeCategory === "All"
        ? projects
        : projects.filter(p => p.category === activeCategory);

    return (
        <section id="portfolio">
            <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                <h2 className="outfit" style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '16px' }}>
                    Featured <span className="gradient-text">Projects</span>
                </h2>
                <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto', marginBottom: '40px' }}>
                    Explore our latest work and see how we help businesses transform their digital presence.
                </p>

                {/* Filter Tabs */}
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '10px',
                    flexWrap: 'wrap'
                }}>
                    {categories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            style={{
                                padding: '10px 24px',
                                borderRadius: '100px',
                                border: '1px solid var(--glass-border)',
                                background: activeCategory === cat ? 'var(--primary)' : 'var(--surface-light)',
                                color: activeCategory === cat ? 'white' : 'var(--text-muted)',
                                fontWeight: '600',
                                transition: 'var(--transition)',
                                cursor: 'pointer'
                            }}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </div>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                gap: '30px'
            }}>
                {filteredProjects.map((project, index) => (
                    <div key={index} className="project-card-v2" style={{
                        position: 'relative',
                        borderRadius: '32px',
                        overflow: 'hidden',
                        background: 'var(--surface)',
                        border: '1px solid var(--glass-border)',
                        transition: 'var(--transition)',
                        height: '450px'
                    }}>
                        {/* Image Container */}
                        <div style={{ height: '60%', overflow: 'hidden' }}>
                            <img src={project.image} alt={project.title} style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                transition: '0.6s ease'
                            }} className="project-img" />
                        </div>

                        {/* Content */}
                        <div style={{ padding: '30px', position: 'relative' }}>
                            <div style={{ display: 'flex', gap: '8px', marginBottom: '12px', flexWrap: 'wrap' }}>
                                {project.tags.map(tag => (
                                    <span key={tag} style={{
                                        fontSize: '0.7rem',
                                        padding: '4px 10px',
                                        background: 'rgba(99, 102, 241, 0.1)',
                                        color: 'var(--primary)',
                                        borderRadius: '6px',
                                        fontWeight: '700'
                                    }}>
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <h3 className="outfit" style={{ fontSize: '1.4rem', fontWeight: '700', marginBottom: '8px' }}>
                                {project.title}
                            </h3>
                            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '20px' }}>
                                {project.category}
                            </p>


                        </div>

                        <style>{`
                            .project-card-v2:hover {
                                border-color: var(--primary);
                                transform: translateY(-10px);
                                box-shadow: 0 20px 40px rgba(0,0,0,0.4);
                            }
                            .project-card-v2:hover .project-img {
                                transform: scale(1.1);
                            }
                        `}</style>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Portfolio;
