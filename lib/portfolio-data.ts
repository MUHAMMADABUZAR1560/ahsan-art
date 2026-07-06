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
    title: "Luxury Skincare",
    slug: "luxury-skincare",
    category: "Photography",
    description: "Premium skincare brand product photography.",
    longDescription:
      "We partnered with a premium skincare brand to create a full suite of e-commerce product imagery that communicates elegance, purity, and trust. Each frame was composed to highlight texture, packaging detail, and brand identity across multiple SKUs. The result is a cohesive visual library ready for website listings, social media, and marketplace storefronts.",
    metaDescription:
      "Luxury skincare product photography by Ahsan Art Creative Studio, Faisalabad. Premium e-commerce imagery crafted to elevate beauty brands and drive online conversions.",
    image:
      "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774578569/1_oa9m7u.jpg",
    type: "image",
    gallery: [
      {
        type: "image",
        url: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774578569/1_oa9m7u.jpg",
      },
      {
        type: "image",
        url: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774578617/2_pcg2aa.jpg",
      },
      {
        type: "image",
        url: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774578618/3_qx7fg8.jpg",
      },
      {
        type: "image",
        url: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774578618/4_c4qbcz.jpg",
      },
      {
        type: "image",
        url: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774578618/5_hrmwbh.jpg",
      },
      {
        type: "image",
        url: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774578618/6_x9xrv9.jpg",
      },
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
      "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774575591/1_f4bbym.jpg",
    type: "image",
    gallery: [
      {
        type: "image",
        url: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774575591/1_f4bbym.jpg",
      },
      {
        type: "image",
        url: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774575593/2_nikfhs.jpg",
      },
      {
        type: "image",
        url: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774575595/3_uzo9qg.jpg",
      },
      {
        type: "image",
        url: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774575595/4_udb3hn.jpg",
      },
      {
        type: "image",
        url: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774575592/5_za9jov.jpg",
      },
      {
        type: "image",
        url: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774575594/6_qyvzow.jpg",
      },
      {
        type: "image",
        url: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774575594/7_kchjti.jpg",
      },
      {
        type: "image",
        url: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774575594/8_otriki.jpg",
      },
      {
        type: "image",
        url: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774575599/9_kmfe96.jpg",
      },
      {
        type: "video",
        url: "https://res.cloudinary.com/dhtktd4ka/video/upload/v1774575652/10_wdzpbs.mp4",
        thumbnail:
          "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774575602/14_ntpptt.png",
      },
      {
        type: "video",
        url: "https://res.cloudinary.com/dhtktd4ka/video/upload/v1774575632/11_uvrvhz.mp4",
        thumbnail:
          "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774575601/13_o7kk3y.png",
      },
      {
        type: "video",
        url: "https://res.cloudinary.com/dhtktd4ka/video/upload/v1774575676/12_gwqpig.mp4",
        thumbnail:
          "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774575603/15_gjyjyn.png",
      },
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
    title: "Kids",
    slug: "kids",
    category: "Photography",
    description: "Adorable and professional kids' product photography.",
    longDescription:
      "A vibrant kids' wear shoot designed to capture the playful energy of the collection while keeping the focus firmly on the garments. We worked with a range of colours and styles, ensuring each piece was styled naturally and photographed to meet marketplace standards. The gallery gives parents a clear and appealing view of fit, fabric, and finish.",
    metaDescription:
      "Kids clothing product photography by Ahsan Art Creative Studio, Faisalabad. Playful, professional imagery for children's fashion brands and e-commerce listings.",
    image:
      "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774883183/22_bev8mp.jpg",
    type: "image",
    gallery: [
      { type: "image", url: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774883183/22_bev8mp.jpg" },
      { type: "image", url: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774883192/23_lp0xb0.jpg" },
      { type: "image", url: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774883190/24_aiqla8.jpg" },
      { type: "image", url: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774883175/19_jqemy6.jpg" },
      { type: "image", url: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774883180/20_vqbioe.jpg" },
      { type: "image", url: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774883181/21_whtczx.jpg" },
      { type: "image", url: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774883157/10_nurxop.jpg" },
      { type: "image", url: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774883165/11_eoydmp.jpg" },
      { type: "image", url: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774883159/12_kmt1ge.jpg" },
      { type: "image", url: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774883141/7_nr3dq0.jpg" },
      { type: "image", url: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774883146/8_pirdb9.jpg" },
      { type: "image", url: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774883158/9_gvtkby.jpg" },
      { type: "image", url: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774883127/1_hr9gwd.jpg" },
      { type: "image", url: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774883131/2_nhiqni.jpg" },
      { type: "image", url: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774883135/3_vi7gxt.jpg" },
      { type: "image", url: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774883135/4_in9x8i.jpg" },
      { type: "image", url: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774883160/5_sllikl.jpg" },
      { type: "image", url: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774883148/6_xwewjy.jpg" },
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
      "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774883366/1_hc7kx2.jpg",
    type: "image",
    gallery: [
      {
        type: "image",
        url: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774883366/1_hc7kx2.jpg",
      },
      {
        type: "image",
        url: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774883365/2_ufnpm0.jpg",
      },
      {
        type: "image",
        url: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774883367/3_t71ogd.jpg",
      },
      {
        type: "image",
        url: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774883373/4_lucubc.jpg",
      },
      {
        type: "image",
        url: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774883368/5_ay0xdr.jpg",
      },
      {
        type: "image",
        url: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774883371/6_eznaax.jpg",
      },
      {
        type: "image",
        url: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774883370/7_urvdq0.jpg",
      },
      {
        type: "image",
        url: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774883372/8_xk40hy.jpg",
      },
      {
        type: "image",
        url: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774883372/9_uffnwv.jpg",
      },
      {
        type: "image",
        url: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774883374/10_nmn8bi.jpg",
      },
      {
        type: "image",
        url: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774883375/11_x9jgum.jpg",
      },
      {
        type: "image",
        url: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774883385/12_bppxpt.jpg",
      },
      {
        type: "image",
        url: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774883379/13_qlhgaq.jpg",
      },
      {
        type: "image",
        url: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774883379/14_ykgffx.jpg",
      },
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
      "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774883220/1_qigumo.jpg",
    type: "image",
    gallery: [
      {
        type: "image",
        url: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774883220/1_qigumo.jpg",
      },
      {
        type: "image",
        url: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774883223/2_m4jjhd.jpg",
      },
      {
        type: "image",
        url: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774883229/3_nqjygb.jpg",
      },
      {
        type: "image",
        url: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774883231/4_clinqq.jpg",
      },
      {
        type: "image",
        url: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774883233/5_tjbj6w.jpg",
      },
      {
        type: "image",
        url: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774883239/6_fn2iug.jpg",
      },
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
      "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774883267/1_qdlrog.jpg",
    type: "image",
    gallery: [
      {
        type: "image",
        url: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774883267/1_qdlrog.jpg",
      },
      {
        type: "image",
        url: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774883272/2_ns030g.jpg",
      },
      {
        type: "image",
        url: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774883278/3_irnsn6.jpg",
      },
      {
        type: "image",
        url: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774883282/4_oqvzgv.jpg",
      },
      {
        type: "image",
        url: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774883287/5_ca2ho3.jpg",
      },
      {
        type: "image",
        url: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774883291/6_tyeiar.jpg",
      },
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
]

/** Map from slug string to PortfolioItem for O(1) lookup */
export const portfolioItemsBySlug: Record<string, PortfolioItem> = Object.fromEntries(
  portfolioItems.map((item) => [item.slug, item])
)

/** All slugs — used in generateStaticParams and sitemap */
export const portfolioSlugs = portfolioItems.map((item) => item.slug)
