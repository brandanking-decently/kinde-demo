import { NextResponse } from "next/server";
import { Users, init } from "@kinde/management-api-js";

export async function POST(req: Request) {
  init();
  const { id, first_name } = (await req.json()) as {
    id: string;
    first_name: string;
  };
  await Users.updateUser({
    id,
    requestBody: { given_name: first_name },
  });

  return NextResponse.json({ success: true });
}
