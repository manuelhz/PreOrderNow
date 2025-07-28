import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import AppTheme from '../shared-theme/AppTheme';
import AppAppBar from './components/AppAppBar';
import Hero from './components/Hero';
import Highlights from './components/Highlights';
import Pricing from './components/Pricing';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

// Import useLocation from react-router-dom to read the URL path
import { useLocation } from 'react-router-dom';

// Import the content type interface
import type { MarketingPageContent } from './types/content';

import { createContext, useContext, useEffect, useState } from 'react';

// 1. Create a React Context for the marketing page content
// This context will hold the dynamically loaded content.
export const MarketingContentContext = createContext<MarketingPageContent | undefined>(undefined);

// 2. Create a custom hook for easy consumption of the context
// This hook provides a cleaner way to access the content in child components.
export const useMarketingContent = () => {
  const context = useContext(MarketingContentContext);
   if (context === undefined) {
    throw new Error('useMarketingContent must be used within a MarketingContentProvider');
  }
  return context;
};

export default function MarketingPage(props: { disableCustomTheme?: boolean }) {
  // get current URL path.
  const location = useLocation();
  const [content, setContent] = useState<MarketingPageContent | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadContent = async () => {
      setLoading(true);
      setError(null);
      const path = location.pathname; // e.g., "/for-client" or "/for-providers"
      let dynamicContentModule: MarketingPageContent | null = null;

      try {
        if (path.includes('/for-client')) {
          // Dynamic import for client content
          const module = await import('./content/forClient');
          dynamicContentModule = module.forClientContent;
        } else if (path.includes('/for-provider')) {
          // Dynamic import for provider content
          const module = await import('./content/forProvider');
          dynamicContentModule = module.forProviderContent;
        } else {
          // Handle cases where the path doesn't match
          setError('Invalid URL path. Please navigate to /for-client or /for-provider.');
        }

        if (dynamicContentModule) {
          setContent(dynamicContentModule);
        }
      } catch (err) {
        console.error('Failed to load marketing content:', err);
        setError('Failed to load page content due to an error.');
      } finally {
        setLoading(false);
      }
    };
    loadContent();
    // Dependency array: re-run effect if the path changes
  }, [location.pathname]);

  if (loading) {
    return <div>Loading marketing page content...</div>; // Simple loading indicator
  }

  if (error) {
    return <div>Error displaying page: {error}</div>; // Display error message
  }

  if (!content) {
    // This case should ideally be covered by loading/error, but as a fallback
    return <div>No content to display.</div>;
  }


  return (
    <AppTheme {...props}>
      <CssBaseline enableColorScheme />

      <MarketingContentContext.Provider value={content}>
        <AppAppBar />
        <Hero />
        <div>
          <Features />
          <Divider />
          <Testimonials />
          <Divider />
          <Highlights />
          <Divider />
          <Pricing />
          <Divider />
          <FAQ />
          <Divider />
          <Footer />
        </div>
      </MarketingContentContext.Provider>

      

    </AppTheme>
  );
}
