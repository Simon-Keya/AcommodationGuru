export type PropertyType = "Villa" | "Apartment" | "Lodge" | "Guest House";

export type SampleProperty = {
  id: string;
  name: string;
  location: string;
  bedrooms: number;
  bathrooms: number;
  guests: number;
  price: number;
  priceRange: string;
  image: string;
  description: string;
  view: string;
  type: PropertyType;
  amenities: string[];
};

// Illustrative catalogue data. Replace these entries with verified owner/property data before launch.
export const sampleProperties: SampleProperty[] = [
  {
    id: "diani-beach-house",
    name: "Diani Beach House",
    location: "Diani Beach, Coast",
    bedrooms: 4,
    bathrooms: 3,
    guests: 8,
    price: 45000,
    priceRange: "From KSh 45,000 – 75,000 / night",
    image: "/images/diani.jpg",
    description: "A relaxed coastal retreat with a private outdoor living area, tropical planting and easy access to the Indian Ocean.",
    view: "Ocean View",
    type: "Villa",
    amenities: ["Wi-Fi", "Parking", "Pool", "Air Conditioning", "Kitchen", "Beach Access"],
  },
  {
    id: "karen-hillside-villa",
    name: "Karen Hillside Villa",
    location: "Karen, Nairobi",
    bedrooms: 5,
    bathrooms: 4,
    guests: 10,
    price: 55000,
    priceRange: "From KSh 55,000 – 90,000 / night",
    image: "/images/karen.jpg",
    description: "A secluded hillside retreat with generous outdoor space, leafy gardens and a calm setting for longer stays.",
    view: "Hillside View",
    type: "Villa",
    amenities: ["Wi-Fi", "Parking", "Kitchen", "Garden", "Air Conditioning"],
  },
  {
    id: "naivasha-lakeside-cottage",
    name: "Naivasha Lakeside Cottage",
    location: "Lake Naivasha, Rift Valley",
    bedrooms: 3,
    bathrooms: 2,
    guests: 6,
    price: 30000,
    priceRange: "From KSh 30,000 – 50,000 / night",
    image: "/images/naivasha.jpg",
    description: "A peaceful cottage with open views, comfortable indoor-outdoor living and room to slow down in the Rift Valley.",
    view: "Lakeside View",
    type: "Lodge",
    amenities: ["Wi-Fi", "Parking", "Kitchen", "Garden", "Lake View"],
  },
  {
    id: "watamu-sea-view-apartment",
    name: "Watamu Sea-View Apartment",
    location: "Watamu, Coast",
    bedrooms: 2,
    bathrooms: 1,
    guests: 4,
    price: 25000,
    priceRange: "From KSh 25,000 – 40,000 / night",
    image: "/images/watamu.jpg",
    description: "A bright, easygoing coastal base suited to couples or small groups exploring the Kenyan coast.",
    view: "Sea View",
    type: "Apartment",
    amenities: ["Wi-Fi", "Parking", "Pool", "Air Conditioning", "Kitchen", "Sea View"],
  },
];
