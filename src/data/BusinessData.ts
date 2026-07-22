// src/data/BusinessData.ts

export const businessData = {
  name: "Quality Landscape & Leisure",
  legalName: "Quality Landscape and Leisure of Indiana, LLC",

  description:
    "Quality Landscape & Leisure provides residential and commercial landscaping, lawn care, irrigation, hardscaping, and outdoor living services in Terre Haute and throughout the Wabash Valley.",

  phone: {
    display: "812-244-9432",
    href: "+18122449432",
    schema: "+1-812-244-9432",
  },

  email: "quadup79@gmail.com",

  address: {
    street: "3601 N. Fruitridge Avenue",
    city: "Terre Haute",
    state: "IN",
    postalCode: "47805",
    country: "US",
  },

  geo: {
    latitude: 39.506894,
    longitude: -87.359236,
  },

  urls: {
    website: "https://qualitylandscapeandleisure.com/",
    facebook: "https://www.facebook.com/qualitylandscapeandleisure/",
    map: "https://www.google.com/maps?q=3601+N+Fruitridge+Avenue+Terre+Haute+IN+47805",
  },

  serviceAreas: [
    {
      type: "City",
      name: "Terre Haute",
      region: "Indiana",
    },
    {
      type: "AdministrativeArea",
      name: "Wabash Valley",
    },
  ],

  services: [
    "Residential landscaping",
    "Commercial landscaping",
    "Landscape maintenance",
    "Hedge trimming",
    "Flower bed services",
    "Irrigation system installation",
    "Irrigation system maintenance and repair",
    "Patio installation",
    "Deck construction",
    "Pergola construction",
    "Outdoor LED lighting",
    "Lawn fertilization",
    "Weed control",
    "Seasonal landscape cleanup",
    "Tree and shrub care",
  ],
} as const;

export const sisterCompanies = [
  {
    label: "Landscape & Leisure",
    href: "/",
    external: false,
  },
  {
    label: "Electric",
    href: "https://qualityelectricofindiana.com/",
    external: true,
  },
  {
    label: "Roofing",
    href: "https://www.qualityroofingofindiana.com/",
    external: true,
  },
  {
    label: "New Construction",
    href: "https://www.southardhomesllc.com/",
    external: true,
  },
  {
    label: "Remodels",
    href: "https://www.southardhomesllc.com/",
    external: true,
  },
  {
    label: "Rentals",
    href: "https://www.southardhomesllc.com/",
    external: true,
  },
] as const;
