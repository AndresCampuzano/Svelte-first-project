<script>
  import Button from './Button.svelte'

  let someText = `Frontend Developer from Home`;
  let count = 0;
  let styles = { darkmode: false };

  function handleClick() {
    count += 1;
  }

  function toggleClick() {
    styles.darkmode = !styles.darkmode;
    window.document.body.classList.toggle("dark-mode");
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

  {#if !styles.darkmode}
    <p>{someText}</p>
  {:else}
    <p>
      <span>Hello DarkMode</span>
    </p>
  {/if}
  <!-- Button Click -->
  <Button
    text="💊Click me from Props"
    count={count}
    on:click={handleClick}
    />
  <!-- Button DarkMode -->
  <Button
    text="DarkMode from Props 🌞"
    on:click={toggleClick}
    />
  <button on:click={handleClick} >💊Click me from About {count === 0 ? '' : count}</button>
  <button on:click={toggleClick}>DarkMode from About {styles.darkmode ? '🌘' : '🌞'}</button>
</div>