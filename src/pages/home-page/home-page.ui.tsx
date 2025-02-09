import { AddTask } from "@/features/todo";
import { useTodo } from "@/entities/todo";
import { ToggleTask } from "@/features/toggle-task";
import { DeleteTask } from "@/features/todo";

export const HomePage = () => {
    const { tasks } = useTodo();
  return (
    <div className="container mx-auto p-4 w-1/3 bg">
      <h1 className="text-2xl font-bold mb-4">To-Do List</h1>
      <AddTask />
    <ul className="space-y-2">
      {tasks.map((task) => (
        <li key={task.id} className="flex items-center gap-2 p-2 border rounded bg-card">
          <ToggleTask task={task} />
          <span className={`flex-1 ${task.completed ? "line-through" : ""}`}>
            {task.title}
          </span>
          <DeleteTask taskId={task.id} />
        </li>
      ))}
    </ul>
    </div>
  );
};
