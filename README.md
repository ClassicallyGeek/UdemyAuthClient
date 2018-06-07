## Udemy Advanced React/Redux Client Side Auth Project
For class: "Advanced React and Redux: 2018 Edition"
https://www.udemy.com/react-redux-tutorial/learn/v4/content

* Redux Thunk
* Redux compose() helper
* CORS (Cross Origin Resource Sharing)
  Pre-flight request is the browser asking the server if a CORS request is acceptable.
* Persist Login Token with LocalStorage
* Reused the HOC auth component from previous project
* Import css file directly into component

### Notes
Action Creator -> [Action -> Middleware -> Reducers] facilitated by dispatch function

ReduxThunk allows us to return a function (instead of an action object) from our action creators.
This gives us the ability to return/dispatch as many actions as we'd like from a single action creator.
For instance, we could create a promise and dispatch another action upon its resolve.
