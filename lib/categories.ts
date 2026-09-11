/**
 * The full set of project categories Nora can match homeowners to. Grouped for
 * the /categories page; the homepage features a handful of these with imagery.
 */
export interface Category {
  name: string;
  icon: string;
}

export interface CategoryGroup {
  heading: string;
  items: Category[];
}

export const CATEGORY_GROUPS: CategoryGroup[] = [
  {
    heading: "Interior",
    items: [
      { name: "Kitchens", icon: "🍳" },
      { name: "Bathrooms", icon: "🛁" },
      { name: "Flooring", icon: "🪵" },
      { name: "Tiling", icon: "◻️" },
      { name: "Cabinetry", icon: "🗄️" },
      { name: "Countertops", icon: "🪨" },
      { name: "Painting & decorating", icon: "🎨" },
      { name: "Drywall & plaster", icon: "🧱" },
      { name: "Basement finishing", icon: "🪜" },
      { name: "Closets & storage", icon: "👕" },
    ],
  },
  {
    heading: "Exterior",
    items: [
      { name: "Roof & gutters", icon: "🏠" },
      { name: "Siding", icon: "🏡" },
      { name: "Windows", icon: "🪟" },
      { name: "Doors", icon: "🚪" },
      { name: "Fencing", icon: "🚧" },
      { name: "Decks & yards", icon: "🌳" },
      { name: "Patios & pergolas", icon: "⛱️" },
      { name: "Driveways & paving", icon: "🛣️" },
      { name: "Concrete & masonry", icon: "🧱" },
      { name: "Exterior lighting", icon: "💡" },
    ],
  },
  {
    heading: "Systems",
    items: [
      { name: "Plumbing", icon: "🚰" },
      { name: "Electrical", icon: "⚡" },
      { name: "HVAC & heating", icon: "🌡️" },
      { name: "Water heaters", icon: "♨️" },
      { name: "Insulation", icon: "🧥" },
      { name: "Solar & energy", icon: "☀️" },
      { name: "Smart home", icon: "📱" },
    ],
  },
  {
    heading: "Outdoor & more",
    items: [
      { name: "Landscaping", icon: "🌿" },
      { name: "Pools & spas", icon: "🏊" },
      { name: "Garage & garage doors", icon: "🚗" },
      { name: "Sheds & outbuildings", icon: "🏚️" },
      { name: "Gutter protection", icon: "🍃" },
      { name: "Pressure washing", icon: "💦" },
    ],
  },
];

/** Flat list of every category name, handy for counts or search. */
export const ALL_CATEGORIES = CATEGORY_GROUPS.flatMap((g) =>
  g.items.map((i) => i.name),
);
