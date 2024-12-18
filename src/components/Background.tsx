import React from 'react';

const Background = () => {
  return (
    <div className="fixed inset-0 -z-10">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-purple-100 to-blue-100 opacity-70" />
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557683311-eac922347aa1?q=80&w=2960')] bg-cover bg-center mix-blend-soft-light" />
      <div className="absolute inset-0 backdrop-blur-3xl" />
    </div>
  );
};

export default Background;