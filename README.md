# Getting Started with React
This repo contains all the mini learning React projects.
Each project is on a branch of its own the master on main branch is the pure files from Create React App

This action is to reduce the amount of data wasted in the attempts of running `npx create-react-app <projectName>`, this failures forces me to wait till pass midnight to install react or download its dependences.

## List of projects
#### 1. GoalApp:
 Just a simple todo, to understand the passing of various props (function ref, object, string and number) from component to component. The use of state to track th input value, submit it and reset, update the parent state with.

 This project provided alot of coding conventions with React. Some are:
  - `Component/ComponentName/ComponentName.[js/css/*]`: All component is good practice to put in one folder called __component__ and each _component_ has the same name to be exported same as diff files related to that component.

        '-> src
            '-> component
                '-> GoalList
                    '-> GoalList.js
                    '-> GoalList.css
                '-> NavBar
                    '-> NavBar.js
                    '-> NavBar.css
            '-> pages

- `submitHandler` for event handlers it good to suffix them with _Handler_ e.g `changeHandler`,`clickHandler`.
I would rather `handleOnClick`, `handleOnSubmit`


- `onAddGoal`: Its good to name passed down function that trigers event handlers with _on_
```jsx
    <NewGoal onAddGoal={addNewGoalHandler} />
```
