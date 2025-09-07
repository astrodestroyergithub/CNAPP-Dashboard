# CNAPP-Dashboard
The CNAPP Dashboard is a customizable interface that lets users explore categories, add or remove widgets, and search for specific tools. It offers a flexible way to organize and view key information, adapting to user preferences for quick insights and a streamlined, personalized experience.

**To run the dashboard application, follow these steps:**
1. Navigate to the root directory of the project in your terminal:
```
cd cnapp-dashboard
```
2. Install the necessary dependencies. This will read from the package.json file:
```
npm install
```
3. Start the development server:
```
npm start
```
4. The application will open automatically in your default browser at [http://localhost:3000](http://localhost:3000)

**Notes:**
- This project was generated using create-react-app scaffolding, and it uses the same react-scripts toolchain.
- If you encounter an error about blocked ports, either close the existing process or set a different port:
  set PORT=3001 && npm start   (Windows)
  PORT=3001 npm start          (macOS/Linux)