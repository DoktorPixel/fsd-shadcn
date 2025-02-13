import { useTodo } from "@/entities/todo";
import { Checkbox } from "@/shared/components/ui/checkbox";
import { Task } from "@/entities/todo";

export const ToggleTask = ({ task }: { task: Task }) => {
  const toggleTask = useTodo((state) => state.toggleTask);

  return (
    <Checkbox checked={task.completed} onCheckedChange={() => toggleTask(task.id)} />
  );
};
