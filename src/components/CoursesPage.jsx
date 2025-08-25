import React from 'react'
import Card from './ui/Card.jsx'
import { BookOpen, ChevronRight } from 'lucide-react'

export default function CoursesPage({ openMath, openReading, openWriting }) {
  return (
    <div className="grid gap-4 sm:grid-cols-3">
      <Card onClick={openMath}>
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-700 grid place-items-center">
            <BookOpen />
          </div>
          <div className="flex-1">
            <div className="font-bold">Math</div>
            <div className="text-sm text-gray-500">Numbers • Counting • Shapes</div>
          </div>
          <ChevronRight />
        </div>
      </Card>
      <Card onClick={openReading}>
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-purple-100 text-purple-700 grid place-items-center">
            <BookOpen />
          </div>
          <div className="flex-1">
            <div className="font-bold">Reading</div>
            <div className="text-sm text-gray-500">Alphabet • Phonics</div>
          </div>
          <ChevronRight />
        </div>
      </Card>
      <Card onClick={openWriting}>
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-pink-100 text-pink-700 grid place-items-center">
            <BookOpen />
          </div>
          <div className="flex-1">
            <div className="font-bold">Writing</div>
            <div className="text-sm text-gray-500">Letters • Tracing</div>
          </div>
          <ChevronRight />
        </div>
      </Card>
    </div>
  )
}
