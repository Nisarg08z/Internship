import React, { useRef, useState } from 'react';

function Sc() {
  const inputRef = useRef(null);
  const [tasks, setTasks] = useState([]);

  const addNewNote = () => {
    const newTask = inputRef.current.value.trim();
    if (newTask) {
      setTasks([...tasks, newTask]);
      inputRef.current.value = '';
    }
  };

  return (
    <>
      Enter your task <input ref={inputRef} />
      <button onClick={addNewNote}>ADD</button>
      {tasks.length === 0 ? (
        <p>no tasks are available</p>
      ) : (
        <div>
          {tasks.map((task,index) => {
            return <li key={index}>{task}</li>;
          })}
        </div>
      )}
    </>
  );
}

export default Sc;