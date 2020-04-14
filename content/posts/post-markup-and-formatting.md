---
title: Post Markup And Formatting
subtitle: All the Tags You Need to Make Clean and Expressive Posts
category:
  - About Awake
author: Daniel Kelly
date: 2019-07-04T03:02:00.000Z
featureImage: /uploads/markup-hero.jpg
---
Awake uses the awesome npm package [markdown-it ](https://github.com/markdown-it/markdown-it)by [Vitaly Puzrin](https://github.com/puzrin) to provide a wealth of markup options for your posts

# h1 Heading

## h2 Heading

### h3 Heading

#### h4 Heading

##### h5 Heading

###### h6 Heading

## Horizontal Rules

- - -

## Typographic replacements

(c) (C) (r) (R) (tm) (TM) (p) (P) +-

test.. test... test..... test?..... test!....

!!!!!! ???? ,,  -- ---

"Smartypants, double quotes" and 'single quotes'

## Emphasis

**This is bold text**

**This is bold text**

_This is italic text_

_This is italic text_

~~Strikethrough~~

## Blockquotes

> Blockquotes can also be nested...
>
> > ...by using additional greater-than signs right next to each other...
> >
> > > ...or with spaces between arrows.

## Lists

Unordered

* Create a list by starting a line with `+`, `-`, or `*`
* Sub-lists are made by indenting 2 spaces:
  * Marker character change forces new list start:
    * Ac tristique libero volutpat at
    * Facilisis in pretium nisl aliquet
    * Nulla volutpat aliquam velit
* Very easy!

Ordered

1. Lorem ipsum dolor sit amet
2. Consectetur adipiscing elit
3. Integer molestie lorem at massa
4. You can use sequential numbers...
5. ...or keep all the numbers as `1.`

Start numbering with offset:

57. foo
58. bar

## Code

Inline `code`

Indented code

```
// Some comments
line 1 of code
line 2 of code
line 3 of code
```

Block code "fences"

```
Sample text here...
```

## Tables

| Option | Description                                                               |
| ------ | ------------------------------------------------------------------------- |
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default.    |
| ext    | extension to be used for dest files.                                      |

Right aligned columns

| Option | Description                                                               |
| ------ | ------------------------------------------------------------------------- |
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default.    |
| ext    | extension to be used for dest files.                                      |

## Links

[link text](https://danielkelly.io)

[link with title](https://danielkelly.io "title text!")

Autoconverted link https://danielkelly.io

## Images

![cat](/uploads/cat-1045782_1920.jpg)

## Subscript/SuperScript

* 19^th^
* H\~2\~O

## Footnotes

Footnote 1 link\[^first].

Footnote 2 link\[^second].

Inline footnote^\[Text of inline footnote] definition.

Duplicated footnote reference\[^second].

\[^first]: Footnote **can have markup**

```
and multiple paragraphs.
```

\[^second]: Footnote text.

### [Definition lists](https://github.com/markdown-it/markdown-it-deflist)

Term 1

:   Definition 1
with lazy continuation.

Term 2 with _inline markup_

:   Definition 2

```
    { some code, part of Definition 2 }

Third paragraph of definition 2.
```

_Compact style:_

Term 1
  ~ Definition 1

Term 2
  \~ Definition 2a
  \~ Definition 2b
