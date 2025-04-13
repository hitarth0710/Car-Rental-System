import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import { fine } from "@/lib/fine";
import { useToast } from "@/hooks/use-toast";
import type { Car } from "@/lib/db-types";

interface FavoriteButtonProps {
  car: Car;
  variant?: "default" | "outline" | "ghost";
  size?: "default" | "sm" | "lg" | "icon";
}

export function FavoriteButton({ car, variant = "ghost", size = "icon" }: FavoriteButtonProps) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const { data: session } = fine.auth.useSession();

  useEffect(() => {
    const checkIfFavorite = async () => {
      if (!session?.user) return;
      
      try {
        const favorites = await fine.table("favorites")
          .select()
          .eq("user_id", session.user.id)
          .eq("car_id", car.id);
          
        setIsFavorite(favorites.length > 0);
      } catch (error) {
        console.error("Error checking favorite status:", error);
      }
    };
    
    checkIfFavorite();
  }, [car.id, session?.user]);

  const toggleFavorite = async () => {
    if (!session?.user) {
      toast({
        title: "Authentication required",
        description: "Please sign in to save favorites",
        variant: "destructive",
      });
      return;
    }
    
    setIsLoading(true);
    
    try {
      if (isFavorite) {
        // Remove from favorites
        await fine.table("favorites")
          .delete()
          .eq("user_id", session.user.id)
          .eq("car_id", car.id);
          
        setIsFavorite(false);
        toast({
          title: "Removed from favorites",
          description: `${car.make} ${car.model} removed from your favorites`,
        });
      } else {
        // Add to favorites
        await fine.table("favorites").insert({
          user_id: session.user.id,
          car_id: car.id as number,
        });
        
        setIsFavorite(true);
        toast({
          title: "Added to favorites",
          description: `${car.make} ${car.model} added to your favorites`,
        });
      }
    } catch (error) {
      console.error("Error toggling favorite:", error);
      toast({
        title: "Error",
        description: "Failed to update favorites. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Button
      variant={variant}
      size={size}
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        toggleFavorite();
      }}
      disabled={isLoading}
      aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
      className="group"
    >
      <Heart
        className={`h-5 w-5 transition-colors ${
          isFavorite 
            ? "fill-red-500 text-red-500" 
            : "fill-transparent text-muted-foreground group-hover:text-red-500"
        }`}
      />
    </Button>
  );
}