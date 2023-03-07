<script>
  import lozad from 'lozad'
  import { onDestroy, onMount } from 'svelte'

  let observer

  onMount(() => {
    observer = lozad('img, [data-background-image]', {
      loaded: function (el) {
        el.classList.add('lozaded')
      }
    })
    observer.observe()
  })
</script>

<slot />
