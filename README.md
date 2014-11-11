# React optimized list demo

This is a demo of James Long's [Optimized List](https://gist.github.com/jlongster/3f32b2c7dce588f24c92#file-e-optimized-list-js) as featured in http://jlongster.com/Removing-User-Interface-Complexity,-or-Why-React-is-Awesome

## Why a demo here if he has it there?

Well, I wanted his code pulled out into a working React component for learning purposes and for use.  I took the Gist as it was and found it did not work as is, so I had to make modifications to get it to work.

- Carry over CSS used in the iframe
- Use `|| window.pageYOffset` instead of just `e.pageY` in window.scroll

## Differences in my implementation

- Changed `componentDidRender()` to `componentDidMount()` per React 0.12
- Removed call to `requestAnimationFrame()` and recursive call to `render()`
- Moved `window.addEventListener('scroll'...` into to `componentDidMount()`
- Use `setState()`



