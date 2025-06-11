export const Loading = () => {
  return (
    <div className="flex col-span-full min-h-[calc(100vh-300px)] items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <span className="relative flex h-10 w-10 sm:h-12 sm:w-12">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gray-400 opacity-75 dark:bg-gray-600"></span>
          <span className="relative inline-flex h-full w-full rounded-full bg-gray-500 dark:bg-gray-500"></span>
        </span>
        <p className="text-lg text-gray-800 sm:text-xl dark:text-gray-100">
          Loading...
        </p>
      </div>
    </div>
  );
};
