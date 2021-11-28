# Enter the Labyrinth - A Redux app

The purpose of this web app was practicing async actions through a text adventure game. It presents the user with binary options to get out of a maze. The app was built via pair programming by Maria Petersson and Isabel González.

## Features

- Responsive UI for all devices
- Fetching game data from an API
- Thunks
- Redux Toolkit
- Hooks: createSlice, useSelector, useDispatch, useNavigate, configureStore, combineReducers, BrowserRouter, Routes, Route
- Custom background images presented through conditional rendering (via a switch statement)
- Loading screen featuring an animation from the Lottie library

## Main challenges and lessons

- In the beginning, finding out the use and amount of reducers took a while. We finally decided to keep it simple by only having one 'game' reducer.
- The positioning of Lottie was also challenging. As with many CSS libraries, the solution came through trial and error.
- The biggest challenge of the project was the conditional rendering of local background images. Googling around didn't help that much because most people use external links to images. In the end, a switch statement and the correct use of template literals solved the problem.
- Routing the restart was a bit challenging. We solved it by using useNavigate.

## View it live

https://isabel-maria-labyrinth.netlify.app/
