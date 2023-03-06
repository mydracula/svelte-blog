<script>
  import lozad from 'lozad'
  import { onMount, tick } from 'svelte'
  import getImageList from '$lib/config/_images.js'
  let image_list = []

  const loadImages = async () => {
    image_list = getImageList()
    await tick()
    const observer = lozad('img, [data-background-image]', {
      loaded: function (el) {
        el.classList.add('lozaded')
        console.log(el, '=>>')
      }
    })

    observer.observe()
  }

  onMount(() => {
    loadImages()
  })
</script>

<div id="imgs">
  <ul>
    {#each image_list as i}
      <li style="background-image: url('{i}');" data-background-image={i} class="item" />
    {/each}
  </ul>
</div>

<style lang="scss">
  #imgs {
    @apply block fixed top-0 left-0 w-100\% h-70vh min-h-25rem z--9 bg-#363636;
    .item {
      @keyframes imageAnimation {
        0% {
          opacity: 0;
          animation-timing-function: ease-in;
        }
        2% {
          opacity: 1;
        }
        8% {
          opacity: 1;
          transform: scale(1.05);
          animation-timing-function: ease-out;
        }
        17% {
          opacity: 1;
          transform: scale(1.1);
        }
        25% {
          opacity: 0;
          transform: scale(1.1);
        }
        100% {
          opacity: 0;
        }
      }
      @apply w-100\% h-100\% absolute top-0 let-0 bg-cover bg-no-repeat bg-center opacity-0 z-0 backface-hidden preserve-3d;
      animation: imageAnimation 36s linear infinite 0s;

      @for $i from 1 through 6 {
        &:nth-child(#{$i + 1}) {
          animation-delay: $i * 6s;
        }
      }
    }

    &::before {
      @apply content-none block absolute w-100\% h-100\% top-0 left-0 bg-#00000033 z-1;
      transition: all 0.2s ease-in-out 0s;
    }
  }
</style>
