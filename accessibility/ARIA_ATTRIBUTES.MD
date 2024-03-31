# ARIA Attributes

## What is it?

Set of attributes that help make HTML elements more accessible and aid accessibility technologies, like screen readers, to read and understand the intended meaning.

## How do they work?

They always start with the `aria-` prefix and after the dash we follow with the _action_ we want the attribute to take.

## Examples

1. `aria-label` -> icons inside links
2. `aria-expanded`
3. `aria-labelledby` -> uses the id of the literal that describes it
4. `role` -> change semantics of an element, if its a button make sure to add `tabindex="0"`
