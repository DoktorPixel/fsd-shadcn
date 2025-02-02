import { ToDoList } from "@/widgets/to-do-list";
import { AddTask } from "@/features/add-task";

export const ToDoPage = () => {
  return (
    <div className="container mx-auto p-4 w-1/2">
      <h1 className="text-2xl font-bold mb-4">To-Do List</h1>
      <AddTask />
      <ToDoList />
    </div>
  );
};
