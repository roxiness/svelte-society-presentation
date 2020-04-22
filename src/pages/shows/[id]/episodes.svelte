<script>
  export let scoped;
  const episodes = scoped.show._embedded.episodes.slice(0,19)  
</script>

<!-- routify:options index=10 -->

<div class="episodes">
  {#each episodes as ep}
    <div>{ep.season}</div>
    <div>{ep.number}</div>
    <strong>{ep.name}</strong>
    <div>{ep.airdate}</div>
  {/each}
</div>