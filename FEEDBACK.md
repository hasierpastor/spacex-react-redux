### Getting Rocket Data - Images

- In order to get the data/images for a specific rocket I made a call to the Space X api using the rocket id from a specific launch
- The function which makes the call is defined in the LaunchesView component and passed down to Launch where it is invoked (button clicked)
- The function also pushes the user to the rocket page using history.push and passes data via history state
- Another idea I had to push the user to another page was using a Link component (the mission title) and then pushing the user to the rocket page via the link instead of a button

  - not sure which method is more performant - displaying a button for every launch or displaying a react link component for every launch

- Another idea I had to solve the rocket data task instead of making an api call to get rocket data each time the user clicked on a button was to store all rocket data inside redux as an array and then filtering the array when the user clicked on a launch - I decided to go with the api method because it seemed more simple and dynamic (in case the api data ever changed).

### What I did

These are some fixes I think improved the app code => I also tried to follow some patterns I would follow whenever possible

- Created reusable react components (Loading, Button) that can be reused in different places/components and made these components as simple and dumb as possible.

  - For example I modified Navigation so it would take in props in order to be reused in different pages or even apps

- Used functional react components vs class components. I try to use functional components whenever possible because they are more performant, readable, simple and testable.

- Implemented React Hooks in launches component. I used useEffect instead of componentDidMount and useState to change isLoading state. I've been learning React Hooks for fun so I thought it would be interesting to try to implement them in the take home - it was super easy and cool.

- Implemented lazy loading and code splitting when displaying the launches and also in Routes using React.Lazy and Suspense.

- Might be a little overkill but I changed redux code to implement Redux thunk - I think it reduced the complexity of the action creators/reducer code and made it more testable/readable

- Tried to simplify/breakup code whenever possible and use pure functions whenever possible => e.g Launches.jsx

- Added tests for action creators, reducer, services and some react components

  - Had some issues with the react tests but tried to show how I would have added react smoke and snapshot tests for certain components

- Simple styling using Sass

### Would have liked to implement

- More unit/integration tests for react components and error action

- UI => better styling for launches component and nav bar

- Styling:

  - change px to rems/ems
  - responsiveness => media queries

- Performance:

  - image optimization and performance - lazy load images (although they were loading very fast)
  - paginate list?
  - measure performance of app using auditing tools/Lightouse

### Other notes

- Had to use withRouter with React.lazy in routes because I was getting a warning - was not affecting the overall performance of app
- I prefer to use async/await vs then() but had a strange babel error when trying to use async/await
