<script lang="ts">
  import type { GalleryItemData } from "./types";
  import { selectedImage } from "./store";
  export let item: GalleryItemData;

  function itemClick() {
    selectedImage.set(item);
  }
</script>

<article on:click={itemClick}>
  <figure>
    <img src={`/build/images/${item.img}.tb.jpg`} alt={item.alt} />
    <figcaption>{item.description}</figcaption>
  </figure>
</article>

<style>
  article {
    max-width: 280px;
    cursor: pointer;
  }

  img {
    max-width: 100%;
  }
</style>
