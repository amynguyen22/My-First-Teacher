import React from 'react'
import { Home as HomeIcon, BookOpen, GraduationCap, Flame } from 'lucide-react'
import { Button } from './ui/Button.jsx'
import Badge from './ui/Badge.jsx'

export default function Nav({ page, setPage, streak = 1 }) {
  return (
    <div className="sticky top-0 z-10 bg-gradient-to-b from-sky-50/80 to-transparent backdrop-blur">
      <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-xl bg-blue-600 text-white grid place-items-center shadow-sm">
            <GraduationCap size={18} />
          </div>
          <div className="font-extrabold text-lg">My First Teacher</div>
        </div>
        <div className="flex items-center gap-2">
          <Button className={`${page === "home" ? "bg-gray-100" : ""}`} onClick={() => setPage("home")}>
            <HomeIcon size={16} className="mr-2" /> Home
          </Button>
          <Button className={`${page === "courses" ? "bg-gray-100" : ""}`} onClick={() => setPage("courses")}>
            <BookOpen size={16} className="mr-2" /> Courses
          </Button>
          <Badge className="border-orange-200 bg-orange-50 text-orange-700">
            <Flame size={14} /> {streak} day streak
          </Badge>
        </div>
      </div>
    </div>
  )
}
