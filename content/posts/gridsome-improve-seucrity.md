---
title: "Gridsome: Improve security and SEO"
date: 2019-11-01
published: true
author: "David Couronné"
tags: ['Gridsome', 'SEO']
canonical_url: false
description: "Improve security headers and SEO with vue-meta"
cover_image: ./images/snapshot-tomorrow.png
---

## Improve security

You can visite and scanne your website at https://securityheaders.com . 

If security headers are missing then you will get D Grade even on Netlify.

You can Get A grade by just adding 5 lines of code:

```js{codeTitle: "main.js"}
head.meta.push({
    name: 'X-Frame-Options',
    content: 'DENY'
  })
```