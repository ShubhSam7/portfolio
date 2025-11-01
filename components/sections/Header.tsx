'use client';

import React from 'react';
import { PillNav } from '../ui/PillNav';

export const Header = () => {
  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Tech Stack', href: '#tech-stack' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header>
      <PillNav items={navItems} />
    </header>
  );
};
