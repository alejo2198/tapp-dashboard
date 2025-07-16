"use client";

import {
  ChevronLeft,
  Building2,
  Mail,
  Phone,
  Globe,
  House,
} from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import type { User } from "@/app/types/user-types";
export default function UserDetails({ user }: { user: User | null }) {
  if (!user) {
    return (
      <main className="flex justify-center items-center min-h-[40vh]">
        <p>User not found.</p>
      </main>
    );
  }

  return (
    <main className="p-4 container mx-auto mt-4 md:mx-auto md:mt-16 bg-white md:rounded-xl md:shadow md:p-6">
      <article className="p-4 relative flex flex-col md:items-start gap-2">
        <Link href="/" className="md:absolute md:top-4 md:left-4">
          <ChevronLeft size={20} strokeWidth={4} className="mr-2" />
        </Link>
        <div className="flex flex-col items-center w-full">
          <h1 className="text-center w-full">{user.name}</h1>
          <Badge className="text-[var(--primary-dark)] mb-2 bg-[var(--badge)] text-sm font-semibold md:mb-4 lg:mb-8">
            {user.username}
          </Badge>
        </div>
        <div className="flex flex-col md:flex-row w-full justify-between  border-[var(--primary-dark)] border-b pb-4 mb-4">
          <div className="flex gap-2 md:flex-row items-center mb-2">
            <Mail size={20} className="text-[var(--text-grey)]" />
            <p className="text-[var(--text-black)]">{user.email}</p>
          </div>
          <div className="flex gap-2 items-center mb-2">
            <Phone size={20} className="text-[var(--text-grey)]" />
            <p className="text-[var(--text-black)]">{user.phone}</p>
          </div>
          <div className="flex gap-2 items-center mb-2">
            <Globe size={20} className="text-[var(--text-grey)]" />
            <p className="text-[var(--text-black)]">{user.website}</p>
          </div>
        </div>
        <div className="lg:flex lg:w-full lg:gap-8 lg:items-start">
          <div className="border-[var(--primary-dark)] border-b md:border-none pb-4 mb-4 lg:w-full lg:h-full">
            <h2 className="mb-2">Address</h2>
            <div className="flex gap-2 mb-2">
              <House size={20} className="text-[var(--text-grey)]" />
              <div>
                <p className="text-[var(--text-black)]">
                  {user.address.suite} - {user.address.street}
                </p>
                <p className="text-[var(--text-black)]">
                  {user.address.city}, {user.address.zipcode}
                </p>
              </div>
            </div>
          </div>
          <div className="lg:w-full">
            <h2 className="mb-2">Company</h2>
            <article className="flex flex-col md:flex-row items-center gap-2 md:gap-8 bg-[var(--badge)] p-4 rounded">
              <Building2
                strokeWidth={2}
                color="var(--primary-dark)"
                className="size-16 md:size-20"
              />
              <div className="flex flex-col gap-1 text-[var(--primary-dark)] items-center md:items-start">
                <h3>{user.company.name}</h3>
                <p>{user.company.bs}</p>
                <p>{user.company.catchPhrase}</p>
              </div>
            </article>
          </div>
        </div>
      </article>
    </main>
  );
}
