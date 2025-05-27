import { useRef } from 'react';

function App() {
  const taskInputRef = useRef(null);
  const taskListRef = useRef(null);
  
  function reorderList() {
    const list = taskListRef.current;
    const items = Array.from(list.children);
    
    items.sort((a, b) => {
      const aCheck = a.querySelector('input[type="checkbox"]').checked;
      const bCheck = b.querySelector('input[type="checkbox"]').checked;
      return aCheck - bCheck;
    });
    
    items.forEach(li => list.appendChild(li));
  }

  function display() {
    const task = taskInputRef.current.value.trim();
    if (task === '') return;
    const list = taskListRef.current;

    const li = document.createElement('li');
    li.className = 'flex justify-between text-justify border-3 border-gray-50 rounded-md p-3';
    const outerspan = document.createElement('span');
    outerspan.className = 'max-w-2xl flex items-center text-justify';
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'scale-150 mr-3';
    checkbox.onchange = (e) => {
      const span = e.target.nextSibling;
      if (span) {
        span.classList.toggle('line-through', e.target.checked);
      }
      reorderList();
    }

    const innerspan = document.createElement('span');
    innerspan.textContent = task;
    outerspan.appendChild(checkbox);
    outerspan.appendChild(innerspan);
    li.appendChild(outerspan);

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'p-1 mt-1 max-h-8 bg-red-500 text-white rounded hover:bg-red-700';
    deleteButton.onclick = () => {
      list.removeChild(li);
    }
    li.appendChild(deleteButton);

    list.appendChild(li);
    taskInputRef.current.value = '';
  }
  
  return (
    <>
      <div className="flex justify-center w-full h-300 bg-rose-300">
        <div className="mt-10 h-280 w-[1400px] shadow-xl border-2 rounded-md border-emerald-50 border-solid bg-rose-200">
          <div className="flex flex-col items-center p-10 font-mono">
            <h1 className="text-5xl font-bold text-zinc-700">To Do List</h1>
            <h1 className="p-5 text-2xl">Your very own personalised To-Do List Tracker</h1>
            <h1 className="font-semibold text-slate-800">Select your task space from below or make one. After that enter new tasks or review the previous ones ! </h1>
            <div className="p-8 w-[1000px] flex flex-row justify-evenly">
              <div className="py-3 px-5 tracking-wide shadow-md border-2 border-solid border-emerald-50 rounded-md bg-rose-300 cursor-pointer">
                <button className="cursor-pointer">WORK</button>
              </div>
              <div className="py-3 px-5 tracking-wide shadow-md border-2 border-solid border-emerald-50 rounded-md bg-rose-300 cursor-pointer">
                <button className="cursor-pointer">HOME</button>
              </div>
              <div className="py-3 px-5 tracking-wide shadow-md border-2 border-solid border-emerald-50 rounded-md bg-rose-300 cursor-pointer">
                <button className="cursor-pointer">PERSONAL</button>
              </div>
            </div>
            <div className="p-5 flex flex-row w-180 relative">
              <div className="w-180">
                <input ref={taskInputRef} type="text" placeholder=" Add your text here !" id="activity" name="activity" className="bg-rose-100 py-1 border-2 border-emerald-50 rounded-2xl w-full"/>
              </div>
              <div>
                <button type="submit" onClick={display} id="submitButton" className="px-2 py-1.5 bg-amber-300 rounded-2xl aspect-1 absolute right-5 cursor-pointer hover:bg-amber-500"> Enter </button>
              </div>
            </div>
            <div>
              <ul ref={taskListRef} id="list" className="mt-5 pl-8 py-5 pr-8 font-sans font-medium bg-amber-100 w-220 h-160 border-2 border-emerald-50 rounded-md">
              </ul>
            </div>
          </div>
        </div>
      </div>
      
    </>
  )
}

export default App
