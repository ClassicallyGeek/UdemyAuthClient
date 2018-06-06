## Udemy Advanced React/Redux Client Side Auth Project

Action Creator -> [Action -> Middleware -> Reducers] facilitated by dispatch function

ReduxThunk allows us to return a function (instead of an action object) from our action creators.
This gives us the ability to return/dispatch as many actions as we'd like from a single action creator.
For instance, we could create a promise and dispatch another action upon its resolve.
