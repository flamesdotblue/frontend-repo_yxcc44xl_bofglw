import React from 'react';
import { Upload as UploadIcon, File } from 'lucide-react';

const Upload = () => {
  const [files, setFiles] = React.useState([]);
  const [isDragging, setIsDragging] = React.useState(false);

  const onDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const dropped = Array.from(e.dataTransfer.files || []);
    if (dropped.length) setFiles((prev) => [...prev, ...dropped.map(f => ({ name: f.name, size: f.size }))]);
  };

  const onPick = (e) => {
    const picked = Array.from(e.target.files || []);
    if (picked.length) setFiles((prev) => [...prev, ...picked.map(f => ({ name: f.name, size: f.size }))]);
  };

  return (
    <section className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="text-2xl md:text-3xl font-semibold mb-6">Upload your study materials</h1>
      <div
        onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
        onDragLeave={() => setIsDragging(false)}
        onDrop={onDrop}
        className={`flex flex-col items-center justify-center gap-3 rounded-xl border-2 border-dashed p-10 text-center transition ${
          isDragging ? 'border-indigo-400 bg-indigo-500/10' : 'border-white/15 bg-white/5'
        }`}
      >
        <UploadIcon className="h-6 w-6" />
        <div className="text-sm">
          Drag and drop your files here, or
          <label className="ml-2 inline-flex items-center gap-1 cursor-pointer text-indigo-300 underline">
            browse
            <input type="file" multiple className="hidden" onChange={onPick} accept=".pdf,.pptx,.docx,.txt,.png,.jpg,.jpeg" />
          </label>
        </div>
        <div className="text-xs text-white/60">PDF, PPTX, DOCX, TXT, PNG, JPG, JPEG</div>
      </div>

      {files.length > 0 && (
        <div className="mt-6 space-y-2">
          {files.map((f, idx) => (
            <div key={`${f.name}-${idx}`} className="flex items-center justify-between rounded-lg border border-white/10 bg-white/5 p-3">
              <div className="flex items-center gap-2">
                <File className="h-4 w-4" />
                <span className="text-sm">{f.name}</span>
              </div>
              <span className="text-xs text-white/60">{(f.size / 1024).toFixed(1)} KB</span>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Upload;
