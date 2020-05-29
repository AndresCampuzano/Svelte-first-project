<script>
  let someText = `Frontend Developer from Home`;
  let count = 0;
  let styles = { darkmode: false }

  function handleClick() {
    count += 1;
  }

  function toggle() {
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

  <button on:click={handleClick} >💊Click me {count === 0 ? '' : count}</button>
  <button on:click={toggle}>DarkMode {styles.darkmode ? '🌘' : '🌞'}</button>
</div>