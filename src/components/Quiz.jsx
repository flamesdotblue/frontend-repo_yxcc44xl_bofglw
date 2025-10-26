import React from 'react';
import { HelpCircle, CheckCircle2, XCircle } from 'lucide-react';

const Quiz = () => {
  const questions = React.useMemo(() => [
    { q: 'What does RAG stand for?', options: ['Retrieve-And-Generate', 'Retrieval-Augmented Generation', 'Reasoning-Augmented Guidance', 'Random Answer Generator'], correct: 1 },
    { q: 'Which DB stores vectors?', options: ['MongoDB', 'Pinecone', 'Redis', 'MySQL'], correct: 1 },
    { q: 'JWT is commonly used for?', options: ['Styling', 'Routing', 'Authentication', 'Animations'], correct: 2 },
  ], []);

  const [answers, setAnswers] = React.useState(Array(questions.length).fill(null));
  const [submitted, setSubmitted] = React.useState(false);

  const score = React.useMemo(() => answers.reduce((acc, a, i) => acc + (a === questions[i].correct ? 1 : 0), 0), [answers, questions]);

  const select = (qi, oi) => {
    if (submitted) return;
    setAnswers((a) => a.map((v, i) => (i === qi ? oi : v)));
  };

  return (
    <section className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="text-2xl md:text-3xl font-semibold mb-4">Quick Quiz</h1>
      <div className="rounded-xl border border-white/10 bg-white/5 p-5">
        <div className="flex items-center gap-2 mb-3">
          <HelpCircle className="h-5 w-5" />
          <h3 className="font-semibold">Multiple Choice</h3>
        </div>
        <div className="space-y-4">
          {questions.map((item, qi) => (
            <div key={qi} className="rounded-lg border border-white/10 p-3">
              <div className="text-sm font-medium mb-2">{qi + 1}. {item.q}</div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {item.options.map((opt, oi) => {
                  const picked = answers[qi] === oi;
                  let state = 'bg-white/5 hover:bg-white/10';
                  if (submitted && picked && oi === item.correct) state = 'bg-emerald-500/20 border-emerald-400';
                  else if (submitted && picked && oi !== item.correct) state = 'bg-rose-500/20 border-rose-400';
                  else if (picked) state = 'bg-indigo-500/20 border-indigo-400';
                  return (
                    <button
                      key={oi}
                      onClick={() => select(qi, oi)}
                      className={`text-left rounded-md border ${state} px-3 py-2 text-sm transition`}
                    >
                      {opt}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 flex items-center justify-between">
          <button onClick={() => setSubmitted(true)} className="rounded-lg bg-indigo-500 hover:bg-indigo-400 px-4 py-2 text-sm font-medium transition">Submit</button>
          {submitted && (
            <div className="inline-flex items-center gap-2 text-sm">
              {score >= 2 ? <CheckCircle2 className="h-4 w-4 text-emerald-400" /> : <XCircle className="h-4 w-4 text-rose-400" />}
              Score: {score}/{questions.length}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Quiz;
