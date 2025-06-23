import { motion } from "framer-motion";
import SEOHead from "@/components/seo-head";
import TeamSection from "@/components/team-section";

export default function About() {
  const timeline = [
    {
      year: "2020",
      title: "CodeVente Founded",
      description: "Started with a vision to bridge the gap between innovative technology and business growth.",
      color: "blue"
    },
    {
      year: "2021",
      title: "First 50 Clients",
      description: "Reached our first major milestone by serving 50+ satisfied clients across various industries.",
      color: "violet"
    },
    {
      year: "2022",
      title: "Service Expansion",
      description: "Expanded our services to include comprehensive digital marketing and SEO solutions.",
      color: "cyan"
    },
    {
      year: "2023",
      title: "Award Recognition",
      description: "Recognized as \"Rising Tech Company of the Year\" for our innovative approach and client success.",
      color: "emerald"
    }
  ];

  const colorMap = {
    blue: "bg-blue-600 text-blue-600",
    violet: "bg-violet-600 text-violet-600",
    cyan: "bg-cyan-600 text-cyan-600",
    emerald: "bg-emerald-600 text-emerald-600"
  };

  return (
    <>
      <SEOHead
        title="About CodeVente - Our Mission, Vision & Team"
        description="Learn about CodeVente's mission to empower businesses through innovative digital solutions. Meet our expert team and discover our journey."
        keywords="about codevente, tech company team, digital agency mission, web development team"
      />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-blue-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            className="text-5xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            About CodeVente
          </motion.h1>
          <motion.p
            className="text-xl text-slate-200"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Empowering businesses through innovative digital solutions since our inception.
          </motion.p>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-slate-900 mb-6">Our Mission</h2>
              <p className="text-lg text-slate-600 mb-6">
                To empower businesses of all sizes with cutting-edge digital solutions that drive growth, enhance user experiences, and create lasting competitive advantages in the digital marketplace.
              </p>
              <h3 className="text-2xl font-semibold text-slate-900 mb-4">Our Vision</h3>
              <p className="text-lg text-slate-600">
                To be the leading technology partner that transforms ideas into impactful digital experiences, fostering innovation and success for our clients worldwide.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="Team collaboration in modern office environment"
                className="rounded-xl shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Company Journey Timeline */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Journey</h2>
            <p className="text-xl text-slate-600">Key milestones in our growth and evolution.</p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-blue-200"></div>

            {/* Timeline items */}
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  className={`relative flex items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className={`absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 ${colorMap[item.color as keyof typeof colorMap].split(' ')[0]} rounded-full border-4 border-white shadow-lg z-10`}></div>
                  <div className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 1 ? 'md:pl-8' : 'md:pr-8'}`}>
                    <div className="bg-white p-6 rounded-xl shadow-lg">
                      <div className={`font-semibold mb-2 ${colorMap[item.color as keyof typeof colorMap].split(' ')[1]}`}>
                        {item.year}
                      </div>
                      <h3 className="text-xl font-semibold text-slate-900 mb-2">{item.title}</h3>
                      <p className="text-slate-600">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <TeamSection />
    </>
  );
}
