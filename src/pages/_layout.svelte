<script>
  import { layout, url, isActive } from "@sveltech/routify";
  import { TabsTransition } from "@sveltech/routify/decorators";
  import { writable } from "svelte/store";
  const width = writable(500);
</script>

<style>
  nav a {
    margin: 0 4px;
    text-transform: capitalize;
    display: inline-block;
  }
  
</style>

<div class="container">

  <nav class="nav">
    <div class="nav-left">
      <a href="/" class="brand" class:active={$isActive('/')}>Comic Book</a>
    </div>
    <div class="nav-right">
      {#each $layout.children.slice(1) as node}
        <a href={$url(node.path)} class:active={$isActive(node.path)}>
          <div>{node.title}</div>
        </a>
      {/each}
    </div>
  </nav>

  <slot  />
  <!-- <slot decorator={TabsTransition} scoped={{ width }} /> -->

</div>
