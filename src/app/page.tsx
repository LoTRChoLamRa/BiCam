'use client';

import { useState } from 'react';

export default function Home() {
  const [message, setMessage] = useState('');

  const triggerApi = async () => {
    try {
      const response = await fetch('/api/trigger', {
        method: 'POST',
      });
      const data = await response.json();
      setMessage(data.message);
      console.log('API Triggered:', data.message);
    } catch (error) {
      console.error('Error triggering API:', error);
      setMessage('Error occurred while triggering API');
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Next.js API Trigger Example</h1>
      <button
        onClick={triggerApi}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Trigger API
      </button>
      {message && (
        <p className="mt-4 text-lg text-green-600">{message}</p>
      )}
    </div>
  );
}