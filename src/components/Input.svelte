<script>
  export let name = "";
</script>

<div class="Input">
  <input type="text" bind:value={name} placeholder="Type here..."/>
  <p style="font-size: 30px">Hello {name}!</p>
</div>