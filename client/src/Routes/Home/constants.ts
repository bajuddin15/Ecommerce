import {
  Camera,
  Gamepad2,
  Headphones,
  Headset,
  Laptop,
  ShieldCheck,
  Smartphone,
  Truck,
  Watch,
} from "lucide-react";

export const productCategories = [
  {
    name: "Phones",
    icon: Smartphone,
  },
  {
    name: "Laptops",
    icon: Laptop,
  },
  {
    name: "SmartWatch",
    icon: Watch,
  },
  {
    name: "Camera",
    icon: Camera,
  },
  {
    name: "HeadPhones",
    icon: Headphones,
  },
  {
    name: "Gaming",
    icon: Gamepad2,
  },
];

export const ourFeatures = [
  {
    title: "free and fast delivery",
    desc: "Free delivery for all orders over $140",
    icon: Truck,
  },
  {
    title: "24/7 customer service",
    desc: "Friendly 24/7 customer support",
    icon: Headset,
  },
  {
    title: "money back guarantee",
    desc: "We return money within 30 days",
    icon: ShieldCheck,
  },
];
