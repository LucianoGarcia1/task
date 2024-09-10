"use client";
import { db } from "@/services/firebaseConfig";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";

export const TaskList = () => {
  const [task, setTask] = useState([]);
  useEffect(() => {
    const q = query(collection(db, "tasks"), orderBy("createdAt"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const tasksArray = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setTask(tasksArray);
    });
    return () => unsubscribe();
  }, []);
  return (
    <ul className="w-full flex flex-col gap-4 mt-5">
      {task.map((task) => (
        <li key={task.id} className="bg-green py-5 rounded-md">
          {task.task}
        </li>
      ))}
    </ul>
  );
};
