import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center">
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-blue-700">Financial Portfolio Tracker</h1>
        <p className="mt-2 text-lg text-gray-600">Track your investments, analyze performance, and optimize your portfolio.</p>
      </header>
      <main>
        <div className="bg-white shadow rounded p-8">
          <h2 className="text-2xl font-semibold mb-4">Welcome!</h2>
          <p className="text-gray-700">Your journey to smarter investing starts here. More features coming soon.</p>
        </div>
      </main>
    </div>
  );
}

export default App;
