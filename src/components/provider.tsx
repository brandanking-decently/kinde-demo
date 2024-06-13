"use client";

import { KindeProvider } from "@kinde-oss/kinde-auth-nextjs";
import { ReactNode, useEffect } from "react";

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  return <KindeProvider>{children}</KindeProvider>;
};
