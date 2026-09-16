import type { LucideIcon } from "lucide-react";
import {
  Refrigerator,
  Bath,
  Layers,
  LayoutGrid,
  Archive,
  RectangleHorizontal,
  PaintRoller,
  BrickWall,
  Building2,
  Shirt,
  House,
  Building,
  AppWindow,
  DoorOpen,
  Fence,
  Trees,
  Umbrella,
  Blocks,
  Lightbulb,
  Route,
  Droplets,
  Zap,
  AirVent,
  Flame,
  Thermometer,
  Sun,
  Smartphone,
  Sprout,
  Waves,
  Warehouse,
  Car,
  Shield,
  SprayCan,
} from "lucide-react";

/**
 * The full set of project categories Nora can match homeowners to. Grouped for
 * the /categories page; the homepage features a handful of these with imagery.
 */
export interface Category {
  name: string;
  icon: LucideIcon;
}

export interface CategoryGroup {
  heading: string;
  items: Category[];
}

export const CATEGORY_GROUPS: CategoryGroup[] = [
  {
    heading: "Interior",
    items: [
      { name: "Kitchens", icon: Refrigerator },
      { name: "Bathrooms", icon: Bath },
      { name: "Flooring", icon: Layers },
      { name: "Tiling", icon: LayoutGrid },
      { name: "Cabinetry", icon: Archive },
      { name: "Countertops", icon: RectangleHorizontal },
      { name: "Painting & decorating", icon: PaintRoller },
      { name: "Drywall & plaster", icon: BrickWall },
      { name: "Basement finishing", icon: Building2 },
      { name: "Closets & storage", icon: Shirt },
    ],
  },
  {
    heading: "Exterior",
    items: [
      { name: "Roof & gutters", icon: House },
      { name: "Siding", icon: Building },
      { name: "Windows", icon: AppWindow },
      { name: "Doors", icon: DoorOpen },
      { name: "Fencing", icon: Fence },
      { name: "Decks & yards", icon: Trees },
      { name: "Patios & pergolas", icon: Umbrella },
      { name: "Driveways & paving", icon: Route },
      { name: "Concrete & masonry", icon: Blocks },
      { name: "Exterior lighting", icon: Lightbulb },
    ],
  },
  {
    heading: "Systems",
    items: [
      { name: "Plumbing", icon: Droplets },
      { name: "Electrical", icon: Zap },
      { name: "HVAC & heating", icon: AirVent },
      { name: "Water heaters", icon: Flame },
      { name: "Insulation", icon: Thermometer },
      { name: "Solar & energy", icon: Sun },
      { name: "Smart home", icon: Smartphone },
    ],
  },
  {
    heading: "Outdoor & more",
    items: [
      { name: "Landscaping", icon: Sprout },
      { name: "Pools & spas", icon: Waves },
      { name: "Garage & garage doors", icon: Car },
      { name: "Sheds & outbuildings", icon: Warehouse },
      { name: "Gutter protection", icon: Shield },
      { name: "Pressure washing", icon: SprayCan },
    ],
  },
];

/** Flat list of every category name, handy for counts or search. */
export const ALL_CATEGORIES = CATEGORY_GROUPS.flatMap((g) =>
  g.items.map((i) => i.name),
);
