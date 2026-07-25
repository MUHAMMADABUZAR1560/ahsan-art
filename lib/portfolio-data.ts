/**
 * Shared portfolio data used by:
 *  - /portfolio page (grid + filter)
 *  - /portfolio/[slug] individual project pages
 *  - Homepage PortfolioPreview component
 *  - sitemap.ts
 */

export interface GalleryAsset {
  type: "image" | "video";
  url: string;
  thumbnail?: string;
}

export interface PortfolioItem {
  id: number;
  title: string;
  /** URL-safe lowercase hyphenated identifier, e.g. "luxury-skincare" */
  slug: string;
  category: string;
  /** Short description shown in the grid overlay */
  description: string;
  /**
   * 2–3 sentence case-study description shown on the individual project page.
   * Replace the placeholder text below with the real copy for each project.
   */
  longDescription: string;
  /** Per-page meta description for SEO */
  metaDescription: string;
  image: string;
  type: "image" | "video";
  gallery: GalleryAsset[];
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "Health and Care",
    slug: "health-and-care",
    category: "Photography",
    description: "Premium health and personal care brand product photography.",
    longDescription:
      "We partnered with a premium health and personal care brand to create a full suite of e-commerce product imagery that communicates elegance, purity, and trust. Each frame was composed to highlight texture, packaging detail, and brand identity across multiple SKUs. The result is a cohesive visual library ready for website listings, social media, and marketplace storefronts.",
    metaDescription:
      "Health and care product photography by Ahsan Art Creative Studio, Faisalabad. Premium e-commerce imagery crafted to elevate health and beauty brands.",
    image:
      "https://res.cloudinary.com/da6r15g9n/image/upload/v1782053001/ff2_iwdj26.jpg",
    type: "image",
    gallery: [
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1782053001/ff2_iwdj26.jpg" },
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1782052998/bf1_mzecex.jpg" },
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1782053004/ff1_rdjeg6.jpg" },
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1782053002/bf2_e9uoot.jpg" },
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1782050068/f1_lvlzfu.jpg" },
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1782050066/f2_wasfbx.jpg" },
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1782050025/s1-re.jpgb_rg2bay.jpg" },
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1782050023/s3_nofba7.jpg" },
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1782050013/DSC_9892_hxvpyo.jpg" },
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1782050016/DSC_9945b_vu5dvd.jpg" },
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1782050012/d_gyngno.jpg" },
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1782050011/b_fxorec.jpg" },
    ],
  },
  {
    id: 2,
    title: "Water Bottles",
    slug: "water-bottles",
    category: "Photography",
    description: "Dynamic product photography for premium hydration.",
    longDescription:
      "This project showcases a premium hydration brand's range of insulated water bottles through clean, high-contrast studio photography. We focused on material texture and colour accuracy to ensure listing images convert at the highest rate. Each angle was planned to meet marketplace hero image requirements while maintaining brand consistency.",
    metaDescription:
      "Water bottle product photography by Ahsan Art Creative Studio, Faisalabad. Clean, high-conversion e-commerce images for hydration and lifestyle brands.",
    image:
      "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774575418/1_c8da7s.jpg",
    type: "image",
    gallery: [
      {
        type: "image",
        url: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774575418/1_c8da7s.jpg",
      },
      {
        type: "image",
        url: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774575420/2_heeux0.jpg",
      },
      {
        type: "image",
        url: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774575419/3_uatshv.jpg",
      },
    ],
  },
  {
    id: 3,
    title: "Bed Sheets",
    slug: "bed-sheets",
    category: "Photography",
    description: "Amazon listing imagery optimized for conversions.",
    longDescription:
      "A comprehensive Amazon listing shoot for a bedding brand covering multiple colour variants and fabric types. We styled each set to communicate comfort and luxury while meeting Amazon's strict image guidelines. The expanded gallery gives buyers the confidence to purchase with a clear view of pattern, weave, and finish.",
    metaDescription:
      "Bed sheet product photography by Ahsan Art Creative Studio, Faisalabad. Amazon-optimised bedding imagery that showcases fabric quality and drives e-commerce sales.",
    image:
      "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774575484/1_kttjdw.jpg",
    type: "image",
    gallery: [
      {
        type: "image",
        url: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774575484/1_kttjdw.jpg",
      },
      {
        type: "image",
        url: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774575490/2_hhil0m.jpg",
      },
      {
        type: "image",
        url: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774575488/3_xlhci9.jpg",
      },
      {
        type: "image",
        url: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774575492/4_ybeayk.jpg",
      },
      {
        type: "image",
        url: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774575496/5_mn2atm.jpg",
      },
      {
        type: "image",
        url: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774575494/6_y4kkz5.jpg",
      },
      {
        type: "image",
        url: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774575495/7_tsndtc.jpg",
      },
      {
        type: "image",
        url: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774575501/8_cwdnhy.jpg",
      },
      {
        type: "image",
        url: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774575495/9_azhcdg.jpg",
      },
      {
        type: "image",
        url: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774575496/10_noax0s.jpg",
      },
      {
        type: "image",
        url: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774575504/11_qpudcv.jpg",
      },
      {
        type: "image",
        url: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774575507/12_cdndim.jpg",
      },
      {
        type: "image",
        url: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774575497/13_s2o90c.jpg",
      },
      {
        type: "image",
        url: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774575505/14_uyml1w.jpg",
      },
      {
        type: "image",
        url: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774575503/15_hwm7dl.jpg",
      },
    ],
  },
  {
    id: 4,
    title: "Gourmet Food",
    slug: "gourmet-food",
    category: "Food",
    description: "Appetizing food photography for restaurant menu.",
    longDescription:
      "A mouth-watering food photography and videography project for a gourmet restaurant brand, covering signature dishes across their full menu. We used natural and artificial lighting techniques to bring out the warmth, colour, and texture of each dish. The project also includes short-form video clips ready for social media and delivery-app storefronts.",
    metaDescription:
      "Gourmet food photography and videography by Ahsan Art Creative Studio, Faisalabad. Mouth-watering imagery for restaurants, menus, and food delivery platforms.",
    image:
      "https://res.cloudinary.com/da6r15g9n/image/upload/v1782050790/small-box-6_l8pcao.jpg",
    type: "image",
    gallery: [
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1782050790/small-box-6_l8pcao.jpg" },
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1782050791/small-box-4_jruo4y.jpg" },
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1782050793/small-box-5_yijger.jpg" },
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1782050789/small-box-3_bcax0y.jpg" },
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1782050741/cone-7_k2glxn.jpg" },
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1782050782/cone-2_m7tg6v.jpg" },
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1782050747/cone-8_xsi6gb.jpg" },
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1782050739/cone-11_g8tx4i.jpg" },
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1782050612/ice-cream-8b_etcgwj.jpg" },
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1782050610/ice-cream-6b_hxzbtq.jpg" },
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1782050637/ice-cream-3b_s6hc06.jpg" },
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1782050636/ice-cream-2_sn6ess.jpg" },
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1782050809/popsicle-5.jpgb_wlbezm.jpg" },
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1782050821/popsicle-4_f4v9re.jpg" },
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1782050820/popsicle-1_cl9xgb.jpg" },
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1782050863/popsicle-7_znyweu.jpg" },
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1782050717/DSC_8481_cbwosr.jpg" },
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1782050691/DSC_8469_sceeht.jpg" },
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1782050579/DSC_8472_-_Copy_zwrg8n.jpg" },
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1782050580/DSC_8462_tjy1uh.jpg" },
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1782050723/DSC_8435_spjlpp.jpg" },
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1782050692/DSC_8452_u2gxht.jpg" },
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1782050677/DSC_8443_qxo2w0.jpg" },
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1784806368/DSC_8491_mcm7lk.jpg" },
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1784806800/DSC00533b_v7ei0w.jpg" },
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1784807482/DSC00533.jpgb_zkkx9q.jpg" },
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1782051288/DSC00591-e_zuqp7r.jpg" },
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1782051278/DSC00584-e_xsvi64.jpg" },
    ],
  },
  {
    id: 5,
    title: "Fashion Acc.",
    slug: "fashion-accessories",
    category: "Photography",
    description: "High-end fashion accessory photography.",
    longDescription:
      "An extensive fashion accessories shoot covering bags, jewellery, belts, and more for a multi-SKU brand targeting premium e-commerce audiences. We built a consistent studio aesthetic across all pieces to unify the brand visually. Every shot balances product clarity with aspirational lifestyle appeal for use across listings, lookbooks, and social media.",
    metaDescription:
      "Fashion accessories product photography by Ahsan Art Creative Studio, Faisalabad. High-end imagery for bags, jewellery, and accessories targeting premium e-commerce audiences.",
    image:
      "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774883487/13_z8pc7v.jpg",
    type: "image",
    gallery: [
      { type: "image", url: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774883487/13_z8pc7v.jpg" },
      { type: "image", url: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774883493/15_dydoaj.jpg" },
      { type: "image", url: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774883484/10_excicy.jpg" },
      { type: "image", url: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774883484/12_ywngqz.jpg" },
      { type: "image", url: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774883476/7_qziga2.jpg" },
      { type: "image", url: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774883480/9_ozltdn.jpg" },
      { type: "image", url: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774883470/1_ophv2w.jpg" },
      { type: "image", url: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774883475/2_smvgwy.jpg" },
    ],
  },
  {
    id: 6,
    title: "Men Footwear",
    slug: "men-footwear",
    category: "Photography",
    description: "Professional product photography for men's premium footwear.",
    longDescription:
      "A clean-cut studio shoot for a men's footwear brand capturing the craftsmanship and quality of their premium shoe range. We used controlled lighting and multiple angles to highlight stitching, sole design, and material finish. The images are ready for Amazon listings, brand websites, and social commerce.",
    metaDescription:
      "Men's footwear product photography by Ahsan Art Creative Studio, Faisalabad. Studio-quality shoe imagery for Amazon, brand websites, and e-commerce storefronts.",
    image:
      "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774883014/1_kwi1qt.jpg",
    type: "image",
    gallery: [
      {
        type: "image",
        url: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774883014/1_kwi1qt.jpg",
      },
      {
        type: "image",
        url: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774883015/2_krkosf.jpg",
      },
      {
        type: "image",
        url: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774883023/3_i130gk.jpg",
      },
      {
        type: "image",
        url: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774883019/4_akp9ks.jpg",
      },
      {
        type: "image",
        url: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774883027/5_gfbnrd.jpg",
      },
      {
        type: "image",
        url: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774883021/6_searyo.jpg",
      },
    ],
  },
  {
    id: 7,
    title: "Kids Flatlay",
    slug: "kids-flatlay",
    category: "Photography",
    description: "Adorable and professional kids' apparel flatlay photography.",
    longDescription:
      "A vibrant kids' wear flatlay shoot designed to capture the playful energy of the collection while keeping the focus firmly on the garments. We worked with a range of colours and styles, ensuring each piece was styled naturally and photographed to meet marketplace standards. The gallery gives parents a clear and appealing view of fit, fabric, and finish.",
    metaDescription:
      "Kids' clothing flatlay product photography by Ahsan Art Creative Studio, Faisalabad. Playful, professional imagery for children's fashion brands and e-commerce listings.",
    image:
      "https://res.cloudinary.com/da6r15g9n/image/upload/v1782053096/polo_red_a_cnt1w8.jpg",
    type: "image",
    gallery: [
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1782053096/polo_red_a_cnt1w8.jpg" },
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1782053135/polo_red_b_tj6tdh.jpg" },
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1782053106/polo_3red_c_llql6i.jpg" },
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1782053144/polo_red_d_wkugne.jpg" },
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1782053073/polo-navy-a_x8lktm.jpg" },
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1782053102/polo-navy-b_gucchd.jpg" },
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1782053106/polo-navy-c_kqevre.jpg" },
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1782053136/polo-navy-d_cw15d9.jpg" },
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1782053096/polo-orange-a_aw8y53.jpg" },
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1782053139/polo-orange-b_dkuido.jpg" },
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1782053134/polo-orange-c_l1yvql.jpg" },
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1782053116/polo-orange-d_fk9ngl.jpg" },
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1782051240/polo-blue-printed-1_ylpq4z.jpg" },
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1782051239/polo-blue-printed-1-b_u16izn.jpg" },
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1782051246/polo-blue-printed-1-c_iemnct.jpg" },
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1782051017/polo-blue-printed-1-d_il68xu.jpg" },
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1782050918/suit-1-a_i5wdyb.jpg" },
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1782050971/suit-1-e_eopya9.jpg" },
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1782050962/suit-1-c_t23b6x.jpg" },
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1782050937/suit-1-f_k4qlf7.jpg" },
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1782053046/b1_onfq3y.jpg" },
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1782053064/b2_hot66x.jpg" },
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1782053067/b3_uu0r94.jpg" },
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1782053061/b4_yt5ug4.jpg" },
    ],
  },


  {
    id: 10,
    title: "Women Footwear",
    slug: "women-footwear",
    category: "Photography",
    description: "Elegant product photography for women's designer footwear.",
    longDescription:
      "A refined footwear shoot for a women's designer shoe brand, balancing elegance with strong product detail. We styled each pair in both clean white-background and textured lifestyle contexts to maximise versatility across platforms. The imagery is crafted to appeal to fashion-conscious shoppers and drive confident purchase decisions.",
    metaDescription:
      "Women's footwear product photography by Ahsan Art Creative Studio, Faisalabad. Elegant, conversion-driven shoe imagery for fashion brands and e-commerce storefronts.",
    image:
      "https://res.cloudinary.com/da6r15g9n/image/upload/v1782048955/c4_xlcd1i.jpg",
    type: "image",
    gallery: [
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1782048955/c4_xlcd1i.jpg" },
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1782048947/c1_paazqc.jpg" },
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1782048955/c3_bqzyeq.jpg" },
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1782048953/c2_dregkx.jpg" },
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1782048941/x4_2_f5zsaf.jpg" },
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1782048931/x1_axrudr.jpg" },
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1782048937/x3_er2ozv.jpg" },
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1782048933/x2_uzs9us.jpg" },
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1782048953/a3b_kogpgk.jpg" },
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1782048944/a1b_swqesv.jpg" },
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1782048956/a4b_ygwwcw.jpg" },
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1782048946/a2b_hzqzte.jpg" },
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1782048945/a3_t2lxdj.jpg" },
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1782048940/a1_szrdiq.jpg" },
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1782048948/a4_tknoth.jpg" },
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1782048939/a2_j7it5a.jpg" },
    ],
  },
  {
    id: 11,
    title: "Men Clothing",
    slug: "men-clothing",
    category: "Photography",
    description:
      "Premium lifestyle and studio photography for men's fashion apparel.",
    longDescription:
      "A dual-format shoot for a men's fashion brand combining clean studio cut-outs with lifestyle imagery. We captured the full seasonal range across shirts, trousers, and co-ords, ensuring each piece reads well at thumbnail size while rewarding closer inspection with rich detail. The collection is ready for brand websites, social media, and marketplace listings.",
    metaDescription:
      "Men's clothing product photography by Ahsan Art Creative Studio, Faisalabad. Studio and lifestyle imagery for fashion apparel brands targeting e-commerce audiences.",
    image:
      "https://res.cloudinary.com/da6r15g9n/image/upload/v1782049989/l1_yvajiv.jpg",
    type: "image",
    gallery: [
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1782049989/l1_yvajiv.jpg" },
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1782049996/l2_qwfsnv.jpg" },
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1782049995/l3_fhayzq.jpg" },
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1782049996/l4_xl54rs.jpg" },
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1782049968/2trce_ncy3yk.jpg" },
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1782049970/2trcf_urhkrp.jpg" },
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1782049978/2trcl_kk8eyz.jpg" },
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1782049966/2trch_jlkadg.jpg" },
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1782049940/quarter-zipper-c_ol5phz.jpg" },
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1782049932/zipper-3a_ldinfl.jpg" },
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1782049837/a2_kvzj4p.jpg" },
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1782049830/a1-re_srpcax.jpg" },
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1782049366/a1_n6sebz.jpg" },
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1782049367/a2_qhvvri.jpg" },
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1782049445/a2bc_znlmeb.jpg" },
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1782049469/a6_zki8wp.jpg" },
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1782049460/c1a_fbxvfo.jpg" },
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1782049475/c1_nms646.jpg" },
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1782049392/c2_xnsyi9.jpg" },
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1782049399/c4_hqqqtr.jpg" },
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1782049782/mr1_hmuozr.jpg" },
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1782049781/gra8_mcodzt.jpg" },
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1782049778/gra2_ssarrp.jpg" },
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1782049641/bl-7_umpvbp.jpg" },
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1782049330/a2_ugy2rj.jpg" },
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1782049354/a4_gy6noa.jpg" },
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1782049300/a1_erimqy.jpg" },
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1782049348/a3_a7l4g0.jpg" },
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1782049299/b1_uu3sas.jpg" },
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1782049338/b3_iw2pjx.jpg" },
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1782049293/b2_oi9qjq.jpg" },
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1782049346/b4_sntkqm.jpg" },
    ],
  },
  {
    id: 12,
    title: "Men Unstitched",
    slug: "men-unstitched",
    category: "Photography",
    description:
      "Minimalist and clean product photography for unstitched men's fabric.",
    longDescription:
      "A minimalist photography project showcasing unstitched fabric collections for a men's ethnic wear brand. The challenge was communicating the quality, print detail, and colour accuracy of the fabric in a clean, catalogue-friendly format. The result is a set of images that drive buyer confidence and reduce return rates.",
    metaDescription:
      "Men's unstitched fabric product photography by Ahsan Art Creative Studio, Faisalabad. Minimalist, colour-accurate imagery for ethnic wear brands and e-commerce listings.",
    image:
      "https://res.cloudinary.com/da6r15g9n/image/upload/v1784809210/0006_men_unstich_suit_photography_wpodbw.jpg",
    type: "image",
    gallery: [
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1784809210/0006_men_unstich_suit_photography_wpodbw.jpg" },
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1784809217/0007_men_unstich_suit_photography_pwj6kx.jpg" },
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1784809218/0004-re_men_unstich_suit_photography_efxo9p.jpg" },
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1784809230/0001_men_suit_photography_itsf38.jpg" },
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1782050444/e-re_sij4yy.jpg" },
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1782050445/d_haseuy.jpg" },
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1782050434/f_pz1hfs.jpg" },
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1782050430/g_kjih8p.jpg" },
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1782050395/DSC_6123b.jpgd_aww4d2.jpg" },
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1782050400/b3_ia7e9b.jpg" },
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1782050395/DSC_6199_y5icye.jpg" },
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1782050394/DSC_6186_o6u991.jpg" },
    ],
  },
  {
    id: 13,
    title: "Pillows",
    slug: "pillows",
    category: "Photography",
    description: "Soft and luxurious pillow product photography for e-commerce listings.",
    longDescription:
      "A soft-focused, texture-rich shoot for a home décor brand's pillow range, designed to evoke comfort and quality. We styled each piece in curated bedroom settings and clean white-background shots to serve both lifestyle and listing use cases. The imagery communicates softness and craftsmanship — two factors that drive home goods purchasing decisions.",
    metaDescription:
      "Pillow and cushion product photography by Ahsan Art Creative Studio, Faisalabad. Soft, texture-rich home décor imagery for e-commerce listings and lifestyle content.",
    image:
      "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774883298/1_gok4n1.jpg",
    type: "image",
    gallery: [
      {
        type: "image",
        url: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774883298/1_gok4n1.jpg",
      },
      {
        type: "image",
        url: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774883299/2_pzpnga.jpg",
      },
      {
        type: "image",
        url: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774883301/3_irnsus.jpg",
      },
      {
        type: "image",
        url: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774883299/4_krbj2q.jpg",
      },
      {
        type: "image",
        url: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774883301/5_z8ohnf.jpg",
      },
      {
        type: "image",
        url: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774883302/6_dhy5ok.jpg",
      },
    ],
  },
  {
    id: 14,
    title: "Flatlay",
    slug: "flatlay",
    category: "Photography",
    description: "Minimalist flatlay product photography highlighting texture and design.",
    longDescription:
      "A large-scale flatlay photography project producing overhead shots for a brand's full product range across multiple categories. We used precise prop styling and consistent colour direction to create a cohesive set that works individually and as a collection. The images are ideal for social media, e-commerce banners, and editorial use.",
    metaDescription:
      "Flatlay product photography by Ahsan Art Creative Studio, Faisalabad. Overhead, minimalist product imagery for e-commerce, social media, and editorial campaigns.",
    image:
      "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774575751/1_wkbknx.jpg",
    type: "image",
    gallery: [
      { type: "image", url: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774575751/1_wkbknx.jpg" },
      { type: "image", url: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774575774/2_votrjj.jpg" },
      { type: "image", url: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774575825/3_ylrd2f.jpg" },
      { type: "image", url: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774576696/10_v4v6rx.jpg" },
      { type: "image", url: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774576700/11_s1bxel.jpg" },
      { type: "image", url: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774576701/12_cmv8oa.jpg" },
      { type: "image", url: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774576694/7_xwfnvs.jpg" },
      { type: "image", url: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774576694/8_xzr58q.jpg" },
      { type: "image", url: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774576695/9_hcr6kq.jpg" },
      { type: "image", url: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774576688/4_y6tv6c.jpg" },
      { type: "image", url: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774576692/5_yjrpt2.jpg" },
      { type: "image", url: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774576700/6_zugoxb.jpg" },
      { type: "image", url: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774576701/13_gjhh0c.jpg" },
      { type: "image", url: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774576698/14_mhaj0m.jpg" },
      { type: "image", url: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774576701/15_apjzen.jpg" },
    ],
  },
  {
    id: 15,
    title: "Women Flatlay",
    slug: "women-flatlay",
    category: "Photography",
    description: "Creative flatlay photography for women's apparel and accessories.",
    longDescription:
      "A stylish flatlay photography project showcasing women's apparel. We used thoughtful styling, textures, and lighting to create a premium aesthetic that highlights the fabric and design of each piece. These images are perfectly suited for social media campaigns, lookbooks, and e-commerce listings.",
    metaDescription:
      "Women's flatlay product photography by Ahsan Art Creative Studio, Faisalabad. Beautiful overhead imagery for fashion brands and e-commerce.",
    image:
      "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774883346/8_ieqjfa.jpg",
    type: "image",
    gallery: [
      { type: "image", url: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774883346/8_ieqjfa.jpg" },
      { type: "image", url: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774883347/9_itddaw.jpg" },
      { type: "image", url: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774883343/7_p3fpdz.jpg" },
      { type: "image", url: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774883343/5_gllegp.jpg" },
      { type: "image", url: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774883342/6_mybvbm.jpg" },
      { type: "image", url: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774883339/4_dzysxd.jpg" },
      { type: "image", url: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774883337/2_nt8lxu.jpg" },
      { type: "image", url: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774883338/3_h8f5ha.jpg" },
      { type: "image", url: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774883337/1_lt4of6.jpg" },
    ],
  },
  {
    id: 16,
    title: "Women Clothing",
    slug: "women-clothing",
    category: "Photography",
    description: "Premium product photography for women's designer apparel.",
    longDescription:
      "A high-quality product photography project showcasing a collection of women's apparel. We focused on capturing accurate fabric colours, textures, and details in clean studio settings. Perfect for e-commerce listings, seasonal lookbooks, and brand campaigns.",
    metaDescription:
      "Women's clothing product photography by Ahsan Art Creative Studio, Faisalabad. High-quality e-commerce imagery for fashion brands.",
    image:
      "https://res.cloudinary.com/da6r15g9n/image/upload/v1782053173/b_wcqpl2.jpg",
    type: "image",
    gallery: [
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1782053173/b_wcqpl2.jpg" },
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1784820082/7_b5kpue.jpg" },
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1784820120/10_hh1yly.jpg" },
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1784977349/8_f78geo.jpg" },
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1782053187/5_m2ts6e.jpg" },
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1782049106/green-1_hffxfl.jpg" },
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1782049149/green-1-c_p0wcx7.jpg" },
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1782049112/green-1-b_d25aji.jpg" },
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1782049114/a_y1gwss.jpg" },
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1782049088/1_dkmig1.jpg" },
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1782049084/4_n5sw67.jpg" },
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1782049086/2_jd1lsn.jpg" },
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1782049095/7_slsluu.jpg" },
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1782049101/black-a_vao17h.jpg" },
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1782049147/black-c_cfswp9.jpg" },
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1782049095/black-b_mu3cu9.jpg" },
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1784976932/fff_ffeda2.jpg" },
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1784976933/_DSC2812_1_-Recovered_vmxhgj.jpg" },
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1784976936/_DSC2813_1_-Recovered_fp2wys.jpg" },
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1784976939/_DSC2816_1_dtlyul.jpg" },
    ],
  },
]

/** Map from slug string to PortfolioItem for O(1) lookup */
export const portfolioItemsBySlug: Record<string, PortfolioItem> = Object.fromEntries(
  portfolioItems.map((item) => [item.slug, item])
)

/** All slugs — used in generateStaticParams and sitemap */
export const portfolioSlugs = portfolioItems.map((item) => item.slug)
