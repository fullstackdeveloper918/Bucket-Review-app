import { json, ActionFunction } from "@remix-run/node";
import db from "../db.server"; // Assuming you have a db.server.ts file to export the db client

export const action: ActionFunction = async ({ request }) => {
    try {
        const formData = await request.formData();
        const reviewId = formData.get("reviewId");

        // Ensure reviewId is provided and is a string
        if (!reviewId || typeof reviewId !== "string") {
            return json({ message: "Valid Review ID is required" }, { status: 400 });
        }

        // Delete the review from the database
        const deletedReview = await db.review.delete({
            where: { id: reviewId }, // Pass reviewId as a string
        });

        return json({
            message: "Review deleted successfully",
            deletedReview,
        });
    } catch (error) {
        console.error("Error deleting review:", error);
        return json({ message: "Failed to delete review" }, { status: 500 });
    }
};
