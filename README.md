## TOPCOINSMARKET

### `ABOUT PROJECT`
This is single page React application that allows for a simple analysis of crypto assets. This contains two sections, one is market overview and second is liquidity analysis. <br/> The data is fetched from coinmarketcap API, please refer API documentation available at https://coinmarketcap.com/api/documentation/v1/.
By default landing screen returns top 100 coins. There is an option to change number of records by using a select/dropdown with predefined values: 10, 50, Max.
There is navigation provided to Liquidity analysis page. This screen displays a scatter plot chart for rendered current table (tab 1) records with X axis having Market Capitalization, Y axis is Volume (24h) and Z axis is absolute price change (24h).

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, please run:

### `npm install`

Please run `npm install` to install all the dependencies required to run the application.

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

## Implementation Details
### `React redux`
React redux is used to exchange data between market overview component and liquidity analysis component. 

### `Server side pagination`
Pagination is achieved through server side api calls, simple bootstrap UI is used to achieve pagination UI. 

### `Scatter plot chart`
I have used `highcharts` for 3D or 3 axis scattered representation, I have in detail analysed best charts available and decided to go with highcharts as I found this library good for 3D data representation. 

### `React-Routing`
React routing is implemented so that application can be easily scalable further with more modules, currently routing is not useful in this application as it is single page. 

### `API data`
The application is fetching data from API https://sandbox-api.coinmarketcap.com/v1. I have also placed a src/dataset folder to test the application with dummy data. If you would like to run the application with local data, then please uncomment line no 4 and 45 in actions.js and comment line no 37 to 44 in actions.js.

### `Folder structure`
The source folder structure is created in such a way with containers, components, store etc folders to be easily scalable, understandable and modular.

## Other Details

### `create-react-app`
Application is built from scratch using command `npx create-react-app topcoinsmarket`

### `redux`
Redux is used in this application for managing application state.

### `react-redux and redux-thunk`
React components read data from a Redux store, and dispatch actions to the store to update data.

### `react-bootstap`
- react-bootstap is used as front-end framework for styling and layout.
- Webpage is responsive and supported on different devices. Use chrome `Toogle device toolbar` to view different window layout such as small  devices (mobiles and tabs).

### `SUPPORTED BROWSERS`
Application is best viewed in latest chrome browser, safari and firefox. please refer to `development` section in package.json for supported browsers. <u>Application is not supported in Internet explorer due to latest create react app feature.</u>

## Other Aspects 

### `HIGHCHARTS`
I have implemented the highcharts by learning for this assignment, I could have implemented more features using highcharts but due to time constrait I could not implement all the available features (like 3D rotation) in Highcharts. It was a very good learning and challenging task and I thoroughly enjoyed solving the task.

### `Source Code`
I have used latest ECMAScripts and Javascript code, I could have made it more modular but had a time constraint.

### `Testing`
I have spent time manually testing the application and visualizing the data, I have capability to automate unit testing using `JEST and Enzyme`. I would always cover automated unit testing during development but apologies as I could not cover automation testing this time as it took little more time than expected to learn 3D scattered plot chart. 


