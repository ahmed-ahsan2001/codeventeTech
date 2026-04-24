import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PORTFOLIO_PROJECTS } from "@/lib/constants";

export default function PortfolioGrid() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filters = [
    { id: "all", label: "All Projects" },
    { id: "web", label: "Web Development" },
    { id: "mobile", label: "Mobile Development" },
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

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "web":
        return "bg-blue-100 text-blue-800";
      case "mobile":
        return "bg-cyan-100 text-cyan-800";
      case "marketing":
        return "bg-violet-100 text-violet-800";
      case "design":
        return "bg-emerald-100 text-emerald-800";
      default:
        return "bg-slate-100 text-slate-800";
    }
  };

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case "web":
        return "Web Development";
      case "mobile":
        return "Mobile Development";
      case "marketing":
        return "Digital Marketing";
      case "design":
        return "UI/UX Design";
      default:
        return category;
    }
  };

  return (
    <section className="py-20 bg-brand-soft">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <Button
              key={filter.id}
              variant={activeFilter === filter.id ? "default" : "outline"}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
                activeFilter === filter.id
                  ? "bg-brand-gradient text-white"
                  : "bg-white text-slate-600 border border-sky-100 hover:bg-sky-50"
              }`}
            >
              {filter.label}
            </Button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              layout
            >
              <Card className="group bg-white/90 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden border-sky-100">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-44 md:h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-4 md:p-6">
                  <div className="flex items-start justify-between mb-3 gap-2">
                    <div className="flex flex-wrap gap-2">
                      {(Array.isArray(project.categories) ? project.categories : [project.category]).map(
                        (category) => (
                          <Badge key={`${project.id}-${category}`} className={getCategoryColor(category)}>
                            {getCategoryLabel(category)}
                          </Badge>
                        )
                      )}
                    </div>
                    <div className="hidden sm:flex text-yellow-400">
                      {[...Array(project.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                  </div>

                  <h3 className="text-lg md:text-xl font-semibold text-slate-900 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 text-sm md:text-base mb-3 md:mb-4 line-clamp-2 md:line-clamp-none">{project.description}</p>

                  <div className="flex items-center justify-between mb-3 md:mb-4">
                    <div className="text-xs md:text-sm text-slate-500 line-clamp-1 pr-3">
                      {project.technologies}
                    </div>

                    {/* ✅ Open Live Project */}
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        title="View Live Project"
                      >
                        <Button
                          variant="ghost"
                          size="sm"
                          className="p-2 hover:bg-slate-100"
                        >
                          <ExternalLink className="w-5 h-5" />
                        </Button>
                      </a>
                    )}
                  </div>

                  <div className="pt-3 md:pt-4 border-t border-slate-100">
                    <div className="text-xs md:text-sm text-slate-600 line-clamp-2 md:line-clamp-none">
                      <strong>Results:</strong> {project.results}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
