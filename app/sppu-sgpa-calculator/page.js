"use client";
import { useState } from "react";

export default function SGPA() {
  const [subjects, setSubjects] = useState([]);
  const [credits, setCredits] = useState("");
  const [grade, setGrade] = useState("O");
  const [sgpa, setSgpa] = useState(null);

  const gradePoints = {
    O: 10,
    "A+": 9,
    A: 8,
    "B+": 7,
    B: 6,
    C: 5,
    P: 4,
    F: 0,
  };

  const addSubject = () => {
    if (!credits) return;
    setSubjects([
      ...subjects,
      { credits: Number(credits), grade },
    ]);
    setCredits("");
  };

  const calculateSGPA = () => {
    let totalCredits = 0;
    let weightedSum = 0;

    subjects.forEach((sub) => {
      totalCredits += sub.credits;
      weightedSum += sub.credits * gradePoints[sub.grade];
    });

    if (totalCredits === 0) return;

    setSgpa((weightedSum / totalCredits).toFixed(2));
  };

  return (
    <div className="min-h-screen flex flex-col items-center p-8 bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">
        SPPU SGPA Calculator
      </h1>

      <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-md">
        <input
          type="number"
          placeholder="Credits"
          value={credits}
          onChange={(e) => setCredits(e.target.value)}
          className="border p-2 w-full mb-3 rounded"
        />

        <select
          value={grade}
          onChange={(e) => setGrade(e.target.value)}
          className="border p-2 w-full mb-3 rounded"
        >
          {Object.keys(gradePoints).map((g) => (
            <option key={g}>{g}</option>
          ))}
        </select>

        <button
          onClick={addSubject}
          className="bg-blue-600 text-white px-4 py-2 rounded w-full mb-3"
        >
          Add Subject
        </button>

        <button
          onClick={calculateSGPA}
          className="bg-green-600 text-white px-4 py-2 rounded w-full"
        >
          Calculate SGPA
        </button>

        {sgpa && (
          <div className="mt-4 text-center text-xl font-semibold">
            SGPA: {sgpa}
          </div>
        )}
      </div>
    </div>
  );
}