# Indexed Template

Process indexed template literals.

## Example

```javascript
let template = require('indexed-template');

let text = template`Hello ${0}!`('Sandy');
// Hello Sandy!

let fn = template`${0} knows ${1}, and ${1} knows ${0}.`;

fn('Elizabeth', 'Francis');
fn('Jake', 'Jim');
// Elizabeth knows Francis, and Francis knows Elizabeth.
// Jake knows Jim, and Jim knows Jake.
```
## Installation
```
$ npm install indexed-template
```
## API
```javascript
var template = require('indexed-template');
```
### template`template literal`(...values))
- template literal {string.raw} A template literal where each expression evaluates to an integer
- parameter {...\*} value: A value to be placed into the literal string matching the indexed value to the expressions integer.
- returns string: A string representing the template populated with the values.
