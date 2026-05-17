/* ============================================================
   BUILDS DATA
   ----------
   Add a new build by appending an object to this array.
   The site will pick it up automatically.

   Required fields:
     id           - URL slug (matches builds/<id>.html)
     title        - display name
     category     - one of: castle | redstone | farm | house | pixelart | other
     thumb        - path to thumbnail image (any size; gets cropped)
     description  - short blurb for the gallery card

   Optional (used by the detail page):
     hero, gallery, materials, coords, world, dateBuilt, notes
   ============================================================ */

window.BUILDS = [
  {
    id: "stone-keep",
    title: "Stone Keep Castle",
    category: "castle",
    thumb: "assets/images/castle.svg",
    hero: "assets/images/castle.svg",
    description: "A four-tower stronghold with battlements, a portcullis gate and red banners.",
    materials: [
      { item: "Stone Bricks", qty: "~3,800" },
      { item: "Oak Planks (gate)", qty: "64" },
      { item: "Red Wool (banners)", qty: "16" },
      { item: "Torches", qty: "48" }
    ],
    coords: "X: 128  Y: 71  Z: -420",
    world: "Survival, version 1.20.4",
    dateBuilt: "Built over ~3 weeks",
    notes: "Took forever to source enough stone — found a giant ravine that solved it."
  },
  {
    id: "auto-wheat-farm",
    title: "Automatic Wheat Farm",
    category: "farm",
    thumb: "assets/images/farm.svg",
    hero: "assets/images/farm.svg",
    description: "Villager-powered wheat farm that drops harvested crops into a hopper chest.",
    materials: [
      { item: "Dirt / Farmland", qty: "240" },
      { item: "Water buckets", qty: "8" },
      { item: "Composters", qty: "4" },
      { item: "Hoppers + Chests", qty: "12 / 4" }
    ],
    coords: "X: 60  Y: 64  Z: -130",
    world: "Survival, version 1.20.4",
    dateBuilt: "One afternoon",
    notes: "Yields about a stack of wheat every 20 minutes AFK."
  },
  {
    id: "tnt-cannon-lab",
    title: "Redstone TNT Cannon Lab",
    category: "redstone",
    thumb: "assets/images/redstone.svg",
    hero: "assets/images/redstone.svg",
    description: "A test lab full of pistons, repeaters and a 6-shot TNT cannon for siege practice.",
    materials: [
      { item: "Redstone Dust", qty: "256" },
      { item: "Repeaters", qty: "32" },
      { item: "Sticky Pistons", qty: "18" },
      { item: "TNT", qty: "40" }
    ],
    coords: "X: -45  Y: 62  Z: 88",
    world: "Creative testing world",
    dateBuilt: "Ongoing — tweaks every weekend",
    notes: "Built the timing loop using a 4-repeater clock to stagger the shots."
  },
  {
    id: "starter-house",
    title: "Cozy Oak Starter House",
    category: "house",
    thumb: "assets/images/house.svg",
    hero: "assets/images/house.svg",
    description: "Classic survival starter: oak planks, dark roof, big glass windows and a chimney.",
    materials: [
      { item: "Oak Planks", qty: "320" },
      { item: "Glass Panes", qty: "24" },
      { item: "Spruce Stairs (roof)", qty: "120" },
      { item: "Cobblestone (chimney)", qty: "16" }
    ],
    coords: "X: 12  Y: 68  Z: -22",
    world: "Survival, version 1.20.4",
    dateBuilt: "First weekend in the world"
  },
  {
    id: "creeper-mosaic",
    title: "Giant Creeper Mosaic",
    category: "pixelart",
    thumb: "assets/images/pixelart.svg",
    hero: "assets/images/pixelart.svg",
    description: "32×32 wool mosaic of a creeper face, mounted on the side of a mountain.",
    materials: [
      { item: "Lime Wool", qty: "576" },
      { item: "Green Wool", qty: "192" },
      { item: "Black Wool", qty: "256" }
    ],
    coords: "X: 410  Y: 110  Z: 60",
    world: "Survival, version 1.20.4",
    dateBuilt: "Two evenings of dyeing sheep"
  },
  {
    id: "ocean-bridge",
    title: "Lantern-lit Ocean Bridge",
    category: "other",
    thumb: "assets/images/other.svg",
    hero: "assets/images/other.svg",
    description: "300-block oak bridge connecting the mainland to a tiny island base.",
    materials: [
      { item: "Oak Planks", qty: "600" },
      { item: "Oak Fences", qty: "300" },
      { item: "Lanterns", qty: "20" }
    ],
    coords: "From X: 0  to  X: 300",
    world: "Survival, version 1.20.4",
    dateBuilt: "Across a few sessions"
  }
];

/* Friendly labels for the filter buttons */
window.CATEGORY_LABELS = {
  all:      "All Builds",
  castle:   "Castles",
  redstone: "Redstone",
  farm:     "Farms",
  house:    "Houses",
  pixelart: "Pixel Art",
  other:    "Other"
};
