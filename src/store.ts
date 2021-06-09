import { writable, readable } from "svelte/store";
import type { GalleryItemData } from "./types";

export const images = readable<GalleryItemData[]>(
  [
    {
      title: "Fairy in the Forest",
      src: "/images/fairy-in-the-forest.jpg",
      alt: "A fairy in the forest",
      description:
        "It is a rainy day in the forest. There is a fairy sitting on a mushroom. There is a crow taking an egg from a bird. There is a squirrel climbing a tree. One of the birds is singing a song.",
      createdDate: new Date(2021, 4, 5),
    },
  ],
  () => {}
);

export const selectedImage = writable<GalleryItemData | null>(null);
