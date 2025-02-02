import { useTaskStore } from "@/shared/lib/zustand";
import { ToggleTask } from "@/features/toggle-task";
import { DeleteTask } from "@/features/delete-task";

export const ToDoList = () => {
  const { tasks } = useTaskStore();

  return (
    <ul className="space-y-2">
      {tasks.map((task) => (
        <li key={task.id} className="flex items-center gap-2 p-2 border rounded">
          <ToggleTask task={task} />
          <span className={`flex-1 ${task.completed ? "line-through" : ""}`}>
            {task.title}
          </span>
          <DeleteTask taskId={task.id} />
        </li>
      ))}
    </ul>
  );
};
