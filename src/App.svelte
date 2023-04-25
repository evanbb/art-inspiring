<script lang="ts">
  import Modal from "./Modal.svelte";
  import Gallery from "./Gallery.svelte";
  import { selectedImage } from "./store";

  selectedImage.subscribe((item) => {
    document.body.classList.toggle("modal-open", Boolean(item));
  });
</script>

<main>
  <h1>Art inspiring</h1>
  <h2>Aurelia Bremer's Online Art Portfolio</h2>
  <Gallery />
</main>
<Modal />

<style>
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  h1 {
    text-transform: uppercase;
    font-size: 4rem;
    font-weight: 100;
  }

  h1,
  h2 {
    margin: 0.5rem 0;
  }
</style>
