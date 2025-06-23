import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { TEAM_MEMBERS } from "@/lib/constants";

const colorMap = {
  blue: "text-blue-600",
  violet: "text-violet-600",
  cyan: "text-cyan-600",
  emerald: "text-emerald-600",
};

export default function TeamSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Meet Our Team</h2>
          <p className="text-xl text-slate-600">The talented individuals behind CodeVente's success.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TEAM_MEMBERS.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-slate-50 hover:shadow-lg transition-shadow duration-300 h-full">
                <CardContent className="p-8 text-center">
                  <img
                    src={member.avatar}
                    alt={`${member.name} profile`}
                    className="w-32 h-32 rounded-full mx-auto mb-6 object-cover"
                  />
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">{member.name}</h3>
                  <p className={`font-medium mb-4 ${colorMap[member.color as keyof typeof colorMap]}`}>
                    {member.role}
                  </p>
                  <p className="text-slate-600 text-sm">{member.bio}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
