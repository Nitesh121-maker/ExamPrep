import { Calendar, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"

// Mock data for upcoming exams
const upcomingExams = [
  {
    id: 1,
    title: "UPSC Prelims Full Mock Test",
    date: "May 15, 2023",
    time: "10:00 AM",
    duration: "2 hours",
    type: "scheduled",
  },
  {
    id: 2,
    title: "SSC CGL Tier 1 Mock",
    date: "May 18, 2023",
    time: "2:30 PM",
    duration: "1 hour",
    type: "scheduled",
  },
  {
    id: 3,
    title: "English Language Practice",
    type: "recommended",
  },
]

export function UpcomingExams() {
  return (
    <div className="space-y-4">
      {upcomingExams.map((exam) => (
        <div key={exam.id} className="flex items-center justify-between border-b pb-3 last:border-0 last:pb-0">
          <div className="flex items-center gap-3">
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center ${
                exam.type === "scheduled" ? "bg-purple-100" : "bg-blue-100"
              }`}
            >
              {exam.type === "scheduled" ? (
                <Calendar className="h-5 w-5 text-purple-600" />
              ) : (
                <Clock className="h-5 w-5 text-blue-600" />
              )}
            </div>
            <div>
              <p className="font-medium text-sm">{exam.title}</p>
              {exam.date && (
                <p className="text-xs text-gray-500">
                  {exam.date} • {exam.time}
                </p>
              )}
              {!exam.date && <p className="text-xs text-gray-500">Available now</p>}
            </div>
          </div>
          <div>
            {exam.type === "scheduled" ? (
              <Button size="sm" variant="outline">
                Prepare
              </Button>
            ) : (
              <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
                Start
              </Button>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}
