function App() {
  return (
    <>
      <div className="flex justify-center w-full h-300 bg-rose-300">
        <div className="mt-10 h-280 w-[1400px] shadow-xl border-2 rounded-md border-emerald-50 border-solid bg-rose-200">
          <div className="flex flex-col items-center p-10 font-mono">
            <h1 className="text-5xl font-bold text-zinc-700">To Do List</h1>
            <h1 className="p-5 text-2xl">Your very own personalised To-Do List Tracker</h1>
            <h1 className="font-semibold text-slate-800">Select your task space from below or make one. After that enter new tasks or review the previous ones ! </h1>
            <div className="p-8 w-[1000px] flex flex-row justify-evenly">
              <div className="py-3 px-5 tracking-wide shadow-md border-2 border-solid border-emerald-50 rounded-md bg-rose-300">
                <button>WORK</button>
              </div>
              <div className="py-3 px-5 tracking-wide shadow-md border-2 border-solid border-emerald-50 rounded-md bg-rose-300">
                <button>HOME</button>
              </div>
              <div className="py-3 px-5 tracking-wide shadow-md border-2 border-solid border-emerald-50 rounded-md bg-rose-300">
                <button>PERSONAL</button>
              </div>
            </div>
          </div>
          <div>

          </div>
        </div>
      </div>
      
    </>
  )
}

export default App
