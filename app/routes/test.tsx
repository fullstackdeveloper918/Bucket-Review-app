// In your route module (e.g., `your-page.tsx`)
import { json, LoaderFunction } from "@remix-run/node";

export let loader: LoaderFunction = async () => {
  const appUrl = process.env.APP_URL || 'https://your-app-url.com';
  return json({ appUrl });
};
