---
title: Test file
date: 2019-10-28
published: true
tags: ['Markdown', 'Releases']
canonical_url: false
description: "Test file for syntax highlighting"

---




```html
<template>
  <Layout>
    <h2>Latest blog posts</h2>
    <ul>
      <li v-for="edge in $page.allWordPressPost.edges" :key="edge.node.id">
        {{ edge.node.title }}
      </li>
    </ul>
  </Layout>
</template>

<page-query>
query Blog {
  allWordPressPost (limit: 5) {
    edges {
      node {
        _id
        title
      }
    }
  }
}
</page-query>
```

