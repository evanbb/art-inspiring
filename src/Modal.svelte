<script lang="ts">
  import { selectedImage } from "./store";
  import { onDestroy } from "svelte";

  function closeModal() {
    selectedImage.set(null);
  }

  const formats = [
    ["sm", 420],
    ["md", 767],
    ["lg", 1024],
    ["xl", 1366],
    ["fl", Number.MAX_SAFE_INTEGER],
  ];

  function handleEscapeKey(event: KeyboardEvent) {
    if (event.key.toLowerCase() === "escape") {
      closeModal();
    }
  }

  document.body.addEventListener("keyup", handleEscapeKey);

  onDestroy(() => {
    document.body.removeEventListener("keyup", handleEscapeKey);
  });
</script>

{#if $selectedImage}
  <section>
    <button on:click={closeModal}>Close</button>
    <picture>
      {#each formats as format}
        <source
          srcset={`/build/images/${$selectedImage.img}.${format[0]}.jpg`}
          media={`(max-width: ${format[1]}px)`}
        />
      {/each}
      <img
        src={`/build/images/${$selectedImage.img}.tb.jpg`}
        alt={$selectedImage.alt}
      />
    </picture>
  </section>
{/if}

<style>
  section {
    position: fixed;
    top: 0;
    left: 0;
    padding: 2rem;
    height: calc(100vh - 4rem);
    width: calc(100vw - 4rem);
    background-color: rgba(100, 100, 100, 0.7);
    overflow: scroll;
  }

  button {
    float: right;
    margin: -0.5rem;
  }

  picture,
  img {
    max-width: 100%;
  }
</style>
