"use client"

import { useState } from "react"
import { Bell, Check, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"

// Mock data for notifications
const notifications = [
  {
    id: 1,
    title: "New UPSC Mock Test Available",
    message: "A new mock test for UPSC Prelims has been added to your dashboard.",
    time: "2 hours ago",
    read: false,
    type: "exam",
  },
  {
    id: 2,
    title: "Study Streak Milestone",
    message: "Congratulations! You've maintained a 7-day study streak.",
    time: "Yesterday",
    read: true,
    type: "achievement",
  },
  {
    id: 3,
    title: "Upcoming Test Reminder",
    message: "Your scheduled SSC CGL mock test starts in 24 hours.",
    time: "Yesterday",
    read: false,
    type: "reminder",
  },
  {
    id: 4,
    title: "Performance Report",
    message: "Your weekly performance report is now available.",
    time: "3 days ago",
    read: true,
    type: "report",
  },
]

export function NotificationsPanel() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeTab, setActiveTab] = useState("all")
  const [notificationsList, setNotificationsList] = useState(notifications)

  const markAsRead = (id: number) => {
    setNotificationsList(
      notificationsList.map((notification) =>
        notification.id === id ? { ...notification, read: true } : notification,
      ),
    )
  }

  const markAllAsRead = () => {
    setNotificationsList(notificationsList.map((notification) => ({ ...notification, read: true })))
  }

  const clearNotification = (id: number) => {
    setNotificationsList(notificationsList.filter((notification) => notification.id !== id))
  }

  const filteredNotifications =
    activeTab === "all" ? notificationsList : notificationsList.filter((n) => n.type === activeTab)

  const unreadCount = notificationsList.filter((n) => !n.read).length

  return (
    <>
      {/* Notification Toggle Button (Mobile Only) */}
      <Button
        variant="outline"
        size="icon"
        className="fixed bottom-4 right-4 z-50 rounded-full shadow-lg md:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Bell className="h-5 w-5" />
        {unreadCount > 0 && (
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
            {unreadCount}
          </span>
        )}
      </Button>

      {/* Notifications Panel */}
      <div
        className={`fixed inset-y-0 right-0 w-full max-w-sm bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-40 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-lg font-semibold">Notifications</h2>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" onClick={markAllAsRead}>
              Mark all read
            </Button>
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
              <X className="h-5 w-5" />
            </Button>
          </div>
        </div>

        <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <div className="px-4 pt-4">
            <TabsList className="grid grid-cols-4 w-full">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="exam">Exams</TabsTrigger>
              <TabsTrigger value="reminder">Reminders</TabsTrigger>
              <TabsTrigger value="achievement">Achievements</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value={activeTab} className="mt-0">
            <div className="p-4 space-y-3 max-h-[calc(100vh-8rem)] overflow-y-auto">
              {filteredNotifications.length > 0 ? (
                filteredNotifications.map((notification) => (
                  <Card
                    key={notification.id}
                    className={`p-3 relative ${notification.read ? "bg-white" : "bg-purple-50"}`}
                  >
                    <div className="flex justify-between">
                      <h4 className="font-medium text-sm">{notification.title}</h4>
                      <div className="flex items-center gap-1">
                        {!notification.read && (
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-6 w-6"
                            onClick={() => markAsRead(notification.id)}
                          >
                            <Check className="h-4 w-4" />
                            <span className="sr-only">Mark as read</span>
                          </Button>
                        )}
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-6 w-6"
                          onClick={() => clearNotification(notification.id)}
                        >
                          <X className="h-4 w-4" />
                          <span className="sr-only">Clear notification</span>
                        </Button>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">{notification.message}</p>
                    <p className="text-xs text-gray-500 mt-2">{notification.time}</p>
                    {!notification.read && (
                      <div className="absolute top-3 left-0 w-1 h-1 bg-purple-600 rounded-full"></div>
                    )}
                  </Card>
                ))
              ) : (
                <div className="text-center py-8">
                  <p className="text-gray-500">No notifications to display</p>
                </div>
              )}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </>
  )
}
