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
  <img src=url /> or <Component />
</ReactMovement>
```
important :

the ReactMovement component wraps a single div around the passed props and attaches a mouseMove eventhandler to the wrapper.
The eventhandler should fire when only hovering over the wrapper but in cases , it may fires for its children elements.
I recommend that children passed as props to the ReactMovement component be a singular element. If you do require more than one element be passed as props, add the class property 'pointer events : none' or transition all 600ms to any needed child.

To achieve a smooth animation, you must add the property transition: all 600ms to the element you wish to move.
I recomment adding the class :

  ```
  .smooth_scroll {
    transition: all 600ms;
  }
  ```
