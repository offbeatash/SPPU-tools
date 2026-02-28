import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold mb-4">
        SPPU Academic Tools Hub
      </h1>

      <Link
        href="/sppu-sgpa-calculator"
        className="text-blue-600 underline"
      >
        Open SGPA Calculator
      </Link>
    </div>
  );
}