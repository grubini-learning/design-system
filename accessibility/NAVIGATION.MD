# Navigation

## Tools

1. `outline`, the way a screen reader outlines the active element.

**DON'T**

```jsx
*:focus {
    outline: none !important;
}
```

```html
<nav>
  <ul>
    <li><a href="#" title="Home">Home</a></li>
    <li><a href="#" title="New Patients">New Patients</a></li>
    <li><a href="#" title="About">About</a></li>
  </ul>
</nav>
```

_`aria-label="Main Navigation"` if multiple navigations_

## Hamburger

```html
<button id="hamburger" aria-expanded="true">
  <span>menu</span>
  <span id="expanded">expanded</span>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
  </svg>
</button>
```

## Navigation attributes

1. `aria-current="page"`
