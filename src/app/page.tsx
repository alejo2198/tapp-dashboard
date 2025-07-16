import { User } from "@/app/types/user-types";
import HomeClient from "./home-client";

async function getUsers(): Promise<User[]> {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!res.ok) throw new Error("Failed to fetch");
    return await res.json();
  } catch (err) {
    console.error("Error fetching users:", err);
    return [];
  }
}

export default async function HomePage() {
  const users = await getUsers();

  return <HomeClient users={users} />;
}
