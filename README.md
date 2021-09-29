## Making a plan
1) Make a drawing of your app. Simple "wireframes"
2) Once you have a drawing, name the HTML elements you'll need to realize your vision
3) For each HTML element ask: Why do I need this?
4) Once we know _why_ we need each element, think about how to implement the "Why" as a "How"
5) Is there some state we need to initialize?
6) Find all the 'events' (user clicks, form submit, etc) in your app. Ask one by one, "What happens when" for each of these events. Does any state change?
7) Think about how to validate each of your steps
8) Consider your data model. What objects will you be using? What are the key/value pairs? What arrays do you need? What needs to live in local storage?
9) Consider what features _depend_ on what other features. Use this dependency logic to figure out what order to complete tasks.

#####
Notes:

JS examples : 

strings, 

console.log(‘hello’ + ‘ world’)


numbers,

console.log(1 + 1)


 booleans, 

console.log(false)
console.log(true)


undefined/null, 

console.log(undefined)
console.log(null)


variables, 

Can contain : a-z, A-Z, $, 0-9, cannot start with a number


template literals

Uses back ticks and can put JS logic inside strings using $ {___}


Arrays,

Use brackets

Can have stings and numbers mixed as well

Arrays start by counting at zero

