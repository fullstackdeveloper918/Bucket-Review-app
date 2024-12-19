import { json, LoaderFunction } from "@remix-run/node";
import db from "../db.server"; // Assuming you have a db.server.ts file to export the db client

// Loader function to handle GET requests for fetching reviews with pagination and optional filtering
export const loader: LoaderFunction = async ({ request }) => {
    // Parse URL and extract query parameters
    const url = new URL(request.url);

    // Pagination: Page number and number of reviews per page
    const page = parseInt(url.searchParams.get("page") || "1", 10); // Default to page 1
    const pageSize = parseInt(url.searchParams.get("pageSize") || "10", 10); // Default to 2 items per page

    // Filter: Rating filter to show reviews with a specific rating (e.g., 5-star reviews)
    const ratingFilter = url.searchParams.get("rating");  // Optional filter
    
    // Sorting: Sort by createdAt, with "desc" or "asc"
    const orderBy = url.searchParams.get("orderBy") || "desc";  // Default to "desc"
    
    // Validate that the orderBy is either "asc" or "desc"
    const orderDirection = orderBy === "asc" ? "asc" : "desc"; // Default to "desc" if invalid
    
    // Calculate skip value for pagination
    const skip = (page - 1) * pageSize;

    try {
        // Construct query for fetching reviews with pagination and filters
        const reviewsQuery = {
            where: ratingFilter ? { rating: parseInt(ratingFilter, 10) } : {}, // Apply rating filter if provided
            skip, // Pagination: how many items to skip
            take: pageSize, // Pagination: number of items per page
            orderBy: { createdAt: orderDirection }, // Order reviews by createdAt (ascending or descending)
        };

        // Fetch reviews based on the query
        const reviews = await db.review.findMany(reviewsQuery);

        // Get the total number of reviews (without pagination) for calculating total pages
        const totalReviews = await db.review.count({
            where: ratingFilter ? { rating: parseInt(ratingFilter, 10) } : {}, // Apply rating filter if provided
        });

        // Calculate total number of pages based on the total reviews and page size
        const totalPages = Math.ceil(totalReviews / pageSize);

        // Return reviews and pagination data in JSON format
        return json({
            reviews,
            pagination: {
                page,
                pageSize,
                totalPages,
                totalReviews,
            },
        });
    } catch (error) {
        // Log the error for debugging
        console.error("Error fetching reviews:", error);

        // Return an error response with status 500
        return json({ message: "Failed to fetch reviews" }, { status: 500 });
    }
};
