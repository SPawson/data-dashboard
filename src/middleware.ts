export { default } from "next-auth/middleware";

export const config = {
  matcher: [
    "/dashboard",
    "/dashboard/profile",
    "/dashboard/settings",
    "/dashboard/data",
  ],
};
