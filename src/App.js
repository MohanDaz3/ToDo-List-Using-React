
import './App.css';
import {useState} from 'react'


function App() {
  const [ToDos,setToDos]=useState([]);
  const [ToDo,setToDo]=useState('')

  const getCompletedTasks = () => {
    return ToDos.filter((task) => task.status === true);
  };

  const addTask = () => {
    if (ToDo.trim() !== '') {
      setToDos([...ToDos, { id: Date.now(), text: ToDo, status: false }]); //adding task
      setToDo(''); // Clearing the input field after adding a task
    }
  };

  const deleteTask = (taskId) => {
    setToDos(ToDos.filter((task) => task.id !== taskId));
  }; //deleting the existing task

  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop,Mark your Tasks 🌝☕ </h2>
      </div>
      <div className="input">
        <input value={ToDo} onChange={(e)=>setToDo(e.target.value)} type="text" placeholder="🖊️ Add item..." />
        <i onClick={addTask} className="fas fa-plus"></i>
      </div>
      <div className="todos">
      { ToDos.map((obj)=>{
        return(<div className="todo" key={obj.id}>
          <div className="left">
            <input onChange={(e)=>{
              setToDos(ToDos.filter(obj2=>{
                if(obj2.id===obj.id){
                  obj2.status=e.target.checked;
                }
                return obj2;
              }))
            }} value={obj.status} type="checkbox" name="" id="" />
            <p className={obj.status?'completed':''}> {obj.text}</p>
          </div>
          <div className="right">
            <i onClick={() => deleteTask(obj.id)} className="fas fa-times"></i>
          </div>
        </div>)
         }) }
      </div>
      {getCompletedTasks().length > 0 ? (
      <div className="completed-card">
     <div className="completed-heading">
      <h3>Completed Tasks</h3>
     </div>
     <div className="completed-tasks">
       {getCompletedTasks().map((task) => (
        <p key={task.id}>{task.text}</p>
       ))}
     </div>
    </div>
    ) : (
      <div className="completed-card">
        <div className="completed-heading">
       <h3>No completed tasks</h3>
      </div>
      </div>
     )}
  
   </div>
  );
}

export default App;
