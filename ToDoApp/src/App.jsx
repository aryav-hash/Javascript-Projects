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
            <div className="p-5 flex flex-row w-180 relative">
              <div className="w-180">
                <input type="text" placeholder=" Add your text here !" id="activity" name="activity" className="bg-rose-100 py-1 border-2 border-emerald-50 rounded-2xl w-full"/>
              </div>
              <div>
                <button type="submit" id="submitButton" className="px-2 py-1.5 bg-amber-300 rounded-2xl aspect-1 absolute right-5 "> Enter </button>
              </div>
            </div>
            <div>
              <ul id="list" className="mt-5 py-5 pl-8 pr-20 font-sans font-medium list-disc bg-amber-100 w-220 h-160 border-1 border-emerald-50 rounded-md">
              </ul>
            </div>
          </div>
        </div>
      </div>
      
    </>
  )
}

export default App
