<script>
  import Frame from '$lib/components/Frame.svelte'
  export let data
</script>

<Frame>
  <div slot="header">
    <a href="/">我是头部2</a>
  </div>
  <div slot="main">
    <h2>我是内容2 {data.url}</h2>
  </div>
</Frame>
