"use client";

import { useKindeAuth } from "@kinde-oss/kinde-auth-nextjs";
import { handleTokenRefresh } from "../action";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const { user } = useKindeAuth();
  const [name, setName] = useState("");

  // KINDE - When triggered in a useEffect, it updates the token, however, the user object is not updated that comes from useKindeAuth without a page refresh.

  // useEffect(() => {
  //   void handleTokenRefresh();
  // }, []);

  if (!user) return null;

  // KINDE - This works because it triggers a page refresh.
  const updateName = async () => {
    await fetch("/api/user", {
      method: "POST",
      body: JSON.stringify({ id: user.id, first_name: name }),
    });

    await handleTokenRefresh();

    window.location.reload();
  };

  return (
    <>
      <div className="container">
        <div>{user.given_name}</div>
        <div>
          <input
            type="text"
            value={name}
            onChange={(value) => setName(value.target.value)}
          />
          <button onClick={updateName}>Update Name</button>
        </div>
      </div>
    </>
  );
}
