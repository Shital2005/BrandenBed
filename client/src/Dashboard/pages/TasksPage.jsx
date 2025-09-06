import React, { useEffect, useState } from "react";

const statusColors = {
  "Pending": "bg-yellow-400 text-black",
  "In Progress": "bg-blue-400 text-white",
  "Done": "bg-green-500 text-white"
};

const TasksPage = () => {
  const [tasks, setTasks] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [newTask, setNewTask] = useState({ title: "", status: "Pending", assignedTo: "" });

  useEffect(() => {
    const fetchTasks = async () => {
      try {
  const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;
  const res = await fetch(`${apiBaseUrl}/api/tasks`);
        if (res.ok) {
          const data = await res.json();
          setTasks(data);
        }
      } catch {}
    };
    fetchTasks();
  }, []);

  return (
    <div className="min-h-screen bg-blue-50 p-6 md:p-10 flex flex-col items-center">
      <div className="w-full max-w-3xl">
        <h2 className="text-3xl font-bold mb-8 text-blue-800 tracking-tight">Tasks</h2>
        <button className="bg-yellow-400 text-black font-bold px-6 py-2 rounded-xl shadow hover:bg-yellow-500 transition mb-6" onClick={() => setModalOpen(true)}>Add Task</button>
  <table className="w-full text-left border-collapse bg-white rounded-2xl shadow-xl border border-yellow-400">
          <thead>
            <tr className="bg-yellow-400">
              <th className="py-3 px-4 text-black font-bold">Title</th>
              <th className="py-3 px-4 text-black font-bold">Assigned To</th>
                <th className="py-3 px-4 text-black font-bold">Status</th>
            </tr>
          </thead>
          <tbody>
              {tasks.map(task => (
                <tr key={task.id} className="border-t hover:bg-yellow-50 transition">
                  <td className="py-3 px-4 font-medium text-blue-900">{task.title}</td>
                  <td className="py-3 px-4">{task.assignedTo}</td>
                  <td className="py-3 px-4">
                    <span className={`px-3 py-1 rounded-xl font-bold text-sm shadow ${statusColors[task.status]}`}>{task.status}</span>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      {/* Add Modal */}
      {modalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md border-4 border-yellow-400">
            <h3 className="text-2xl font-bold mb-4 text-blue-800">Add Task</h3>
            <form className="flex flex-col gap-4">
              <input className="px-4 py-2 rounded-xl border border-yellow-400" placeholder="Title" value={newTask.title} onChange={e => setNewTask({ ...newTask, title: e.target.value })} />
              <select className="px-4 py-2 rounded-xl border border-yellow-400" value={newTask.status} onChange={e => setNewTask({ ...newTask, status: e.target.value })}>
                <option>Pending</option>
                <option>In Progress</option>
                <option>Done</option>
              </select>
              <input className="px-4 py-2 rounded-xl border border-yellow-400" placeholder="Assigned To" value={newTask.assignedTo} onChange={e => setNewTask({ ...newTask, assignedTo: e.target.value })} />
              <button type="button" className="bg-yellow-400 text-black font-bold py-2 rounded-xl mt-2" onClick={() => { setModalOpen(false); setNewTask({ title: "", status: "Pending", assignedTo: "" }); }}>Add (dummy)</button>
              <button type="button" className="bg-blue-700 text-white font-bold py-2 rounded-xl mt-2" onClick={() => setModalOpen(false)}>Close</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default TasksPage;
