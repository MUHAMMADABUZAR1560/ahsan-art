-- Create portfolio_items table for storing portfolio content
CREATE TABLE IF NOT EXISTS public.portfolio_items (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  category TEXT NOT NULL,
  description TEXT,
  image_url TEXT NOT NULL,
  video_url TEXT,
  featured BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create services table for managing services
CREATE TABLE IF NOT EXISTS public.services (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  icon TEXT,
  price_range TEXT,
  features TEXT[],
  display_order INTEGER DEFAULT 0,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create testimonials table
CREATE TABLE IF NOT EXISTS public.testimonials (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  client_name TEXT NOT NULL,
  client_company TEXT,
  client_image_url TEXT,
  content TEXT NOT NULL,
  rating INTEGER DEFAULT 5,
  is_featured BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create contact_submissions table for form submissions
CREATE TABLE IF NOT EXISTS public.contact_submissions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  service_interest TEXT,
  message TEXT NOT NULL,
  status TEXT DEFAULT 'new',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create bts_content table for behind the scenes content
CREATE TABLE IF NOT EXISTS public.bts_content (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  description TEXT,
  media_url TEXT NOT NULL,
  media_type TEXT DEFAULT 'image',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security on all tables
ALTER TABLE public.portfolio_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.services ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.testimonials ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.bts_content ENABLE ROW LEVEL SECURITY;

-- Public read access for portfolio_items (for public website)
CREATE POLICY "portfolio_items_public_read" ON public.portfolio_items 
  FOR SELECT USING (true);

-- Public read access for services
CREATE POLICY "services_public_read" ON public.services 
  FOR SELECT USING (is_active = true);

-- Public read access for testimonials
CREATE POLICY "testimonials_public_read" ON public.testimonials 
  FOR SELECT USING (true);

-- Public insert for contact submissions (anyone can submit)
CREATE POLICY "contact_submissions_public_insert" ON public.contact_submissions 
  FOR INSERT WITH CHECK (true);

-- Public read access for BTS content
CREATE POLICY "bts_content_public_read" ON public.bts_content 
  FOR SELECT USING (true);

-- Admin full access policies (for authenticated users)
CREATE POLICY "portfolio_items_admin_all" ON public.portfolio_items 
  FOR ALL USING (auth.role() = 'authenticated');

CREATE POLICY "services_admin_all" ON public.services 
  FOR ALL USING (auth.role() = 'authenticated');

CREATE POLICY "testimonials_admin_all" ON public.testimonials 
  FOR ALL USING (auth.role() = 'authenticated');

CREATE POLICY "contact_submissions_admin_all" ON public.contact_submissions 
  FOR ALL USING (auth.role() = 'authenticated');

CREATE POLICY "bts_content_admin_all" ON public.bts_content 
  FOR ALL USING (auth.role() = 'authenticated');

-- Insert some initial sample data for portfolio
INSERT INTO public.portfolio_items (title, category, description, image_url, featured) VALUES
  ('Luxury Skincare Collection', 'Skincare', 'Professional product photography for premium skincare brand', '/images/portfolio/skincare.jpg', true),
  ('Tech Product Launch', 'Technology', 'High-end product shots for tech startup', '/images/portfolio/tech.jpg', true),
  ('Amazon Product Listing', 'E-commerce', 'Conversion-focused product photography', '/images/portfolio/amazon.jpg', true),
  ('Gourmet Food Photography', 'Food', 'Appetizing food photography for restaurant menu', '/images/portfolio/food.jpg', true),
  ('Fashion Accessories', 'Fashion', 'Elegant photography for fashion brand', '/images/portfolio/fashion.jpg', false),
  ('Brand Identity Shoot', 'Branding', 'Complete visual identity package', '/images/portfolio/brand.jpg', false);

-- Insert initial services
INSERT INTO public.services (title, description, icon, price_range, features, display_order, is_active) VALUES
  ('Product Photography', 'Professional product shots that convert browsers into buyers. Perfect for e-commerce, catalogs, and marketing.', 'camera', 'Starting at $299', ARRAY['High-resolution images', 'Multiple angles', 'White background shots', 'Lifestyle shots'], 1, true),
  ('Video Production', 'Engaging video content that tells your brand story. From product demos to promotional videos.', 'video', 'Starting at $599', ARRAY['4K quality', 'Professional editing', 'Music & sound design', 'Multiple formats'], 2, true),
  ('Food Photography', 'Mouth-watering food photography that makes viewers hungry. Ideal for restaurants and food brands.', 'utensils', 'Starting at $399', ARRAY['Styling included', 'Natural lighting', 'Multiple dishes', 'Menu-ready images'], 3, true),
  ('Amazon/E-commerce', 'Optimized product images that meet marketplace requirements and boost conversions.', 'shopping-cart', 'Starting at $249', ARRAY['Platform compliant', 'Infographics', 'A+ content', 'Lifestyle images'], 4, true),
  ('UGC Videos', 'Authentic user-generated content style videos that connect with your audience.', 'users', 'Starting at $399', ARRAY['Authentic feel', 'Social media ready', 'Multiple cuts', 'Hook variations'], 5, true),
  ('Brand Photography', 'Complete brand visual packages including team photos, workspace shots, and brand story content.', 'palette', 'Custom Quote', ARRAY['Brand consultation', 'Multiple sessions', 'Full rights', 'Style guide'], 6, true);

-- Insert sample testimonials
INSERT INTO public.testimonials (client_name, client_company, content, rating, is_featured) VALUES
  ('Sarah Johnson', 'GlowSkin Cosmetics', 'Ahsan Art transformed our product line with stunning photography. Sales increased 40% after updating our website images!', 5, true),
  ('Michael Chen', 'TechStart Inc', 'Professional, creative, and incredibly easy to work with. The video content exceeded our expectations.', 5, true),
  ('Emily Rodriguez', 'Fresh Bites Restaurant', 'The food photography was absolutely amazing. Our menu has never looked better!', 5, true);
