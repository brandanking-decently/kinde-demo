"use client";

import { useKindeAuth } from "@kinde-oss/kinde-auth-nextjs";
import { handleTokenRefresh } from "../action";

export default function Dashboard() {
  const { user } = useKindeAuth();

  if (!user) return null;

  const updateName = async () => {
    await fetch("/api/user", {
      method: "POST",
      body: JSON.stringify({ id: user.id, first_name: "John" }),
    });

    await handleTokenRefresh();

    window.location.reload();
  };

  return (
    <>
      <>
        <button onClick={updateName}>Update Name</button>
      </>
    </>
  );
}
