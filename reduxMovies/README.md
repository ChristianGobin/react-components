### Movie Select.
<h5> How it Works </h5>
<p> 
  Using React, Redux and the react-redux library, I created a Single Page Web Application that displays data concerning the movie titles a user has selected. Upon clicking the movie title, a brief summary of the selected movie will appear. This is done through utilizing redux as a state managment tool instead of class based react components. 
</p>
<p>
  In order to use this app you must use <code> npx create-react-component reduxmovies </code> in your terminal. This creates the boiler plate for a react application (for more on this: <link> https://reactjs.org/docs/create-a-new-react-app.html </link>). Next you need to install the dependencies of react-redux, and redux in the same directory as your react app you just created by using the command: 
  <code> npm install --save react-redux react </code>
  finally replace the src folder with a clone of my src folder and run <code>npm build</code>.
</p>
<p> 
  For styling: Add <code> <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"> </code> to the head tag of the index.html file located in the public folder of the app.
