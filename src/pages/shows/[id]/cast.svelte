<script>
  export let scoped;
  const { cast } = scoped.show._embedded;
</script>

<!-- routify:options index=20 -->

<div class="cast">
  {#each cast as { person, character }}
    <img src={person.image.medium} alt="" />
    <div>
      <strong>{person.name}</strong>
      <div>{character.name}</div>
    </div>
  {/each}
</div>
