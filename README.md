
# TGIN Landing Page 

This project is my redesign of the hair care brand [TGIN](https://tginatural.com/). Users are able to browse through the collection of products, get a quick view of the product details, and add/remove items to/from the 
shopping cart.  

***Project Link*** : https://tgin-landing-page.netlify.app/

<img width="1000" alt="tgin-screenshot-desktop" src="https://github.com/AOA19/tgin-landing-page/assets/66294921/40f1a070-3423-43b6-9d00-2e3c13e72ad3">


 ### Built With
 * ReactJS
 * React-Bootstrap
 * SCSS
 * Hosted via Netlify


## Installation and Setup Instructions

Install ```node``` and ```npm``` globally

1   . Clone repo

```
git clone https://github.com/AOA19/tgin-landing-page.git
```
2  . Change directory
```
cd tgin-landing-page
```

3 . Install dependencies

```
npm install
```
4 . Start server
 ```
npm start
```
5. View Application
```
localhost:3000
```
6 . Build and deploy application
```
npm build
```

## Reflection 

This project was orginally created for the [SheCodes Beauty Brand Landing Page Monthly Challenge](https://www.shecodes.io/contests/beauty-brand-landing-page-challenge/instructions#instructions). Instead of creating an html file for the page I chose to use ```create-react-app``` for the project. The project is built using ```react-18.2.0```, ```react-bootstrap-2.7.4``` for the components and ```sass-1.62.0``` for styling. 

I wanted to build an application that would allowed users to view data pulled from an array similar to pulling data from an API. Users can scroll through the products and get a quick snapshot of the detials for each product and add the items to their cart. I wanted users to be able to filter through the products based on the product type and/or catergory and have those specific products render only on the screen.  But I ran into a few challenges with the filter only showing products for some types but not all and with the position and spacing of the filter itself. For right now the filter has been removed, but will be added feature in the future. 

## Acknowledgements

 - [Code Commerce](https://youtu.be/GDd2c70gsxE)  React Website Tutorial - helped with creating the data array for all the products that render onscreen.
 - All product images sourced from [TGIN](https://tginatural.com/) 
 - Images optimized with [ImageKit](https://imagekit.io/)
 - Icons from [React Icons](https://react-icons.github.io/react-icons/) and [Flaticon](https://www.flaticon.com)
 
