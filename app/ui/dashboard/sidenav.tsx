import Link from 'next/link';
import NavLinks from './nav-links';
import AcmeLogo from '../acme-logo';
import { PowerIcon } from '@heroicons/react/24/outline';

export default function SideNav() {
  return (
    <div className="w-64 h-screen bg-gray-50 border-r">
      <div className="p-4 flex items-center justify-between">
        <Link href="/"><AcmeLogo /></Link>
      </div>
      <nav className="mt-8"><NavLinks /></nav>
      <div className="absolute bottom-4 w-full p-4">
        <button className="flex items-center gap-2 text-red-500">
          <PowerIcon className="w-5 h-5" /> Sign Out
        </button>
      </div>
    </div>
  );
}