"use server";

import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

const { refreshTokens } = getKindeServerSession();

export const handleTokenRefresh = async () => {
  const response = await refreshTokens();
  console.log(response);
};
