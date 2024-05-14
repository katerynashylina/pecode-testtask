# Pecode-Testtask

The necessary links:
  [The task](https://drive.google.com/file/d/1y3rL_QKCiWBoc2VaV2dqyNI3XBs1GOgL/view), 
  [Demo Link](https://katerynashylina.github.io/pecode-testtask/),
  [Api Link](https://rickandmortyapi.com/documentation/).

  This project is a simple web application based on the popular animated TV show "Rick and Morty". It utilizes data from the Rick and Morty API to display information about episodes, characters, and locations.

  Features:
  1. Navigation: The application features a navigation bar with links to the episodes, characters, and locations pages.
  2. Episodes Page: This page displays a paginated list of all episodes. Clicking on an episode opens a modal window showing detailed information about the episode, including characters. The user can also load more characters if available.
  3. Characters Page: Similar to the episodes page, this page displays a paginated list of all characters. It includes search functionality by character name and filters by status and gender. Each character entry includes basic information and an image.
  4. Locations Page: This page displays a paginated list of all locations. It uses GraphQL to fetch data and is similar in layout to the episodes page, including placeholder images.
  5. Additional Functionality: The application includes a warning feature for character status (dead/alive/unknown), which the user can toggle on or off. It also handles incorrect URLs by redirecting the user to a not-found page. Also, debouncing has been implemented for the search input functionality to improve performance and reduce unnecessary API calls.

### Technologies Used:
React: Utilized for creating dynamic and interactive user interfaces. TypeScript: Employed to provide static typing for enhanced code reliability and development experience.
HTML: Used for structuring the elements of the web pages. SCSS: Utilized for advanced styling features, allowing for more efficient and maintainable styling code. React Router: Implemented for declarative routing in the React application, enabling navigation between different pages. REST API and GraphQL: Used to fetch data from external sources, providing information about episodes, characters, and locations. Axios: Implemented for making HTTP requests and handling API calls, simplifying the process of fetching data. Classnames: Utilized for convenient and dynamic class assignment in JSX, enabling the application of conditional styles based on certain conditions.

  # To run the app on your local machine, follow these simple steps:

1. Clone the Repository:
Clone the repository to your local machine. Open your terminal, navigate to the desired location, and use `git clone https://github.com/katerynashylina/pecode-testtask.git`.

2. Install Dependencies:
Navigate into the cloned folder using the terminal and run `npm install / npm i` to install the required dependencies.

3. Start the App:
After installing the dependencies, start the game using `npm start`.

4. Use the App:
Once the app is successfully started, open your web browser and visit http://localhost:3000 to use the app.

 
