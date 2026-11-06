import React from 'react';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { blogPostsData } from '../../data/blog';
import { ArrowRight, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

export const BlogSection: React.FC = () => {
  return (
    <section
      id="blog"
      data-framer-name="Latest Posts"
      style={{
        paddingTop: '96px',
        paddingBottom: '96px',
        backgroundColor: '#fafafa',
        borderTop: '1px solid var(--color-border)',
        borderBottom: '1px solid var(--color-border)',
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            marginBottom: '48px',
            flexWrap: 'wrap',
            gap: '24px',
          }}
        >
          <div>
            <div style={{ display: 'inline-flex', marginBottom: '16px' }}>
              <Badge number="9" label="Blog" />
            </div>
            <h2 className="section-title" style={{ marginBottom: '12px' }}>
              Fresh from the blog.
            </h2>
            <p className="section-description">
              Playbooks, product news and stories from the finance teams that run on Saro.
            </p>
          </div>

          <Button to="/blog" variant="secondary" size="md" iconRight={<ArrowRight size={16} />}>
            View all posts
          </Button>
        </div>

        {/* 3 Featured Article Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(320px, 100%), 1fr))',
            gap: '24px',
          }}
        >
          {blogPostsData.slice(0, 3).map((post) => (
            <Link
              key={post.slug}
              to={`/blog/${post.slug}`}
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '20px',
                border: '1px solid var(--color-border)',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxShadow: 'var(--shadow-card)',
                transition: 'transform var(--transition-fast), border-color var(--transition-fast)',
                textDecoration: 'none',
              }}
              className="blog-card"
            >
              {/* Graphic Card Cover */}
              <div
                style={{
                  height: '180px',
                  backgroundColor: '#f0f0f0',
                  padding: '24px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  background: 'linear-gradient(135deg, #f7f7f7 0%, #ebebeb 100%)',
                  borderBottom: '1px solid #ebebeb',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span
                    style={{
                      fontSize: '11px',
                      fontWeight: 700,
                      color: 'var(--color-primary)',
                      backgroundColor: '#ffffff',
                      padding: '3px 8px',
                      borderRadius: 'var(--radius-full)',
                      border: '1px solid #e0e0e0',
                      textTransform: 'uppercase',
                    }}
                  >
                    {post.category}
                  </span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '12px', color: '#707070' }}>
                    <Clock size={13} />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span style={{ fontSize: '18px', fontWeight: 700, letterSpacing: '-0.04em', color: '#141414' }}>saro</span>
                  <span style={{ fontSize: '11px', color: '#707070' }}>Â· {post.date}</span>
                </div>
              </div>

              {/* Content Body */}
              <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'space-between' }}>
                <div>
                  <h3
                    style={{
                      fontSize: '18px',
                      fontWeight: 600,
                      color: '#141414',
                      lineHeight: 1.35,
                      marginBottom: '10px',
                    }}
                  >
                    {post.title}
                  </h3>
                  <p style={{ fontSize: '14px', color: '#707070', lineHeight: 1.5, marginBottom: '20px' }}>
                    {post.excerpt}
                  </p>
                </div>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontSize: '13px',
                    fontWeight: 600,
                    color: 'var(--color-primary)',
                  }}
                >
                  <span>Read article</span>
                  <ArrowRight size={14} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <style>{`
        .blog-card:hover {
          border-color: #0066ff !important;
          transform: translateY(-2px);
        }
      `}</style>
    </section>
  );
};
