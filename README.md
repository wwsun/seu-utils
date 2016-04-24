seu-utils
---------

A simple utility module for cross browsers.

## Usage

1. Import the `seu-util.js` file in your html:

```html
<script src="lib/seu-util.js"></script>
```

2. Using the utility functions:

```javascript
var myBtn = document.querySelector('#myBtn');
SeuUtil.event.addHandler(myBtn, 'click', function (event) {
  console.log(event.type);
  alert(this.value);
});
```

## API

### `SeuUtil.event`

1. `addHandler(element, type, handler)`
2. `removeHandler(element, type, handler)`
3. `getTarget(event)`
4. `preventDefault(event)`
5. `stopPropagation(event)`