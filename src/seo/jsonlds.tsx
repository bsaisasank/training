import {
  COMPANY_NAME,
  COMPANY_WEBSITE,
  COMPANY_LOGO_URL,
  COMPANY_DESCRIPTION,
  COMPANY_ADDRESS,
  COMPANY_SOCIAL_LINKS,
  COMPANY_OPENING_HOURS,
  COMPANY_PHONE,
  COMPANY_LANGUAGES,
} from '@/app/constants';

export const getOrganizationJsonLd = () => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  'name': COMPANY_NAME,
  'url': COMPANY_WEBSITE,
  'logo': COMPANY_LOGO_URL,
  'description': COMPANY_DESCRIPTION,
  'contactPoint': {
    '@type': 'ContactPoint',
    'telephone': '+91-1234567890',
    'contactType': 'customer service',
    'areaServed': COMPANY_ADDRESS.COUNTRY,
    'availableLanguage': COMPANY_LANGUAGES,
  },
  'sameAs': COMPANY_SOCIAL_LINKS,
});

export const getCompleteJsonLdForBusiness = () => ({
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  'name': COMPANY_NAME,
  'url': COMPANY_WEBSITE,
  'logo': COMPANY_LOGO_URL,
  'description': COMPANY_DESCRIPTION,
  'address': {
    '@type': 'PostalAddress',
    'streetAddress': COMPANY_ADDRESS.STREET_ADDRESS,
    'addressLocality': COMPANY_ADDRESS.LOCALITY,
    'addressRegion': COMPANY_ADDRESS.REGION,
    'postalCode': COMPANY_ADDRESS.POSTAL_CODE,
    'addressCountry': COMPANY_ADDRESS.COUNTRY,
  },
  'telephone': COMPANY_PHONE,
  'openingHours': COMPANY_OPENING_HOURS,
  'contactPoint': {
    '@type': 'ContactPoint',
    'telephone': COMPANY_PHONE,
    'contactType': 'customer service',
    'areaServed': 'IN',
    'availableLanguage': COMPANY_LANGUAGES,
  },
  'sameAs': COMPANY_SOCIAL_LINKS,
});

export const getBreadcrumbJsonLd = (breadcrumbs: { name: string; url: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  'itemListElement': breadcrumbs.map((item, index) => ({
    '@type': 'ListItem',
    'position': index + 1,
    'name': item.name,
    'item': item.url,
  })),
});

export const getArticleJsonLd = (
  title: string,
  author: string,
  url: string,
  datePublished: string,
) => ({
  '@context': 'https://schema.org',
  '@type': 'Article',
  'headline': title,
  'author': { '@type': 'Person', 'name': author },
  'datePublished': datePublished,
  'mainEntityOfPage': { '@type': 'WebPage', '@id': url },
});

export const getFAQJsonLd = (faqs: { question: string; answer: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  'mainEntity': faqs.map((faq) => ({
    '@type': 'Question',
    'name': faq.question,
    'acceptedAnswer': { '@type': 'Answer', 'text': faq.answer },
  })),
});

export const getProductJsonLd = (product: {
  name: string;
  image: string;
  description: string;
  sku: string;
  price: string;
  currency: string;
  url: string;
}) => ({
  '@context': 'https://schema.org',
  '@type': 'Product',
  'name': product.name,
  'image': product.image,
  'description': product.description,
  'brand': { '@type': 'Brand', 'name': COMPANY_NAME },
  'sku': product.sku,
  'offers': {
    '@type': 'Offer',
    'url': product.url,
    'priceCurrency': product.currency,
    'price': product.price,
    'availability': 'https://schema.org/InStock',
    'seller': { '@type': 'Organization', 'name': COMPANY_NAME },
  },
});

export const getLocalBusinessJsonLd = () => ({
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  'name': COMPANY_NAME,
  'address': {
    '@type': 'PostalAddress',
    'streetAddress': COMPANY_ADDRESS.STREET_ADDRESS,
    'addressLocality': COMPANY_ADDRESS.LOCALITY,
    'addressRegion': COMPANY_ADDRESS.REGION,
    'postalCode': COMPANY_ADDRESS.POSTAL_CODE,
    'addressCountry': COMPANY_ADDRESS.COUNTRY,
  },
  'telephone': COMPANY_PHONE,
  'openingHours': COMPANY_OPENING_HOURS,
});

export const getEventJsonLd = (event: {
  name: string;
  startDate: string;
  endDate: string;
  url: string;
}) => ({
  '@context': 'https://schema.org',
  '@type': 'Event',
  'name': event.name,
  'startDate': event.startDate,
  'endDate': event.endDate,
  'eventAttendanceMode': 'https://schema.org/OnlineEventAttendanceMode',
  'eventStatus': 'https://schema.org/EventScheduled',
  'location': { '@type': 'VirtualLocation', 'url': event.url },
  'organizer': { '@type': 'Organization', 'name': COMPANY_NAME, 'url': COMPANY_WEBSITE },
  'offers': {
    '@type': 'Offer',
    'price': '0',
    'priceCurrency': 'INR',
    'availability': 'https://schema.org/InStock',
  },
});

export const getJobPostingJsonLd = (job: {
  title: string;
  description: string;
  datePosted: string;
  location: string;
  salary: string;
}) => ({
  '@context': 'https://schema.org',
  '@type': 'JobPosting',
  'title': job.title,
  'description': job.description,
  'datePosted': job.datePosted,
  'hiringOrganization': { '@type': 'Organization', 'name': COMPANY_NAME },
  'jobLocation': {
    '@type': 'Place',
    'address': {
      '@type': 'PostalAddress',
      'addressLocality': job.location,
      'addressCountry': COMPANY_ADDRESS.COUNTRY,
    },
  },
  'baseSalary': {
    '@type': 'MonetaryAmount',
    'currency': 'INR',
    'value': { '@type': 'QuantitativeValue', 'value': job.salary, 'unitText': 'YEAR' },
  },
});
