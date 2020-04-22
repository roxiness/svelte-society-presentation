<script>
  import { fetcher } from "../../fetcher";
  import { url, isActive, layout } from "@sveltech/routify";
  export let id;

  let show = null;

  fetcher(`/shows/${id}?embed[]=cast&embed[]=episodes`).then(s => {
    s.cover = (s.image && s.image.medium) || "/images/groucho.jpg";
    show = s;
  });
</script>

{#if show}
  <h1>{show.name} ({show.year})</h1>

  <article data-routify="scroll-lock" class="tvshow">
    <img src={show.cover} alt="" />
    <main>
      <header>
        {#each $layout.children as node}
          <a href={$url(node.path)} class:active={$isActive(node.path)}>
            {node.title}
          </a>
        {/each}
      </header>
      <slot scoped={{ show }} />
    </main>
  </article>
{/if}
