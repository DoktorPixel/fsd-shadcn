import { useTaskStore } from "@/shared/lib/zustand";
import { useState } from "react";
import { Button } from "@/shared/components/ui/button";
import { Input } from "@/shared/components/ui/input";

export const AddTask = () => {
  const [title, setTitle] = useState("");
  const addTask = useTaskStore((state) => state.addTask);

  const handleSubmit = () => {
    if (!title.trim()) return;
    addTask(title);
    setTitle("");
  };

  return (
    <div className="flex gap-2 mb-2">
      <Input 
        value={title} 
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter task..."
      />
      <Button onClick={handleSubmit}>Add</Button>
    </div>
  );
};
