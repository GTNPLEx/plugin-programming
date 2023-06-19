// src/csp.tsx

import React from 'react';
import Head from 'next/head';



const CSP: React.FC = () => {
  return (
    <Head>
      <meta httpEquiv="Content-Security-Policy" content="default-src 'self'" />
      {/* Add more CSP directives as per your requirements */}
    </Head>
  );
};

export default CSP;
