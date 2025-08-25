import React, { useState } from 'react';

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.includes('@')) {
      setError('Email must include "@".');
      return;
    }
    if (password.length < 6) {
      setError('Password must be at least 6 characters.');
      return;
    }
    setError('');
    // Handle successful login logic here
    alert('Login successful!');
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md w-80 mx-auto mt-10 flex flex-col gap-4">
      <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
      />
      {error && <p className="text-red-500 text-sm">{error}</p>}
      <button
        type="submit"
        className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 font-semibold"
      >
        Login
      </button>
    </form>
  );
};

export default LoginForm;
