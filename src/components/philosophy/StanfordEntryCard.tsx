"use client";

import { useState } from "react";
import { X, BookOpen, Clock, Users, Lightbulb, HelpCircle } from "lucide-react";
import type { StanfordEntry } from "@/lib/stanford-data";

interface StanfordEntryCardProps {
  entry: StanfordEntry;
  onClick?: () => void;
}

export function StanfordEntryCard({ entry, onClick }: StanfordEntryCardProps) {
  const levelColor = getLevelColor(entry.generalLevel);

  return (
    <div
      onClick={onClick}
      className="flex items-center gap-3 p-3 rounded-xl bg-slate-800/50 border border-slate-700/50 cursor-pointer hover:bg-slate-800/70 transition-all duration-200 active:scale-98"
    >
      <div
        className="w-10 h-10 rounded-lg flex items-center justify-center text-sm font-bold"
        style={{ backgroundColor: levelColor + "20", color: levelColor }}
      >
        {entry.generalLevel}
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="text-white font-medium text-sm truncate">{entry.titleEs}</h3>
        <p className="text-slate-400 text-xs truncate">{entry.branch} - {entry.era}</p>
      </div>
    </div>
  );
}

function getLevelColor(level: number): string {
  const colors = [
    "#10b981", // 0 - verde
    "#10b981", // 1
    "#34d399", // 2
    "#6366f1", // 3 - índigo
    "#6366f1", // 4
    "#8b5cf6", // 5 - violeta
    "#8b5cf6", // 6
    "#f59e0b", // 7 - ámbar
    "#f59e0b", // 8
    "#ef4444", // 9 - rojo
    "#ef4444", // 10
  ];
  return colors[level] || colors[0];
}

interface StanfordEntryModalProps {
  entry: StanfordEntry;
  isOpen: boolean;
  onClose: () => void;
}

export function StanfordEntryModal({ entry, isOpen, onClose }: StanfordEntryModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-full max-w-lg max-h-[85vh] bg-slate-900 rounded-t-2xl sm:rounded-2xl border border-slate-700 overflow-hidden">
        <div className="sticky top-0 bg-slate-900 border-b border-slate-700 p-4 flex items-center justify-between">
          <div className="flex-1 pr-8">
            <h2 className="text-lg font-bold text-white">{entry.titleEs}</h2>
            <p className="text-sm text-slate-400">{entry.titleEn}</p>
          </div>
          <button
            onClick={onClose}
            className="absolute right-4 top-4 p-2 rounded-lg bg-slate-800 hover:bg-slate-700 transition-colors"
          >
            <X className="w-5 h-5 text-slate-400" />
          </button>
        </div>

        <div className="p-4 overflow-y-auto max-h-[calc(85vh-100px)]">
          <div className="grid grid-cols-2 gap-3 mb-4">
            <div className="bg-slate-800/50 rounded-xl p-3">
              <div className="flex items-center gap-2 text-slate-400 text-xs mb-1">
                <BookOpen className="w-4 h-4" />
                Rama
              </div>
              <p className="text-white text-sm font-medium">{entry.branch}</p>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-3">
              <div className="flex items-center gap-2 text-slate-400 text-xs mb-1">
                <Clock className="w-4 h-4" />
                Época
              </div>
              <p className="text-white text-sm font-medium">{entry.era}</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-xl p-3 mb-4">
            <div className="flex items-center gap-2 text-slate-300 text-xs mb-1">
              <span className="font-semibold">Nivel:</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex gap-1">
                {Array.from({ length: 10 }, (_, i) => (
                  <div
                    key={i}
                    className={`w-2 h-2 rounded-full ${
                      i < entry.generalLevel ? "bg-indigo-500" : "bg-slate-700"
                    }`}
                  />
                ))}
              </div>
              <span className="text-white font-bold">{entry.generalLevel}/10</span>
            </div>
          </div>

          <div className="mb-4">
            <h3 className="text-slate-300 text-sm font-semibold mb-2">Resumen</h3>
            <p className="text-slate-400 text-sm leading-relaxed">{entry.summaryEs}</p>
          </div>

          <div className="mb-4">
            <div className="flex items-center gap-2 text-slate-300 text-sm font-semibold mb-2">
              <Users className="w-4 h-4" />
              Filósofos principales
            </div>
            <div className="flex flex-wrap gap-2">
              {entry.mainPhilosophers.map((philosopher, index) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-slate-800 text-slate-300 text-xs rounded-lg"
                >
                  {philosopher}
                </span>
              ))}
            </div>
          </div>

          <div className="mb-4">
            <div className="flex items-center gap-2 text-slate-300 text-sm font-semibold mb-2">
              <BookOpen className="w-4 h-4" />
              Obras principales
            </div>
            <div className="flex flex-wrap gap-2">
              {entry.mainWorks.map((work, index) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-indigo-500/20 text-indigo-300 text-xs rounded-lg"
                >
                  {work}
                </span>
              ))}
            </div>
          </div>

          <div className="mb-4">
            <div className="flex items-center gap-2 text-slate-300 text-sm font-semibold mb-2">
              <Lightbulb className="w-4 h-4" />
              Conceptos clave
            </div>
            <div className="flex flex-wrap gap-2">
              {entry.concepts.map((concept, index) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-lg"
                >
                  {concept}
                </span>
              ))}
            </div>
          </div>

          <div className="mb-4">
            <div className="flex items-center gap-2 text-slate-300 text-sm font-semibold mb-2">
              <HelpCircle className="w-4 h-4" />
              Problemas filosóficos
            </div>
            <ul className="space-y-1">
              {entry.philosophicalProblems.map((problem, index) => (
                <li key={index} className="text-slate-400 text-sm flex items-start gap-2">
                  <span className="text-amber-500 mt-1">-</span>
                  {problem}
                </li>
              ))}
            </ul>
          </div>

          {entry.keyTerms && entry.keyTerms.length > 0 && (
            <div>
              <h3 className="text-slate-300 text-sm font-semibold mb-2">Términos clave</h3>
              <div className="space-y-2">
                {entry.keyTerms.map((item, index) => (
                  <div key={index} className="bg-slate-800/50 rounded-lg p-3">
                    <p className="text-indigo-400 text-sm font-medium">{item.term}</p>
                    <p className="text-slate-400 text-xs mt-1">{item.definition}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
