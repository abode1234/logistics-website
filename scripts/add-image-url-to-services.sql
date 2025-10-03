-- Add image_url column to services table
ALTER TABLE services ADD COLUMN IF NOT EXISTS image_url VARCHAR(500);

-- Update existing services with default image URLs
UPDATE services SET image_url = '/images/sea-freight.jpg' WHERE name_en = 'Sea Freight';
UPDATE services SET image_url = '/images/air-freight.jpg' WHERE name_en = 'Air Freight';
UPDATE services SET image_url = '/images/land-transport.jpg' WHERE name_en = 'Land Transport';
UPDATE services SET image_url = '/images/customs-clearance.jpg' WHERE name_en = 'Customs Clearance';
UPDATE services SET image_url = '/images/import-export.jpg' WHERE name_en = 'Import & Export';
UPDATE services SET image_url = '/images/warehousing.jpg' WHERE name_en = 'Warehousing & Distribution';

-- Show the updated table structure
\d services;