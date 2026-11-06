import React from 'react';
import { Link } from 'react-router-dom';
import { Badge } from '../ui/Badge';
import { blogPostsData } from '../../data/blog';

const THEME_OVERLAYS = {
  blue: {
    bg: '#0055ff',
    textColor: '#ffffff',
    blend: 'multiply' as const,
  },
  violet: {
    bg: '#5546ff',
    textColor: '#ffffff',
    blend: 'multiply' as const,
  },
  lime: {
    bg: '#c8ff00',
    textColor: '#141414',
    blend: 'multiply' as const,
  },
};

export const BlogSection: React.FC = () => {
  const posts = blogPostsData.slice(0, 3);

  return (
    <section
      id="blog"
      style={{
        padding: '96px 0',
        backgroundColor: '#ffffff',
      }}
    >
      <div className="container">
        {/* Split Header */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '28px',
            alignItems: 'end',
            marginBottom: '44px',
          }}
        >
          <div>
            <div style={{ marginBottom: '18px' }}>
              <Badge number="9" iconType="book" label="Blog" />
            </div>
            <h2
              style={{
                fontSize: 'clamp(2.25rem, 4.2vw, 3.35rem)',
                fontWeight: 500,
                letterSpacing: '-0.04em',
                lineHeight: 1.05,
                color: '#141414',
              }}
            >
              Fresh from the blog.
            </h2>
          </div>

          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <p
              style={{
                fontSize: '15px',
                lineHeight: 1.55,
                color: '#525252',
                maxWidth: '370px',
              }}
            >
              Playbooks, product news and stories from the finance teams that run on Saro.
            </p>
          </div>
        </div>

        {/* 3 Blog Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '24px',
          }}
        >
          {posts.map((post) => {
            const theme = THEME_OVERLAYS[post.coverTheme];
            return (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  textDecoration: 'none',
                  color: 'inherit',
                }}
              >
                {/* Duotone Photo Cover */}
                <div
                  style={{
                    position: 'relative',
                    height: '225px',
                    borderRadius: '22px',
                    overflow: 'hidden',
                    backgroundColor: theme.bg,
                    marginBottom: '18px',
                  }}
                >
                  <img
                    src={post.coverImage}
                    alt={post.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      filter: 'grayscale(100%) contrast(1.15)',
                      mixBlendMode: theme.blend,
                      opacity: 0.9,
                      display: 'block',
                      transition: 'transform 0.45s cubic-bezier(0.22, 1, 0.36, 1)',
                    }}
                    className="blog-cover-img"
                  />

                  {/* Top Overlay Labels */}
                  <div
                    style={{
                      position: 'absolute',
                      top: '16px',
                      left: '18px',
                      right: '18px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      color: theme.textColor,
                      zIndex: 2,
                    }}
                  >
                    <span
                      style={{
                        fontSize: '10px',
                        fontFamily: 'var(--font-mono)',
                        fontWeight: 600,
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                      }}
                    >
                      {post.category}
                    </span>
                    <span
                      style={{
                        fontSize: '13px',
                        fontWeight: 600,
                        letterSpacing: '-0.03em',
                        opacity: 0.85,
                      }}
                    >
                      saro
                    </span>
                  </div>
                </div>

                {/* Meta Row */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    marginBottom: '10px',
                  }}
                >
                  <span
                    style={{
                      padding: '4px 10px',
                      borderRadius: '999px',
                      backgroundColor: '#f5f5f5',
                      fontSize: '11.5px',
                      fontWeight: 500,
                      color: '#141414',
                    }}
                  >
                    {post.category}
                  </span>
                  <span style={{ fontSize: '12px', color: '#8a8a8a' }}>{post.date}</span>
                </div>

                {/* Title */}
                <h3
                  style={{
                    fontSize: '19px',
                    fontWeight: 500,
                    letterSpacing: '-0.025em',
                    lineHeight: 1.3,
                    color: '#141414',
                    marginBottom: '8px',
                  }}
                >
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p
                  style={{
                    fontSize: '13.5px',
                    lineHeight: 1.55,
                    color: '#6b6b6b',
                    marginBottom: '18px',
                    flexGrow: 1,
                  }}
                >
                  {post.excerpt}
                </p>

                {/* Read article footer */}
                <div
                  style={{
                    paddingTop: '14px',
                    borderTop: '1px solid #efefef',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    fontSize: '13px',
                    fontWeight: 500,
                    color: '#141414',
                  }}
                >
                  <span>Read article</span>
                  <span style={{ color: '#6b6b6b' }}>↗</span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      <style>{`
        a:hover .blog-cover-img {
          transform: scale(1.04);
        }
      `}</style>
    </section>
  );
};
