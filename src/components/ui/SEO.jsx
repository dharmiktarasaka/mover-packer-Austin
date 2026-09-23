import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function SEO({ 
  title = 'SHIFTLINE — Modern Relocation & European Logistics',
  description = 'From single-room moves to complete corporate relocations, SHIFTLINE makes moving straightforward, organized and stress-free.',
  canonical = 'https://shiftline-logistics.com'
}) {
  const fullTitle = title.includes('SHIFTLINE') ? title : `${title} | SHIFTLINE Logistics`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="SHIFTLINE" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
}
