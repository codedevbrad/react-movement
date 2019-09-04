

a simple react wrapper component that pushes its child component in the opposite
direction of the cursor when hovering over the element.

to install the module :
` npm i @codedevbrad/react_movement`

importing the module into your react application :

`javascript
import ReactMovement from @codedevbrad/react_movement
`

the component takes two optional props
    `[string]`  class - the class name of your element
    `[string]`  push  - the amount of movement your element will push opposite to your cursor.

Example :

```javascript
<ReactMovement class={ "element" }
               push={ "5" }
               }>
    <component> or <html> that you want to move.
</ReactMovement>
