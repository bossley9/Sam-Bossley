---
title: 'Two Forms of Pre-rendering'
date: '07-13-20 23:10'
lastUpdated: '2020-05-05'
tags:
  - 'pre-rendering'
  - 'static generation'
---

# First heading
## First heading
### First heading
#### First heading
##### First heading
###### First heading
so this is what it _feels_ like to break markdown.

Markdown, more like `markup` amirite?

```
function x() {
  return 7;
}
```

let's insert an image:

[text](https://images.idgesg.net/images/article/2017/09/json_logo_3x2_1200x800-100734942-large.jpg) is a link oops


![ alt text](https://images.idgesg.net/images/article/2017/09/json_logo_3x2_1200x800-100734942-large.jpg) is a seriously real image

![alt](https://via.placeholder.com/150)

## What next?

1. tables
    - rows
    - columns
    - alignment


| row blah| row 2 blah| row 3 blahblahblahblah|
| :--- | :---: | ---: |
|left | center | right|
|left | center | right|
|left | center | right|

Next.js has two forms of pre-rendering: **Static Generation** and **Server-side Rendering**. The difference is in **when** it generates the HTML for a page.

- **Static Generation** is the pre-rendering method that generates the HTML at **build time**. The pre-rendered HTML is then _reused_ on each request.
- **Server-side Rendering** is the pre-rendering method that generates the HTML on **each request**.


Importantly, Next.js lets you **choose** which pre-rendering form to use for each page. You can create a "hybrid" Next.js app by using Static Generation for most pages and using Server-side Rendering for others.
