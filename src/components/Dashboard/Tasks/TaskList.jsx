"use client";
import { taskUpdateAction } from "@/actions/taskUpdateAction";
import { db } from "@/services/firebaseConfig";
import {
  collection,
  query,
  orderBy,
  where,
  onSnapshot,
} from "firebase/firestore";
import { useEffect, useState } from "react";

export const TaskList = ({ folderId }) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const q = query(
      collection(db, "tasks"),
      where("folderId", "==", folderId),
      orderBy("createdAt")
    );
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const tasksArray = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setTasks(tasksArray);
    });

    return () => unsubscribe();
  }, [folderId]);

  const handleChecked = async (taskId, isChecked) => {
    try {
      const response = await taskUpdateAction(taskId, isChecked);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <ul className="w-full flex flex-wrap gap-4 mt-5">
      {tasks.map((task) => (
        <li
          key={task.id}
          className={`lg:max-w-[420px] w-full p-5 rounded-md text-black flex items-center border border-black gap-5 transition-all ${
            task.isCompleted && "bg-green text-white"
          }`}
        >
          <input
            type="checkbox"
            className="h-10 w-10 cursor-pointer"
            checked={task.isCompleted || false}
            onChange={(e) => handleChecked(task.id, e.target.checked)}
            title={`${task.isCompleted ? "Incomplete" : "Complete"}`}
          />
          <div>
            <h3 className={`text-medium ${task.isCompleted && "line-through"}`}>
              {task.task}
            </h3>
            <p className="text-small">Complete in: {task.deliveryDate}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};
