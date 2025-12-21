'use client';

import React from 'react';
import Header from '@/components/layout/Header';
import ChessFooter from '@/components/layout/ChessFooter';

export default function FullStackDevelopmentPage() {
  return (
    <>
      <Header />
      <main style={{ backgroundColor: '#ffffff', minHeight: '100vh', paddingTop: '100px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem' }}>
          <h1>Full-Stack Development</h1>
          <p>Full-Stack Development page content coming soon...</p>
        </div>
      </main>
      <ChessFooter />
    </>
  );
}
