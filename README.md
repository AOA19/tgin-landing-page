
# TGIN Landing Page 

This project is my redesign of the hair care brand [TGIN](https://tginatural.com/). The creation of this project was inspired by the [SheCodes Beauty Brand Landing Page Monthly Challenge](https://www.shecodes.io/contests/beauty-brand-landing-page-challenge/instructions#instructions). Users are able to browse and filter through the collection of hair products, get a quick view of the product details, and add/remove items to/from the shopping cart.  

***Project Link*** : https://tgin-landing-page.netlify.app/

## Features
- Two sets of filters (Filter by Type and Filter by Collection) that will render the appropriate product images, names and prices based on which filter button is pressed 
- A quick view popup that gives additonal information about that speicifc product 
- A quantity counter that allows users to add and remove items to and from the cart
- A shopping cart that will keep track of how many items are currently in the cart and allow user to add and remove items directly from the cart

## Screenshots 
<img width="1000" alt="tgin-screenshot-desktop" src="https://github.com/AOA19/tgin-landing-page/assets/66294921/40f1a070-3423-43b6-9d00-2e3c13e72ad3">
<img alt="Demo of TGIN" src="https://github.com/AOA19/tgin-landing-page/blob/main/src/tgin-demo.gif" width="250" height="500"/>


## Dependencies
- [React](https://react.dev/)
- [React Bootstrap](https://react-bootstrap.netlify.app/)
- [Sass](https://sass-lang.com/)
- [React Icons](https://react-icons.github.io/react-icons/)
- [React-scroll](https://github.com/fisshy/react-scroll)
- [React Slick](https://react-slick.neostack.com/)
- [Imagekit.io](https://imagekit.io/)

## Installation and Setup Instructions

Install ```node``` and ```npm``` globally

1. Clone repo
```
git clone https://github.com/AOA19/tgin-landing-page.git
```
2. Change directory
```
cd tgin-landing-page
```

3. Install dependencies

```
npm install
```
4. Start server
 ```
npm start
```
5. View Application
```
localhost:3000
```
6. Build and deploy application
```
npm build
```

### Current Bugs and Future Features 

Bugs: 
- Checkout button inside shopping cart closing the whole cart instead of removing everything inside the cart.
- When a quantity of a product is more than 1 is added to the cart, the shopping cart doesn't reflect the accurate quantity added.

Future Features:
- Currently the filters I have work as seperate buttons, but I want to change the design so that there's only one button labeled "Filter". When that button is clicked a dropdown list will appear with checkboxes associated with the different filters. I want to be able to choose multiple filters at the same time (i.e. all stylers for the Curl n Roses collections)
- I want to add multiple images inside of the product quick view popup that the user can click through.
- Some of the products come in different sizes so I want to add a size section inside the product quick view so the user can decide if they want to "purchase" a smaller or larger size of that specific product.
---

### Acknowledgements

 - [Code Commerce](https://youtu.be/GDd2c70gsxE)  React Website Tutorial - helped with creating the data array for all the products that render onscreen.
 - All product images sourced from [TGIN](https://tginatural.com/) 
 - Icons from [Flaticon](https://www.flaticon.com)
 
