# bKash Bilingual Frontend Implementation Guide

## Overview

This document provides specific frontend implementation patterns and code examples derived from bKash's bilingual website analysis, tailored for the Kooti credit scoring platform development.

## 1. Frontend Architecture Analysis

### HTML Structure Patterns

#### Language-Aware Navigation
```html
<!-- Desktop Navigation (English Version) -->
<navigation>
  <div class="nav-container">
    <a href="/en" class="logo">
      <img src="logo.svg" alt="bKash Logo" />
    </a>
    <div class="nav-links">
      <a href="/en/services">Services</a>
      <a href="/en/business">Business Solutions</a>
      <a href="/en/help">Help</a>
    </div>
    <button class="mobile-menu-toggle">Menu</button>
  </div>
</navigation>

<!-- Mobile Menu with Language Switcher -->
<dialog class="mobile-menu">
  <div class="menu-header">
    <button class="close-btn">Close</button>
    <img src="logo.svg" alt="Logo" />
  </div>
  <nav class="menu-content">
    <ul class="menu-links">
      <li><a href="/en/campaigns">Campaigns</a></li>
      <li><a href="/en/services">Services</a></li>
      <li><a href="/en/business">Business</a></li>
      <li><a href="/en/help">Help</a></li>
    </ul>
    <!-- Language Switcher -->
    <div class="language-switcher">
      <button class="lang-btn active" data-lang="en">
        <img src="flag-en.svg" alt="English" />
      </button>
      <span class="divider">|</span>
      <button class="lang-btn" data-lang="bn">
        <img src="flag-bn.svg" alt="Bengali" />
      </button>
    </div>
  </nav>
</dialog>
```

#### Content Structure with Mixed Language Support
```html
<!-- Service Cards with Bilingual Branding -->
<div class="service-grid">
  <div class="service-card">
    <img src="send-money-icon.svg" alt="Send Money" />
    <h3>সেন্ড মানি Send Money</h3>
    <p>Send money from bKash to any number instantly</p>
    <a href="/en/services/send-money">Learn More</a>
  </div>
  
  <div class="service-card">
    <img src="payment-icon.svg" alt="Payment" />
    <h3>Payment</h3>
    <p>Making Payment is now much easier through the bKash App</p>
    <a href="/en/services/payment">Learn More</a>
  </div>
</div>
```

### CSS Implementation Patterns

#### Language-Specific Styling
```css
/* Base styles work for both languages */
.service-card {
  padding: 24px;
  border-radius: 12px;
  background: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

/* Language-specific font adjustments */
html[lang="bn"] {
  font-family: 'Noto Sans Bengali', 'Roboto', sans-serif;
}

html[lang="en"] {
  font-family: 'Roboto', 'Arial', sans-serif;
}

/* Mixed content styling */
.bilingual-title {
  font-size: 1.25rem;
  font-weight: 600;
  line-height: 1.4;
}

html[lang="bn"] .bilingual-title {
  font-size: 1.125rem; /* Slightly smaller for Bengali text */
}

/* Language switcher styling */
.language-switcher {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 0;
  border-top: 1px solid #e5e7eb;
  margin-top: 16px;
}

.lang-btn {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 8px 12px;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  background: white;
  cursor: pointer;
  transition: all 0.2s ease;
}

.lang-btn.active {
  background: #e91e63;
  color: white;
  border-color: #e91e63;
}

.lang-btn:hover:not(.active) {
  background: #f9fafb;
  border-color: #9ca3af;
}

.divider {
  color: #6b7280;
  font-size: 0.875rem;
}
```

### JavaScript Implementation Patterns

#### Language Detection and Switching
```javascript
// Language detection utility
class LanguageManager {
  constructor() {
    this.currentLang = this.detectLanguage();
    this.init();
  }

  detectLanguage() {
    const path = window.location.pathname;
    if (path.startsWith('/en')) {
      return 'en';
    }
    return 'bn'; // Default to Bengali
  }

  init() {
    this.setupLanguageSwitchers();
    this.updateHTMLLang();
    this.updateActiveStates();
  }

  setupLanguageSwitchers() {
    const switchers = document.querySelectorAll('[data-lang]');
    switchers.forEach(btn => {
      btn.addEventListener('click', (e) => {
        const targetLang = e.currentTarget.dataset.lang;
        this.switchLanguage(targetLang);
      });
    });
  }

  switchLanguage(targetLang) {
    const currentPath = window.location.pathname;
    let newPath;

    if (targetLang === 'en') {
      // Switch to English
      if (currentPath.startsWith('/en')) {
        return; // Already on English
      }
      newPath = '/en' + currentPath;
    } else {
      // Switch to Bengali
      if (!currentPath.startsWith('/en')) {
        return; // Already on Bengali
      }
      newPath = currentPath.replace('/en', '') || '/';
    }

    window.location.href = newPath;
  }

  updateHTMLLang() {
    document.documentElement.setAttribute('lang', this.currentLang);
  }

  updateActiveStates() {
    const langButtons = document.querySelectorAll('[data-lang]');
    langButtons.forEach(btn => {
      if (btn.dataset.lang === this.currentLang) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });
  }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
  new LanguageManager();
});
```

