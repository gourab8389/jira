"use client"
import { useRouter } from "next/navigation";
import { useEffect } from "react";

import { useLogout } from "@/features/auth/api/use-logout";
import { useCurrent } from "@/features/auth/api/use-current";
import { UserButton } from "@/features/auth/components/user-button";

export default function Home() {
const router = useRouter();
const { data, isLoading } = useCurrent();
const { mutate } = useLogout();

  useEffect(() => {
    if (!isLoading && !data) {
      router.push("/sign-in");
    }
  }, [data]);

  return (
    <div>
      <UserButton/>
    </div>
  )
}
