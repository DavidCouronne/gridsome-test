<template>
  <Layout>
    <div class="container">
      <main>
        <div class="post-title">
          <h1 class="post-title__text">{{ $page.post.title }}</h1>
          <SEO />

          <PostMeta :post="$page.post" />
        </div>

        <div class="content-post">
          <div class="post__header">
            <g-image
              class="cover-image"
              alt="Cover image"
              v-if="$page.post.cover_image"
              :src="$page.post.cover_image"
            />
          </div>

          <div class="content-post" v-html="$page.post.content" />

          <div class="post__footer">
            <PostTags :post="$page.post" />
          </div>
        </div>

        <div class="post-comments">
          <!-- Add comment widgets here -->
        </div>

        <!-- <Author class="post-author" /> -->
      </main>
    </div>
  </Layout>
</template>

<script>
import PostMeta from "~/components/PostMeta";
import PostTags from "~/components/PostTags";
import Author from "~/components/Author.vue";
import SEO from "~/components/base/SEO.vue";

export default {
  components: {
    Author,
    PostMeta,
    PostTags,
    SEO
  },

  metaInfo() {
    return {
      title: `${this.$page.post.title} ${
        this.$page.post.tag ? "- " + this.$page.post.tag.name : ""
      }`
    };
  },
  methods: {
    imageLoadError(e) {
      e.target.src = `/images/authors/default.png`;
    },
    description(post, length, clamp) {
      if (post.description) {
        return post.description;
      }
      length = length || 280;
      clamp = clamp || " ...";
      let text = post.content
        .replace(/<pre(.|\n)*?<\/pre>/gm, "")
        .replace(/<[^>]+>/gm, "");
      return text.length > length ? `${text.slice(0, length)}${clamp}` : text;
    },
    titleCase(str) {
      return str
        .replace("-", " ")
        .split(" ")
        .map(s => s.charAt(0).toUpperCase() + s.substring(1))
        .join(" ");
    }
  },
  computed: {
    /* avatar () {
      return `/images/authors/${this.$page.post.author.id}.png`
    }, */
    /* postIsOlderThanOneYear () {
      let postDate = moment(this.$page.post.datetime)
      return moment().diff(postDate, 'years') > 0 ? true : false
    }, */

    ogImageUrl() {
      return this.$page.post.cover_image;
    }
  }
};
</script>

<static-query>
query {
  metadata{
    siteUrl
    pathPrefix
    }
    }
</static-query>

<page-query>
query Post ($id: ID!) {
  post: post (id: $id) {
    title
    path
    date (format: "D. MMMM YYYY")
    timeToRead
    tags {
      id
      title
      path
    }
    description
    content
    author
    cover_image
  }
}
</page-query>

<style lang="scss">
header {
  height: 15em;
}
h1 {
  color: white;
  margin-bottom: 1em;
}
.content-post {
  background: var(--bg-content-color);
  border-radius: 1em;
  padding: 1em;
}
main {
  margin-top: -9em;
  
}
.content-post img {
  width: 100%;
}
@media only screen and (min-width: 768px) {
  .content-post {
    padding: 2em;
  }
}

header {
    height: 8em;
}
</style>
