

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
export default {
    metaInfo (){
        return {
            meta: [
        { name: 'description', content: this.$page.post.description },

        { property: "og:title", content: this.$page.post.title },
        { property: "og:description", content: this.$page.post.description },        
        { property: "og:image", content: this.$page.post.cover_image },

        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: this.$page.post.title },
        
      ]
        }

    }
    
}
</script>