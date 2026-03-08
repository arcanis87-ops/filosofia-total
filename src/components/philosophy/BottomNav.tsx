"use client";

import { House, BookOpen, TrendingUp, Users, CircleQuestionMark, BookText } from "lucide-react";

interface NavItem {
  id: string;
  label: string;
  icon: React.ReactNode;
}

const navItems: NavItem[] = [
  { id: "home", label: "Inicio", icon: <House className="w-5 h-5" /> },
  { id: "branches", label: "Ramas", icon: <BookOpen className="w-5 h-5" /> },
  { id: "levels", label: "Niveles", icon: <TrendingUp className="w-5 h-5" /> },
  { id: "encyclopedia", label: "Enciclopedia", icon: <BookText className="w-5 h-5" /> },
  { id: "authors", label: "Autores", icon: <Users className="w-5 h-5" /> },
  { id: "quiz", label: "Quiz", icon: <CircleQuestionMark className="w-5 h-5" /> },
];

interface BottomNavProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export function BottomNav({ activeTab, onTabChange }: BottomNavProps) {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-slate-900/95 backdrop-blur-lg border-t border-slate-700/50 z-50 safe-area-bottom">
      <div className="flex items-center justify-around px-2 py-1 max-w-lg mx-auto">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onTabChange(item.id)}
            className={`flex flex-col items-center justify-center min-w-[56px] min-h-[56px] px-3 py-2 rounded-xl transition-all duration-200 touch-manipulation ${
              activeTab === item.id
                ? "text-indigo-400 bg-indigo-500/10"
                : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/50 active:scale-95"
            }`}
          >
            {item.icon}
            <span className="text-xs mt-1 font-medium">{item.label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
}
