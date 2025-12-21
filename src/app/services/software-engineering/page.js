'use client';

import React from 'react';
import Header from '@/components/layout/Header';
import ChessFooter from '@/components/layout/ChessFooter';

export default function SoftwareEngineeringPage() {
  return (
    <>
      <Header />
      <main style={{ backgroundColor: '#ffffff', minHeight: '100vh', paddingTop: '100px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem' }}>
          <h1>Software Engineering</h1>
          <p>Software Engineering page content coming soon...</p>
        </div>
      </main>
      <ChessFooter />
    </>
  );
}
