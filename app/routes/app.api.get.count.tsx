import { json, LoaderFunction } from "@remix-run/node";
import db from "../db.server"; // Assuming you have a db.server.ts file to export the db client

// New loader to get total review count and average rating with optional isPublic filter
export const loader: LoaderFunction = async ({ request }) => {
    const url = new URL(request.url);
    const isPublic = url.searchParams.get("isPublic");  // Optional filter, "true" or "false"
    
    // Convert isPublic filter to boolean if provided
    const isPublicFilter = isPublic === "true" ? true : isPublic === "false" ? false : undefined;

    try {
        const whereCondition = isPublicFilter !== undefined ? { isPublic: isPublicFilter } : {};  // Filter by isPublic if provided

        // Get the total number of reviews with the filter
        const totalReviews = await db.review.count({
            where: whereCondition,
        });

        // Calculate the average rating with the filter
        const averageRatingData = await db.review.aggregate({
            _avg: {
                rating: true,  // Calculate the average of the 'rating' field
            },
            where: whereCondition,
        });

        const averageRating = averageRatingData._avg.rating || 0;

        // Return the statistics as a JSON response
        return json({
            totalReviews,
            averageRating: parseFloat(averageRating.toFixed(1)),  // Rounded to 1 decimal place
        });
    } catch (error) {
        // Log the error for debugging
        console.error("Error fetching review statistics:", error);

        // Return an error response with status 500
        return json({ message: "Failed to fetch review statistics" }, { status: 500 });
    }
};
