import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import SEOHead from "@/components/seo-head";

interface Enrollment {
  id: number;
  fullName: string;
  email: string;
  phoneNumber: string;
  referralSource: string;
  paymentScreenshot?: string;
  createdAt: string;
}

export default function AdminEnrollments() {
  const [enrollments, setEnrollments] = useState<Enrollment[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchEnrollments();
  }, []);

  const fetchEnrollments = async () => {
    try {
      const response = await fetch('/api/course-enrollments');
      const data = await response.json();
      setEnrollments(data);
    } catch (error) {
      console.error('Failed to fetch enrollments:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <SEOHead
        title="Course Enrollments - Admin"
        description="View all course enrollments"
        keywords="admin, enrollments"
      />

      <div className="min-h-screen bg-brand-soft py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl font-bold text-white mb-2">Course Enrollments</h1>
            <p className="text-gray-400 mb-8">
              Total Enrollments: {enrollments.length}
            </p>

            {loading ? (
              <div className="text-center py-12">
                <div className="inline-block w-8 h-8 border-4 border-gray-600 border-t-orange-500 rounded-full animate-spin"></div>
                <p className="text-gray-400 mt-4">Loading enrollments...</p>
              </div>
            ) : enrollments.length === 0 ? (
              <div className="bg-[#1a1f2e] rounded-lg p-12 text-center">
                <p className="text-gray-400 text-lg">No enrollments yet</p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full bg-[#1a1f2e] rounded-lg overflow-hidden">
                  <thead className="bg-[#0f1420]">
                    <tr>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">
                        Date
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">
                        Name
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">
                        Email
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">
                        Phone
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">
                        Source
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">
                        Screenshot
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-800">
                    {enrollments.map((enrollment) => (
                      <tr key={enrollment.id} className="hover:bg-[#141824] transition-colors">
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                          {new Date(enrollment.createdAt).toLocaleDateString('en-US', {
                            month: 'short',
                            day: 'numeric',
                            year: 'numeric',
                            hour: '2-digit',
                            minute: '2-digit'
                          })}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">
                          {enrollment.fullName}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                          {enrollment.email}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                          {enrollment.phoneNumber}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                          <span className="px-2 py-1 bg-[#0f1420] rounded text-xs">
                            {enrollment.referralSource}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                          {enrollment.paymentScreenshot ? (
                            <a
                              href={`/uploads/${enrollment.paymentScreenshot}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-orange-500 hover:text-orange-400 underline"
                            >
                              View
                            </a>
                          ) : (
                            <span className="text-gray-500">No file</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            <div className="mt-8 bg-[#1a1f2e] rounded-lg p-6 border border-orange-500/20">
              <h3 className="text-lg font-semibold text-white mb-2">📊 Google Sheets Integration</h3>
              <p className="text-gray-400 text-sm">
                All enrollments are automatically saved to your Google Sheet for easy management and sharing with your team.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
