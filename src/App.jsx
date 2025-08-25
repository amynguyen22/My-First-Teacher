import React, { useEffect, useState } from 'react'
import Nav from './components/Nav.jsx'
import HomePage from './components/HomePage.jsx'
import CoursesPage from './components/CoursesPage.jsx'
import SubjectModule from './components/Subject/SubjectModule.jsx'
import DevTests from './dev/DevTests.jsx'
import { subjectLevels, DEFAULT_PROGRESS_4 } from './constants/levels.js'
import { todayKey, isYesterday } from './lib/dates.js'
import { loadLS, saveLS } from './lib/storage.js'

export default function App() {
  const [page, setPage] = useState("home"); // home | courses | math | reading | writing

  const [streak, setStreak] = useState(() => loadLS("streak", 1));
  const [lastStreakDate, setLastStreakDate] = useState(() => loadLS("lastStreakDate", null));
  const [lastCourse, setLastCourse] = useState(() => loadLS("lastCourse", "Math"));

  const [mathProgress, setMathProgress] = useState(() => loadLS("mathProgress", { ...DEFAULT_PROGRESS_4 }));
  const [readingProgress, setReadingProgress] = useState(() => loadLS("readingProgress", { ...DEFAULT_PROGRESS_4 }));
  const [writingProgress, setWritingProgress] = useState(() => loadLS("writingProgress", { ...DEFAULT_PROGRESS_4 }));

  // Daily streak on app open
  useEffect(() => {
    const today = todayKey();
    if (lastStreakDate === today) return; // already counted today
    if (isYesterday(lastStreakDate)) {
      const ns = (Number(streak) || 0) + 1;
      setStreak(ns); saveLS("streak", ns);
    } else {
      setStreak(1); saveLS("streak", 1);
    }
    setLastStreakDate(today); saveLS("lastStreakDate", today);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const checkIn = () => {
    const today = todayKey();
    if (lastStreakDate !== today) {
      setLastStreakDate(today); saveLS("lastStreakDate", today);
      const ns = isYesterday(lastStreakDate) ? streak + 1 : 1;
      setStreak(ns); saveLS("streak", ns);
    }
  };

  const markLastCourse = (course) => { setLastCourse(course); saveLS("lastCourse", course); };

  const openMath = () => { markLastCourse("Math"); setPage("math"); };
  const openReading = () => { markLastCourse("Reading"); setPage("reading"); };
  const openWriting = () => { markLastCourse("Writing"); setPage("writing"); };

  const openLast = () => {
    if (lastCourse === "Math") return openMath();
    if (lastCourse === "Reading") return openReading();
    return openWriting();
  };

  const weeklyDone = [mathProgress, readingProgress, writingProgress]
    .flatMap((p) => Object.values(p))
    .filter(Boolean).length;
  const weeklyGoal = 6;

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white text-gray-900">
      <Nav page={page} setPage={setPage} streak={streak} />

      <main className="max-w-5xl mx-auto px-4 py-6">
        {page === "home" && (
          <HomePage lastCourseLabel={lastCourse} onJumpIn={openLast} weeklyDone={weeklyDone} weeklyGoal={weeklyGoal} />
        )}
        {page === "courses" && (
          <CoursesPage openMath={openMath} openReading={openReading} openWriting={openWriting} />
        )}
        {page === "math" && (
          <SubjectModule
            subject="Math"
            progress={mathProgress}
            setProgress={setMathProgress}
            goBack={() => setPage("courses")}
            markLastCourse={markLastCourse}
            checkIn={checkIn}
            storageKey="mathProgress"
            levelsMeta={subjectLevels.Math}
          />
        )}
        {page === "reading" && (
          <SubjectModule
            subject="Reading"
            progress={readingProgress}
            setProgress={setReadingProgress}
            goBack={() => setPage("courses")}
            markLastCourse={markLastCourse}
            checkIn={checkIn}
            storageKey="readingProgress"
            levelsMeta={subjectLevels.Reading}
          />
        )}
        {page === "writing" && (
          <SubjectModule
            subject="Writing"
            progress={writingProgress}
            setProgress={setWritingProgress}
            goBack={() => setPage("courses")}
            markLastCourse={markLastCourse}
            checkIn={checkIn}
            storageKey="writingProgress"
            levelsMeta={subjectLevels.Writing}
          />
        )}
      </main>

      <footer className="max-w-5xl mx-auto px-4 pb-10 pt-4 text-center text-xs text-gray-500">
        Streaks + progress maps • organized components • no quizzes yet
      </footer>

      <DevTests
        page={page}
        streak={streak}
        lastCourse={lastCourse}
        progressTriplet={[mathProgress, readingProgress, writingProgress]}
      />
    </div>
  )
}
