import { MdOutlineCalendarMonth } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";
import { PiHandCoinsLight } from "react-icons/pi";
import { CgProfile } from "react-icons/cg";

export const productCardItems = [
  {
    title: "Bose QuietComfort Earbuds",
    img: "/images/SF_QCEB25_WHITE_PDP_ECOMM-GALLERY_IMG-1.webp",
    price: "$179.00",
    color: ["#000000", "#c5c6e1", "#ffffff"],
  },
  {
    title: "Bose QuietComfort Ultra Headphones",
    img: "/images/QCUH_LunarBlue_Wired_400x300_x.webp",
    price: "$429.00",
    color: ["#000000", "#eee8e5", "#203449", "#d3d3d2", "#928982"],
  },
  {
    title: "Bose QuietComfort Headphones",
    img: "/images/QCHLE25_ChilledLilac_001_RightFacing_RGB.webp",
    price: "$349.00",
    color: ["#000000", "#eee8e5", "#486e8a", "#928982", "#c5c6e1", "#a2c2d9"],
  },
  {
    title: "Bose Ultra Open Earbuds",
    img: "/images/SF_PDP_GALLERY_AIRFLYPRO_BLACK_QCEU_BLACK-1.webp",
    price: "$353.99",
    color: [],
  },
];

export const secondCarouselItems = [
  { title: "Earbuds", address: "/earbuds" },
  { title: "Headphones", address: "/headphones" },
  { title: "Speakers", address: "/speakers" },
  { title: "Home Theater", address: "/home-theater" },
  { title: "Portable PA", address: "/portable-pa" },
  { title: "Sets", address: "/sets" },
  { title: "Accessories", address: "/accessories" },
  { title: "Refurbished", address: "/refurbished" },
];

export const heroCarouselItems = [
  { src: "/images/HP_Hero_Intro_QCUEB_1440x810_x2.webp", alt: "image2" },
  { src: "/images/gettyimages-1023153404-2048x2048__2.jpg", alt: "image3" },
  { src: "/images/image4.webp", alt: "image4" },
];

export const thirdCarouselItems = [
  {
    src: "/images/CTP-49552_WHAT_IS_PSS_SF_1.webp",
    alt: "image1",
    title: "What is Personal Surround Sound?",
    paragraph: "Take your listening to the next level.",
    mainColor: "white",
    btnTextColor: "black",
    left: "2.5rem",
    top: "11rem",
  },
  {
    src: "/images/SF_UOE-Q3_HP-TAKEOVER-PANEL-7.jpeg",
    alt: "image2",
    title: "“Music is a part of my lifestyle.”",
    paragraph: "– Lisa, Music Artist",
    mainColor: "#e4a9ff",
    btnTextColor: "#4024a7",
    left: "2.5rem",
    top: "18rem",
  },
  {
    src: "/images/CTP-48214_NME_C24_Release_CollabsHub.webp",
    alt: "image3",
    title: "A generation-defining album",
    paragraph:
      "Bose x NME present C24: the next generation of music, featuring tracks from major up-and-comers.",
    mainColor: "white",
    btnTextColor: "black",
    left: "2.5rem",
    top: "18rem",
  },
  {
    src: "/images/SLMPS_JohnSummit_RT3_Expanded.webp",
    alt: "image4",
    title: "Unleashing the energy",
    paragraph:
      "DJ & Producer John Summit on how the new SoundLink Max Speaker turns up the vibe.",
    mainColor: "white",
    btnTextColor: "black",
    left: "2.5rem",
    top: "18rem",
  },
];

export const whyBuyCardItems = [
  {
    id: 1,
    title: "90-day return policy",
    description: "Try it for 90 days to make sure it’s right for you.",
    Icon: MdOutlineCalendarMonth,
    fwBtn: "Learn More >",
  },
  {
    id: 2,
    title: "Price match promise",
    description: "Shop confidently. We’ll match a lower price.",
    Icon: PiHandCoinsLight,
    fwBtn: "Terms & Conditions >",
  },
  {
    id: 3,
    title: "Complimentary shipping & returns",
    description: "On in-stock orders of $49 or more.",
    Icon: TbTruckDelivery,
    fwBtn: "Learn More >",
  },
  {
    id: 4,
    title: "My ByteBoutique perks",
    description:
      "My ByteBoutiqe members get access to exclusive experiences, offers, and more.",
    Icon: CgProfile,
    fwBtn: "Learn More >",
  },
];
