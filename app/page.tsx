import React from 'react';
import Link from 'next/link';

export default function NavLinks() {
  return (
    <ul className="flex flex-col gap-2">
      <li><Link href="/dashboard">Dashboard</Link></li>
      <li><Link href="/settings">Settings</Link></li>
    </ul>
  );
}