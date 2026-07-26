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
    id: 3,
    title: "Bed Sheets",
    slug: "bed-sheets",
    category: "Amazon, Photography",
    description: "Amazon listing imagery optimized for conversions.",
    longDescription:
      "A comprehensive Amazon listing shoot for a bedding brand covering multiple colour variants and fabric types. We styled each set to communicate comfort and luxury while meeting Amazon's strict image guidelines. The expanded gallery gives buyers the confidence to purchase with a clear view of pattern, weave, and finish.",
    metaDescription:
      "Bed sheet product photography by Ahsan Art Creative Studio, Faisalabad. Amazon-optimised bedding imagery that showcases fabric quality and drives e-commerce sales.",
    image:
      "https://res.cloudinary.com/da6r15g9n/image/upload/v1784981075/p2_l8ghrw.jpg",
    type: "image",
    gallery: [
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1784981075/p2_l8ghrw.jpg" },
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1784981074/p4_ekxvs6.jpg" },
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1784981079/p6_jnmflo.jpg" },
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1784981065/p3_l1lx73.jpg" },
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1784980682/o2_abggq8.jpg" },
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1784980668/o4_h0xkxp.jpg" },
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1784980682/o6_rurkno.jpg" },
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1784980685/o3_snoygs.jpg" },
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1784980615/c2_xrwbb1.jpg" },
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1784980602/c4_ye2qme.jpg" },
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1784980603/c6_haqp03.jpg" },
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1784980617/c3_rxqmxp.jpg" },
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1784981023/n2_y2thnz.jpg" },
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1784980851/n4_jpfshx.jpg" },
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1784980812/n6_msjwf9.jpg" },
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1784981018/n7_lwxz4o.jpg" },
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1784981088/d2_naxri4.jpg" },
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1784981083/d6_xt56ly.jpg" },
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1784981082/d5_f3wmtl.jpg" },
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1784981093/d3_bmkkvy.png" },
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1784980638/grid-1_uyuz2k.jpg" },
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1784980627/grid-1-c_vxspqt.jpg" },
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1784980637/grid-2-c_zgbrhp.jpg" },
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1784980659/grid--2-a_td8puz.jpg" },
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1784981429/b1_hvcybn.jpg" },
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1784981430/b4_fozzrd.jpg" },
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1784981427/b2b_mnfgvs.jpg" },
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1784981423/b5_tncaah.jpg" },
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1784981200/ll6_b8xdzy.jpg" },
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1784981201/ll2_gedpxs.jpg" },
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1784981415/ll4_zoweg7.jpg" },
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1784981200/ll1_ac7cmm.jpg" },
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
      "https://res.cloudinary.com/da6r15g9n/image/upload/v1782050717/DSC_8481_cbwosr.jpg",
    type: "image",
    gallery: [
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
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1782050790/small-box-6_l8pcao.jpg" },
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1782050791/small-box-4_jruo4y.jpg" },
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1782050793/small-box-5_yijger.jpg" },
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1782050789/small-box-3_bcax0y.jpg" },
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1782049183/x3_m2ybbp.jpg" },
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1782049186/y1_rwfnlm.jpg" },
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1782049191/x5_kiorc3.jpg" },
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1782049183/x4_ic9gie.jpg" },
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1782049193/s1_jzpijr.jpg" },
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1782049198/s3_ima83d.jpg" },
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1782049188/a1_luev4a.jpg" },
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1782049191/t1_mlqukd.jpg" },
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
      "https://res.cloudinary.com/da6r15g9n/image/upload/v1784809403/a_usbtpt.jpg",
    type: "image",
    gallery: [
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1784809403/a_usbtpt.jpg" },
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1784809403/b_gwtydu.jpg" },
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1784809408/e_xb8q5j.jpg" },
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1784809400/c_gghhvn.jpg" },
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1782053221/a2_tspvss.jpg" },
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1782053226/a1_joprro.jpg" },
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1782053230/a3_ovbvds.jpg" },
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1782053231/a4_lxtzzv.jpg" },
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1782052987/f1_jq9mrs.jpg" },
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1782052963/DSC_3201_dj6dwe.jpg" },
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1782052946/d2_krfy4z.jpg" },
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1782052943/ff1_lrmo3u.jpg" },
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1784981531/IMG_5280.jpgb_uso4rb.jpg" },
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1784981436/IMG_5281.JPG_kq8uof.jpg" },
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1782052956/f5_drjnkj.jpg" },
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1782052936/a11_irhccw.jpg" },
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1784820670/DSC_3268_2_hdtlqq.jpg" },
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1782052971/6b_aiy76w.jpg" },
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1782052938/f4_fbaoia.jpg" },
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1782051509/DSC01271_hfl8ko.jpg" },
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1784820648/Dark_Brown_Peshawari_Chappal_DD10_xoqole.jpg" },
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1782052952/Summer_social_post_f_r16nuc.jpg" },
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1782051556/ff_xgzbto.jpg" },
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1782051510/f2_p8lpgh.jpg" },
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
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1784820831/001-_6_b_v4ack4.jpg" },
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1784820826/001-_6_p3rpfj.jpg" },
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1784820831/001-_6_h_kmsses.jpg" },
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1784820822/001-_6_c_s1mhse.jpg" },
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1784973647/01a_uisvcm.jpg" },
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1784973672/01b_edzn95.jpg" },
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1784973675/01k_bmczvx.jpg" },
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1784973678/01c_hecfpk.jpg" },
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1784974856/2_ge2zqz.jpg" },
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1784974858/_DSC4492_yazkv7.jpg" },
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1784975160/5_byl9xd.jpg" },
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1784975162/a_zt3jie.jpg" },
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1784976046/Untitled-10_kwldpd.jpg" },
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1784976043/a_xiqd4w.jpg" },
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1784976203/_DSC8019.jpgw_yeogp6.jpg" },
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1784977097/red_dbf2pm.jpg" },
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
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1784820875/n9_bo2nh8.jpg" },
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1784820876/n8_g6wwtx.jpg" },
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1784820868/b10_lbc6fb.jpg" },
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1784820875/b9_gs5ooc.jpg" },
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1785056144/11b_mxpkhu.jpg" },
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1785056150/6_jufooz.jpg" },
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1785056145/10_mbnnha.jpg" },
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1785056146/11_j30lli.jpg" },
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1782049579/f2_p7hiba.jpg" },
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1782049577/f1_kytcmq.jpg" },
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1782049575/f3_stbazf.jpg" },
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1785056081/Burgundy_NavyBlueStripesTieDanielre_1_oxinly.jpg" },
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1782049541/st-2_ptyeet.jpg" },
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1782049504/st-1_ufcroi.jpg" },
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1782049488/st-2b_n9sg2o.jpg" },
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1782049510/st-1b_b4hzki.jpg" },
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
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1784820484/a3_bjiybp.jpg" },
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1784820418/k2_evdo2l.jpg" },
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1784820376/i2_cs4tku.jpg" },
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1784820351/g3_payxhw.jpg" },
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1782050395/DSC_6123b.jpgd_aww4d2.jpg" },
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
  {
    id: 17,
    title: "Amazon",
    slug: "amazon",
    category: "Amazon, Photography",
    description: "Professional Amazon listing & infographical product photography.",
    longDescription:
      "A comprehensive Amazon product photography shoot showcasing product features, infographics, lifestyle scenarios, and packaging details designed specifically to maximize conversions and comply with Amazon marketplace standards.",
    metaDescription:
      "Amazon listing product photography by Ahsan Art Creative Studio, Faisalabad. High-converting infographics, main listing images, and lifestyle photography.",
    image:
      "https://res.cloudinary.com/da6r15g9n/image/upload/v1784977548/Re_Frame_2_juyehu.jpg",
    type: "image",
    gallery: [
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1784977548/Re_Frame_2_juyehu.jpg" },
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1784977548/frame_acdnkm.jpg" },
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1784977547/Re_Frame_2222_vdur1x.jpg" },
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1784977548/girl_with_frame_szte1a.jpg" },
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1784977548/life_style_image_2_p9kvoz.jpg" },
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1784977546/long_lasting_backing_board_i0uyd4.jpg" },
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1784977546/EASY_TO_INSTALL_MOUNT_2_ofe8uz.jpg" },
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1784977546/6_back_side_2_iglgsg.jpg" },
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1784991853/a_bd00g2.png" },
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1784991850/fb_bpjqsq.jpg" },
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1784991832/dB_uqdsyw.jpg" },
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1784991835/e_lnfiud.jpg" },
    ],
  },
  {
    id: 18,
    title: "Skin Care",
    slug: "skin-care",
    category: "Photography",
    description: "Premium skin care and beauty product photography.",
    longDescription:
      "A dedicated skin care product photography shoot focusing on serums, creams, and cosmetic packaging. We used soft-diffused lighting and clean compositions to highlight texture, purity, and product quality for e-commerce listings, social media, and brand campaigns.",
    metaDescription:
      "Skin care product photography by Ahsan Art Creative Studio, Faisalabad. High-end e-commerce imagery for skincare, beauty, and cosmetic brands.",
    image:
      "https://res.cloudinary.com/da6r15g9n/image/upload/v1784988474/DSC00192-copy_rmmujd.jpg",
    type: "image",
    gallery: [
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1784988474/DSC00192-copy_rmmujd.jpg" },
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1784988513/DSC00203_mnm3y8.jpg" },
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1784988474/DSC00174-copy_nfoqtm.jpg" },
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1784988512/IMG_2835_wrazmq.jpg" },
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1784974479/_DSC4665_vcxlpl.jpg" },
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1784974541/_DSC4674_uvtmcs.jpg" },
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1784974575/_DSC4660_llo6rg.jpg" },
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1784974574/_DSC46692_z5fdck.jpg" },
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1784976286/d7_v4xxhp.jpg" },
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1784976284/d11_cluqsw.jpg" },
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1784975526/_DSC7810_s4yi1z.jpg" },
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1784974619/1_htvh96.jpg" },
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1784974259/03_ifngcr.jpg" },
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1784974322/_DSC5842_omh0aq.jpg" },
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1784974842/_DSC9017_cr1uup.jpg" },
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1784976272/39380-03_lqksrg.jpg" },
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1784976423/_DSC2551_1_zjbjfr.jpg" },
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1784976276/_DSC4638_1_mylhlw.jpg" },
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1784976247/hg_vylt9y.jpg" },
      { type: "image", url: "https://res.cloudinary.com/da6r15g9n/image/upload/v1784977270/s_kgjbbf.jpg" },
    ],
  },
  {
    id: 19,
    title: "UGC Videos",
    slug: "ugc-videos",
    category: "UGC Videos",
    description: "Authentic user-generated content videos for social media and brand campaigns.",
    longDescription:
      "A collection of high-quality UGC (User Generated Content) videos produced for brands targeting social media audiences. Each video is crafted to feel authentic, relatable, and platform-native — ideal for TikTok, Instagram Reels, and YouTube Shorts. The content drives engagement, builds trust, and converts viewers into customers.",
    metaDescription:
      "UGC video content by Ahsan Art Creative Studio, Faisalabad. Authentic, high-converting user-generated content videos for social media brands.",
    image:
      "https://img.youtube.com/vi/f4taWIGMYSs/hqdefault.jpg",
    type: "video",
    gallery: [
      { type: "video", url: "https://www.youtube.com/shorts/f4taWIGMYSs", thumbnail: "https://img.youtube.com/vi/f4taWIGMYSs/hqdefault.jpg" },
      { type: "video", url: "https://www.youtube.com/shorts/b3PsQnsXujg", thumbnail: "https://img.youtube.com/vi/b3PsQnsXujg/hqdefault.jpg" },
      { type: "video", url: "https://www.youtube.com/shorts/0fQO7fbEJH8", thumbnail: "https://img.youtube.com/vi/0fQO7fbEJH8/hqdefault.jpg" },
      { type: "video", url: "https://www.youtube.com/shorts/wryV3sWjU3M", thumbnail: "https://img.youtube.com/vi/wryV3sWjU3M/hqdefault.jpg" },
      { type: "video", url: "https://www.youtube.com/shorts/u86tXhur8dY", thumbnail: "https://img.youtube.com/vi/u86tXhur8dY/hqdefault.jpg" },
      { type: "video", url: "https://www.youtube.com/shorts/kVEaOK1tcx8", thumbnail: "https://img.youtube.com/vi/kVEaOK1tcx8/hqdefault.jpg" },
      { type: "video", url: "https://www.youtube.com/shorts/pe6rHT1BCTA", thumbnail: "https://img.youtube.com/vi/pe6rHT1BCTA/hqdefault.jpg" },
      { type: "video", url: "https://www.youtube.com/shorts/3bF79eBpsNg", thumbnail: "https://img.youtube.com/vi/3bF79eBpsNg/hqdefault.jpg" },
      { type: "video", url: "https://www.youtube.com/shorts/hV4OXZyCMHc", thumbnail: "https://img.youtube.com/vi/hV4OXZyCMHc/hqdefault.jpg" },
    ],
  },
  {
    id: 20,
    title: "Clothing Videos",
    slug: "clothing-videos",
    category: "Videography",
    description: "Dynamic video showcase and social media reels for fashion and apparel brands.",
    longDescription:
      "A dedicated videography collection featuring fashion apparel, street wear, and clothing brands. Each short video captures fabric motion, garment fit, and styling details in a dynamic format optimized for Instagram Reels, TikTok, and e-commerce product pages.",
    metaDescription:
      "Clothing videography and fashion video reels by Ahsan Art Creative Studio, Faisalabad. High-converting short-form video content for apparel brands.",
    image:
      "https://img.youtube.com/vi/Bs11b8yKFfk/hqdefault.jpg",
    type: "video",
    gallery: [
      { type: "video", url: "https://www.youtube.com/shorts/Bs11b8yKFfk", thumbnail: "https://img.youtube.com/vi/Bs11b8yKFfk/hqdefault.jpg" },
      { type: "video", url: "https://www.youtube.com/shorts/KWsn4eVHlJM", thumbnail: "https://img.youtube.com/vi/KWsn4eVHlJM/hqdefault.jpg" },
      { type: "video", url: "https://www.youtube.com/shorts/nCfW_U0oFN0", thumbnail: "https://img.youtube.com/vi/nCfW_U0oFN0/hqdefault.jpg" },
      { type: "video", url: "https://www.youtube.com/shorts/_uC6iTAaUic", thumbnail: "https://img.youtube.com/vi/_uC6iTAaUic/hqdefault.jpg" },
      { type: "video", url: "https://www.youtube.com/shorts/SsH7a0l1-yE", thumbnail: "https://img.youtube.com/vi/SsH7a0l1-yE/hqdefault.jpg" },
      { type: "video", url: "https://www.youtube.com/shorts/3nYFqVskyFk", thumbnail: "https://img.youtube.com/vi/3nYFqVskyFk/hqdefault.jpg" },
      { type: "video", url: "https://www.youtube.com/shorts/ZF__oLVi9VQ", thumbnail: "https://img.youtube.com/vi/ZF__oLVi9VQ/hqdefault.jpg" },
      { type: "video", url: "https://www.youtube.com/shorts/65Z6aXwDgPI", thumbnail: "https://img.youtube.com/vi/65Z6aXwDgPI/hqdefault.jpg" },
    ],
  },
  {
    id: 21,
    title: "Food Videos",
    slug: "food-videos",
    category: "Food, Videography",
    description: "Appetizing food videography and short-form culinary video reels.",
    longDescription:
      "A mouth-watering videography portfolio capturing gourmet dishes, restaurant menus, and food products in dynamic short-form video formats. Perfect for social media promotions, delivery app banners, and brand marketing campaigns.",
    metaDescription:
      "Food videography and culinary video reels by Ahsan Art Creative Studio, Faisalabad. Appetizing video content for restaurants, food brands, and delivery platforms.",
    image:
      "https://img.youtube.com/vi/O2IJwFkYGIg/hqdefault.jpg",
    type: "video",
    gallery: [
      { type: "video", url: "https://www.youtube.com/shorts/O2IJwFkYGIg", thumbnail: "https://img.youtube.com/vi/O2IJwFkYGIg/hqdefault.jpg" },
      { type: "video", url: "https://www.youtube.com/shorts/knrPg9W1gu0", thumbnail: "https://img.youtube.com/vi/knrPg9W1gu0/hqdefault.jpg" },
      { type: "video", url: "https://www.youtube.com/shorts/A8DS3rXBwn4", thumbnail: "https://img.youtube.com/vi/A8DS3rXBwn4/hqdefault.jpg" },
      { type: "video", url: "https://www.youtube.com/shorts/8sS5_Zd1uYI", thumbnail: "https://img.youtube.com/vi/8sS5_Zd1uYI/hqdefault.jpg" },
      { type: "video", url: "https://www.youtube.com/shorts/KizIywLfZr4", thumbnail: "https://img.youtube.com/vi/KizIywLfZr4/hqdefault.jpg" },
    ],
  },
  {
    id: 22,
    title: "Shoes Videos",
    slug: "shoes-videos",
    category: "Videography",
    description: "Sleek and dynamic footwear videography for shoe brands.",
    longDescription:
      "A specialized videography collection showcasing footwear craftsmanship, material texture, and lifestyle movement for men's and women's shoe brands. Designed for high-converting social media reels, YouTube Shorts, and e-commerce product listings.",
    metaDescription:
      "Shoes videography and footwear video reels by Ahsan Art Creative Studio, Faisalabad. High-converting short-form video content for shoe brands.",
    image:
      "https://img.youtube.com/vi/rcn8iDYDaJA/hqdefault.jpg",
    type: "video",
    gallery: [
      { type: "video", url: "https://www.youtube.com/shorts/rcn8iDYDaJA", thumbnail: "https://img.youtube.com/vi/rcn8iDYDaJA/hqdefault.jpg" },
      { type: "video", url: "https://www.youtube.com/shorts/gvOpEDqXl4k", thumbnail: "https://img.youtube.com/vi/gvOpEDqXl4k/hqdefault.jpg" },
      { type: "video", url: "https://www.youtube.com/shorts/LEK5sMGWMCE", thumbnail: "https://img.youtube.com/vi/LEK5sMGWMCE/hqdefault.jpg" },
      { type: "video", url: "https://www.youtube.com/shorts/XP972ZADO58", thumbnail: "https://img.youtube.com/vi/XP972ZADO58/hqdefault.jpg" },
      { type: "video", url: "https://www.youtube.com/shorts/06tTDrhnhcE", thumbnail: "https://img.youtube.com/vi/06tTDrhnhcE/hqdefault.jpg" },
      { type: "video", url: "https://www.youtube.com/shorts/aAtjacYGdPs", thumbnail: "https://img.youtube.com/vi/aAtjacYGdPs/hqdefault.jpg" },
    ],
  },
  {
    id: 23,
    title: "Event Videos",
    slug: "event-videos",
    category: "Videography",
    description: "Vibrant and cinematic event coverage videography.",
    longDescription:
      "A collection of cinematic event coverage videos capturing key moments, brand activations, and live highlights. Optimized for social media engagement, recap reels, and promotional campaigns.",
    metaDescription:
      "Event videography and recap video reels by Ahsan Art Creative Studio, Faisalabad. Cinematic short-form video coverage for corporate, brand, and social events.",
    image:
      "https://img.youtube.com/vi/XQBSWQYsX0o/hqdefault.jpg",
    type: "video",
    gallery: [
      { type: "video", url: "https://www.youtube.com/shorts/XQBSWQYsX0o", thumbnail: "https://img.youtube.com/vi/XQBSWQYsX0o/hqdefault.jpg" },
      { type: "video", url: "https://www.youtube.com/shorts/Q360cKddV2o", thumbnail: "https://img.youtube.com/vi/Q360cKddV2o/hqdefault.jpg" },
      { type: "video", url: "https://www.youtube.com/shorts/WHxNE5df7eo", thumbnail: "https://img.youtube.com/vi/WHxNE5df7eo/hqdefault.jpg" },
    ],
  },
  {
    id: 24,
    title: "Studio Insights",
    slug: "studio-insights",
    category: "Videography",
    description: "Behind-the-scenes and studio process videography.",
    longDescription:
      "An exclusive look behind the scenes at Ahsan Art Creative Studio. These videos showcase our production setup, lighting techniques, creative workflow, and the passion that goes into crafting top-tier commercial imagery.",
    metaDescription:
      "Behind the scenes and studio insights videography by Ahsan Art Creative Studio, Faisalabad. Explore our production process and creative workflow.",
    image:
      "https://img.youtube.com/vi/x_zNRi0O3Vc/hqdefault.jpg",
    type: "video",
    gallery: [
      { type: "video", url: "https://www.youtube.com/shorts/x_zNRi0O3Vc", thumbnail: "https://img.youtube.com/vi/x_zNRi0O3Vc/hqdefault.jpg" },
      { type: "video", url: "https://www.youtube.com/shorts/jr4gP-tRwh8", thumbnail: "https://img.youtube.com/vi/jr4gP-tRwh8/hqdefault.jpg" },
      { type: "video", url: "https://www.youtube.com/shorts/BnNXze7R04U", thumbnail: "https://img.youtube.com/vi/BnNXze7R04U/hqdefault.jpg" },
      { type: "video", url: "https://www.youtube.com/shorts/qOsEyay5tJQ", thumbnail: "https://img.youtube.com/vi/qOsEyay5tJQ/hqdefault.jpg" },
      { type: "video", url: "https://www.youtube.com/shorts/mN8ij9xNTWY", thumbnail: "https://img.youtube.com/vi/mN8ij9xNTWY/hqdefault.jpg" },
    ],
  },
  {
    id: 25,
    title: "BTS Videos",
    slug: "bts-videos",
    category: "Videography",
    description: "Behind-the-scenes footage and production process reels.",
    longDescription:
      "Exclusive behind-the-scenes (BTS) video coverage from set. See how our creative team sets up lighting, styles props, directs models, and captures stunning commercial imagery at Ahsan Art Creative Studio.",
    metaDescription:
      "Behind-the-scenes BTS video reels by Ahsan Art Creative Studio, Faisalabad. Watch set preparations, lighting setups, and production moments.",
    image:
      "https://img.youtube.com/vi/eiiDW4BTKCc/hqdefault.jpg",
    type: "video",
    gallery: [
      { type: "video", url: "https://www.youtube.com/shorts/eiiDW4BTKCc", thumbnail: "https://img.youtube.com/vi/eiiDW4BTKCc/hqdefault.jpg" },
      { type: "video", url: "https://www.youtube.com/shorts/g38tsGlVM_Y", thumbnail: "https://img.youtube.com/vi/g38tsGlVM_Y/hqdefault.jpg" },
      { type: "video", url: "https://www.youtube.com/shorts/vy-iNFKZLqc", thumbnail: "https://img.youtube.com/vi/vy-iNFKZLqc/hqdefault.jpg" },
      { type: "video", url: "https://www.youtube.com/shorts/sqlgdHxqXRo", thumbnail: "https://img.youtube.com/vi/sqlgdHxqXRo/hqdefault.jpg" },
      { type: "video", url: "https://www.youtube.com/shorts/2u6RxZmp-gE", thumbnail: "https://img.youtube.com/vi/2u6RxZmp-gE/hqdefault.jpg" },
      { type: "video", url: "https://www.youtube.com/shorts/leMn2knjq5g", thumbnail: "https://img.youtube.com/vi/leMn2knjq5g/hqdefault.jpg" },
      { type: "video", url: "https://www.youtube.com/shorts/C1HSUZuSmGY", thumbnail: "https://img.youtube.com/vi/C1HSUZuSmGY/hqdefault.jpg" },
      { type: "video", url: "https://www.youtube.com/shorts/6RjV6G6RmiE", thumbnail: "https://img.youtube.com/vi/6RjV6G6RmiE/hqdefault.jpg" },
      { type: "video", url: "https://www.youtube.com/shorts/O6IFsHJ0JDU", thumbnail: "https://img.youtube.com/vi/O6IFsHJ0JDU/hqdefault.jpg" },
      { type: "video", url: "https://www.youtube.com/shorts/XAsR_KS4tdg", thumbnail: "https://img.youtube.com/vi/XAsR_KS4tdg/hqdefault.jpg" },
      { type: "video", url: "https://www.youtube.com/shorts/mhmBlw4zfwU", thumbnail: "https://img.youtube.com/vi/mhmBlw4zfwU/hqdefault.jpg" },
    ],
  },
]

/** Map from slug string to PortfolioItem for O(1) lookup */
export const portfolioItemsBySlug: Record<string, PortfolioItem> = Object.fromEntries(
  portfolioItems.map((item) => [item.slug, item])
)

/** All slugs — used in generateStaticParams and sitemap */
export const portfolioSlugs = portfolioItems.map((item) => item.slug)