#### Dynamic Content Loading (Alternative Approach)
```javascript
// Client-side content management
class ContentManager {
  constructor() {
    this.translations = {};
    this.currentLang = 'bn';
    this.loadTranslations();
  }

  async loadTranslations() {
    try {
      const [bnData, enData] = await Promise.all([
        fetch('/assets/translations/bn.json').then(r => r.json()),
        fetch('/assets/translations/en.json').then(r => r.json())
      ]);
      
      this.translations = { bn: bnData, en: enData };
      this.renderContent();
    } catch (error) {
      console.error('Failed to load translations:', error);
    }
  }

  switchLanguage(lang) {
    this.currentLang = lang;
    this.renderContent();
    this.updateURL(lang);
  }

  renderContent() {
    const elements = document.querySelectorAll('[data-translate]');
    elements.forEach(el => {
      const key = el.dataset.translate;
      const translation = this.getTranslation(key);
      if (translation) {
        el.textContent = translation;
      }
    });
  }

  getTranslation(key) {
    const keys = key.split('.');
    let value = this.translations[this.currentLang];
    
    for (const k of keys) {
      value = value?.[k];
    }
    
    return value;
  }

  updateURL(lang) {
    const newPath = lang === 'en' ? '/en' + window.location.pathname : window.location.pathname.replace('/en', '');
    history.pushState(null, '', newPath);
  }
}
```

## 2. Component-Based Implementation (React/Vue)

### React Language Context
```jsx
// LanguageContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('bn');

  useEffect(() => {
    // Detect language from URL
    const path = window.location.pathname;
    const detectedLang = path.startsWith('/en') ? 'en' : 'bn';
    setLanguage(detectedLang);
  }, []);

  const switchLanguage = (newLang) => {
    setLanguage(newLang);
    const currentPath = window.location.pathname;
    let newPath;

    if (newLang === 'en') {
      newPath = currentPath.startsWith('/en') ? currentPath : '/en' + currentPath;
    } else {
      newPath = currentPath.replace('/en', '') || '/';
    }

    window.history.pushState(null, '', newPath);
  };

  return (
    <LanguageContext.Provider value={{ language, switchLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};
```

### Language Switcher Component
```jsx
// LanguageSwitcher.jsx
import React from 'react';
import { useLanguage } from './LanguageContext';

const LanguageSwitcher = ({ className = '' }) => {
  const { language, switchLanguage } = useLanguage();

  return (
    <div className={`language-switcher ${className}`}>
      <button
        onClick={() => switchLanguage('bn')}
        className={`lang-btn ${language === 'bn' ? 'active' : ''}`}
        data-lang="bn"
      >
        বাংলা
      </button>
      <span className="divider">|</span>
      <button
        onClick={() => switchLanguage('en')}
        className={`lang-btn ${language === 'en' ? 'active' : ''}`}
        data-lang="en"
      >
        English
      </button>
    </div>
  );
};

export default LanguageSwitcher;
```

### Bilingual Content Component
```jsx
// BilingualText.jsx
import React from 'react';
import { useLanguage } from './LanguageContext';

const BilingualText = ({ 
  bengali, 
  english, 
  mixed = false, 
  className = '',
  component: Component = 'span' 
}) => {
  const { language } = useLanguage();

  if (mixed) {
    // Show both languages for branding
    return (
      <Component className={`bilingual-text ${className}`}>
        {bengali} {english}
      </Component>
    );
  }

  // Show language-specific content
  const content = language === 'en' ? english : bengali;
  
  return (
    <Component className={`text-${language} ${className}`}>
      {content}
    </Component>
  );
};

export default BilingualText;

// Usage example:
<BilingualText
  bengali="সেন্ড মানি"
  english="Send Money"
  mixed={true}
  component="h3"
  className="service-title"
/>
```

## 3. URL Routing Implementation

