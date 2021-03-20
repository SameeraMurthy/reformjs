<p align="center">
  <img src="https://user-images.githubusercontent.com/62363395/109390703-35c4d980-78e1-11eb-80fd-749b5d73f170.png"/>
 </p>

 
# ReformJS
### Ajaxify the HTML form with Reform.js in ease.
#### With Reform.js, you don't have to worry about creating Ajax calls for HTML forms.
<br/>

## Installation
Include the CDN in the `head` section of your HTML:
```html
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js" defer></script>
<script src="https://cdn.jsdelivr.net/gh/SameeraMurthy/reformjs@latest/dist/reform.min.js" defer></script>
```

## Usage
In your HTML:
```html
<form action="/endpoint" method="GET" data-reform="">
    <input type="text" name="name" required/>
    <button type="submit">Go</button>
</form>
```