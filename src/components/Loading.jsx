export const Loading = () => {
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-gray-100 dark:bg-gray-900">
      <div className="flex flex-col items-center gap-4">
        <span className="relative flex h-12 w-12">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gray-400 opacity-75"></span>
          <span className="relative inline-flex h-12 w-12 rounded-full bg-gray-500"></span>
        </span>
        <p className="text-gray-800 dark:text-gray-100 text-xl">Loading...</p>
      </div>
    </div>
  );
};
