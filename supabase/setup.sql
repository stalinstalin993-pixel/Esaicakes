-- ESAI CAKES: database setup for the admin panel.
-- Run this once in Supabase: SQL Editor -> New query -> paste -> Run.
-- Safe to run again; it will not duplicate cakes or overwrite edited ones.

-- 1. Cakes table ------------------------------------------------------------
create table if not exists public.cakes (
  id             text primary key,
  name           text    not null,
  category       text    not null,
  price          text    not null,            -- shown to customers, e.g. "Rs 650 / kg"
  numeric_price  integer not null default 0,  -- used for the cart total
  description    text    not null default '',
  image          text    not null default '',
  fallback_image text,
  available      boolean not null default true,
  sort_order     integer not null default 0,
  created_at     timestamptz not null default now()
);

alter table public.cakes enable row level security;

-- 2. Who can do what ----------------------------------------------------------
-- Everyone (the public website) can read cakes. Only a signed-in user (the baker,
-- created by you in Authentication -> Users) can add, edit or delete.
revoke all on public.cakes from anon, authenticated;
grant select on public.cakes to anon, authenticated;
grant insert, update, delete on public.cakes to authenticated;

drop policy if exists "Anyone can view cakes"     on public.cakes;
drop policy if exists "Admin can add cakes"       on public.cakes;
drop policy if exists "Admin can edit cakes"      on public.cakes;
drop policy if exists "Admin can delete cakes"    on public.cakes;

create policy "Anyone can view cakes"  on public.cakes for select to anon, authenticated using (true);
create policy "Admin can add cakes"    on public.cakes for insert to authenticated with check (true);
create policy "Admin can edit cakes"   on public.cakes for update to authenticated using (true) with check (true);
create policy "Admin can delete cakes" on public.cakes for delete to authenticated using (true);

-- 3. Photo storage ---------------------------------------------------------------
insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values ('cake-photos', 'cake-photos', true, 2097152, array['image/jpeg', 'image/png', 'image/webp'])
on conflict (id) do update
  set public = true, file_size_limit = 2097152,
      allowed_mime_types = array['image/jpeg', 'image/png', 'image/webp'];

drop policy if exists "Admin can upload cake photos" on storage.objects;
drop policy if exists "Admin can replace cake photos" on storage.objects;
drop policy if exists "Admin can delete cake photos" on storage.objects;

create policy "Admin can upload cake photos"  on storage.objects for insert to authenticated with check (bucket_id = 'cake-photos');
create policy "Admin can replace cake photos" on storage.objects for update to authenticated using (bucket_id = 'cake-photos');
create policy "Admin can delete cake photos"  on storage.objects for delete to authenticated using (bucket_id = 'cake-photos');

