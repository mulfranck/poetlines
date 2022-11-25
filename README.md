# Poetlines
### Todoes
- [x] - Load the home page on load
- [ ] - Refresh when the related are click and loaded
- [ ] - Make the search bar functional
- [ ] - Register an account, using snapbase
- [ ] - Make the **read more** btn load the poem.
- [ ] - Don't use the local storage for the load poems
- [ ] - Load more poems when click on **Noba of poems**
- [ ] - Add pagination to the morePoems page
- [ ] - Add filter for the morePoems page
- [ ] - Three random feature poems on the morePoems page.


### Learnt
#### 1. ```useEffect``` hook

Used to fire a function each time there is a rerender

```jsx
useEffect( () => {
  // function body
})
```
##### 2. dependency array
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

#### 3. json-server
```npm i --location=global json-server```
```npx json-server --watch data/db.json --port 9000```

#### 4. Link vs NavLink from **react-router-dom**
__Link__ does not give the active class to any of its element.

#### 5. "Homepage" field from __package.json__
The Homepage should be a domain name, not with the path to whatever.
If the path after the domain name is specified the server would set the path as a path to the localhost.

That is, if the homepage is something like this
```json
  {
    "name": "poetline",
    "version": "0.1.0",
    "private": true,
    "Homepage": "mulfranck.github.io/poetlines/",
    //...
  }
```
When `npm start` is executed the resulting url is 
```
local: https://localhost:3000/poetlines

```
instead of `https://localhost:3000`
