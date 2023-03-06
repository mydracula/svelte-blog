<script>
  import { onMount } from 'svelte'
  export let page
</script>

<div id="main" class="pjax">
  <div class="index wrap">
    {#if page.current === 1}
      {#if page.sticky.length > 0}
        {#each page.sticky as post}
          1
        {/each}
      {/if}
      {#if page.catlist.length > 0}
        {#each page.catlist as cat}
          1
        {/each}
      {/if}
    {/if}

    {#if page.posts.length > 0}
      {#if page.current === 1}
        {#each page.posts as post}
          1
        {/each}
      {/if}
    {/if}
  </div>
</div>
