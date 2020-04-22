<script>
  import { fetcher } from "../fetcher";
  import { url, goto, params, ready } from "@sveltech/routify";

  let search = "detective";
  let shows = [];

  async function handleSubmit() {
    $goto("./", { query: search });
  }

  async function findShows(query) {
    shows = await fetcher(`/search/shows?q=${query || search}`);
    $ready()
  }

  $: findShows($params.query);
</script>

<form on:submit|preventDefault={handleSubmit}>
  <input bind:value={search} />
  <button>Find</button>
</form>

<div class="posters">
  {#each shows as { show }}
    <a href={$url('../:id', { id: show.id })}>
      <img style="background: url({show.cover})" alt="" />
      <h5>{show.name}</h5>
      <span>{show.genres}</span>
    </a>
  {/each}
</div>
