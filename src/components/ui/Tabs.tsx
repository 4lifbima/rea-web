import React from 'react';

export interface TabItem {
  id: string;
  label: string;
  icon?: React.ReactNode;
}

interface TabsProps {
  tabs: TabItem[];
  activeTabId: string;
  onTabChange: (id: string) => void;
  className?: string;
  style?: React.CSSProperties;
}

export const Tabs: React.FC<TabsProps> = ({
  tabs,
  activeTabId,
  onTabChange,
  className = '',
  style,
}) => {
  return (
    <div
      role="tablist"
      aria-label="Product tour navigation"
      className={className}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        padding: '5px',
        backgroundColor: '#ebebeb',
        borderRadius: 'var(--radius-full)',
        gap: '4px',
        maxWidth: '100%',
        overflowX: 'auto',
        scrollbarWidth: 'none',
        ...style,
      }}
    >
      {tabs.map((tab) => {
        const isActive = tab.id === activeTabId;
        return (
          <button
            key={tab.id}
            role="tab"
            aria-selected={isActive}
            aria-controls={`panel-${tab.id}`}
            id={`tab-${tab.id}`}
            type="button"
            onClick={() => onTabChange(tab.id)}
            style={{
              padding: '8px 18px',
              fontSize: '14px',
              fontWeight: 500,
              borderRadius: 'var(--radius-full)',
              color: isActive ? '#141414' : '#555555',
              backgroundColor: isActive ? '#ffffff' : 'transparent',
              boxShadow: isActive ? '0 2px 6px rgba(0, 0, 0, 0.08)' : 'none',
              transition: 'all var(--transition-fast)',
              cursor: 'pointer',
              whiteSpace: 'nowrap',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
            }}
          >
            {tab.icon && <span>{tab.icon}</span>}
            <span>{tab.label}</span>
          </button>
        );
      })}
    </div>
  );
};

