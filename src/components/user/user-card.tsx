import type { User } from "../../app/types/user-types";
import { Trash, Edit, Mail, Phone } from "lucide-react";
import Link from "next/link";

type UserCardProps = {
  user: User;
};

export default function UserCard({ user }: UserCardProps) {
  return (
    <Link
      href={`/users/${user.id}`}
      className=" rounded-md p-4 shadow-md flex items-center gap-x-4 justify-between bg-white cursor-pointer hover:shadow-lg transition"
    >
      <div>
        <h3 className="mb-4">{user.name}</h3>
        <div className="flex gap-2 items-center mb-2">
          <Mail size={20} className="text-[var(--text-grey)]" />
          <p className="text-[var(--text-black)]">{user.email}</p>
        </div>
        <div className="flex gap-2 items-center ">
          <Phone size={20} className="text-[var(--text-grey)]" />
          <p className="text-[var(--text-black)]">{user.phone}</p>
        </div>
      </div>
      <div className="flex gap-4">
        <Edit size={20} className="cursor-pointer text-[var(--primary-dark)]" />
        <Trash size={20} className="text-[var(--red)] cursor-pointer" />
      </div>
    </Link>
  );
}
