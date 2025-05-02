import { CheckCircle, Clock, XCircle } from "lucide-react"

// Mock data for recent activity
const recentActivities = [
  {
    id: 1,
    type: "exam",
    title: "UPSC Prelims Mock Test 3",
    date: "Today, 10:30 AM",
    score: 78,
    status: "completed",
  },
  {
    id: 2,
    type: "practice",
    title: "Quantitative Aptitude Practice Set",
    date: "Yesterday, 4:15 PM",
    duration: "45 minutes",
    status: "completed",
  },
  {
    id: 3,
    type: "exam",
    title: "SSC CGL Mock Test 2",
    date: "May 1, 2023",
    score: 65,
    status: "completed",
  },
  {
    id: 4,
    type: "exam",
    title: "IELTS Reading Practice",
    date: "Apr 28, 2023",
    status: "failed",
    score: 42,
  },
]

export function RecentActivity() {
  return (
    <div className="space-y-4">
      {recentActivities.map((activity) => (
        <div key={activity.id} className="flex items-center justify-between border-b pb-3 last:border-0 last:pb-0">
          <div className="flex items-center gap-3">
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center ${
                activity.status === "completed"
                  ? "bg-green-100"
                  : activity.status === "failed"
                    ? "bg-red-100"
                    : "bg-blue-100"
              }`}
            >
              {activity.status === "completed" ? (
                <CheckCircle className={`h-5 w-5 ${activity.type === "exam" ? "text-green-600" : "text-blue-600"}`} />
              ) : activity.status === "failed" ? (
                <XCircle className="h-5 w-5 text-red-600" />
              ) : (
                <Clock className="h-5 w-5 text-blue-600" />
              )}
            </div>
            <div>
              <p className="font-medium text-sm">{activity.title}</p>
              <p className="text-xs text-gray-500">{activity.date}</p>
            </div>
          </div>
          <div className="text-right">
            {activity.score !== undefined && (
              <p
                className={`font-medium ${
                  activity.score >= 70 ? "text-green-600" : activity.score >= 50 ? "text-orange-600" : "text-red-600"
                }`}
              >
                {activity.score}%
              </p>
            )}
            {activity.duration && <p className="text-sm text-gray-600">{activity.duration}</p>}
          </div>
        </div>
      ))}
    </div>
  )
}
