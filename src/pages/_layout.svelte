<script>
  import { layout, url, isActive } from "@sveltech/routify";
  import { TabsTransition } from "@sveltech/routify/decorators";
  import { writable } from "svelte/store";
  const width = writable(500);
</script>


<div class="container home">
  <nav>
    {#each $layout.children as node}
      <a href={$url(node.path)} class:active={$isActive(node.path)}>
        {node.title}
      </a>
    {/each}
  </nav>
  <!-- <slot /> -->
  <slot decorator={TabsTransition} scoped={{ width }} />
</div>
