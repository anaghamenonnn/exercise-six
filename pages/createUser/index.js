import CreateUserForm from "@/components/CreateUserForm";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function CreateUser({ createUserFunction, isLoggedIn }) {
  const router = useRouter();
  useEffect(() => {
    if (isLoggedIn) router.push("/");
  }, [isLoggedIn]);

  return (
    <div>
      <CreateUserForm createUserFunction={createUserFunction} />
    </div>
  );
}