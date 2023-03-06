<script>
  import Frame from '$lib/components/Frame.svelte'
  import Brand from '$lib/components/header/Brand.svelte'
  import IndexWrap from '$lib/components/main/IndexWrap.svelte'
  export let data
</script>

<Frame>
  <Brand slot="brand" />
  <IndexWrap slot="main" {...data} />
</Frame>
