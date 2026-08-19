const Loading = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-950">
      <div className="flex flex-col items-center gap-6">
        <div className="relative flex h-24 w-24 items-center justify-center">
          <div className="absolute h-24 w-24 animate-spin rounded-full border-4 border-slate-700 border-t-purple-500" />

          <div className="absolute h-16 w-16 animate-pulse rounded-full bg-purple-500/20 blur-xl" />

          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 text-2xl font-bold text-white shadow-lg shadow-purple-500/30">
            D
          </div>
        </div>

        <div className="text-center">
          <h1 className="text-2xl font-bold text-white">
            Loading Deals
            <span className="text-purple-400">...</span>
          </h1>

          <p className="mt-2 text-sm text-slate-400">
            Finding the best prices for you
          </p>
        </div>

        <div className="h-1.5 w-56 overflow-hidden rounded-full bg-slate-800">
          <div className="h-full w-1/2 animate-[loading_1.4s_ease-in-out_infinite] rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500" />
        </div>

        <div className="flex gap-2">
          <span className="h-2 w-2 animate-bounce rounded-full bg-purple-500 [animation-delay:-0.3s]" />
          <span className="h-2 w-2 animate-bounce rounded-full bg-purple-500 [animation-delay:-0.15s]" />
          <span className="h-2 w-2 animate-bounce rounded-full bg-purple-500" />
        </div>
      </div>
    </div>
  );
};

export default Loading;
