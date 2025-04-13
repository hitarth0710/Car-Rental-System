import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { RatingStars } from "@/components/cars/RatingStars";
import { fine } from "@/lib/fine";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";
import type { Car } from "@/lib/db-types";

interface ReviewFormProps {
  car: Car;
  onReviewAdded: () => void;
}

export function ReviewForm({ car, onReviewAdded }: ReviewFormProps) {
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const { data: session } = fine.auth.useSession();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!session?.user) {
      toast({
        title: "Authentication required",
        description: "Please sign in to leave a review",
        variant: "destructive",
      });
      return;
    }
    
    if (!comment.trim()) {
      toast({
        title: "Review required",
        description: "Please enter a comment for your review",
        variant: "destructive",
      });
      return;
    }
    
    setIsLoading(true);
    
    try {
      await fine.table("reviews").insert({
        user_id: session.user.id,
        car_id: car.id as number,
        rating,
        comment,
      });
      
      toast({
        title: "Review submitted",
        description: "Thank you for your feedback!",
      });
      
      setComment("");
      setRating(5);
      onReviewAdded();
    } catch (error) {
      console.error("Error submitting review:", error);
      toast({
        title: "Error",
        description: "Failed to submit review. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="mb-2 block text-sm font-medium">Your Rating</label>
        <RatingStars 
          rating={rating} 
          interactive={true} 
          onRatingChange={setRating} 
          size="lg"
        />
      </div>
      
      <div>
        <label htmlFor="comment" className="mb-2 block text-sm font-medium">
          Your Review
        </label>
        <Textarea
          id="comment"
          placeholder="Share your experience with this car..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          rows={4}
          disabled={isLoading}
        />
      </div>
      
      <Button type="submit" disabled={isLoading}>
        {isLoading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Submitting...
          </>
        ) : (
          "Submit Review"
        )}
      </Button>
    </form>
  );
}