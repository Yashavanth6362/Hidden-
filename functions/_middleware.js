export const onRequest = async ({ request, next }) => {
  const auth = request.headers.get("Authorization") || "";
  const [u,p] = atob(auth.split(" ")[1] || "").split(":");

  if (u !== "IAM" || p !== "HAMER@6362") {
    return new Response("Unauthorized", {
      status: 401,
      headers: { "WWW-Authenticate": "Basic" }
    });
  }
  return next();
};
