# Accessible Images

Use the `alt` attribute wisely to convey the right information on an image.

## Don't

1. `<img />` inside an `<a>` tag, don't try to descrive the image, but instead the action
2. Don't repeat the alt text when there is a visible text describing the image, instead add alt="null", maybe `aria-labelledby="caption"`.
