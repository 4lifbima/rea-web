import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { blogPostsData } from '../data/blog';
import { ArrowLeft, Clock, Calendar, Share2, Check } from 'lucide-react';

export const BlogPostPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [copied, setCopied] = React.useState(false);

  const post = blogPostsData.find((p) => p.slug === slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const related = blogPostsData.filter((p) => p.slug !== slug).slice(0, 2);

  return (
    <article style={{ paddingTop: '116px', paddingBottom: '96px' }}>
      <div className="container" style={{ maxWidth: '820px' }}>
        {/* Back Link */}
        <Link
          to="/blog"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            fontSize: '14px',
            fontWeight: 500,
            color: 'var(--color-text-secondary)',
            marginBottom: '32px',
          }}
        >
          <ArrowLeft size={16} />
          <span>Back to all articles</span>
        </Link>

        {/* Article Meta */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px', flexWrap: 'wrap' }}>
          <span
            style={{
              fontSize: '12px',
              fontWeight: 700,
              color: 'var(--color-primary)',
              backgroundColor: 'var(--color-primary-subtle)',
              padding: '4px 10px',
              borderRadius: 'var(--radius-full)',
              textTransform: 'uppercase',
            }}
          >
            {post.category}
          </span>
          <span style={{ fontSize: '13px', color: '#707070', display: 'flex', alignItems: 'center', gap: '4px' }}>
            <Calendar size={14} />
            {post.date}
          </span>
          <span style={{ fontSize: '13px', color: '#707070', display: 'flex', alignItems: 'center', gap: '4px' }}>
            <Clock size={14} />
            {post.readTime}
          </span>
        </div>

        {/* Title */}
        <h1
          style={{
            fontSize: 'clamp(2.2rem, 4.5vw, 3.5rem)',
            fontWeight: 800,
            letterSpacing: '-0.03em',
            lineHeight: 1.15,
            color: 'var(--color-text)',
            marginBottom: '24px',
          }}
        >
          {post.title}
        </h1>

        {/* Author Card */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingBottom: '24px',
            marginBottom: '40px',
            borderBottom: '1px solid var(--color-border)',
            flexWrap: 'wrap',
            gap: '16px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div
              style={{
                width: 44,
                height: 44,
                borderRadius: '50%',
                backgroundColor: '#141414',
                color: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 700,
              }}
            >
              {post.author.name.charAt(0)}
            </div>
            <div>
              <div style={{ fontSize: '15px', fontWeight: 600, color: '#141414' }}>
                {post.author.name}
              </div>
              <div style={{ fontSize: '13px', color: '#707070' }}>{post.author.role}</div>
            </div>
          </div>

          <button
            type="button"
            onClick={handleShare}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              padding: '8px 14px',
              borderRadius: '8px',
              backgroundColor: '#ffffff',
              border: '1px solid var(--color-border)',
              fontSize: '13px',
              fontWeight: 500,
              cursor: 'pointer',
              color: '#141414',
            }}
          >
            {copied ? <Check size={14} color="#12a150" /> : <Share2 size={14} />}
            <span>{copied ? 'Link copied' : 'Share post'}</span>
          </button>
        </div>

        {/* Article Body */}
        <div
          style={{
            fontSize: '18px',
            color: '#262626',
            lineHeight: 1.8,
            display: 'flex',
            flexDirection: 'column',
            gap: '24px',
            marginBottom: '64px',
          }}
        >
          <p style={{ fontSize: '20px', fontWeight: 500, color: '#141414', lineHeight: 1.6 }}>
            {post.excerpt}
          </p>

          {post.content.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        {/* Related Posts */}
        <div style={{ borderTop: '1px solid var(--color-border)', paddingTop: '48px' }}>
          <h3 style={{ fontSize: '22px', fontWeight: 700, marginBottom: '24px', color: '#141414' }}>
            Related playbooks
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(280px, 100%), 1fr))', gap: '20px' }}>
            {related.map((item) => (
              <Link
                key={item.slug}
                to={`/blog/${item.slug}`}
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius: '16px',
                  border: '1px solid var(--color-border)',
                  padding: '24px',
                  boxShadow: 'var(--shadow-card)',
                  textDecoration: 'none',
                }}
              >
                <div style={{ fontSize: '11px', fontWeight: 700, color: 'var(--color-primary)', textTransform: 'uppercase', marginBottom: '8px' }}>
                  {item.category}
                </div>
                <div style={{ fontSize: '16px', fontWeight: 600, color: '#141414', marginBottom: '8px', lineHeight: 1.3 }}>
                  {item.title}
                </div>
                <div style={{ fontSize: '12px', color: '#707070' }}>{item.readTime}</div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
};
