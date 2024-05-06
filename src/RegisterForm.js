import React from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { object, string } from "zod";
import axios from "axios";

// Zod schema for form validation
const schema = object({
  name: string().min(1, { message: "Name is required" }),
  email: string().email({ message: "Invalid email address" }),
  password: string().min(6, {
    message: "Password must be at least 6 characters",
  }),
});

export default function RegisterForm() {
  const register = async (username, password) => {
    try {
      const result = await axios.post("http://localhost:3001/register", {
        username,
        password,
      });
      console.log(result.data);
    } catch (error) {
      console.error(error);
    }
  };

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data) => {
    RegisterForm(data.email, data.password);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="input-group">
        <label>Name</label>
        <Controller
          name="name"
          control={control}
          render={({ field }) => <input {...field} />}
        />
        {errors.name && <p>{errors.name.message}</p>}
      </div>

      <div className="input-group">
        <label>Email</label>
        <Controller
          name="email"
          control={control}
          render={({ field }) => <input type="email" {...field} />}
        />
        {errors.email && <p>{errors.email.message}</p>}
      </div>

      <div className="input-group">
        <label>Password</label>
        <Controller
          name="password"
          control={control}
          render={({ field }) => <input type="password" {...field} />}
        />
        {errors.password && <p>{errors.password.message}</p>}
      </div>

      <button type="submit">Register</button>
    </form>
  );
}
