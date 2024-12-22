import { Navbar } from "@/components/Navbar";

const Statistics = () => {
  return (
    <div className="min-h-screen bg-youtube-lightGray">
      <Navbar />
      <main className="container mx-auto px-4 pt-24 pb-12">
        <h1 className="text-2xl font-bold mb-6">Statistics</h1>
        <div className="grid gap-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Overview</h2>
            <p className="text-gray-600">Your statistics dashboard will be available soon.</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Statistics;