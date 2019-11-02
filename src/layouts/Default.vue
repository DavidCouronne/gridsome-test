<template>
  <div id="app">
    <header>
      <div class="container">
        <div class="navbar">
          <g-link to="/" class="logo">David Couronné</g-link>

          <nav>
            <ul>
              <li>
                <ToggleTheme />
              </li>
              <li>
                <g-link to="/who">Who?</g-link>
              </li>
              <li>
                <g-link to="/posts">Posts</g-link>
              </li>
              <li>
                <g-link to="/contact">Contact</g-link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>

    <header class="header">
      <div class="header__right"></div>
    </header>

    <main class="main">
      <slot />
    </main>

    <footer class="footer">
      <span class="footer__copyright">Copyright © {{ new Date().getFullYear() }}.</span>
      <span class="footer__links">
        Powered by
        <a href="//gridsome.org">Gridsome</a>
      </span>
    </footer>
  </div>
</template>

<script>
import ToggleTheme from "~/components/ToggleTheme.vue";

export default {
  props: {
    showLogo: { default: true }
  },
  components: {
    ToggleTheme
  }
};
</script>

<style lang="scss">
$primary-color: #8800ff;
$accent-color: #ffff00;

.footer {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: calc(var(--space) / 2);
  text-align: center;
  font-size: 0.8em;

  > span {
    margin: 0 0.35em;
  }

  a {
    color: currentColor;
  }
}

.container {
  margin: 0 auto;
  width: 90%;
}
header {
  background: $primary-color;
  padding: 1em 0;
  text-align: center;
  .navbar {
    display: flex;
    justify-content: space-between;
    font-weight: bold;
  }
  a {
    color: white;
    text-decoration: none;
  }
  nav {
    display: flex;
    ul {
      list-style-type: none;
      padding: 0;
      display: flex;
      li a {
        font-weight: normal;
        padding: 0.5em;
      }
    }
  }
}


.hero {
  background-color: $primary-color;
  color: white;
  text-align: center;
  padding-top: 2em;
  h1 {
    margin-bottom: 1em;
  }
  .hire {
    background: darken($primary-color, 10%);
    padding: 0.5em 3em;
    margin: 2em 0 3em;
    display: inline-block;
    border-radius: 10px;
    color: $accent-color;
    text-decoration: none;
  }
}
.container ul {
  list-style-type: none;
  padding: 0;
}
main {
  li {
    background: white;
    border-radius: 1em;
    padding: 0.8em;
    margin: 1em 0;
    box-shadow: 15px 21px 40px 0px rgba(0, 0, 0, 0.04);
  }
  img {
    width: 100%;
    border-radius: 0.5em;
  }
  .content {
    padding: 0.5em;
  }
  a {
    font-size: 1.5em;
    text-decoration: none;
    color: black;
    font-weight: bold;
    display: block;
    margin: -0.1em 0 0.2em;
  }
  h2 {
    margin-top: 3em;
    text-transform: uppercase;
    font-size: 0.8em;
  }
  span {
    color: $primary-color;
    text-transform: uppercase;
  }
}
@media only screen and (min-width: 768px) {
  main li {
    display: grid;
    grid-template-columns: 180px auto;
    grid-column-gap: 1em;
  }
}
</style>
