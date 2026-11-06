import React, { useState } from 'react';
import { Badge } from '../components/ui/Badge';
import { blogPostsData } from '../data/blog';
import { Clock, ArrowRight, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

export const BlogPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', 'Guides', 'Product updates', 'Finance 101'];

  const filteredPosts = blogPostsData.filter((post) => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div style={{ paddingTop: '64px', paddingBottom: '96px' }}>
      <div className="container" style={{ textAlign: 'center', marginBottom: '56px' }}>
        <div style={{ display: 'inline-flex', marginBottom: '16px' }}>
          <Badge label="Finance Playbooks" />
        </div>
        <h1
          style={{
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            fontWeight: 700,
            letterSpacing: '-0.04em',
            lineHeight: 1.1,
            color: 'var(--color-text)',
            marginBottom: '16px',
          }}
        >
          Fresh from the blog.
        </h1>
        <p className="section-description" style={{ margin: '0 auto 36px auto' }}>
          Playbooks, product news, and field stories from modern finance leaders running on Saro.
        </p>

        {/* Search & Filter Bar */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '12px',
            flexWrap: 'wrap',
            maxWidth: '680px',
            margin: '0 auto',
          }}
        >
          {/* Search Input */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              backgroundColor: '#ffffff',
              padding: '8px 16px',
              borderRadius: 'var(--radius-full)',
              border: '1px solid var(--color-border)',
              boxShadow: 'var(--shadow-subtle)',
              flex: 1,
              minWidth: '240px',
            }}
          >
            <Search size={16} color="#707070" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search playbooks and articles..."
              style={{
                border: 'none',
                outline: 'none',
                fontSize: '14px',
                width: '100%',
                backgroundColor: 'transparent',
              }}
            />
          </div>

          {/* Category Tabs */}
          <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                style={{
                  padding: '7px 14px',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '13px',
                  fontWeight: 500,
                  backgroundColor: selectedCategory === cat ? '#141414' : '#ebebeb',
                  color: selectedCategory === cat ? '#ffffff' : '#555555',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Articles Grid */}
      <div className="container">
        {filteredPosts.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '64px 20px', color: '#707070' }}>
            No articles found matching &ldquo;{searchQuery}&rdquo;.
          </div>
        ) : (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
              gap: '32px',
            }}
          >
            {filteredPosts.map((post) => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius: '24px',
                  border: '1px solid var(--color-border)',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: 'var(--shadow-card)',
                  textDecoration: 'none',
                  transition: 'transform 0.2s, border-color 0.2s',
                }}
                className="blog-item-card"
              >
                <div
                  style={{
                    height: '200px',
                    backgroundColor: '#f5f5f5',
                    padding: '24px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    background: 'linear-gradient(135deg, #f7f7f7 0%, #e9e9e9 100%)',
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
                        padding: '3px 10px',
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
                    <span style={{ fontSize: '18px', fontWeight: 700, color: '#141414', letterSpacing: '-0.04em' }}>saro</span>
                    <span style={{ fontSize: '12px', color: '#707070' }}>· {post.date}</span>
                  </div>
                </div>

                <div style={{ padding: '28px', display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'space-between' }}>
                  <div>
                    <h2 style={{ fontSize: '20px', fontWeight: 700, color: '#141414', lineHeight: 1.35, marginBottom: '12px' }}>
                      {post.title}
                    </h2>
                    <p style={{ fontSize: '14px', color: '#707070', lineHeight: 1.6, marginBottom: '24px' }}>
                      {post.excerpt}
                    </p>
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid #f0f0f0', paddingTop: '16px' }}>
                    <div style={{ fontSize: '12px', color: '#141414', fontWeight: 600 }}>
                      By {post.author.name}
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', fontWeight: 600, color: 'var(--color-primary)' }}>
                      <span>Read article</span>
                      <ArrowRight size={14} />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>

      <style>{`
        .blog-item-card:hover {
          border-color: #0066ff !important;
          transform: translateY(-3px);
        }
      `}</style>
    </div>
  );
};
