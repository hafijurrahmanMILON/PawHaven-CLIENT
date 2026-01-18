import React from "react";

const Loading = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <span className="loading loading-infinity loading-lg text-primary scale-150"></span>
      <p className="mt-4 text-primary font-bold animate-pulse">
        Loading...
      </p>
    </div>
  );
};

export default Loading;
