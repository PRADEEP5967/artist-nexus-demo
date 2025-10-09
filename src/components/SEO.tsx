import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  type?: string;
}

export function SEO({
  title = 'ArtistNexus - Book Amazing Artists for Your Events',
  description = 'Connect with talented musicians, dancers, speakers, and performers. Book the perfect artist for your next event with ArtistNexus.',
  keywords = 'artists, musicians, dancers, speakers, performers, event booking, entertainment, India artists, book artists, hire performers',
  image = 'https://lovable.dev/opengraph-image-p98pqg.png',
  type = 'website',
}: SEOProps) {
  const location = useLocation();
  const url = `https://artistnexus-demo.lovable.app${location.pathname}`;

  useEffect(() => {
    // Update title
    document.title = title;

    // Update meta tags
    const updateMetaTag = (name: string, content: string, property?: boolean) => {
      const attribute = property ? 'property' : 'name';
      let element = document.querySelector(`meta[${attribute}="${name}"]`);
      
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      
      element.setAttribute('content', content);
    };

    // Standard meta tags
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);

    // Open Graph
    updateMetaTag('og:title', title, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:image', image, true);
    updateMetaTag('og:url', url, true);
    updateMetaTag('og:type', type, true);

    // Twitter
    updateMetaTag('twitter:title', title, true);
    updateMetaTag('twitter:description', description, true);
    updateMetaTag('twitter:image', image, true);
    updateMetaTag('twitter:card', 'summary_large_image', true);

    // Structured Data (JSON-LD)
    const scriptId = 'structured-data';
    let script = document.getElementById(scriptId) as HTMLScriptElement | null;
    
    if (!script) {
      script = document.createElement('script');
      script.id = scriptId;
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }

    const structuredData = {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'ArtistNexus',
      description: description,
      url: url,
      potentialAction: {
        '@type': 'SearchAction',
        target: `${url}/artists?q={search_term_string}`,
        'query-input': 'required name=search_term_string',
      },
      publisher: {
        '@type': 'Organization',
        name: 'ArtistNexus',
        logo: {
          '@type': 'ImageObject',
          url: 'https://lovable.dev/opengraph-image-p98pqg.png',
        },
      },
    };

    script.textContent = JSON.stringify(structuredData);
  }, [title, description, keywords, image, url, type]);

  return null;
}
