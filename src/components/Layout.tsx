import { ReactNode } from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Users, BookOpen, Calendar, ClipboardList, Settings } from 'lucide-react';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col min-h-screen bg-background text-indigo font-sans">
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-parchment px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-indigo flex items-center justify-center text-ivory shadow-lg border border-gold/20">
            <span className="font-serif text-xl font-bold">A</span>
          </div>
          <span className="font-serif font-bold text-2xl tracking-tight text-indigo uppercase">Aegis</span>
        </div>
        <button className="p-2 rounded-full hover:bg-parchment/30 transition-colors">
          <Settings className="w-5 h-5 text-olive" />
        </button>
      </header>

      <main className="flex-1 pb-28 max-w-2xl mx-auto w-full px-4 pt-6">
        {children}
      </main>

      <nav className="fixed bottom-6 left-4 right-4 bg-indigo/95 backdrop-blur-lg border border-gold/30 px-6 py-4 flex items-center justify-between z-50 max-w-xl mx-auto shadow-2xl rounded-3xl">
        <BottomNavItem to="/dashboard" icon={<Home className="w-5 h-5" />} label="Home" />
        <BottomNavItem to="/community" icon={<Users className="w-5 h-5" />} label="Groups" />
        <BottomNavItem to="/journal" icon={<BookOpen className="w-5 h-5" />} label="Journal" />
        <BottomNavItem to="/education" icon={<Calendar className="w-5 h-5" />} label="Learn" />
        <BottomNavItem to="/appointment-prep" icon={<ClipboardList className="w-5 h-5" />} label="Prep" />
      </nav>
    </div>
  );
}

function BottomNavItem({ to, icon, label }: { to: string; icon: ReactNode; label: string }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex flex-col items-center gap-1 transition-all ${
          isActive ? 'text-accent scale-110 drop-shadow-[0_0_8px_rgba(197,160,89,0.5)]' : 'text-ivory/50 hover:text-ivory/80'
        }`
      }
    >
      {icon}
      <span className="text-[9px] font-bold uppercase tracking-[0.15em]">{label}</span>
    </NavLink>
  );
}
