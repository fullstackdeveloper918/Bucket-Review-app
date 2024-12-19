import { json, LoaderFunction } from "@remix-run/node";
import db from "../db.server"; // Assuming you have a db.server.ts file to export the db client

// PATCH request to mark a review as private (set isPublic to false)
export const loader: LoaderFunction = async ({ request }) => {
    const url = new URL(request.url);
    const reviewId = url.searchParams.get("reviewId");

    if (!reviewId) {
        return json({ message: "Review ID is required" }, { status: 400 });
    }

    try {
        // Update the review to set isPublic to false
        const updatedReview = await db.review.update({
            where: { id: parseInt(reviewId, 10) },
            data: { isPublic: false },
        });

        return json({
            message: "Review marked as private",
            updatedReview,
        });
    } catch (error) {
        console.error("Error updating review:", error);
        return json({ message: "Failed to mark review as private" }, { status: 500 });
    }
};
