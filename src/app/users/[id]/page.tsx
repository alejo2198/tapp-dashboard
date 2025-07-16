// import type { User } from "@/app/types/user-types";
// import UserDetails from "./user-details"; // <- new client component

// async function getUser(id: string): Promise<User | null> {
//   try {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
//     if (!res.ok) return null;
//     return await res.json();
//   } catch (err) {
//     console.error(err);
//     return null;
//   }
// }

// export default async function UserPage({ params }: { params: { id: string } }) {
//   const user = await getUser(params.id);

//   return <UserDetails user={user} />;
// }
import UserDetails from "./user-details";

type Props = {
  params: { id: string };
};

async function getUser(id: string) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  if (!res.ok) return null;
  return res.json();
}

export default async function UserPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const user = await getUser(id);
  return <UserDetails user={user} />;
}
