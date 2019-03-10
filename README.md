# A React UI for the URL shortening service.

Note: Make sure to start the backend server, as posts are fetched and saved there.
[Link](https://github.com/amitnagar1/BackendTask)

1. Clone the repository.
2. ``` cd ReactFrontendUI ``` 
3. ***( To install all the dependencies. )*** ``` npm install ```
4. ``` npm start ```

The command will start the localserver at port 8889.

Note: For windows Port is set in package.json :
"start": "set PORT=8889 && react-scripts start"

---

For linux users :
Try: "start": " PORT=8889 && react-scripts start"

The  functionalities are such as: 

1. Fetching all post from backend server and displaying on page.
2. Creating a new hashed link, storing to server and displaying on page.
3. Deleting a specific Link post.

The edit functionality is missing from front-end at the moment.
