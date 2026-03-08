"use client";

import { useState } from "react";
import { BottomNav } from "@/components/philosophy/BottomNav";
import { StanfordEntryCard, StanfordEntryModal } from "@/components/philosophy/StanfordEntryCard";
import { branches, levels, philosophers, getPhilosopherOfTheDay } from "@/lib/philosophy-data";
import { getAllEntries, getUniqueBranches, getUniqueEras, type StanfordEntry } from "@/lib/stanford-data";
import { ChevronRight, Sparkles, Zap, Target, Award, Search, X } from "lucide-react";

export default function Home() {
  const [activeTab, setActiveTab] = useState("home");
  const [selectedEntry, setSelectedEntry] = useState<StanfordEntry | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [branchFilter, setBranchFilter] = useState("");
  const [eraFilter, setEraFilter] = useState("");

  const philosopherOfTheDay = getPhilosopherOfTheDay();
  const allEntries = getAllEntries();
  const uniqueBranches = getUniqueBranches();
  const uniqueEras = getUniqueEras();

  const filteredEntries = allEntries.filter((entry) => {
    const matchesSearch =
      !searchQuery ||
      entry.titleEs.toLowerCase().includes(searchQuery.toLowerCase()) ||
      entry.titleEn.toLowerCase().includes(searchQuery.toLowerCase()) ||
      entry.concepts.some((c) => c.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesBranch = !branchFilter || entry.branch === branchFilter;
    const matchesEra = !eraFilter || entry.era === eraFilter;
    return matchesSearch && matchesBranch && matchesEra;
  });

  const renderHome = () => (
    <div className="space-y-6">
      <div className="text-center py-4">
        <h1 className="text-2xl font-bold text-white mb-2">Filosofia Total</h1>
        <p className="text-slate-400 text-sm">Tu journey hacia el conocimiento filosofico</p>
      </div>

      {/* Progress Card */}
      <div className="text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm bg-gradient-to-br from-indigo-600/20 to-purple-600/20 border-indigo-500/30">
        <div className="p-4">
          <div className="flex items-center gap-4">
            <div className="relative inline-flex items-center justify-center">
              <svg width="70" height="70" className="-rotate-90">
                <circle
                  cx="35"
                  cy="35"
                  r="32.5"
                  stroke="rgba(255, 255, 255, 0.1)"
                  strokeWidth="5"
                  fill="none"
                />
                <circle
                  cx="35"
                  cy="35"
                  r="32.5"
                  stroke="#6366f1"
                  strokeWidth="5"
                  fill="none"
                  strokeLinecap="round"
                  strokeDasharray="204.20352248333654"
                  strokeDashoffset="196.0353815840031"
                  className="transition-all duration-500 ease-out"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-lg font-bold text-white">4%</span>
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-white font-semibold">Tu Progreso</h3>
              <p className="text-slate-400 text-sm mt-1">Nivel actual: Introducciones Generales</p>
              <div className="flex items-center gap-4 mt-2 text-xs text-slate-400">
                <span>1 niveles completados</span>
                <span>0 quizzes</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-3 gap-3">
        <div className="bg-slate-800/50 rounded-xl p-3 text-center border border-slate-700/50">
          <Target className="w-5 h-5 text-indigo-400 mx-auto mb-1" />
          <p className="text-xl font-bold text-white">1</p>
          <p className="text-xs text-slate-400">Nivel</p>
        </div>
        <div className="bg-slate-800/50 rounded-xl p-3 text-center border border-slate-700/50">
          <Award className="w-5 h-5 text-amber-400 mx-auto mb-1" />
          <p className="text-xl font-bold text-white">0</p>
          <p className="text-xs text-slate-400">Quizzes</p>
        </div>
        <div className="bg-slate-800/50 rounded-xl p-3 text-center border border-slate-700/50">
          <Sparkles className="w-5 h-5 text-green-400 mx-auto mb-1" />
          <p className="text-xl font-bold text-white">{allEntries.length}</p>
          <p className="text-xs text-slate-400">Entradas</p>
        </div>
      </div>

      {/* Philosopher of the Day */}
      <div className="text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm bg-slate-800/50 border-slate-700/50">
        <div className="p-4 pb-2">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span className="font-semibold text-sm text-slate-300">Filosofo del dia</span>
          </div>
        </div>
        <div className="p-4 pt-2">
          <button className="w-full flex items-center gap-3 p-2 rounded-xl hover:bg-slate-700/50 transition-colors">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center text-xl bg-gradient-to-br from-amber-500/20 to-orange-500/20"
              style={{ color: "#f59e0b" }}
            >
              {philosopherOfTheDay.name.charAt(0)}
            </div>
            <div className="flex-1 text-left">
              <h3 className="text-white font-semibold">{philosopherOfTheDay.name}</h3>
              <p className="text-slate-400 text-sm">
                {philosopherOfTheDay.birthYear}-
                {philosopherOfTheDay.deathYear || "presente"}
              </p>
            </div>
            <ChevronRight className="w-5 h-5 text-slate-400" />
          </button>
        </div>
      </div>

      {/* Branches */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-lg font-semibold text-white">Ramas de la Filosofia</h2>
          <button
            onClick={() => setActiveTab("branches")}
            className="inline-flex items-center text-sm font-medium text-indigo-400 hover:text-indigo-300"
          >
            Ver todas
            <ChevronRight className="w-4 h-4 ml-1" />
          </button>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {branches.slice(0, 4).map((branch) => (
            <div
              key={branch.id}
              className="flex items-center gap-3 p-3 rounded-xl bg-slate-800/50 border border-slate-700/50 cursor-pointer hover:bg-slate-800/70 transition-all duration-200"
            >
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center text-xl"
                style={{ backgroundColor: branch.color + "20" }}
              >
                {branch.icon}
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-white font-medium text-sm">{branch.name}</h3>
                <p className="text-slate-400 text-xs truncate">{branch.question}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Continue Learning */}
      <div className="text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm bg-slate-800/50 border-slate-700/50">
        <div className="p-4 pb-2">
          <div className="text-white font-semibold text-base flex items-center gap-2">
            <Zap className="w-4 h-4 text-indigo-400" />
            Continua Aprendiendo
          </div>
        </div>
        <div className="p-4 pt-2 space-y-3">
          <button
            onClick={() => setActiveTab("quiz")}
            className="w-full flex items-center gap-2 px-4 py-2 h-9 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md justify-between text-sm font-medium"
          >
            <span className="flex items-center gap-2">Tomar un Quiz</span>
            <ChevronRight className="w-4 h-4" />
          </button>
          <button
            onClick={() => setActiveTab("levels")}
            className="w-full flex items-center gap-2 px-4 py-2 h-9 border border-slate-600 text-slate-300 hover:bg-slate-700 rounded-md justify-between text-sm font-medium"
          >
            <span className="flex items-center gap-2">Explorar Niveles</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );

  const renderBranches = () => (
    <div className="space-y-6">
      <div className="text-center py-4">
        <h1 className="text-2xl font-bold text-white mb-2">Ramas de la Filosofia</h1>
        <p className="text-slate-400 text-sm">Explora las principales areas del pensamiento filosofico</p>
      </div>

      <div className="grid gap-4">
        {branches.map((branch) => (
          <div
            key={branch.id}
            className="p-4 rounded-xl bg-slate-800/50 border border-slate-700/50 cursor-pointer hover:bg-slate-800/70 transition-all duration-200"
          >
            <div className="flex items-center gap-3 mb-3">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
                style={{ backgroundColor: branch.color + "20" }}
              >
                {branch.icon}
              </div>
              <div>
                <h3 className="text-white font-semibold">{branch.name}</h3>
                <p className="text-slate-400 text-sm">{branch.question}</p>
              </div>
            </div>
            <p className="text-slate-400 text-sm">{branch.description}</p>
          </div>
        ))}
      </div>
    </div>
  );

  const renderLevels = () => (
    <div className="space-y-6">
      <div className="text-center py-4">
        <h1 className="text-2xl font-bold text-white mb-2">10 Niveles de Conocimiento</h1>
        <p className="text-slate-400 text-sm">Progresion estructurada del aprendizaje filosofico</p>
      </div>

      <div className="space-y-3">
        {levels.map((level, index) => (
          <div
            key={level.id}
            className={`p-4 rounded-xl border transition-all duration-200 ${
              index === 0
                ? "bg-indigo-600/20 border-indigo-500/50"
                : "bg-slate-800/50 border-slate-700/50"
            }`}
          >
            <div className="flex items-center gap-3">
              <div
                className={`w-10 h-10 rounded-lg flex items-center justify-center font-bold ${
                  index === 0 ? "bg-indigo-500 text-white" : "bg-slate-700 text-slate-300"
                }`}
              >
                {level.id}
              </div>
              <div className="flex-1">
                <h3 className="text-white font-medium">{level.name}</h3>
                <p className="text-slate-400 text-xs">{level.description}</p>
              </div>
              {index === 0 && (
                <span className="text-xs bg-indigo-500 text-white px-2 py-1 rounded">Activo</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderEncyclopedia = () => (
    <div className="space-y-6">
      <div className="text-center py-4">
        <h1 className="text-2xl font-bold text-white mb-2">Enciclopedia Stanford</h1>
        <p className="text-slate-400 text-sm">{allEntries.length} entradas de filosofia</p>
      </div>

      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
        <input
          type="text"
          placeholder="Buscar entradas..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-10 pr-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        {searchQuery && (
          <button
            onClick={() => setSearchQuery("")}
            className="absolute right-3 top-1/2 -translate-y-1/2"
          >
            <X className="w-4 h-4 text-slate-400" />
          </button>
        )}
      </div>

      {/* Filters */}
      <div className="flex gap-2 overflow-x-auto pb-2">
        <select
          value={branchFilter}
          onChange={(e) => setBranchFilter(e.target.value)}
          className="px-3 py-1.5 bg-slate-800 border border-slate-700 rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          <option value="">Todas las ramas</option>
          {uniqueBranches.map((branch) => (
            <option key={branch} value={branch}>
              {branch}
            </option>
          ))}
        </select>
        <select
          value={eraFilter}
          onChange={(e) => setEraFilter(e.target.value)}
          className="px-3 py-1.5 bg-slate-800 border border-slate-700 rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          <option value="">Todas las epocas</option>
          {uniqueEras.map((era) => (
            <option key={era} value={era}>
              {era}
            </option>
          ))}
        </select>
      </div>

      {/* Results count */}
      <p className="text-slate-400 text-sm">
        {filteredEntries.length} entrada{filteredEntries.length !== 1 ? "s" : ""} encontrada
        {filteredEntries.length !== 1 ? "s" : ""}
      </p>

      {/* Entries List */}
      <div className="space-y-3">
        {filteredEntries.map((entry) => (
          <StanfordEntryCard
            key={entry.id}
            entry={entry}
            onClick={() => setSelectedEntry(entry)}
          />
        ))}
      </div>

      {filteredEntries.length === 0 && (
        <div className="text-center py-8 text-slate-400">
          No se encontraron entradas con esos criterios
        </div>
      )}
    </div>
  );

  const renderAuthors = () => (
    <div className="space-y-6">
      <div className="text-center py-4">
        <h1 className="text-2xl font-bold text-white mb-2">Filosofos Destacados</h1>
        <p className="text-slate-400 text-sm">{philosophers.length} filosofos en la base de datos</p>
      </div>

      <div className="space-y-3">
        {philosophers.map((philosopher) => (
          <div
            key={philosopher.id}
            className="p-4 rounded-xl bg-slate-800/50 border border-slate-700/50 cursor-pointer hover:bg-slate-800/70 transition-all duration-200"
          >
            <div className="flex items-center gap-3">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-xl font-bold"
                style={{
                  backgroundColor: "#6366f120",
                  color: "#6366f1",
                }}
              >
                {philosopher.name.charAt(0)}
              </div>
              <div className="flex-1">
                <h3 className="text-white font-semibold">{philosopher.name}</h3>
                <p className="text-slate-400 text-sm">
                  {philosopher.birthYear}-{philosopher.deathYear || "presente"} | {philosopher.era}
                </p>
              </div>
              <ChevronRight className="w-5 h-5 text-slate-400" />
            </div>
            <p className="text-slate-400 text-sm mt-2 line-clamp-2">{philosopher.bio}</p>
            <div className="flex flex-wrap gap-1 mt-2">
              {philosopher.keyConcepts.slice(0, 3).map((concept, i) => (
                <span key={i} className="text-xs bg-slate-700 text-slate-300 px-2 py-0.5 rounded">
                  {concept}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderQuiz = () => (
    <div className="space-y-6">
      <div className="text-center py-4">
        <h1 className="text-2xl font-bold text-white mb-2">Quiz Filosofico</h1>
        <p className="text-slate-400 text-sm">Pon a prueba tus conocimientos</p>
      </div>

      <div className="text-card-foreground flex flex-col gap-6 rounded-xl border py-8 shadow-sm bg-slate-800/50 border-slate-700/50">
        <div className="text-center p-4">
          <div className="w-20 h-20 rounded-full bg-indigo-500/20 flex items-center justify-center mx-auto mb-4">
            <Award className="w-10 h-10 text-indigo-400" />
          </div>
          <h3 className="text-white font-semibold text-lg mb-2">Comienza tu primer Quiz</h3>
          <p className="text-slate-400 text-sm mb-4">
            Responde preguntas sobre filosofia y gana puntos para avanzar de nivel
          </p>
          <button className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium transition-colors">
            Iniciar Quiz
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div className="p-4 rounded-xl bg-slate-800/50 border border-slate-700/50 text-center">
          <p className="text-2xl font-bold text-white">0</p>
          <p className="text-xs text-slate-400">Quizzes completados</p>
        </div>
        <div className="p-4 rounded-xl bg-slate-800/50 border border-slate-700/50 text-center">
          <p className="text-2xl font-bold text-white">0%</p>
          <p className="text-xs text-slate-400">Puntuacion media</p>
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case "home":
        return renderHome();
      case "branches":
        return renderBranches();
      case "levels":
        return renderLevels();
      case "encyclopedia":
        return renderEncyclopedia();
      case "authors":
        return renderAuthors();
      case "quiz":
        return renderQuiz();
      default:
        return renderHome();
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <main className="pb-20 px-4 max-w-lg mx-auto">
        {renderContent()}
      </main>
      <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />

      {/* Entry Modal */}
      {selectedEntry && (
        <StanfordEntryModal
          entry={selectedEntry}
          isOpen={!!selectedEntry}
          onClose={() => setSelectedEntry(null)}
        />
      )}
    </div>
  );
}
