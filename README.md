#  Project requirements
My project is a web application for managing your students grades as a lecturer. The requirements of 
the project include the ability to view all grades, add grades, and edit grades. The application allows 
users to log in and out, with login credentials as username :“admin” password :“admin”. This ensures 
you can only see the grades as the lecturer. The frontend of the application is built using React and 
Bootstrap, while the backend is built using Node.js and MongoDB.
The specific requirements of the project can be broken down into the following:
-   View all grades: Users should be able to view a list of all the grades in the system. This 
functionality is implemented in the ViewGrades component.
-  Add grades: Users should be able to add new grades to the system. This functionality is 
implemented in the AddGrades component.
-  Edit grades: Users should be able to edit existing grades in the system. This functionality is 
implemented in the EditStudents component.
-  Login and authentication: Users can only login with the correct log in information. Which is 
admin, admin. 
5. CalculateGrade: The grades are calculated based on the total marks obtained by the student 
in each assessment. The calculateGrade function takes the total marks obtained by the 
student as an argument and uses a switch statement to determine the corresponding letter 
grade based on the following ranges: A (90 or above), B (80-89), C (70-79), D (60-69), F (0-
50). The function returns the letter grade, which is then displayed in the student's 
information along with the percentage of marks obtained in each assessment. The overall 
grade for the course is determined by adding up the percentages obtained in each 
assessment, with assignments 1 and 2 each contributing 25% and the project contributing 
50%.
Overall, is robust and functional web application for managing grades. The frontend and backend are 
both well-designed and implemented, and the project provides a good example of how to build a 
full-stack web application using modern web development technologies.


# Running the App

- Open Cmd in Project Folder
- Type 'npm start'

- Open Cmd in Project Folder again in a new window
- Type 'cd src'
- Type 'cd backend'
- Type 'nodemon server.js'

Do Not close either Command Prompt Window.
The app is ready to use, if not check the install list below.

# installs
npm install

npm install mongosh - fixed my errors







# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
