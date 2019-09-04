# Stock Exchange Application (Frontend)

## Overview

RESTful Web Service designed for stock analysis on the basis of data from [Quandl](https://www.quandl.com/data/WARSAWSE-Warsaw-Stock-Exchange) platform - in
this case WIG20 (a stock market index of the twenty largest companies on the Warsaw Stock Exchange).

## Technology stack

|Main technologies|
|:---:|
|JavaScript + React + React Router + Redux + Styled Components|

|Other technologies|Role|
|:----|:----|
|Axios|Communication with backend and Quandl|
|Formik + Yup|Data validation in forms|
|React ReCaptcha|Protection against Internet bots|
|JWT|Access to the resources after login|
|Chart.js + plugins|Zomming and panning in the line chart|
|React-Toastify|Snackbars and error information|
|Moment.js|Formatting and manipulating dates|
|ESLint + Prettier|Static analysis of the source code|

## Live Preview

The project was deployed on Heroku platform: [stock-exchange-frontend.herokuapp.com](https://stock-exchange-frontend.herokuapp.com/)

Please wait a second and enter the following data:

Email: `v@v.v`

Password: `v`

If you will see the error: `An error occurred when attempting to sign in. Error: Network Error`, try to sign in again - this means that a back-end part of application is not active yet.

## Quick start

Install dependencies:
```
npm i
```
Run frontend on localhost:3000:
```
react-scripts start
```

## Features

Stock chart with the possibility of panning and zooming:
![quotes](https://user-images.githubusercontent.com/21959354/64079665-86f30d80-ccea-11e9-86bc-fc1dfaf2969b.png)

Implementation of nine stock market indicators:
![indicators](https://user-images.githubusercontent.com/21959354/64079620-0af8c580-ccea-11e9-8ea0-0cc7e61d3da2.png)

Accordion table containing transaction history:
![transactions](https://user-images.githubusercontent.com/21959354/64079623-0b915c00-ccea-11e9-824d-ce9bfd7195f1.png)

Possibility of adding own notes and articles from the Internet:
![notes](https://user-images.githubusercontent.com/21959354/64079621-0af8c580-ccea-11e9-81e1-f8c37c1d5fe9.png)

## Comments

This is a front-end part of Stock Exchange Application.

Visit also a back-end repository: [github.com/plkpiotr/stock-exchange-backend](https://github.com/plkpiotr/stock-exchange-backend)

## License
Copyright © 2019, [Piotr Pałka](https://github.com/plkpiotr). Released under the [MIT License](LICENSE).
