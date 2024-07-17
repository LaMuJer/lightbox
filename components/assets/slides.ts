const breakpoints = [3840, 1920, 1080, 640, 384, 256, 128];

function assetLink(asset: string, width: number) {
  return `https://assets.yet-another-react-lightbox.com/_next/image?url=${encodeURIComponent(
    `/_next/static/media/${asset}`
  )}&w=${width}&q=75`;
}

export const slides = [
  { asset: "img1.jpg", width: 3840, height: 5760 },
  { asset: "img2.jpg", width: 3840, height: 5070 },
  { asset: "img3.jpg", width: 3840, height: 5120 },
  { asset: "img4.jpg", width: 3840, height: 2546 },
  { asset: "img5.jpg", width: 3840, height: 5760 },
].map(({ asset, width, height }) => ({
  src: assetLink(asset, width),
  width,
  height,
  srcSet: breakpoints.map((breakpoint) => ({
    src: assetLink(asset, breakpoint),
    width: breakpoint,
    height: Math.round((height / width) * breakpoint),
  })),
}));

export const advancedSlides = [
  { ...slides[0], title: "Puppy in sunglasses", description: "Mollie Sivaram" },
  {
    ...slides[1],
    title: "Miami Beach",
    description:
      "Clark Van Der Beken\n\nSouth Beach, Miami Beach, Florida, United States",
  },
  {
    ...slides[2],
    title: "Flamingo",
    description: "Vicko Mozara\n\nVeliki zali, Dubravica, Croatia",
  },
  {
    type: "video" as const,
    title: "Big Buck Bunny",
    description:
      "The Peach Open Movie Project\n\nBlender Institute, Netherlands",
    width: 1280,
    height: 720,
    poster:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg",
    sources: [
      {
        src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        type: "video/mp4",
      },
    ],
  },
  {
    ...slides[3],
    title: "Starfish on a sand beach",
    description: "Pedro Lastra\n\nKey West, Florida, United States",
  },
  {
    ...slides[6],
    title:
      "The last night of a two week stay on the North Shore of Oahu, Hawaii",
    description: "Sean Oulashin\n\nNorth Shore, Waialua, Hawaii, United States",
  },
  {
    ...slides[7],
    title: "Sunset on Kauai",
    description: "Cristofer Maximilian\n\nKauai, Hawaii, United States",
  },
  {
    ...slides[9],
    title: "RayBan sunglasses",
    description: "Ethan Robertson\n\nSanta Monica, California, United States",
  },
  {
    ...slides[11],
    title: "Find the time",
    description: "Alex Perez\n\nNaples, Florida, United States",
  },
];

export default slides;
