"use client"

import { useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ArrowRight, Play, X, ChevronLeft, ChevronRight } from "lucide-react"
import { useLockBodyScroll } from "@/hooks/use-lock-body-scroll"

const categories = ["All", "Photography", "Videography", "Amazon", "Food", "UGC Videos"]

interface GalleryAsset {
  type: "image" | "video";
  url: string;
  thumbnail?: string;
}

interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  type: "image" | "video";
  gallery: GalleryAsset[];
}

/**
 * PORTFOLIO DATA
 */
const portfolioItems: PortfolioItem[] = [
  { 
    id: 1, title: "Luxury Skincare", category: "Photography", description: "Premium skincare brand product photography.", image: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774578569/1_oa9m7u.jpg", type: "image", 
    gallery: [
        { type: "image", url: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774578569/1_oa9m7u.jpg" },
        { type: "image", url: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774578617/2_pcg2aa.jpg" },
        { type: "image", url: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774578618/3_qx7fg8.jpg" },
        { type: "image", url: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774578618/4_c4qbcz.jpg" },
        { type: "image", url: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774578618/5_hrmwbh.jpg" },
        { type: "image", url: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774578618/6_x9xrv9.jpg" },
    ]
  },
  { 
    id: 2, title: "Water Bottles", category: "Photography", description: "Dynamic product photography for premium hydration.", image: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774575418/1_c8da7s.jpg", type: "image",
    gallery: [
               { type: "image", url: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774575418/1_c8da7s.jpg" },
               { type: "image", url: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774575420/2_heeux0.jpg" },
               { type: "image", url: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774575419/3_uatshv.jpg" },
    ]
  },
  { 
    id: 3, title: "Bed Sheets", category: "Photography", description: "Amazon listing imagery optimized for conversions.", image: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774575484/1_kttjdw.jpg", type: "image",
    gallery: [
               { type: "image", url: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774575484/1_kttjdw.jpg" },
               { type: "image", url: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774575490/2_hhil0m.jpg" },
               { type: "image", url: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774575488/3_xlhci9.jpg" },
               { type: "image", url: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774575492/4_ybeayk.jpg" },
               { type: "image", url: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774575496/5_mn2atm.jpg" },
               { type: "image", url: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774575494/6_y4kkz5.jpg" },
               { type: "image", url: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774575495/7_tsndtc.jpg" },
               { type: "image", url: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774575501/8_cwdnhy.jpg" },
               { type: "image", url: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774575495/9_azhcdg.jpg" },
               { type: "image", url: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774575496/10_noax0s.jpg" },
               { type: "image", url: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774575504/11_qpudcv.jpg" },
               { type: "image", url: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774575507/12_cdndim.jpg" },
               { type: "image", url: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774575497/13_s2o90c.jpg" },
               { type: "image", url: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774575505/14_uyml1w.jpg" },
               { type: "image", url: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774575503/15_hwm7dl.jpg" },
    ]
  },
  { 
    id: 4, title: "Gourmet Food", category: "Food", description: "Appetizing food photography for restaurant menu.", image: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774575591/1_f4bbym.jpg", type: "image",
    gallery: [
               { type: "image", url: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774575591/1_f4bbym.jpg" },
               { type: "image", url: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774575593/2_nikfhs.jpg" },
               { type: "image", url: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774575595/3_uzo9qg.jpg" },
               { type: "image", url: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774575595/4_udb3hn.jpg" },
               { type: "image", url: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774575592/5_za9jov.jpg" },
               { type: "image", url: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774575594/6_qyvzow.jpg" },
               { type: "image", url: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774575594/7_kchjti.jpg" },
               { type: "image", url: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774575594/8_otriki.jpg" },
               { type: "image", url: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774575599/9_kmfe96.jpg" },
               { type: "video", url: "https://res.cloudinary.com/dhtktd4ka/video/upload/v1774575652/10_wdzpbs.mp4", thumbnail: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774575602/14_ntpptt.png" },
               { type: "video", url: "https://res.cloudinary.com/dhtktd4ka/video/upload/v1774575632/11_uvrvhz.mp4", thumbnail: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774575601/13_o7kk3y.png" },
               { type: "video", url: "https://res.cloudinary.com/dhtktd4ka/video/upload/v1774575676/12_gwqpig.mp4", thumbnail: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774575603/15_gjyjyn.png" },
    ]
  },
  { 
    id: 5, title: "Fashion Acc.", category: "Photography", description: "High-end fashion accessory photography.", image: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774883470/1_ophv2w.jpg", type: "image",
    gallery: [
               { type: "image", url: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774883470/1_ophv2w.jpg" },
               { type: "image", url: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774883475/2_smvgwy.jpg" },
               { type: "image", url: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774883472/3_vag8do.jpg" },
               { type: "image", url: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774883473/4_zmjlen.jpg" },
               { type: "image", url: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774883474/5_fsh5oo.jpg" },
               { type: "image", url: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774883480/6_ikhrzz.jpg" },
               { type: "image", url: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774883476/7_qziga2.jpg" },
               { type: "image", url: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774883484/8_o16lz1.jpg" },
               { type: "image", url: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774883480/9_ozltdn.jpg" },
               { type: "image", url: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774883484/10_excicy.jpg" },
               { type: "image", url: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774883484/11_h9iprk.jpg" },
               { type: "image", url: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774883484/12_ywngqz.jpg" },
               { type: "image", url: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774883487/13_z8pc7v.jpg" },
               { type: "image", url: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774883504/14_w02bxo.jpg" },
               { type: "image", url: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774883493/15_dydoaj.jpg" },
    ]
  },
  { 
    id: 6, title: "Men Footwear", category: "Photography", description: "Professional product photography for men's premium footwear.", image: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774883014/1_kwi1qt.jpg", type: "image",
    gallery: [
               { type: "image", url: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774883014/1_kwi1qt.jpg" },
               { type: "image", url: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774883015/2_krkosf.jpg" },
               { type: "image", url: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774883023/3_i130gk.jpg" },
               { type: "image", url: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774883019/4_akp9ks.jpg" },
               { type: "image", url: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774883027/5_gfbnrd.jpg" },
               { type: "image", url: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774883021/6_searyo.jpg" },
    ]
  },
  { 
    id: 7, title: "Kids", category: "Photography", description: "Adorable and professional kids' product photography.", image: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774883337/1_lt4of6.jpg", type: "image",
    gallery: [
               { type: "image", url: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774883337/1_lt4of6.jpg" },
               { type: "image", url: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774883337/2_nt8lxu.jpg" },
               { type: "image", url: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774883338/3_h8f5ha.jpg" },
               { type: "image", url: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774883339/4_dzysxd.jpg" },
               { type: "image", url: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774883343/5_gllegp.jpg" },
               { type: "image", url: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774883342/6_mybvbm.jpg" },
               { type: "image", url: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774883343/7_p3fpdz.jpg" },
               { type: "image", url: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774883346/8_ieqjfa.jpg" },
               { type: "image", url: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774883347/9_itddaw.jpg" },
    ]
  },
  { 
    id: 8, title: "Delivery App", category: "Photography", description: "Vibrant food photography for delivery app.", image: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774575369/food_ytgqbg.jpg", type: "image",
    gallery: [{ type: "image", url: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774575369/food_ytgqbg.jpg" }]
  },
  { 
    id: 9, title: "Amazon A+", category: "Amazon", description: "Premium A+ content design optimized for brand storytelling and sales.", image: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774883127/1_hr9gwd.jpg", type: "image",
    gallery: [
               { type: "image", url: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774883127/1_hr9gwd.jpg" },
               { type: "image", url: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774883131/2_nhiqni.jpg" },
               { type: "image", url: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774883135/3_vi7gxt.jpg" },
               { type: "image", url: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774883135/4_in9x8i.jpg" },
               { type: "image", url: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774883160/5_sllikl.jpg" },
               { type: "image", url: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774883148/6_xwewjy.jpg" },
               { type: "image", url: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774883141/7_nr3dq0.jpg" },
               { type: "image", url: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774883146/8_pirdb9.jpg" },
               { type: "image", url: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774883158/9_gvtkby.jpg" },
               { type: "image", url: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774883157/10_nurxop.jpg" },
               { type: "image", url: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774883165/11_eoydmp.jpg" },
               { type: "image", url: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774883159/12_kmt1ge.jpg" },
               { type: "image", url: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774883157/13_td26kx.jpg" },
               { type: "image", url: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774883179/14_u7zkvr.jpg" },
               { type: "image", url: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774883164/15_ldfqoi.jpg" },
               { type: "image", url: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774883166/16_kgqw4j.jpg" },
               { type: "image", url: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774883176/17_w8zwxt.jpg" },
               { type: "image", url: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774883184/18_ynrau1.jpg" },
               { type: "image", url: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774883175/19_jqemy6.jpg" },
               { type: "image", url: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774883180/20_vqbioe.jpg" },
               { type: "image", url: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774883181/21_whtczx.jpg" },
               { type: "image", url: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774883183/22_bev8mp.jpg" },
               { type: "image", url: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774883192/23_lp0xb0.jpg" },
               { type: "image", url: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774883190/24_aiqla8.jpg" },
    ]
  },
  { 
    id: 10, title: "Women Footwear", category: "Photography", description: "Elegant product photography for women's designer footwear.", image: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774883366/1_hc7kx2.jpg", type: "image",
    gallery: [
               { type: "image", url: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774883366/1_hc7kx2.jpg" },
               { type: "image", url: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774883365/2_ufnpm0.jpg" },
               { type: "image", url: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774883367/3_t71ogd.jpg" },
               { type: "image", url: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774883373/4_lucubc.jpg" },
               { type: "image", url: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774883368/5_ay0xdr.jpg" },
               { type: "image", url: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774883371/6_eznaax.jpg" },
               { type: "image", url: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774883370/7_urvdq0.jpg" },
               { type: "image", url: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774883372/8_xk40hy.jpg" },
               { type: "image", url: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774883372/9_uffnwv.jpg" },
               { type: "image", url: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774883374/10_nmn8bi.jpg" },
               { type: "image", url: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774883375/11_x9jgum.jpg" },
               { type: "image", url: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774883385/12_bppxpt.jpg" },
               { type: "image", url: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774883379/13_qlhgaq.jpg" },
               { type: "image", url: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774883379/14_ykgffx.jpg" },
    ]
  },
  { 
    id: 11, title: "Men Clothing", category: "Photography", description: "Premium lifestyle and studio photography for men's fashion apparel.", image: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774883220/1_qigumo.jpg", type: "image",
    gallery: [
               { type: "image", url: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774883220/1_qigumo.jpg" },
               { type: "image", url: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774883223/2_m4jjhd.jpg" },
               { type: "image", url: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774883229/3_nqjygb.jpg" },
               { type: "image", url: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774883231/4_clinqq.jpg" },
               { type: "image", url: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774883233/5_tjbj6w.jpg" },
               { type: "image", url: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774883239/6_fn2iug.jpg" },
    ]
  },
  { 
    id: 12, title: "Men Unstitched", category: "Photography", description: "Minimalist and clean product photography for unstitched men's fabric.", image: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774883267/1_qdlrog.jpg", type: "image",
    gallery: [
               { type: "image", url: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774883267/1_qdlrog.jpg" },
               { type: "image", url: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774883272/2_ns030g.jpg" },
               { type: "image", url: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774883278/3_irnsn6.jpg" },
               { type: "image", url: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774883282/4_oqvzgv.jpg" },
               { type: "image", url: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774883287/5_ca2ho3.jpg" },
               { type: "image", url: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774883291/6_tyeiar.jpg" },
    ]
  },
  { 
    id: 13, title: "Pillows", category: "Photography", description: "Soft and luxurious pillow product photography for e-commerce listings.", image: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774883298/1_gok4n1.jpg", type: "image",
    gallery: [
               { type: "image", url: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774883298/1_gok4n1.jpg" },
               { type: "image", url: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774883299/2_pzpnga.jpg" },
               { type: "image", url: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774883301/3_irnsus.jpg" },
               { type: "image", url: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774883299/4_krbj2q.jpg" },
               { type: "image", url: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774883301/5_z8ohnf.jpg" },
               { type: "image", url: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774883302/6_dhy5ok.jpg" },
    ]
  },
  { 
    id: 14, title: "Flatlay", category: "Photography", description: "Minimalist flatlay product photography highlighting texture and design.", image: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774575751/1_wkbknx.jpg", type: "image",
    gallery: [
               { type: "image", url: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774575751/1_wkbknx.jpg" },
               { type: "image", url: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774575774/2_votrjj.jpg" },
               { type: "image", url: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774575825/3_ylrd2f.jpg" },
               { type: "image", url: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774576688/4_y6tv6c.jpg" },
               { type: "image", url: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774576692/5_yjrpt2.jpg" },
               { type: "image", url: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774576700/6_zugoxb.jpg" },
               { type: "image", url: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774576694/7_xwfnvs.jpg" },
               { type: "image", url: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774576694/8_xzr58q.jpg" },
               { type: "image", url: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774576695/9_hcr6kq.jpg" },
               { type: "image", url: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774576696/10_v4v6rx.jpg" },
               { type: "image", url: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774576700/11_s1bxel.jpg" },
               { type: "image", url: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774576701/12_cmv8oa.jpg" },
               { type: "image", url: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774576701/13_gjhh0c.jpg" },
               { type: "image", url: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774576698/14_mhaj0m.jpg" },
               { type: "image", url: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774576701/15_apjzen.jpg" },
    ]
  },
]

export default function PortfolioPage() {
  const heroRef = useRef(null)
  const heroInView = useInView(heroRef, { once: true })
  
  const [activeCategory, setActiveCategory] = useState("All")
  const [selectedProject, setSelectedProject] = useState<PortfolioItem | null>(null)
  const [fullscreenAsset, setFullscreenAsset] = useState<GalleryAsset | null>(null)

  // Use the scroll lock hook for both levels of overlays
  useLockBodyScroll(!!selectedProject || !!fullscreenAsset)

  const filteredItems = activeCategory === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory)

  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section ref={heroRef} className="pt-24 pb-12 md:pt-40 md:pb-24 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              className="inline-flex items-center gap-2 text-primary text-[10px] md:text-sm font-medium tracking-widest uppercase mb-4"
            >
              <span className="w-6 md:w-8 h-px bg-primary" />
              Our Work
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              className="text-4xl md:text-7xl font-serif font-bold leading-tight text-foreground"
            >
              Selected Projects<span className="text-primary">.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={heroInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.2 }}
              className="mt-4 md:mt-8 text-base md:text-xl max-w-2xl text-foreground/80 leading-relaxed"
            >
              A showcase of our finest work across product photography and e-commerce content.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Main Grid Section */}
      <section className="py-8 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-12">
          
          <motion.div className="flex overflow-x-auto pb-6 md:justify-center gap-2 no-scrollbar">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 md:px-6 md:py-2.5 rounded-full text-[11px] md:text-sm font-medium transition-all ${
                  activeCategory === category
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "bg-stone-100 text-foreground hover:bg-stone-200"
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          <motion.div 
            layout 
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.05
                }
              }
            }}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-1.5 md:gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  layout
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  transition={{ 
                    duration: 0.6, 
                    ease: [0.22, 1, 0.36, 1]
                  }}
                  onClick={() => setSelectedProject(item)}
                  className="group relative aspect-square md:aspect-[4/5] rounded-sm md:rounded-xl overflow-hidden cursor-pointer bg-stone-100"
                >
                  <Image 
                    src={item.image || "/placeholder.svg"} 
                    alt={item.title} 
                    fill 
                    className="object-cover transition-transform duration-700 ease-out md:group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 md:group-hover:opacity-100 transition-opacity p-4 flex flex-col justify-end">
                    <span className="text-primary text-[10px] md:text-sm font-medium">{item.category}</span>
                    <h3 className="text-xs md:text-xl font-semibold text-white mt-1">{item.title}</h3>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Internal Project Gallery Overlay (3x3 Grid) */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-white overflow-y-auto"
          >
            <div className="sticky top-0 z-10 bg-white/80 backdrop-blur-md p-6 flex justify-between items-center border-b">
              <div>
                <h2 className="text-2xl md:text-4xl font-serif font-bold">{selectedProject.title}</h2>
                <p className="text-sm text-foreground/60">{selectedProject.category}</p>
              </div>
              <button 
                onClick={() => setSelectedProject(null)} 
                className="p-3 bg-stone-100 rounded-full hover:bg-stone-200 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="container mx-auto px-6 py-12">
                <p className="mb-12 text-lg text-foreground/80 max-w-3xl leading-relaxed">
                    {selectedProject.description}
                </p>

                {/* The 3x3 Grid for Internal Assets */}
                <div className="grid grid-cols-3 md:grid-cols-3 gap-2 md:gap-6">
                    {selectedProject.gallery.map((asset, idx) => (
                        <motion.div
                            key={idx}
                            whileHover={{ scale: 0.98 }}
                            onClick={() => setFullscreenAsset(asset)}
                            className="relative aspect-square bg-stone-100 rounded-lg overflow-hidden cursor-pointer"
                        >
                            {/* Logic to show thumbnail for videos or the image itself */}
                            <Image 
                              src={asset.type === "video" ? (asset.thumbnail || "/placeholder.svg") : asset.url} 
                              alt={`${selectedProject.title} ${idx}`} 
                              fill 
                              className="object-cover" 
                            />
                            {asset.type === "video" && (
                                <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                                    <Play className="w-8 h-8 text-white fill-white drop-shadow-lg" />
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Fullscreen Full-Size Viewer */}
      <AnimatePresence>
        {fullscreenAsset && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/95 flex items-center justify-center p-4"
          >
            <button 
                onClick={() => setFullscreenAsset(null)} 
                className="absolute top-6 right-6 text-white p-2 hover:bg-white/10 rounded-full"
            >
                <X className="w-8 h-8" />
            </button>
            
            <div className="relative w-full h-full max-w-6xl max-h-[85vh] flex items-center justify-center">
              {fullscreenAsset.type === "video" ? (
                <video src={fullscreenAsset.url} controls autoPlay className="max-h-full max-w-full rounded-md" />
              ) : (
                <div className="relative w-full h-full">
                  <Image src={fullscreenAsset.url} alt="Fullscreen Asset" fill className="object-contain" />
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <section className="py-16 md:py-32 bg-primary text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-serif font-bold italic">Like What You See?</h2>
          <Link href="/contact" className="inline-flex items-center gap-2 mt-8 bg-white text-primary px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform">
            Start Your Project <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}