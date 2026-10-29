export type SampleProperty = {
  id: string;
  name: string;
  location: string;
  bedrooms: number;
  priceRange: string;
  image: string;
  description: string;
  view: string;
};

export const sampleProperties: SampleProperty[] = [
  {
    id: "diani-beach-house",
    name: "Diani Beach House",
    location: "Diani Beach, Coast",
    bedrooms: 4,
    priceRange: "From KSh 45,000 – 75,000 / night",
    image: "/images/diani.jpg",
    description: "Oceanfront villa with private pool and direct beach access.",
    view: "Ocean View",
  },
  {
    id: "karen-hillside-villa",
    name: "Karen Hillside Villa",
    location: "Karen, Nairobi",
    bedrooms: 5,
    priceRange: "From KSh 55,000 – 90,000 / night",
    image: "/images/karen.jpg",
    description: "Secluded modern hillside retreat with panoramic views.",
    view: "Hillside View",
  },
  {
    id: "naivasha-lakeside-cottage",
    name: "Naivasha Lakeside Cottage",
    location: "Lake Naivasha, Rift Valley",
    bedrooms: 3,
    priceRange: "From KSh 30,000 – 50,000 / night",
    image: "/images/naivasha.jpg",
    description: "Charming cottage with lake views and outdoor living areas.",
    view: "Lakeside View",
  },
  {
    id: "watamu-sea-view-apartment",
    name: "Watamu Sea-View Apartment",
    location: "Watamu, Coast",
    bedrooms: 2,
    priceRange: "From KSh 25,000 – 40,000 / night",
    image: "/images/watamu.jpg",
    description: "Bright apartment overlooking the Indian Ocean.",
    view: "Sea View",
  },
];
