import { useState } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ExternalLink, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import FadeInSection from "@/components/animations/FadeInSection";
import {
  PORTFOLIO_PROJECTS,
  getCaseStudyPath,
  getCategoryLabel,
  getCategoryColor,
  getProjectCategories,
} from "@/lib/portfolio";

const filters = [
  { id: "all", label: "All" },
  { id: "web", label: "Web Apps" },
  { id: "mobile", label: "Mobile" },
  { id: "marketing", label: "Marketing" },
  { id: "design", label: "Design" },
];

export default function PortfolioGrid() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects =
    activeFilter === "all"
      ? PORTFOLIO_PROJECTS
      : PORTFOLIO_PROJECTS.filter(
          (project) =>
            project.category === activeFilter ||
            (Array.isArray(project.categories) && project.categories.includes(activeFilter))
        );

  return (
    <section className="section-padding section-light">
      <div className="section-container">
        <div className="flex flex-wrap justify-center gap-2 mb-14">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
                activeFilter === filter.id
                  ? "bg-electric text-white shadow-lg shadow-electric/25"
                  : "bg-white text-slate-600 border border-slate-200 hover:border-electric/30 hover:text-electric"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: index * 0.04 }}
                className="card-light overflow-hidden group flex flex-col"
              >
                <Link href={getCaseStudyPath(project.slug)}>
                  <div className="relative overflow-hidden aspect-[16/10] cursor-pointer">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-void/80 via-void/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                      <span className="text-white text-sm font-medium flex items-center gap-1.5">
                        View case study <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </Link>
                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-start justify-between mb-3 gap-2">
                    <div className="flex flex-wrap gap-1.5">
                      {getProjectCategories(project).map((category) => (
                        <Badge key={`${project.id}-${category}`} variant="outline" className={getCategoryColor(category)}>
                          {getCategoryLabel(category)}
                        </Badge>
                      ))}
                    </div>
                    <div className="hidden sm:flex text-amber-400">
                      {[...Array(project.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-current" />
                      ))}
                    </div>
                  </div>
                  <Link href={getCaseStudyPath(project.slug)}>
                    <h3 className="font-semibold text-slate-900 mb-1.5 hover:text-electric transition-colors cursor-pointer">
                      {project.title}
                    </h3>
                  </Link>
                  <p className="text-slate-600 text-sm mb-4 line-clamp-2 flex-1">{project.description}</p>
                  <div className="flex items-center justify-between pt-3 border-t border-slate-100 mt-auto">
                    <Link href={getCaseStudyPath(project.slug)}>
                      <span className="text-sm font-medium text-electric hover:underline cursor-pointer flex items-center gap-1">
                        Case study <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </Link>
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        title="View live project"
                        className="w-8 h-8 rounded-lg bg-slate-50 hover:bg-electric/5 flex items-center justify-center text-slate-500 hover:text-electric transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
