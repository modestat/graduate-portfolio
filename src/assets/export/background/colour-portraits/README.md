# Colour portraits (Emperor palette)

`portrait-N-HEX.png`: 450×600, blurred, as on the site.

## Lighter option: one photo + CSS (any colour)
```html
<div class="tile" style="background:#e23b4e"><img src="portrait.png" alt=""></div>
```
```css
.tile { aspect-ratio: 3/4; overflow: hidden; isolation: isolate; }
.tile img { width:100%; height:100%; object-fit:cover; object-position:50% 25%;
  transform:scale(1.14); filter:grayscale(1) contrast(1.5) blur(2.2px); mix-blend-mode:multiply; }
```
