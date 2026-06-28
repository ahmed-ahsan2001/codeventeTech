import { useState } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  PORTFOLIO_PROJECTS,
  getCaseStudyPath,
  getCategoryLabel,
  getCategoryColor,
  getProjectCategories,
} from "@/lib/portfolio";

export default function PortfolioGrid() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filters = [
    { id: "all", label: "All Projects" },
    { id: "web", label: "Web Apps" },
    { id: "mobile", label: "Mobile Apps" },
    { id: "marketing", label: "Digital Marketing" },
    { id: "design", label: "UI/UX Design" },
  ];

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
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {filters.map((filter) => (
            <Button
              key={filter.id}
              variant="outline"
              onClick={() => setActiveFilter(filter.id)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${
                activeFilter === filter.id
                  ? "bg-primary text-white border-primary shadow-md shadow-primary/20"
                  : "bg-white text-slate-600 border-slate-200 hover:border-sky-300 hover:bg-sky-50"
              }`}
            >
              {filter.label}
            </Button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              layout
              className="card-light overflow-hidden group hover:-translate-y-1 flex flex-col"
            >
              <Link href={getCaseStudyPath(project.slug)}>
                <div className="relative overflow-hidden aspect-[16/10] cursor-pointer">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                    <span className="text-white text-sm font-medium flex items-center gap-1">
                      View case study <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </Link>
              <div className="p-5 flex flex-col flex-1">
                <div className="flex items-start justify-between mb-3 gap-2">
                  <div className="flex flex-wrap gap-1.5">
                    {getProjectCategories(project).map((category) => (
                      <Badge
                        key={`${project.id}-${category}`}
                        variant="outline"
                        className={getCategoryColor(category)}
                      >
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
                  <h3 className="font-semibold text-slate-900 mb-1.5 hover:text-primary transition-colors cursor-pointer">
                    {project.title}
                  </h3>
                </Link>
                <p className="text-slate-600 text-sm mb-4 line-clamp-2 flex-1">{project.description}</p>

                <div className="flex items-center justify-between pt-3 border-t border-slate-100 mt-auto">
                  <Link href={getCaseStudyPath(project.slug)}>
                    <span className="text-sm font-medium text-primary hover:underline cursor-pointer flex items-center gap-1">
                      Case study <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </Link>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="View live project"
                      onClick={(e) => e.stopPropagation()}
                      className="flex-shrink-0 w-8 h-8 rounded-lg bg-slate-50 hover:bg-sky-50 flex items-center justify-center text-slate-500 hover:text-primary transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
