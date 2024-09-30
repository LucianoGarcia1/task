"use client";
import { useEffect, useState, useCallback } from "react";
import { TaskList } from "@/components/Dashboard/Tasks/TaskList";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "@/services/firebaseConfig";
import { TaskForm } from "../Tasks/TaskForm";

const FolderClient = ({ folderId }) => {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = useCallback(async () => {
    try {
      const tasksQuery = query(
        collection(db, "tasks"),
        where("folderId", "==", folderId)
      );
      const tasksSnapshot = await getDocs(tasksQuery);
      const tasksArray = tasksSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setTasks(tasksArray);
    } catch (e) {
      console.error("Erro search task", e);
    }
  }, [folderId]);

  useEffect(() => {
    fetchTasks();
  }, [fetchTasks]);

  return (
    <div>
      <div>
        <TaskForm folderId={folderId} taskRefresh={fetchTasks} />
      </div>
      <div className="mt-8">
        <h2 className="text-medium mb-4 text-green">Task List</h2>
        <TaskList folderId={folderId} tasks={tasks} />
      </div>
    </div>
  );
};

export default FolderClient;
