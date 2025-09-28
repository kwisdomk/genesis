// Analytics utility functions
// Replace TRACKING_ID with your actual Google Analytics tracking ID

interface AnalyticsEvent {
  action: string;
  category: string;
  label?: string;
  value?: number;
}

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

// Initialize Google Analytics
export const initializeAnalytics = (trackingId: string) => {
  // Create script element for gtag
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${trackingId}`;
  document.head.appendChild(script);

  // Initialize gtag
  window.gtag = function() {
    // eslint-disable-next-line prefer-rest-params
    (window as any).dataLayer = (window as any).dataLayer || [];
    (window as any).dataLayer.push(arguments);
  };

  window.gtag('js', new Date());
  window.gtag('config', trackingId, {
    page_title: document.title,
    page_location: window.location.href,
  });
};

// Track page views
export const trackPageView = (url: string, title: string) => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('config', 'GA_TRACKING_ID', {
      page_path: url,
      page_title: title,
    });
  }
};

// Track custom events
export const trackEvent = ({ action, category, label, value }: AnalyticsEvent) => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Track specific user interactions
export const trackProjectView = (projectTitle: string) => {
  trackEvent({
    action: 'view_project',
    category: 'engagement',
    label: projectTitle,
  });
};

export const trackJournalRead = (postTitle: string) => {
  trackEvent({
    action: 'read_journal',
    category: 'content',
    label: postTitle,
  });
};

export const trackContactAction = (method: string) => {
  trackEvent({
    action: 'contact_attempt',
    category: 'conversion',
    label: method,
  });
};

export const trackDownload = (fileName: string) => {
  trackEvent({
    action: 'download',
    category: 'engagement',
    label: fileName,
  });
};