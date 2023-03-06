<script>
  import NavLinks from '$lib/components/header/NavLinks.svelte'
  import Imgs from '$lib/components/header/Imgs.svelte'
</script>

<div id="container">
  <header id="header">
    <div class="inner">
      <slot name="brand" />
      <nav id="nav">
        <div class="inner">
          <div class="toggle">
            <div class="lines"><span class="line" /> <span class="line" /> <span class="line" /></div>
          </div>
          <NavLinks />
        </div>
      </nav>
    </div>
    <Imgs />
  </header>

  <div id="waves">
    <svg class="waves" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewbox="0 24 150 28" preserveaspectratio="none" shape-rendering="auto">
      <defs><path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" /></defs>
      <g class="parallax">
        <use xlink:href="#gentle-wave" x="48" y="0" />
        <use xlink:href="#gentle-wave" x="48" y="3" />
        <use xlink:href="#gentle-wave" x="48" y="5" />
        <use xlink:href="#gentle-wave" x="48" y="7" />
      </g>
    </svg>
  </div>
  <main>
    <div class="inner">
      <slot name="main" />
    </div>
  </main>

  <footer id="footer">
    <div>© 2023 svelte</div>
    <div>鄂ICP备19025445号-1</div>
  </footer>
</div>

<style lang="scss">
  #header {
    @apply m-0 m-x-auto relative w-100\% h-50vh;
    text-shadow: 0 0.2rem 0.3rem rgb(0 0 0 / 50%);
    color: var(--header-text-color);
    .inner {
      #nav {
        @apply fixed z9 w-100\% h-3.125rem;
        transition: all 0.2s ease-in-out 0s;
        .inner {
          @apply h-100\%  flex flex-nowrap;
          width: calc(100% - 0.625rem);
          @media (min-width: 1200px) {
            width: 72.5rem;
          }
          @media (min-width: 1600px) {
            width: 73%;
          }
          margin: 0 auto;
          .toggle {
            @apply lh-0 cursor-pointer display-none;
            @media screen and (max-width: 991px) {
              @include mixin-flex();
            }
            .lines {
              @apply box-unset p-1.25rem w-1.375rem;
            }
            .line {
              &:not(:first-child) {
                margin-top: 0.1875rem;
              }
              @apply inline-block h-0.125rem relative left-0 top-0 b-rounded-0.0625rem v-top w-100\%;
              background: var(--header-text-color);
              transition: all 0.4s;
              box-shadow: 0 0 0.5rem rgb(0 0 0 / 50%);
            }
          }
        }
      }
    }
  }
  main {
    display: block;
    background: linear-gradient(to top, var(--body-bg-shadow) 0, var(--grey-1) 20%) no-repeat bottom;
  }
</style>
