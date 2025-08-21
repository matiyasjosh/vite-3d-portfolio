import React from 'react';

export const FloatingElements: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Floating geometric shapes */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-blue-400/20 rounded-full animate-float-slow"></div>
      <div className="absolute top-40 right-20 w-6 h-6 bg-teal-400/20 rounded-full animate-float-medium"></div>
      <div className="absolute top-60 left-1/4 w-3 h-3 bg-orange-400/20 rounded-full animate-float-fast"></div>
      <div className="absolute bottom-40 right-10 w-5 h-5 bg-green-400/20 rounded-full animate-float-slow"></div>
      <div className="absolute bottom-60 left-20 w-4 h-4 bg-purple-400/20 rounded-full animate-float-medium"></div>
      
      {/* Floating code symbols */}
      <div className="absolute top-32 right-1/3 text-blue-400/10 text-2xl animate-float-slow font-mono">{'<>'}</div>
      <div className="absolute top-80 left-1/3 text-teal-400/10 text-xl animate-float-medium font-mono">{'{ }'}</div>
      <div className="absolute bottom-32 right-1/4 text-orange-400/10 text-lg animate-float-fast font-mono">{'[ ]'}</div>
    </div>
  );
};