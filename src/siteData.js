// Edit this file first when you customize the website.

// Keeps images working locally and when the site is hosted in a GitHub Pages subfolder.
export const assetPath = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\/+/, '')}`;
export const siteConfig = {
  businessName: "Tony's Talent Home Improvement",
  shortName: "Tony's Talent",
  tagline: 'Built with skill. Finished with pride.',
  serviceArea: 'Your City and surrounding communities',
  phoneDisplay: '(555) 555-0123',
  phoneLink: '+15555550123',
  email: 'hello@tonystalenthomeimprovement.com',
  socialLinks: {
    facebook: 'https://www.facebook.com/',
    instagram: 'https://www.instagram.com/',
    youtube: 'https://www.youtube.com/',
  },
};

export const services = [
  {
    icon: 'kitchen',
    title: 'Kitchen Remodeling',
    description:
      'Cabinet upgrades, backsplashes, countertops, fixtures, trim, and complete kitchen transformations.',
  },
  {
    icon: 'bath',
    title: 'Bathroom Renovations',
    description:
      'Tile, vanities, flooring, fixtures, repairs, and practical updates designed for everyday comfort.',
  },
  {
    icon: 'floor',
    title: 'Flooring & Tile',
    description:
      'Professional installation and repair for laminate, vinyl plank, hardwood, tile, and baseboards.',
  },
  {
    icon: 'paint',
    title: 'Painting & Drywall',
    description:
      'Interior and exterior painting, drywall installation, patching, finishing, and texture repair.',
  },
  {
    icon: 'carpentry',
    title: 'Carpentry & Custom Work',
    description:
      'Doors, trim, shelving, framing, built-ins, and thoughtful custom solutions for difficult spaces.',
  },
  {
    icon: 'repair',
    title: 'Repairs & Maintenance',
    description:
      'Dependable help with punch lists, property upkeep, exterior repairs, and general home improvements.',
  },
];

export const projects = [
  {
    title: 'Modern Kitchen Refresh',
    category: 'Kitchens',
    image: assetPath('images/project-kitchen.svg'),
    description: 'Cabinets, backsplash, lighting, and finish carpentry.',
  },
  {
    title: 'Bathroom Tile Upgrade',
    category: 'Bathrooms',
    image: assetPath('images/project-bathroom.svg'),
    description: 'New tilework, vanity, fixtures, and paint.',
  },
  {
    title: 'Custom Storage Wall',
    category: 'Carpentry',
    image: assetPath('images/project-carpentry.svg'),
    description: 'Built-in shelving and custom trim details.',
  },
  {
    title: 'Living Room Renovation',
    category: 'Interiors',
    image: assetPath('images/project-living-room.svg'),
    description: 'Flooring, drywall repair, paint, and trim.',
  },
  {
    title: 'Exterior Entry Repair',
    category: 'Exterior',
    image: assetPath('images/project-exterior.svg'),
    description: 'Entry repair, weatherproofing, and finish work.',
  },
  {
    title: 'Flooring Installation',
    category: 'Flooring',
    image: assetPath('images/project-flooring.svg'),
    description: 'Durable plank flooring with clean transitions.',
  },
];

export const processSteps = [
  {
    number: '01',
    title: 'Tell us about your project',
    description: 'Share your goals, priorities, photos, and preferred timeline.',
  },
  {
    number: '02',
    title: 'On-site consultation',
    description: 'We review the space, discuss options, and identify the right approach.',
  },
  {
    number: '03',
    title: 'Clear project plan',
    description: 'You receive a defined scope of work and next steps before construction begins.',
  },
  {
    number: '04',
    title: 'Craftsmanship and cleanup',
    description: 'We complete the work carefully, communicate progress, and respect your property.',
  },
];
