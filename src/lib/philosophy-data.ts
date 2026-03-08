export interface Philosopher {
  id: string;
  name: string;
  birthYear: number;
  deathYear?: number;
  era: string;
  branch: string;
  bio: string;
  keyWorks: string[];
  keyConcepts: string[];
}

export interface Branch {
  id: string;
  name: string;
  icon: string;
  color: string;
  description: string;
  question: string;
}

export interface Level {
  id: number;
  name: string;
  description: string;
  topics: string[];
  requiredScore: number;
}

export const branches: Branch[] = [
  {
    id: "metaphysics",
    name: "Metafísica",
    icon: "🌌",
    color: "#6366f1",
    description: "Estudio de la naturaleza fundamental de la realidad",
    question: "¿Qué es la realidad?",
  },
  {
    id: "epistemology",
    name: "Epistemología",
    icon: "🧠",
    color: "#8b5cf6",
    description: "Estudio del conocimiento y la creencia justificada",
    question: "¿Cómo sabemos lo que sabemos?",
  },
  {
    id: "logic",
    name: "Lógica",
    icon: "📐",
    color: "#ec4899",
    description: "Estudio de los principios del razonamiento válido",
    question: "¿Qué hace que un argumento sea válido?",
  },
  {
    id: "ethics",
    name: "Ética",
    icon: "⚖️",
    color: "#f59e0b",
    description: "Estudio de los principios morales y la conducta",
    question: "¿Cómo debemos vivir?",
  },
  {
    id: "aesthetics",
    name: "Estética",
    icon: "🎨",
    color: "#10b981",
    description: "Estudio de la belleza y el arte",
    question: "¿Qué es la belleza?",
  },
  {
    id: "political",
    name: "Filosofía Política",
    icon: "🏛️",
    color: "#ef4444",
    description: "Estudio del gobierno y la justicia social",
    question: "¿Cómo debemos organizarnos como sociedad?",
  },
];

export const levels: Level[] = [
  {
    id: 1,
    name: "Introducciones Generales",
    description: "Conceptos básicos y panorámica general de la filosofía",
    topics: ["¿Qué es la filosofía?", "Historia general", "Ramas principales"],
    requiredScore: 0,
  },
  {
    id: 2,
    name: "Pensadores Fundacionales",
    description: "Los primeros filósofos de Grecia antigua",
    topics: ["Presocráticos", "Sócrates", "Platón", "Aristóteles"],
    requiredScore: 60,
  },
  {
    id: 3,
    name: "Filosofía Medieval",
    description: "La síntesis entre fe y razón",
    topics: ["Agustín de Hipona", "Tomás de Aquino", "Filosofía islámica"],
    requiredScore: 120,
  },
  {
    id: 4,
    name: "Racionalismo y Empirismo",
    description: "El debate sobre el origen del conocimiento",
    topics: ["Descartes", "Spinoza", "Leibniz", "Locke", "Hume"],
    requiredScore: 180,
  },
  {
    id: 5,
    name: "Kant y el Idealismo",
    description: "La revolución copernicana en filosofía",
    topics: ["Kant", "Hegel", "Schelling", "Fichte"],
    requiredScore: 240,
  },
  {
    id: 6,
    name: "Filosofía del siglo XIX",
    description: "Marx, Nietzsche y los nuevos paradigmas",
    topics: ["Marx", "Nietzsche", "Kierkegaard", "Utilitarismo"],
    requiredScore: 300,
  },
  {
    id: 7,
    name: "Filosofía Analítica",
    description: "El giro lingüístico y la lógica moderna",
    topics: ["Frege", "Russell", "Wittgenstein", "Filosofía del lenguaje"],
    requiredScore: 360,
  },
  {
    id: 8,
    name: "Fenomenología y Existencialismo",
    description: "La experiencia humana y el sentido de la existencia",
    topics: ["Husserl", "Heidegger", "Sartre", "Merleau-Ponty"],
    requiredScore: 420,
  },
  {
    id: 9,
    name: "Filosofía Contemporánea",
    description: "Debates actuales y nuevas perspectivas",
    topics: ["Posmodernidad", "Filosofía de la mente", "Neurofilosofía"],
    requiredScore: 480,
  },
  {
    id: 10,
    name: "Maestría Filosófica",
    description: "Síntesis y aplicación del conocimiento filosófico",
    topics: ["Síntesis interdisciplinaria", "Problemas abiertos", "Debates contemporáneos"],
    requiredScore: 540,
  },
];

