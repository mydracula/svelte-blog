<script>
  import 'uno.css'
  import '$lib/assets/scss/app.scss'
  import { transition } from '$lib/assets/js'
  import { onMount, afterUpdate } from 'svelte'

  onMount(() => {
    console.log('DOMContentLoaded')
    const loading = document.querySelector('#loading')
    setTimeout(transition(loading, 0), 3000)
  })

  // onMount(() => {
  //   const loading = document.querySelector('#loading')
  //   setTimeout(transition(loading, 0), 3000)
  // })

  // afterUpdate(() => {
  //   // window.addEventListener('load', () => {
  //   //   console.log('=>>')
  //   //   const loading = document.querySelector('#loading')
  //   //   setTimeout(transition(loading, 0), 3000)
  //   // })
  // })
</script>

<slot />
