import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Bell, Settings } from "lucide-react"

interface UserGreetingProps {
  user: {
    name: string
    avatar: string
  }
}

export function UserGreeting({ user }: UserGreetingProps) {
  // Get time of day for greeting
  const getGreeting = () => {
    const hour = new Date().getHours()
    if (hour < 12) return "Good morning"
    if (hour < 18) return "Good afternoon"
    return "Good evening"
  }

  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
      <div className="flex items-center gap-3 mb-4 md:mb-0">
        <Avatar className="h-12 w-12">
          <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name} />
          <AvatarFallback>{user.name.substring(0, 2).toUpperCase()}</AvatarFallback>
        </Avatar>
        <div>
          <h1 className="text-2xl font-bold text-gray-800">
            {getGreeting()}, {user.name.split(" ")[0]}!
          </h1>
          <p className="text-gray-500">Welcome back to your dashboard</p>
        </div>
      </div>
      <div className="flex md:hidden gap-2">
        <Button variant="outline" size="icon" className="rounded-full">
          <Bell className="h-4 w-4" />
        </Button>
        <Button variant="outline" size="icon" className="rounded-full">
          <Settings className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}