### Express.js Server-Side Routing
```javascript
// routes/index.js
const express = require('express');
const router = express.Router();

// Language middleware
const languageMiddleware = (req, res, next) => {
  req.language = req.path.startsWith('/en') ? 'en' : 'bn';
  req.isEnglish = req.language === 'en';
  next();
};

// Apply language middleware
router.use(languageMiddleware);

// Routes for both languages
const routes = [
  '/',
  '/services',
  '/services/:serviceType',
  '/business',
  '/help',
  '/about'
];

routes.forEach(route => {
  // Bengali routes (default)
  router.get(route, (req, res) => {
    res.render('pages' + route, {
      language: 'bn',
      translations: require('../translations/bn.json')
    });
  });

  // English routes
  router.get('/en' + route, (req, res) => {
    res.render('pages' + route, {
      language: 'en',
      translations: require('../translations/en.json')
    });
  });
});

module.exports = router;
```

### Next.js Implementation
```javascript
// next.config.js
module.exports = {
  i18n: {
    locales: ['bn', 'en'],
    defaultLocale: 'bn',
    localeDetection: false, // We handle this manually
  },
  async rewrites() {
    return [
      {
        source: '/en/:path*',
        destination: '/:path*?lang=en',
      },
    ];
  },
};

// pages/_app.js
import { LanguageProvider } from '../components/LanguageContext';

function MyApp({ Component, pageProps }) {
  return (
    <LanguageProvider>
      <Component {...pageProps} />
    </LanguageProvider>
  );
}

export default MyApp;
```

## 4. Content Management Strategy

### Translation File Structure
```json
// translations/bn.json
{
  "navigation": {
    "home": "হোম",
    "services": "সেবা",
    "business": "ব্যবসা",
    "help": "সাহায্য",
    "about": "আমাদের সম্পর্কে"
  },
  "hero": {
    "title": "কোটি ক্রেডিট স্কোরিং",
    "subtitle": "আপনার আর্থিক ভবিষ্যত গড়ুন",
    "cta": "এখনই শুরু করুন"
  },
  "services": {
    "credit_scoring": "ক্রেডিট স্কোরিং",
    "loan_assessment": "ঋণ মূল্যায়ন",
    "financial_planning": "আর্থিক পরিকল্পনা"
  }
}

// translations/en.json
{
  "navigation": {
    "home": "Home",
    "services": "Services",
    "business": "Business",
    "help": "Help",
    "about": "About Us"
  },
  "hero": {
    "title": "Kooti Credit Scoring",
    "subtitle": "Build Your Financial Future",
    "cta": "Get Started Now"
  },
  "services": {
    "credit_scoring": "Credit Scoring",
    "loan_assessment": "Loan Assessment",
    "financial_planning": "Financial Planning"
  }
}
```

### Hook for Translation
```javascript
// hooks/useTranslation.js
import { useLanguage } from '../components/LanguageContext';
import bnTranslations from '../translations/bn.json';
import enTranslations from '../translations/en.json';

const translations = {
  bn: bnTranslations,
  en: enTranslations
};

export const useTranslation = () => {
  const { language } = useLanguage();

  const t = (key) => {
    const keys = key.split('.');
    let value = translations[language];
    
    for (const k of keys) {
      value = value?.[k];
    }
    
    return value || key; // Fallback to key if translation not found
  };

  return { t, language };
};

// Usage:
const { t } = useTranslation();
<h1>{t('hero.title')}</h1>
```

## 5. Performance Optimization

### Lazy Loading Language Content
```javascript
// Dynamic translation loading
const loadLanguageData = async (language) => {
  const { default: translations } = await import(`../translations/${language}.json`);
  return translations;
};

// Code splitting for language-specific components
const BengaliDatePicker = lazy(() => import('./BengaliDatePicker'));
const EnglishDatePicker = lazy(() => import('./EnglishDatePicker'));

const DatePicker = () => {
  const { language } = useLanguage();
  
  return (
    <Suspense fallback={<div>Loading...</div>}>
      {language === 'bn' ? <BengaliDatePicker /> : <EnglishDatePicker />}
    </Suspense>
  );
};
```

## 6. Implementation Checklist for Kooti

### Phase 1: Foundation
- [ ] Set up URL routing structure
- [ ] Create language detection middleware
- [ ] Implement basic language switcher
- [ ] Set up translation file structure

### Phase 2: Content Management
- [ ] Create translation management system
- [ ] Implement content components
- [ ] Set up mixed language support
- [ ] Add language-specific styling

### Phase 3: User Experience
- [ ] Add smooth language transitions
- [ ] Implement language persistence
- [ ] Create responsive language switcher
- [ ] Add accessibility features

### Phase 4: Optimization
- [ ] Implement code splitting for languages
- [ ] Add performance monitoring
- [ ] Optimize translation loading
- [ ] Set up SEO meta tags

This implementation guide provides practical, tested patterns that can be directly adapted for the Kooti platform, ensuring a robust and user-friendly bilingual experience.
