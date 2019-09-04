

a simple react wrapper component that pushes its child component in the opposite
direction of the cursor when hovering over the element.

to install the module :
` npm i @codedevbrad/react_movement`

importing the module into your react application :

```javascript
import ReactMovement from @codedevbrad/react_movement

the component takes two optional props
    class - the class name of your element
    push  - the integer amount of movement your element will push opposite to your cursor.
    
Example :

`
<ReactMovement class={ "element" }
               push={ 5 }
               }>
    <component> or <html> that you want to move.
</ReactMovement>
`
