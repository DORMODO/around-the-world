export const ShowMessage = ({ message, type }) => {
  const isError = type === "error";
  const isSuccess = type === "success";
  const isInfo = type === "info";
  const isWarning = type === "warning";

  const baseClasses =
    "bg-gray-600 bg-gradient-to-r px-6 py-4 rounded-lg shadow-lg flex items-center gap-3 ";
  const errorClasses =
    "from-red-700 via-red-800 to-red-900 text-white border-l-4 border-red-500";
  const successClasses =
    "from-green-500 via-green-600 to-green-700 text-white border-l-4 border-green-400";
  const infoClasses =
    "from-blue-500 via-blue-600 to-blue-700 text-white border-l-4 border-blue-400";
  const warningClasses =
    "from-yellow-500 via-yellow-600 to-yellow-700 text-white border-l-4 border-yellow-400";

  return (
    <div className="flex h-screen items-center justify-center bg-gray-100 dark:bg-gray-900">
      <div
        className={`${baseClasses} ${
          isError
            ? errorClasses
            : isSuccess
              ? successClasses
              : isInfo
                ? infoClasses
                : isWarning
                  ? warningClasses
                  : ""
        }`}
      >
        <span className="font-semibold">{message}</span>
      </div>
    </div>
  );
};
