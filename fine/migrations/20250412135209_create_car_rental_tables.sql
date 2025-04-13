-- Create cars table
CREATE TABLE cars (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  make TEXT NOT NULL,
  model TEXT NOT NULL,
  year INTEGER NOT NULL,
  type TEXT NOT NULL,
  color TEXT NOT NULL,
  daily_rate REAL NOT NULL,
  image_url TEXT NOT NULL,
  available BOOLEAN NOT NULL DEFAULT true,
  description TEXT NOT NULL,
  specifications TEXT NOT NULL, -- JSON string
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create bookings table
CREATE TABLE bookings (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id TEXT NOT NULL,
  car_id INTEGER NOT NULL,
  start_date TEXT NOT NULL,
  end_date TEXT NOT NULL,
  total_price REAL NOT NULL,
  status TEXT NOT NULL DEFAULT 'pending',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (car_id) REFERENCES cars (id)
);

-- Insert sample car data
INSERT INTO cars (make, model, year, type, color, daily_rate, image_url, available, description, specifications) VALUES
('Tesla', 'Model 3', 2023, 'Electric', 'White', 89.99, 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?q=80&w=2071&auto=format&fit=crop', true, 'Experience the future of driving with the Tesla Model 3. This all-electric sedan combines luxury with sustainability.', '{"range":"358 miles","acceleration":"0-60 mph in 3.1s","topSpeed":"162 mph","seats":5,"autopilot":true}'),
('BMW', 'X5', 2022, 'SUV', 'Black', 129.99, 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=2071&auto=format&fit=crop', true, 'The BMW X5 offers a perfect blend of luxury, performance, and versatility. Ideal for both city driving and weekend getaways.', '{"engine":"3.0L TwinPower Turbo","horsepower":"335 hp","acceleration":"0-60 mph in 5.3s","seats":5,"awd":true}'),
('Toyota', 'Camry', 2023, 'Sedan', 'Silver', 59.99, 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?q=80&w=2069&auto=format&fit=crop', true, 'The reliable Toyota Camry offers comfort, efficiency, and style. Perfect for business trips or family outings.', '{"engine":"2.5L 4-Cylinder","mpg":"28 city / 39 highway","horsepower":"203 hp","seats":5,"hybrid":false}'),
('Porsche', '911', 2022, 'Sports', 'Red', 249.99, 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2070&auto=format&fit=crop', true, 'Experience the thrill of driving a Porsche 911. This iconic sports car delivers unmatched performance and driving pleasure.', '{"engine":"3.0L Twin-Turbo Flat-6","horsepower":"379 hp","acceleration":"0-60 mph in 4.0s","topSpeed":"182 mph","seats":4}'),
('Jeep', 'Wrangler', 2022, 'SUV', 'Green', 89.99, 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=2070&auto=format&fit=crop', true, 'Go anywhere with the Jeep Wrangler. Built for adventure, this 4x4 is perfect for off-road exploration.', '{"engine":"3.6L V6","fourWheelDrive":true,"groundClearance":"10.8 inches","seats":5,"removableTop":true}'),
('Mercedes-Benz', 'S-Class', 2023, 'Luxury', 'Black', 199.99, 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=2070&auto=format&fit=crop', true, 'Experience ultimate luxury with the Mercedes-Benz S-Class. Cutting-edge technology meets unparalleled comfort.', '{"engine":"3.0L Inline-6 Turbo","horsepower":"429 hp","acceleration":"0-60 mph in 4.9s","seats":5,"airbags":10}'),
('Honda', 'CR-V', 2023, 'SUV', 'Blue', 69.99, 'https://images.unsplash.com/photo-1568844293986-ca3c5a880cda?q=80&w=2070&auto=format&fit=crop', true, 'The Honda CR-V combines practicality with comfort. Spacious interior and excellent fuel economy make it perfect for family trips.', '{"engine":"1.5L Turbo","mpg":"28 city / 34 highway","cargo":"39.2 cu ft","seats":5,"awd":true}'),
('Ford', 'Mustang', 2022, 'Sports', 'Yellow', 119.99, 'https://images.unsplash.com/photo-1584345604476-8ec5f82d661h?q=80&w=2070&auto=format&fit=crop', true, 'Feel the power of the Ford Mustang. This American icon delivers exhilarating performance and head-turning style.', '{"engine":"5.0L V8","horsepower":"460 hp","acceleration":"0-60 mph in 4.2s","topSpeed":"155 mph","seats":4}');