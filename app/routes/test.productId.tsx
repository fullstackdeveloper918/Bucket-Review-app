import { json, LoaderFunction } from "@remix-run/node";
import db from "../db.server"; // Assuming you have a db.server.ts file to export the db client

export const loader: LoaderFunction = async ({ request }) => {
  const url = new URL(request.url);
  const productId = url.searchParams.get("productId");

  if (!productId) {
    return json({ message: "Product ID is required" }, { status: 400 });
  }

  try {
    // Fetch reviews for the product from the database
    const reviews = await db.review.findMany({
      where: {
        productId: productId,
      },
      orderBy: {
        createdAt: "desc", // Optional: Order reviews by the latest
      },
    });

    if (reviews.length === 0) {
      return json({ message: "No reviews found for this product" }, { status: 404 });
    }

    // Return the reviews in the response
    return json(reviews);
  } catch (error) {
    console.error("Error fetching reviews:", error);
    return json({ message: "Failed to fetch reviews" }, { status: 500 });
  }
};
  