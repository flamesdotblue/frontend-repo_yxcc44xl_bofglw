import React from 'react';
import { User } from 'lucide-react';

const Login = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    // Backend integration will be wired to real API; UI is ready
    setTimeout(() => {
      setLoading(false);
      setError('Sign-in requires backend connection. We\'ll enable this next.');
    }, 600);
  };

  return (
    <section className="mx-auto max-w-md px-4 py-12">
      <div className="rounded-xl border border-white/10 bg-white/5 p-6">
        <div className="flex items-center gap-2 mb-4">
          <User className="h-5 w-5" />
          <h1 className="text-xl font-semibold">Sign in</h1>
        </div>
        <form onSubmit={onSubmit} className="space-y-3">
          <div className="space-y-1">
            <label className="text-sm text-white/80">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full rounded-lg bg-white/5 border border-white/10 px-3 py-2 text-sm outline-none focus:border-indigo-400"
              placeholder="you@example.com"
            />
          </div>
          <div className="space-y-1">
            <label className="text-sm text-white/80">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full rounded-lg bg-white/5 border border-white/10 px-3 py-2 text-sm outline-none focus:border-indigo-400"
              placeholder="••••••••"
            />
          </div>
          {error && <div className="text-xs text-rose-400">{error}</div>}
          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg bg-white text-black px-4 py-2 text-sm font-medium hover:bg-white/90 transition disabled:opacity-70"
          >
            {loading ? 'Signing in...' : 'Sign in'}
          </button>
        </form>
        <p className="mt-3 text-xs text-white/60">
          New here? We\'ll add account creation with secure auth next.
        </p>
      </div>
    </section>
  );
};

export default Login;
