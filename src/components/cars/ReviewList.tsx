import { useState, useEffect } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { RatingStars } from "@/components/cars/RatingStars";
import { Separator } from "@/components/ui/separator";
import { format, parseISO } from "date-fns";
import { fine } from "@/lib/fine";
import { Loader2 } from "lucide-react";
import type { Car } from "@/lib/db-types";

interface Review {
  id: number;
  user_id: string;
  car_id: number;
  rating: number;
  comment: string;
  created_at: string;
  user_name?: string;
}

interface ReviewListProps {
  car: Car;
  refreshTrigger?: number;
}

export function ReviewList({ car, refreshTrigger = 0 }: ReviewListProps) {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [averageRating, setAverageRating] = useState(0);

  useEffect(() => {
    const fetchReviews = async () => {
      setIsLoading(true);
      try {
        const reviewsData = await fine.table("reviews")
          .select()
          .eq("car_id", car.id)
          .order("created_at", { ascending: false });
        
        // Get unique user IDs
        const userIds = [...new Set(reviewsData.map(review => review.user_id))];
        
        // Fetch user data for all reviews at once
        const usersData = await Promise.all(
          userIds.map(async (userId) => {
            try {
              // This is a placeholder - in a real app, you'd fetch user data from your users table
              // For now, we'll just return a name based on the user ID
              return { id: userId, name: `User ${userId.substring(0, 5)}` };
            } catch (error) {
              console.error(`Error fetching user ${userId}:`, error);
              return { id: userId, name: "Anonymous" };
            }
          })
        );
        
        // Create a map of user IDs to user data for quick lookup
        const userMap = Object.fromEntries(
          usersData.map(user => [user.id, user])
        );
        
        // Add user names to reviews
        const reviewsWithUserNames = reviewsData.map(review => ({
          ...review,
          user_name: userMap[review.user_id]?.name || "Anonymous"
        }));
        
        setReviews(reviewsWithUserNames);
        
        // Calculate average rating
        if (reviewsWithUserNames.length > 0) {
          const total = reviewsWithUserNames.reduce((sum, review) => sum + review.rating, 0);
          setAverageRating(total / reviewsWithUserNames.length);
        }
      } catch (error) {
        console.error("Error fetching reviews:", error);
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchReviews();
  }, [car.id, refreshTrigger]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-8">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (reviews.length === 0) {
    return (
      <div className="rounded-md border bg-muted/50 p-6 text-center">
        <p className="text-muted-foreground">No reviews yet. Be the first to review this car!</p>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold">Customer Reviews</h3>
          <div className="mt-1 flex items-center gap-2">
            <RatingStars rating={averageRating} />
            <span className="text-sm text-muted-foreground">
              {averageRating.toFixed(1)} out of 5 ({reviews.length} {reviews.length === 1 ? 'review' : 'reviews'})
            </span>
          </div>
        </div>
      </div>
      
      <div className="space-y-6">
        {reviews.map((review) => (
          <div key={review.id}>
            <div className="flex items-start gap-4">
              <Avatar>
                <AvatarFallback>{review.user_name?.substring(0, 2) || "U"}</AvatarFallback>
              </Avatar>
              
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">{review.user_name}</p>
                    <div className="mt-1 flex items-center gap-2">
                      <RatingStars rating={review.rating} size="sm" />
                      <span className="text-xs text-muted-foreground">
                        {review.created_at && format(parseISO(review.created_at), "MMM d, yyyy")}
                      </span>
                    </div>
                  </div>
                </div>
                
                <p className="mt-2 text-sm">{review.comment}</p>
              </div>
            </div>
            <Separator className="mt-4" />
          </div>
        ))}
      </div>
    </div>
  );
}