-- 4. Current 50 cakes ----------------------------------------------------------------
insert into public.cakes (id, name, category, price, numeric_price, description, image, fallback_image, available, sort_order)
values
  ('WC01', '2-Tier Floral Wedding Elegance', 'Wedding Cakes', '₹2,400 / 2kg', 2400, 'Exquisite 2-tier vanilla sponge adorned with fresh handcrafted pastel florals.', 'images/cakes/WC01.jpg', 'https://images.unsplash.com/photo-1535254973040-607b474cb50d?auto=format&fit=crop&w=600&q=80', true, 1),
  ('WC02', 'Classic Red Velvet Cream Cheese Tier', 'Wedding Cakes', '₹1,850 / 2kg', 1850, 'Rich crimson sponge with velvety cream cheese frosting and edible pearls.', 'images/cakes/WC02.jpg', 'https://images.unsplash.com/photo-1586788680434-30d324b2d46f?auto=format&fit=crop&w=600&q=80', true, 2),
  ('WC03', 'Pearl White Royal 3-Tier Cake', 'Wedding Cakes', '₹3,800 / 3kg', 3800, 'Grand 3-tiered imperial masterpiece with smooth buttercream and satin finish.', 'images/cakes/WC03.jpg', 'https://images.unsplash.com/photo-1529635958611-473523f87664?auto=format&fit=crop&w=600&q=80', true, 3),
  ('WC04', 'Rose Petal Semi-Naked Wedding Tier', 'Wedding Cakes', '₹2,200 / 2kg', 2200, 'Chic rustic semi-naked sponge topped with organic rose petals and berry glaze.', 'images/cakes/WC04.jpg', 'https://res.giftalove.com/resources/common/giftimages/productimage2/CAKE19045.jpg', true, 4),
  ('WC05', 'White Forest Grand Tier Cake', 'Wedding Cakes', '₹2,600 / 2kg', 2600, 'Light white chocolate curls, maraschino cherries, and fluffy whipped cream.', 'images/cakes/WC05.jpg', 'images/cakes/WC05.jpg', true, 5),
  ('WC06', 'Rustic Botanical Eucalyptus Tier', 'Wedding Cakes', '₹2,500 / 2kg', 2500, 'Earthy textured buttercream with botanical accents and gold leaf trim.', 'images/cakes/WC06.jpg', 'images/cakes/WC06.jpg', true, 6),
  ('WC07', 'Golden Lace Luxury Wedding Cake', 'Wedding Cakes', '₹3,200 / 3kg', 3200, 'Shimmering 24k edible gold leaf accents and artisanal sugar lace detailing.', 'images/cakes/WC07.jpg', 'images/cakes/WC07.jpg', true, 7),
  ('WC08', 'Champagne Berry Celebration Tier', 'Wedding Cakes', '₹2,900 / 2kg', 2900, 'Infused with non-alcoholic sparkling grape essence and fresh orchard berries.', 'images/cakes/WC08.jpg', 'images/cakes/WC08.jpg', true, 8),
  ('WC09', 'Lavender & Vanilla Blossom Tier', 'Wedding Cakes', '₹2,300 / 2kg', 2300, 'Fragrant subtle lavender undertones with Madagascar bourbon vanilla cream.', 'images/cakes/WC09.jpg', 'https://jessicainthekitchen.com/wp-content/uploads/2020/12/Vegan-Vanilla-Cake-12.jpg', true, 9),
  ('WC10', 'Elegant Ivory Fondant Wedding Cake', 'Wedding Cakes', '₹3,500 / 3kg', 3500, 'Pristine rolled fondant with sculpted sugar ribbons and piped pearls.', 'images/cakes/WC10.jpg', 'https://preppykitchen.com/wp-content/uploads/2019/02/RED-VELVET-CAKE-FEATURE-NEW.jpg', false, 10),
  ('KB01', 'Belgian Chocolate Truffle Birthday Cake', 'Kids'' Birthday', '₹650 / kg', 650, 'Decadent melted Belgian chocolate ganache on moist chocolate sponge.', 'images/cakes/KB01.jpg', 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=600&q=80', true, 11),
  ('KB02', 'Unicorn Theme Rainbow Cake', 'Kids'' Birthday', '₹1,100 / kg', 1100, 'Magical pastel layers with golden unicorn horn, ears, and buttercream mane.', 'images/cakes/KB02.jpg', 'https://images.unsplash.com/photo-1562777717-dc6984f65a63?auto=format&fit=crop&w=600&q=80', true, 12),
  ('KB03', 'Birthday Funfetti Sprinkles Cake', 'Kids'' Birthday', '₹700 / kg', 700, 'Loaded inside and out with colorful rainbow sprinkles and sweet vanilla frosting.', 'images/cakes/KB03.jpg', 'https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?auto=format&fit=crop&w=600&q=80', true, 13),
  ('KB04', 'Crazy Gems Candy Land Cake', 'Kids'' Birthday', '₹800 / kg', 800, 'Bursting with Cadbury Gems, chocolate drops, and crunchy candy surprises.', 'images/cakes/KB04.jpg', 'https://www.biggerbolderbaking.com/wp-content/uploads/2017/09/1C5A1025.jpg', true, 14),
  ('KB05', 'Strawberry Surprise Birthday Cake', 'Kids'' Birthday', '₹750 / kg', 750, 'Sweet strawberry compote filling layered between fluffy pink vanilla sponge.', 'images/cakes/KB05.jpg', 'https://www.giverecipe.com/wp-content/uploads/2016/05/strawberry-chocolate-cake-1.jpg', true, 15),
  ('KB06', 'Chocolate KitKat & M&M Birthday Cake', 'Kids'' Birthday', '₹950 / kg', 950, 'Surrounded by crunchy KitKat bars and topped with an avalanche of M&Ms.', 'images/cakes/KB06.jpg', 'https://cdn.shopify.com/s/files/1/1060/3816/products/fantasy-chocolate-truffle-cake_900x.jpg?v=1594974395', true, 16),
  ('KB07', 'Rainbow Swirl Birthday Roll Cake', 'Kids'' Birthday', '₹600 / pc', 600, 'Vibrant rainbow spiraled Swiss roll filled with whipped vanilla marshmallow cream.', 'images/cakes/KB07.jpg', 'https://theflavorbender.com/wp-content/uploads/2020/10/Vanilla-Swiss-Roll-2929-2.jpg', true, 17),
  ('KB08', 'Butterscotch Crunch Birthday Delight', 'Kids'' Birthday', '₹680 / kg', 680, 'Caramelized praline crunch, butterscotch drizzle, and velvety golden cream.', 'images/cakes/KB08.jpg', 'https://cdn.igp.com/f_auto,q_auto,t_prodm/products/p-classic-butterscotch-cake-half-kg--109215-m.jpg', true, 18),
  ('KB09', 'Choco Berry Wonder Birthday Cake', 'Kids'' Birthday', '₹850 / kg', 850, 'Rich dark cocoa base crowned with fresh strawberries and chocolate shards.', 'images/cakes/KB09.jpg', 'https://data.thefeedfeed.com/static/2020/08/27/15930489305ef3ff62f0e25.jpg', true, 19),
  ('KB10', 'Black Currant Magic Birthday Cake', 'Kids'' Birthday', '₹720 / kg', 720, 'Sweet and tangy black currant compote with whipped purple vanilla frosting.', 'images/cakes/KB10.jpg', 'https://assets.winni.in/c_limit,dpr_2,fl_progressive,q_80,w_400/33659_black-currant-cake.jpeg', true, 20),
  ('EG01', 'Eggless Rasmalai Fusion Cake', 'Eggless', '₹900 / kg', 900, 'Royal Indian fusion: soaked in saffron cardamom milk, real rasmalai & pistachios.', 'images/cakes/EG01.jpg', 'https://images.unsplash.com/photo-1535141192574-5d4897c12636?auto=format&fit=crop&w=600&q=80', true, 21),
  ('EG02', 'Eggless Fresh Alphonso Mango Cake', 'Eggless', '₹700 / kg', 700, 'Pure Alphonso mango pulp, fresh mango slices, and light whipped cream sponge.', 'images/cakes/EG02.jpg', 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=600&q=80', true, 22),
  ('EG03', '100% Eggless Dark Chocolate Truffle', 'Eggless', '₹750 / kg', 750, 'Pure vegetarian moist chocolate sponge layered with 55% cocoa ganache.', 'images/cakes/EG03.jpg', 'images/cakes/EG03.jpg', true, 23),
  ('EG04', 'Eggless Fresh Pineapple Gateau', 'Eggless', '₹650 / kg', 650, 'Classic bakery favourite with juicy crushed pineapple chunks and cherries.', 'images/cakes/EG04.jpg', 'https://5.imimg.com/data5/NS/SI/GLADMIN-40590604/pineapple-cake-with-cream-500x500.png', true, 24),
  ('EG05', 'Eggless Blueberry Cheesecake Swirl', 'Eggless', '₹850 / kg', 850, 'Eggless baked cheesecake base topped with tangy wild blueberry reduction.', 'images/cakes/EG05.jpg', 'https://i.pinimg.com/originals/07/8a/71/078a71ab3b4c62a908a8f211681aa932.jpg', true, 25),
  ('EG06', 'Eggless Mango Passion Bliss Cake', 'Eggless', '₹720 / kg', 720, 'Silky mango mousse on a tender eggless sponge with passion fruit glaze.', 'images/cakes/EG06.jpg', 'https://5.imimg.com/data5/PS/RX/GLADMIN-13485713/mango-cake-500x500.png', true, 26),
  ('EG07', 'Eggless Classic Red Velvet', 'Eggless', '₹800 / kg', 800, 'Egg-free red velvet crumb with smooth vegetarian cream cheese frosting.', 'images/cakes/EG07.jpg', 'https://www.munatycooking.com/wp-content/uploads/2018/08/Red-velvet-cake-recipe-8.jpg', true, 27),
  ('EG08', 'Eggless Butterscotch Buttercream', 'Eggless', '₹680 / kg', 680, 'Crunchy caramel butterscotch bits inside creamy, eggless vanilla sponge.', 'images/cakes/EG08.jpg', 'images/cakes/EG08.jpg', true, 28),
  ('EG09', 'Eggless Dark Cocoa Swiss Roll', 'Eggless', '₹550 / pc', 550, 'Tender rolled eggless chocolate sponge filled with dairy-free vanilla cream.', 'images/cakes/EG09.jpg', 'https://www.floraandvino.com/wp-content/uploads/2020/12/swiss-roll-3.jpg', true, 29),
  ('EG10', 'Eggless Strawberry Vanilla Roll', 'Eggless', '₹580 / pc', 580, 'Delicate eggless pink swirl roll filled with fresh strawberry cream cheese.', 'images/cakes/EG10.jpg', 'https://www.loveandoliveoil.com/wp-content/uploads/2019/05/strawberry-cake-roll-11-600x900.jpg', true, 30),
  ('PC01', 'Custom Edible Photo Print Cake', 'Photo Cakes', '₹750 / kg', 750, 'High-definition edible icing sheet print with your favorite photo and custom frame.', 'images/cakes/PC01.jpg', 'https://images.unsplash.com/photo-1558301211-0d8c8ddee6ec?auto=format&fit=crop&w=600&q=80', true, 31),
  ('PC02', 'Anniversary Edible Portrait Cake', 'Photo Cakes', '₹950 / kg', 950, 'Heart-bordered custom couple photo print on luxurious white chocolate glaze.', 'images/cakes/PC02.jpg', 'https://images.unsplash.com/photo-1626197031507-c17099753214?auto=format&fit=crop&w=600&q=80', true, 32),
  ('PC03', 'Cartoon Character Edible Photo Cake', 'Photo Cakes', '₹850 / kg', 850, 'Print your kid''s favorite animated superhero, princess, or cartoon on sweet icing.', 'images/cakes/PC03.jpg', 'images/cakes/PC03.jpg', true, 33),
  ('PC04', 'Romantic Silhouette Photo Cake', 'Photo Cakes', '₹900 / kg', 900, 'Custom monochrome or color couple portrait surrounded by piped red rosettes.', 'images/cakes/PC04.jpg', 'https://images.unsplash.com/photo-1611599537845-1c7aca0091c0?auto=format&fit=crop&w=600&q=80', true, 34),
  ('PC05', 'Superhero Poster Print Cake', 'Photo Cakes', '₹880 / kg', 880, 'High-contrast action poster printed on sugar sheet with chocolate drip borders.', 'images/cakes/PC05.jpg', 'images/cakes/PC05.jpg', true, 35),
  ('PC06', 'Graduation Milestone Photo Cake', 'Photo Cakes', '₹920 / kg', 920, 'Celebrate graduation with the degree portrait, cap icon, and congratulatory text.', 'images/cakes/PC06.jpg', 'https://charlotteslivelykitchen.com/wp-content/uploads/2019/01/coffee-cake-4.jpg', true, 36),
  ('PC07', 'Silver Jubilee Vintage Frame Photo Cake', 'Photo Cakes', '₹1,050 / kg', 1050, '25th anniversary celebratory photo printed with ornate silver fondant frame.', 'images/cakes/PC07.jpg', 'https://lordbyronskitchen.com/wp-content/uploads/2019/05/1-1.jpg', true, 37),
  ('PC08', 'Corporate Brand Logo Print Cake', 'Photo Cakes', '₹890 / kg', 890, 'Crisp color-accurate company logo printed on edible sugar sheet for corporate events.', 'images/cakes/PC08.jpg', 'https://sweetestmenu.com/wp-content/uploads/2018/08/oreocheesecake10.jpg', true, 38),
  ('PC09', 'Baby Shower Memory Photo Cake', 'Photo Cakes', '₹950 / kg', 950, 'Ultrasound scan or maternity memory photo printed with pastel candy piping.', 'images/cakes/PC09.jpg', 'https://theloopywhisk.com/wp-content/uploads/2019/01/Chocolate-Swiss-Roll_730px-6.jpg', true, 39),
  ('PC10', 'Golden Border Family Portrait Cake', 'Photo Cakes', '₹1,150 / kg', 1150, 'Precious family reunion picture framed in edible gold luster with floral edges.', 'images/cakes/PC10.jpg', 'https://abeautifulplate.com/wp-content/uploads/2016/05/raspberry-roll-cake-1-22-735x1103.jpg', true, 40),
  ('BC01', 'Assorted Fudge Brownie Box (6 pcs)', 'Brownies/Cupcakes', '₹450 / box', 450, 'Gooey chocolate fudge brownies with walnut, almond, and choco chip toppings.', 'images/cakes/BC01.jpg', 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=600&q=80', true, 41),
  ('BC02', 'Strawberry Swirl Cupcakes (6 pcs)', 'Brownies/Cupcakes', '₹420 / box', 420, 'Fluffy vanilla sponge crowned with two-tone strawberry buttercream swirl.', 'images/cakes/BC02.jpg', 'https://images.unsplash.com/photo-1587022058028-c084ee8dc31f?auto=format&fit=crop&w=600&q=80', true, 42),
  ('BC03', 'Salted Caramel Choco Cupcakes (4 pcs)', 'Brownies/Cupcakes', '₹380 / box', 380, 'Decadent dark chocolate cupcakes injected with molten gooey salted caramel.', 'images/cakes/BC03.jpg', 'https://www.sugarsaltmagic.com/wp-content/uploads/2018/05/Salted-Caramel-Chocolate-Cupcakes-3b.jpg', true, 43),
  ('BC04', 'Double Chocolate Walnut Brownies (4 pcs)', 'Brownies/Cupcakes', '₹390 / box', 390, 'Crispy cracked top with dense fudgy walnut center made with 70% dark cocoa.', 'images/cakes/BC04.jpg', 'https://fifteenspatulas.com/wp-content/uploads/2020/08/Chocolate-Muffins-16.jpg', true, 44),
  ('BC05', 'Classic Vanilla Buttercream Cupcakes (6 pcs)', 'Brownies/Cupcakes', '₹399 / box', 399, 'Tender Madagascar vanilla cupcakes with cloud-like buttercream rosettes.', 'images/cakes/BC05.jpg', 'https://www.bostongirlbakes.com/wp-content/uploads/2018/04/MG_5052.jpg', true, 45),
  ('BC06', 'Black Forest Cherry Cupcakes (6 pcs)', 'Brownies/Cupcakes', '₹440 / box', 440, 'Dark cocoa sponge stuffed with sour cherry reduction and whipped vanilla.', 'images/cakes/BC06.jpg', 'https://i2.wp.com/lifemadesimplebakes.com/wp-content/uploads/2017/05/Black-Forest-Cupcakes-4.jpg', true, 46),
  ('BC07', 'Double Chocolate Chip Muffins (6 pcs)', 'Brownies/Cupcakes', '₹360 / box', 360, 'Bakery-style jumbo chocolate muffins overflowing with melted semisweet chips.', 'images/cakes/BC07.jpg', 'https://alsothecrumbsplease.com/wp-content/uploads/2018/01/Double-Chocolate-Muffins-11-500x500.jpg', true, 47),
  ('BC08', 'Fresh Blueberry Crumble Muffins (6 pcs)', 'Brownies/Cupcakes', '₹380 / box', 380, 'Bursting with whole blueberries and dusted with crunchy cinnamon streusel.', 'images/cakes/BC08.jpg', 'https://browneyedbaker.com/wp-content/uploads/2016/06/blueberry-muffins-31-600.jpg', true, 48),
  ('BC09', 'Belgian Truffle Brownie Bites (12 pcs)', 'Brownies/Cupcakes', '₹490 / box', 490, 'Bite-sized cubes of intense Belgian chocolate fudge dusted with cocoa powder.', 'images/cakes/BC09.jpg', 'https://i.pinimg.com/736x/12/e2/5e/12e25e2e80630eb791011f95e214c405.jpg', true, 49),
  ('BC10', 'Rainbow Confetti Cupcakes (6 pcs)', 'Brownies/Cupcakes', '₹420 / box', 420, 'Colorful fun celebration cupcakes topped with rainbow sugar crystals and pearls.', 'images/cakes/BC10.jpg', 'https://rainbownourishments.com/wp-content/uploads/2021/02/vegan-strawberry-cupcakes-1.-500x500.jpg', false, 50)
on conflict (id) do nothing;
