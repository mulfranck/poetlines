# React multra Blog

Learning react from _Net Ninja_ tutorial project Dojo Blog.


### Learnt
#### 1. ```useEffect``` hook

Used to fire a function each time there is a rerender

```jsx
useEffect( () => {
  // function body
})
```
##### dependency array
```jsx
useEffect( () => {
  // function body
}, [])
```
* Fires the function once, when the page renders the first time.
* A good place to fetch data

```jsx
const [name, setName] = useState('Mario');
...
useEffect( () => {
  // function body
}, [name])
```
`useEffect()` when watch the state name `name` if there is a change on this state the useEffect function is fired.
Thus, this would be fired when the page first renders, and whenever the `name` state changes.

#### 2. json-server
```npm -i --location=global json-server```
```npm json-server --watch data/db.json --port 9000```