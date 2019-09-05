## what is is?
react_movement is a simple react wrapper component that pushes its child component in the opposite
direction of the cursor when hovered over.

View the demo at https://codedevbrad.github.io/svg_morph_glitch_effects/

or view the Github repo at https://github.com/codedevbrad/svg_morph_glitch_effects


### to install the module :
` npm i @codedevbrad/react_movement`


### importing the module into your react application :

```javascript
import ReactMovement from @codedevbrad/react_movement
```

The component takes an optional props.

   `[ type : String ]`
   class: the className of your element


### Example :

```javascript
<ReactMovement class={ "element" }}>
    <component> or <html> that you want to move.
</ReactMovement>
```
