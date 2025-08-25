import React from 'react'
import Card from './ui/Card.jsx'
import ProgressBar from './ui/ProgressBar.jsx'
import { Star, BookOpen, Trophy, ArrowRight } from 'lucide-react'

export default function HomePage({ lastCourseLabel, onJumpIn, weeklyDone, weeklyGoal }) {
  const pct = Math.min(1, (weeklyDone || 0) / (weeklyGoal || 1));
  return (
    <div className="grid gap-4 md:grid-cols-3">
      <Card className="md:col-span-2">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-yellow-100 text-yellow-700 grid place-items-center">
            <Star />
          </div>
          <div>
            <div className="text-xl font-bold">Welcome back!</div>
            <div className="text-gray-600">Keep your streak going with a quick lesson.</div>
          </div>
        </div>
        <div className="mt-4">
          <div className="text-sm font-semibold text-gray-600 mb-2">Jump back in</div>
          <Card onClick={onJumpIn} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 grid place-items-center">
                <BookOpen size={18} />
              </div>
              <div>
                <div className="font-bold">{lastCourseLabel}</div>
                <div className="text-xs text-gray-500">Continue where you left off</div>
              </div>
            </div>
            <ArrowRight />
          </Card>
        </div>
      </Card>
      <Card>
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-green-100 text-green-700 grid place-items-center">
            <Trophy />
          </div>
          <div>
            <div className="text-xl font-bold">Weekly Goal</div>
            <div className="text-gray-500 text-sm">Finish {weeklyGoal} lessons</div>
          </div>
        </div>
        <div className="mt-4">
          <ProgressBar value={pct} />
          <div className="text-xs text-gray-500 mt-1">{weeklyDone} / {weeklyGoal} complete</div>
        </div>
      </Card>

      <Card className="md:col-span-3">
        <div className="text-lg font-bold mb-2">Next Steps</div>
        <div className="text-sm text-gray-600">Try a level below to grow your streak and fill your progress map.</div>
      </Card>
    </div>
  )
}
