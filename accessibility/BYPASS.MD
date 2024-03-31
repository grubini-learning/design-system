# Bypass blocks

Allows people to have a more direct access to a region, rather than passing through repetitive content

```html
<!-- how to add a bypass link -->
<div class="skip">
  <a href="#content">content skip</a>
</div>

<div id="content">...</div>
```

```css
.skip a {
  position: absolute;
  left: 100000px;
  top: auto;
  width: 1px;
  height: 1px;
  overflow: hidden;
  font-size: 2em;
  background-color: white;
  font-weight: bold;
  display: block;
  padding: 10px;
}

.skip a:focus {
  position: static;
  width: auto;
  height: auto;
}
```
