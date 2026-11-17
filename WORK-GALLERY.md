# Add a project to Selected Work

The home gallery reads `work-gallery.json`. The `top` and `bottom` arrays control each scrolling row independently. Put a project object in the row where you want it to appear; moving it between arrays moves it to the other row. Each row scrolls on its own direction and repeats its own projects for a continuous marquee.

- `type: "gif"` or `type: "image"`: `media` is the GIF or image path.
- `type: "video"`: `media` is a video path such as an MP4.
- `type: "web"`: `media` is a page URL to preview in the tile and preview window. Add `thumbnail` if you want an image in the tile instead.
- `href`: the project page opened by the preview button. It can be the same as `media` for a website project.

Use paths relative to the site root for local files, such as `portfolio/ui-ux/My Project/preview.gif`. External website URLs can be pasted as full `https://...` links. After saving the JSON file, refresh the page.

## Copy-paste project entry

```json
{
  "title": "New UI Project",
  "type": "gif",
  "media": "portfolio/ui-ux/My Project/preview.gif",
  "href": "portfolio/ui-ux/My Project/index.html"
}
```

Paste that entry inside either the `top` array or the `bottom` array in `work-gallery.json`. Keep a comma between neighboring entries.

For a video, change `type` to `video` and set `media` to the MP4 path. For an image, use `type: "image"`. For a live website preview, use `type: "web"` and put its URL in both `media` and `href`.
