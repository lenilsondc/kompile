# kompile
Tiny javascript template engine

## Usage

```js
let html = `<div>
  <% if (this.name) { %>
    <span><%= this.name %></span>
  <% } %>
  <% for (i in this.items) { %>
    <span><%= this.items[i] %></span>    
  <% } %>
<div>`;

let model = {
  name: 'Jon Doe',
  items: ['a', 'b', 'c']
};

var res = Kompile(html)(model);

//<div>
//	
//		<span>Jon Doe</span>
//	
//	
//		<span>a</span>    
//	
//		<span>b</span>    
//	
//		<span>c</span>    
//	
//<div>
```
