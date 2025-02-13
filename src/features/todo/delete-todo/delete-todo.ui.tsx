import { useTodo } from "@/entities/todo";
import { Button } from "@/shared/components/ui/button";
import { Trash2 } from "lucide-react";

interface DeleteTaskProps {
  taskId: string;
}

export const DeleteTask = ({ taskId }: DeleteTaskProps) => {
  const deleteTask = useTodo((state) => state.deleteTask);

  return (
    <Button variant="destructive" size="icon" onClick={() => deleteTask(taskId)}>
      <Trash2 className="w-4 h-4" />
    </Button>
  );
};
