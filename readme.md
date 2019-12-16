## what is it?
react_movement is a simple react wrapper component that pushes its child component in the opposite
direction of the cursor when hovered over.

View the demo at https://codedevbrad.github.io/svg_morph_glitch_effects/

or view the Github repo at https://github.com/codedevbrad/react-movement


### to install the module :
` npm i '@codedevbrad/react_movement'`


### importing the module into your react application :

```javascript
import ReactMovement from @codedevbrad/react_movement
```

The component takes an optional props.

   `[ type : String ]`
   class: the className of your element


### Example :

```javascript
<ReactMovement class={ "smooth_scroll" }}>
    <component> or <html> that you want to move.
</ReactMovement>
```
important :

To achieve a smooth animation, you must add the property transition: all 300ms to the element you wish to move.
I recomment adding the class :

  ```.smooth_scroll {
    transition: all 600ms;
  }
  ```
