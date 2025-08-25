import React, { useEffect } from 'react'
import Card from '../ui/Card.jsx'
import Badge from '../ui/Badge.jsx'
import ProgressBar from '../ui/ProgressBar.jsx'
import { Button, PrimaryButton } from '../ui/Button.jsx'
import SubjectMap from './SubjectMap.jsx'
import { ArrowLeft, Lock, Play, Check } from 'lucide-react'
import { saveLS } from '../../lib/storage.js'

export default function SubjectModule({ subject, progress, setProgress, goBack, markLastCourse, checkIn, storageKey, levelsMeta }) {
  const totalLevels = 4;
  const completedCount = Object.values(progress).filter(Boolean).length;
  const pct = completedCount / totalLevels;

  useEffect(() => {
    markLastCourse(subject);
    checkIn(); // visiting a subject counts as a daily check-in
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const startLevel = (idx) => {
    if (idx > 1 && !progress[idx - 1]) return; // lock enforcement
    const newProg = { ...progress, [idx]: true };
    setProgress(newProg);
    saveLS(storageKey, newProg);
  };

  return (
    <div>
      <div className="flex items-center gap-2 mb-4">
        <Button onClick={goBack}>
          <ArrowLeft size={16} className="mr-2" /> Back
        </Button>
        <div className="text-xl font-extrabold">{subject} • Beginner Path</div>
      </div>
      <Card className="mb-4">
        <div className="flex items-center justify-between gap-3">
          <div>
            <div className="font-bold">Path Progress</div>
            <div className="text-xs text-gray-500">Complete the levels in order</div>
          </div>
          <div className="text-sm font-semibold">{Math.round(pct * 100)}%</div>
        </div>
        <div className="mt-2">
          <ProgressBar value={pct} />
        </div>
      </Card>
      <div className="grid md:grid-cols-[240px_1fr] gap-6">
        <Card>
          <div className="text-sm text-gray-500 mb-2">Your Map</div>
          <SubjectMap progress={progress} openLevel={startLevel} total={totalLevels} />
        </Card>
        <Card>
          <div className="text-lg font-bold mb-2">Levels</div>
          <div className="grid gap-2">
            {levelsMeta.map((meta, i) => {
              const idx = i + 1;
              const locked = idx > 1 && !progress[idx - 1];
              const done = !!progress[idx];
              return (
                <Card key={idx}>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-bold">Level {idx}: {meta.name}</div>
                      <div className="text-xs text-gray-500">{meta.desc}</div>
                    </div>
                    {locked ? (
                      <Badge className="border-gray-200 bg-gray-50 text-gray-600"><Lock size={14}/> Locked</Badge>
                    ) : done ? (
                      <Badge className="border-green-200 bg-green-50 text-green-700"><Check size={14}/> Done</Badge>
                    ) : (
                      <PrimaryButton onClick={() => startLevel(idx)}>
                        <Play size={16} className="mr-2" /> Start
                      </PrimaryButton>
                    )}
                  </div>
                </Card>
              );
            })}
          </div>
        </Card>
      </div>
    </div>
  )
}