export const philosophers: Philosopher[] = [
  {
    id: "plato",
    name: "Platón",
    birthYear: -428,
    deathYear: -348,
    era: "Antigüedad Clásica",
    branch: "Metafísica",
    bio: "Filósofo griego fundador de la Academia de Atenas, considerado uno de los pensadores más influyentes de la historia occidental.",
    keyWorks: ["La República", "Fedón", "El Banquete", "Timeo"],
    keyConcepts: ["Teoría de las Ideas", "Mundo inteligible", "Dialéctica", "Amor platónico"],
  },
  {
    id: "aristotle",
    name: "Aristóteles",
    birthYear: -384,
    deathYear: -322,
    era: "Antigüedad Clásica",
    branch: "Metafísica",
    bio: "Filósofo griego discípulo de Platón y tutor de Alejandro Magno. Fundador del Liceo y padre de la lógica formal.",
    keyWorks: ["Metafísica", "Ética a Nicómaco", "Política", "Órganon"],
    keyConcepts: ["Sustancia", "Causa final", "Silogismo", "Catálogo de las ciencias"],
  },
  {
    id: "kant",
    name: "Immanuel Kant",
    birthYear: 1724,
    deathYear: 1804,
    era: "Modernidad",
    branch: "Epistemología",
    bio: "Filósofo alemán que sintetizó el racionalismo y el empirismo. Su obra marca un punto de inflexión en la historia de la filosofía.",
    keyWorks: ["Crítica de la razón pura", "Crítica de la razón práctica", "Crítica del juicio"],
    keyConcepts: ["Imperativo categórico", "Fenómeno vs. Noúmeno", "A priori sintético", "Idealismo trascendental"],
  },
  {
    id: "nietzsche",
    name: "Friedrich Nietzsche",
    birthYear: 1844,
    deathYear: 1900,
    era: "Siglo XIX",
    branch: "Ética",
    bio: "Filósofo alemán crítico de la moral tradicional y la religión. Su pensamiento influyó profundamente en el existencialismo y la posmodernidad.",
    keyWorks: ["Así habló Zaratustra", "Más allá del bien y del mal", "Genealogía de la moral"],
    keyConcepts: ["Voluntad de poder", "Superhombre", "Eterno retorno", "Nihilismo"],
  },
  {
    id: "descartes",
    name: "René Descartes",
    birthYear: 1596,
    deathYear: 1650,
    era: "Modernidad",
    branch: "Epistemología",
    bio: "Filósofo y matemático francés, considerado el padre de la filosofía moderna por su método de duda sistemática.",
    keyWorks: ["Discurso del método", "Meditaciones metafísicas", "Principios de filosofía"],
    keyConcepts: ["Cogito ergo sum", "Duda metódica", "Dualismo cartesiano", "Racionalismo"],
  },
  {
    id: "hume",
    name: "David Hume",
    birthYear: 1711,
    deathYear: 1776,
    era: "Modernidad",
    branch: "Epistemología",
    bio: "Filósofo escocés representante máximo del empirismo británico. Su escepticismo influyó en Kant y la filosofía analítica.",
    keyWorks: ["Tratado de la naturaleza humana", "Investigación sobre el entendimiento humano"],
    keyConcepts: ["Problema de la inducción", "Impresiones e ideas", "Escepticismo", "Asociación de ideas"],
  },
  {
    id: "aquinas",
    name: "Tomás de Aquino",
    birthYear: 1225,
    deathYear: 1274,
    era: "Edad Media",
    branch: "Metafísica",
    bio: "Teólogo y filósofo italiano, principal representante de la escolástica. Canonizado como Doctor de la Iglesia.",
    keyWorks: ["Suma Teológica", "Suma contra los gentiles"],
    keyConcepts: ["Las cinco vías", "Analogía del ser", "Síntesis fe-razón", "Ley natural"],
  },
  {
    id: "wittgenstein",
    name: "Ludwig Wittgenstein",
    birthYear: 1889,
    deathYear: 1951,
    era: "Contemporánea",
    branch: "Lógica",
    bio: "Filósofo austriaco-británico que revolucionó la filosofía del lenguaje con dos etapas claramente diferenciadas.",
    keyWorks: ["Tractatus Logico-Philosophicus", "Investigaciones filosóficas"],
    keyConcepts: ["Juegos de lenguaje", "Límites del lenguaje", "Mostrar vs. Decir", "Significado como uso"],
  },
  {
    id: "hegel",
    name: "Georg Wilhelm Friedrich Hegel",
    birthYear: 1770,
    deathYear: 1831,
    era: "Modernidad",
    branch: "Metafísica",
    bio: "Filósofo alemán idealista, creador del sistema dialéctico que influyó en Marx, Kierkegaard y la filosofía continental.",
    keyWorks: ["Fenomenología del espíritu", "Ciencia de la lógica", "Filosofía del derecho"],
    keyConcepts: ["Dialéctica", "Espíritu absoluto", "Aufhebung", "Idealismo absoluto"],
  },
  {
    id: "sartre",
    name: "Jean-Paul Sartre",
    birthYear: 1905,
    deathYear: 1980,
    era: "Contemporánea",
    branch: "Ética",
    bio: "Filósofo y escritor francés, principal exponente del existencialismo ateo. Premio Nobel de Literatura rechazado.",
    keyWorks: ["El ser y la nada", "El existencialismo es un humanismo", "Crítica de la razón dialéctica"],
    keyConcepts: ["Existencialismo", "Mala fe", "Ser en sí / Ser para sí", "La existencia precede a la esencia"],
  },
];

export function getPhilosopherOfTheDay(): Philosopher {
  const dayOfYear = Math.floor(
    (Date.now() - new Date(new Date().getFullYear(), 0, 0).getTime()) / 86400000
  );
  return philosophers[dayOfYear % philosophers.length];
}

export function getPhilosopherById(id: string): Philosopher | undefined {
  return philosophers.find((p) => p.id === id);
}

export function getBranchById(id: string): Branch | undefined {
  return branches.find((b) => b.id === id);
}
