---
title: ResourceGrid.vue
subtitle: Easily Display Grid of Posts/Categories Throughout the Site
category:
  - About Awake
author: Daniel Kelly
date: 2019-08-02T04:27:56.800Z
featureImage: /uploads/resource-grid-hero.jpg
---
The `ResourceGrid` powers the grid display of both posts and categories in the Awake template. It's a powerful, fast, and flexible component to grab a grid of any size or content when you need it.

| Prop     | Description                                          | Type   | Default           |
| -------- | ---------------------------------------------------- | ------ | ----------------- |
| perRow   | how many resources to displayed per row              | Number | 3                 |
| number   | total number of resources to display                 | Number | all (lazy loaded) |
| category | for posts filters posts only in supplied category(s) | Array  | \[]               |
| resource | the resource to be retrieved and displayed           | String | Required          |

There are 2 simple wrappers built around the `ResourceGrid` for easily displaying a categories grid or a posts grid, easily enough they are `CategoriesGrid` and `PostsGrid`.

## Examples
```
<--! All posts in grid with 3 per row lazy loaded until no more-->
<posts-grid />

<--! 3 posts in grid in single row -->
<posts-grid :number="3" />

<--! 3 posts in grid in single row in category-1 (exactly how related posts at end of single post is accomplished) -->
<posts-grid :number="3" :category="['category-1']" />

<--! All categories in grid with 3 per row lazy loaded until no more-->
<categories-grid />

<--! etc -->
```
