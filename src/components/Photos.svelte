<script>
  import { onMount } from 'svelte';

  let photos = [];

  onMount(async () => {
    console.log('onMount');
    const response = await fetch('https://rickandmortyapi.com/api/character/?page=1');
    photos = await response.json();
    console.log(photos.results);
    photos = photos.results;
  });
</script>

<style>
.Photos {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 8px;
}

.Photos img {
  width: 100%
}
</style>

<div class="Photos">
  {#each photos as x}
    <figure>
      <img src={x.image} alt={x.name}>
      <figcaption>{x.name}</figcaption>
    </figure>
    {:else}
      <p>Loading...</p>
  {/each}
</div>