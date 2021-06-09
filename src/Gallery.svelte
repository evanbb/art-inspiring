<script lang="ts">
  import GalleryItem from "./GalleryItem.svelte";
  import { images } from "./store";
</script>

<section class="gallery">
  <h3>Gallery</h3>
  {#each $images as item}
    <GalleryItem {item} />
  {/each}
</section>

<style>
  h3 {
    border-bottom: 0.1rem solid var(--font-color);
    width: 100%;
    text-align: center;
    padding-bottom: 0.5rem;
  }

  .gallery {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
  }
</style>
