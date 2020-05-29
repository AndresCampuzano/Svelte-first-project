<script>
  let someText = `Frontend Developer from Home`;
  let count = 0;

  function handleClick() {
    count += 1;
  }
</script>

<style>

	p {
    color: var(--theme-color);
  }

  button {
    margin: 15px;
  }
</style>

<div class="About">
  <p>{someText}</p>
  <button on:click={handleClick} >💊Click me {count === 0 ? '' : count}</button>
</div>