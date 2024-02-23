A [Gray Area](https://grayarea.org/) Art Hack Day Project

Generate custom propoganda posters using [Satori](https://github.com/vercel/satori)

## Demo

https://reposter.studio/api/generate-poster?text=LEARN&text=THE&text=ART&text=OF%20REPOSTER

## Running locally 

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Generating a poster using a URL

`/generate-poster/?template=your-template-name&text=your-first-text&text=your-second-text`

## Creating a new poster template

Duplicate [this poster definition](src/app/api/generate-poster/posters/woman-pointing.tsx)

Import your PosterTemplate into the `posters` Map in the [generate-poster](src/app/api/generate-poster/route.tsx) route.

NOTE: This uses Satori, which has weird CSS rules. The most important one is that the *only* layout system it uses is flexbox, and it insists that everything is a `display:flex` div.