import { json, LoaderFunction, ActionFunction, HeadersFunction } from "@remix-run/node"; 
import { useLoaderData } from "@remix-run/react";
import { sessionStorage, authenticate } from "../shopify.server"; // Import sessionStorage from shopify.server

async function getAuthenticatedUser(request: Request) {
  
  const user = { role: 'admin', name: 'John Doe' }; 
  return user;
}


async function verifyUserRole(request: Request, expectedRole: string) {
  let user = await getAuthenticatedUser(request); // Get the authenticated user
  if (!user) {
    throw json({ message: "Unauthorized" }, { status: 401 });
  }
  if (user.role !== expectedRole) {
    throw json({ message: "Forbidden" }, { status: 403 });
  }
  return user;
}

export const headers: HeadersFunction = () => ({
  "Cache-Control": "max-age=300, s-maxage=3600",
});

// Loader function to verify user before fetching data or rendering the page
export let loader: LoaderFunction = async ({ request }) => {
    const admin = await authenticate.admin(request)
    console.log(admin.scopes)
  
  let user = await verifyUserRole(request, "admin"); // Only allow access if the user is an admin
  return json({ user }); // Return the user data to the component
};

// Action function for handling form submissions or POST requests
export async function action({ request }: ActionFunctionArgs) {
  // Optionally handle POST actions with user role verification
  let user = await verifyUserRole(request, "admin");
  // Handle your form submission or other logic here if the user is an admin
  return json({ message: "Action completed" });
}



export default function View() {
  const { user } = useLoaderData<typeof loader>(); // Get the user data from the loader

  return (
    <div>
      <h3>Hello, {user.name}</h3>
      <p>Welcome to the admin dashboard!</p>
    </div>
  );
}
