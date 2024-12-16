import { json, redirect } from "@remix-run/node";

export const action = async ({ request }) => {
  const formData = new URLSearchParams(await request.text());
  const rating = formData.get("rating");
  const comment = formData.get("comment");

  // Process the form data (e.g., save to a database)

  

  // Optionally, invalidate cache or return a redirect
  return redirect("/accounts");
};