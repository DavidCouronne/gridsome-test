<template>
  <Layout>
    
    <div class="hero">
      <div class="container">
        <h1>Welcome to My Blog</h1>
        <p
          class="subtitle"
        >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi, modi. Maxime explicabo neque odio facilis.</p>
        <g-link to="/" class="hire">Hire me</g-link>
      </div>
    </div>

    <div class="container">
      <main>
        <h2>Latest thoughts</h2>
        <ul>
          <li v-for="edge in $page.posts.edges" :key="edge.node.id" :post="edge.node">
            <g-image alt="Cover image" v-if="edge.node.cover_image" :src="edge.node.cover_image" />

            <div class="content">
                <div class="headline">
              
                  <g-link
                  class="post-tags__link"
                  v-for="tag in edge.node.tags"
                  :key="tag.id"
                  :to="tag.path"
                >
                  <span>#</span>
                  {{ tag.title }}
                </g-link>
                Posted {{ edge.node.date }}.
                <template v-if="edge.node.timeToRead">
                  <strong>{{ edge.node.timeToRead }} min read.</strong>
                </template>
              </div>
              <g-link to="/">{{ edge.node.title}}</g-link>
              <p>{{ edge.node.description}}</p>
              
            </div>
          </li>
        </ul>
      </main>
    </div>
  </Layout>
</template>

<page-query>
query {
  posts: allPost(filter: { published: { eq: true }}) {
    edges {
      node {
        id
        title
        date (format: "D. MMMM YYYY")
        timeToRead
        description
        cover_image
        path
        author
        tags {
          id
          title
          path
        }
      }
    }
  }
}
</page-query>



<style lang="scss" scoped>
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

.post-tags {
  
  display:flex;

  &__link {
    margin-right: 0.7em;
    font-size: 0.8em;
    color: white;
    text-decoration: none;
    background-color: $primary-color;    
    padding: 0.5em;
    border-radius: 5px;
     span {
         color:white;
     }
  }
}

.headline {
    display: flex;
    align-items: center;
}
</style>