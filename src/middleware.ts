import {
  authMiddleware,
  withAuth,
} from "@kinde-oss/kinde-auth-nextjs/middleware";

type KindeMiddlewareRequest = Request & {
  kindeAuth: { user: any; token: string };
};

export default withAuth(async function middleware({
  kindeAuth,
}: KindeMiddlewareRequest) {
  const { token } = kindeAuth;
  const isAuthorized = token?.org_code;

  if (!isAuthorized) {
    return new Response(null, {
      status: 302,
      headers: {
        Location: "http://localhost:3000/api/auth/logout",
      },
    });
  }
});

export const config = {
  matcher: ["/dashboard"],
};
