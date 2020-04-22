<script>
  import { url, layout } from "@sveltech/routify";

  const posts = $layout.parent.children
    .filter(c => c.meta["blogpost"])
    .sort((a, b) =>
      b.meta["blogpost"].published.localeCompare(a.meta["blogpost"].published)
    );
</script>

<div class="blog">
  {#each posts as node}
    <article>
      <a href={$url(node.path)}>
        <h3>{node.meta.blogpost.title}</h3>
      </a>
      <p>{node.meta.blogpost.summary}</p>
    </article>
  {/each}
</div>
