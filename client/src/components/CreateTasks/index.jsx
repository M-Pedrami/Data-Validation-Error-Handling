import React, { useState } from "react";
import { useForm } from "react-hook-form";

const CreateTask = ({setTask}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    const task = {
      title: data.title,
      description: data.description,
      priority: data.priority,
      status: data.status,
    };
    console.log(task);
    try {
      const response = await fetch("http://localhost:8000/tasks", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(task),
      });
      if (response.ok) {
        const data = await response.json();
        setTask(data);
      } else {
        console.error("Failed to add the new Task");
      }
    } catch (error) {
      console.error("ERROR from FRONTEND/INPUT:", error);
    }
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Title</label>
      <input {...register("title", { required: "Title is required" })} />
      {errors.title && <p>{errors.title.message}</p>}

      <label>Description</label>
      <textarea
        {...register("description", { required: "Description is required" })}
      />
      {errors.description && <p>{errors.description.message}</p>}

      <label>Priority</label>
      <select {...register("priority")} defaultValue="high">
        <option value="high">High</option>
        <option value="medium">Medium</option>
        <option value="low">Low</option>
      </select>

      <label>Status</label>
      <select {...register("status")} defaultValue="open">
        <option value="open">Open</option>
        <option value="in progress">In Progress</option>
        <option value="resolved">Resolved</option>
        <option value="closed">Closed</option>
      </select>

      <button type="submit">Submit</button>
    </form>
  );
};

export default CreateTask;
