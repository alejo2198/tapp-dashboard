"use client";

import type { User } from "@/app//types/user-types";
import UserCard from "../components/user/user-card";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import { Plus } from "lucide-react";
import ModalForm from "../components/ui/modal-form";
import { useState } from "react";

export default function HomeClient({ users: initialUsers }: { users: User[] }) {
  const [users, setUsers] = useState<User[]>(initialUsers);
  const [open, setOpen] = useState(false);

  return (
    <main className="p-4 container mx-auto mt-4 md:m-auto md:mt-16 md:bg-white md:rounded-xl md:shadow md:p-6">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center my-4 ">
        <div className="flex flex-col">
          <div className="flex gap-4 items-center">
            <h1 className="mb-2">Users</h1>
            <Badge className="text-[var(--primary-dark)] mb-2 bg-[var(--badge)] text-sm font-semibold">
              {users.length} users
            </Badge>
          </div>
          <p>Manage your users and their information</p>
        </div>

        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <button
              className="inline-flex justify-center gap-2 px-4 py-2 mt-4 text-sm font-medium text-white bg-[var(--primary-dark)] rounded-md hover:bg-[var(--primary-dark)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--primary-dark)]"
              type="button"
            >
              <Plus size={20} />
              Add User
            </button>
          </DialogTrigger>
          <DialogContent className="max-h-[95vh] overflow-y-auto">
            <DialogTitle>Create New User</DialogTitle>
            <ModalForm
              onSubmit={(data) => {
                console.log(data);
                setOpen(false);
              }}
            />
          </DialogContent>
        </Dialog>
      </div>

      <ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2 md:gap-4 list-none">
        {users.map((user) => (
          <li key={user.id} className="p-2 rounded">
            <UserCard user={user} />
          </li>
        ))}
      </ul>
    </main>
  );
}
