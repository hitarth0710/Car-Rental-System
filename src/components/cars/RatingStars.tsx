import { useState } from "react";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface RatingStarsProps {
  rating?: number;
  maxRating?: number;
  size?: "sm" | "md" | "lg";
  interactive?: boolean;
  onRatingChange?: (rating: number) => void;
  className?: string;
}

export function RatingStars({
  rating = 0,
  maxRating = 5,
  size = "md",
  interactive = false,
  onRatingChange,
  className,
}: RatingStarsProps) {
  const [hoverRating, setHoverRating] = useState(0);
  
  const sizeClasses = {
    sm: "h-3 w-3",
    md: "h-4 w-4",
    lg: "h-5 w-5",
  };
  
  const handleClick = (index: number) => {
    if (interactive && onRatingChange) {
      onRatingChange(index);
    }
  };
  
  return (
    <div 
      className={cn("flex items-center", className)}
      onMouseLeave={() => interactive && setHoverRating(0)}
    >
      {[...Array(maxRating)].map((_, index) => {
        const starValue = index + 1;
        const isActive = interactive 
          ? starValue <= (hoverRating || rating)
          : starValue <= rating;
          
        return (
          <Star
            key={index}
            className={cn(
              sizeClasses[size],
              "cursor-default transition-colors",
              isActive ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground",
              interactive && "cursor-pointer"
            )}
            onMouseEnter={() => interactive && setHoverRating(starValue)}
            onClick={() => handleClick(starValue)}
          />
        );
      })}
    </div>
  );
}