import React, { useState } from "react";
import {
  Home as HomeIcon,
  BookOpen,
  GraduationCap,
  ChevronRight,
  ArrowLeft,
} from "lucide-react";

const Card = ({ className = "", children, onClick, role }) => (
  <div
    role={role}
    onClick={onClick}
    className={`bg-white/80 backdrop-blur border border-gray-200 shadow-sm rounded-2xl p-4 ${
      onClick ? "cursor-pointer hover:shadow-md transition" : ""
    } ${className}`}
  >
    {children}
  </div>
);

const Button = ({ className = "", children, onClick, disabled, type }) => (
  <button
    type={type}
    disabled={disabled}
    onClick={onClick}
    className={`px-4 py-2 rounded-xl font-semibold shadow-sm border border-gray-200 bg-white hover:bg-gray-50 active:scale-[0.99] transition disabled:opacity-50 ${className}`}
  >
    {children}
  </button>
);

function Nav({ page, setPage }) {
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
          <Button
            className={`${page === "home" ? "bg-gray-100" : ""}`}
            onClick={() => setPage("home")}
          >
            <HomeIcon size={16} className="mr-2" /> Home
          </Button>
          <Button
            className={`${page === "courses" ? "bg-gray-100" : ""}`}
            onClick={() => setPage("courses")}
          >
            <BookOpen size={16} className="mr-2" /> Courses
          </Button>
        </div>
      </div>
    </div>
  );
}

function HomePage() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      <Card className="md:col-span-2">
        <div className="text-xl font-bold mb-1">Welcome to My First Teacher</div>
        <div className="text-gray-600">Basic Layout</div>
        <ul className="list-disc ml-6 mt-3 text-sm text-gray-600">
          <li>Home page</li>
          <li>Courses page</li>
          <li>Subject pages: Math, Reading, Writing</li>
        </ul>
      </Card>
      <Card>
        <div className="text-sm text-gray-600">
          TO DO: add streaks, progress map, and actual course modules.
        </div>
      </Card>
      <Card className="md:col-span-3">
        <div className="text-lg font-bold mb-2">Next Steps</div>
        <div className="text-sm text-gray-600">
          TO DO: add streaks, progress map, and actual course modules.
        </div>
      </Card>
    </div>
  );
}

function CoursesPage({ openMath, openReading, openWriting }) {
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
  );
}

function SubjectPage({ subject, goBack }) {
  return (
    <div>
      <div className="flex items-center gap-2 mb-4">
        <Button onClick={goBack}>
          <ArrowLeft size={16} className="mr-2" /> Back
        </Button>
        <div className="text-xl font-extrabold">{subject}</div>
      </div>
      <Card>
        <div className="text-sm text-gray-600">
          Placeholder page for {subject}. Progress Maps and Interactive learning modules coming soon!
        </div>
      </Card>
    </div>
  );
}

// Root App 
export default function App() {
  const [page, setPage] = useState("home"); 

  const openMath = () => setPage("math");
  const openReading = () => setPage("reading");
  const openWriting = () => setPage("writing");

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white text-gray-900">
      <Nav page={page} setPage={setPage} />

      <main className="max-w-5xl mx-auto px-4 py-6">
        {page === "home" && <HomePage />}
        {page === "courses" && (
          <CoursesPage openMath={openMath} openReading={openReading} openWriting={openWriting} />
        )}
        {page === "math" && <SubjectPage subject="Math" goBack={() => setPage("courses")} />}
        {page === "reading" && <SubjectPage subject="Reading" goBack={() => setPage("courses")} />}
        {page === "writing" && <SubjectPage subject="Writing" goBack={() => setPage("courses")} />}
      </main>

      <footer className="max-w-5xl mx-auto px-4 pb-10 pt-4 text-center text-xs text-gray-500">
        Basic Website • pages only, no functionality
      </footer>
    </div>
  );
}
