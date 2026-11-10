// Explicit icon registry — importing only what the data files reference keeps
// the bundle small (a wildcard `import * as` would pull in all of lucide-react).
import {
  Brain,
  Cpu,
  Coffee,
  Code2,
  Globe,
  Smartphone,
  BarChart3,
  Layers,
  CircuitBoard,
  Plane,
  Briefcase,
  Wrench,
  FolderOpen,
  Users,
  Compass,
  Award,
  Rocket,
  Bot,
  Circle,
} from 'lucide-react';

const registry = {
  Brain,
  Cpu,
  Coffee,
  Code2,
  Globe,
  Smartphone,
  BarChart3,
  Layers,
  CircuitBoard,
  Plane,
  Briefcase,
  Wrench,
  FolderOpen,
  Users,
  Compass,
  Award,
  Rocket,
  Bot,
};

// Resolve a Lucide icon by its string name (from data files).
// Falls back to a neutral circle if the name is unknown.
export default function Icon({ name, ...props }) {
  const LucideIcon = registry[name] || Circle;
  return <LucideIcon {...props} />;
}
