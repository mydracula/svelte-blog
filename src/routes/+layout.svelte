<script>
  import 'uno.css'
  import '$lib/assets/scss/app.scss'
  import { transition } from '$lib/assets/js'
  import { onMount, afterUpdate } from 'svelte'

  afterUpdate(() => {
    const loading = document.querySelector('#loading')
    setTimeout(transition(loading, 0), 3000)
  })
</script>

<slot />

<svelte:window
  on:DOMContentLoaded={() => {
    console.log('=>>')
  }}
/>
