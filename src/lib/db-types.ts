export type Schema = {
    cars: {
      id?: number;
      make: string;
      model: string;
      year: number;
      type: string;
      color: string;
      daily_rate: number;
      image_url: string;
      available?: boolean;
      description: string;
      specifications: string; // JSON string
      created_at?: string;
    };
    bookings: {
      id?: number;
      user_id: string;
      car_id: number;
      start_date: string;
      end_date: string;
      total_price: number;
      status?: string;
      created_at?: string;
    };
    favorites: {
      id?: number;
      user_id: string;
      car_id: number;
      created_at?: string;
    };
    reviews: {
      id?: number;
      user_id: string;
      car_id: number;
      rating: number;
      comment: string;
      created_at?: string;
    };
  };
  
  export type Car = Schema['cars'] & { 
    specifications: CarSpecifications;
  };
  
  export type Booking = Schema['bookings'];
  export type Favorite = Schema['favorites'];
  export type Review = Schema['reviews'];
  
  export type CarSpecifications = {
    [key: string]: string | number | boolean;
  };
  
  export type CarFilters = {
    type?: string;
    make?: string;
    minPrice?: number;
    maxPrice?: number;
  };