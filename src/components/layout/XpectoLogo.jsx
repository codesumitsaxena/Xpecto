import React from 'react';
import { Link } from 'react-router-dom';

export default function XpectoLogo({ className = "h-8 sm:h-9" }) {
  return (
    <Link to="/" className="inline-flex items-center group select-none">
      <img
        src="/images/xpecto-logo-white.png"
        alt="Xpecto®"
        className={`${className} w-auto object-contain transition-opacity group-hover:opacity-90`}
      />
    </Link>
  );
}
