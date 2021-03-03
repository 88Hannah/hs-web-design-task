# Web Design Task - Voucher Landing Page

## Basic Setup
The landing page has been built using the React JavaScript library. The project was created using [`create-react-app`](https://reactjs.org/docs/create-a-new-react-app.html#create-react-app) and a live version of the page has been set up here: https://landing-page-88hannah.vercel.app/

### Running Locally
#### Dependencies
- Node version 10.16 or above
- Node Package Manager (NPM) version 5.6 or above

### `npm start`
This runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
 
### `npm run build`
This builds the app for production and creates a `build` folder within the project.

### File Structure
The majority of the code sits in the `src` folder. Within here there is a `components` folder where each component contains its own relevant JavaScript. The CSS `index.css` for the project can also be found in the `src` folder along with the JSON data files. 

## React

### Data
There are two JSON files containing all of the data for the project. The data has been separated from the rest of the project to better simulate a live page. However, instead of calling a REST API to retrieve the data from a back end system, the data is read directly from the JSON files. 

### `cases.json`
This holds the name, image file name, original prices and current price for each wine case on the landing page. I chose not to hard code the saving, price per bottle, and payment price as they can all be calculated from the information in the file and the voucher price. This means that if the current price were to be changed only one data point needs to be updated rather than four. 

### `wines.json`
This file holds all of the information needed for each wine card. Instead of recording the percentage of people who would buy it again, I calculated the number of people who said they would buy it again as it is more logical to store the raw data and calculate the percentages within the code. 

### Components
The project has been split into four components:

- `Cases.js` (top section)
- `CaseButton.js`
- `Wines.js` (bottom section)
- `WineCard.js`

#### Reusable Components
`Cases.js` and `Wines.js` were separated out from a visual point of view. They are two distinct sections on the page and in the future they may be required independently of each other. 

#### Repeated Components
`CaseButton.js` and `WineCard.js` were turned into components so that they could be used multiple times for the repeated content. 

In both cases the data has been mapped over and an instance of the component has been created for each data entry. 

### State
I chose to store two bit of data in state:
- The selected case, referred to by its index number in the JSON object
- The data associated with that case

Each time the selected case is changed (managed in the `CaseButton.js` component) the `useEffect` Hook re renders the page to show the updated information. 


### Additional Points
- Although the voucher amount is stored as a variable and can easily be changed within the `Cases.js` file, I would have ideally liked to store it in a separate data file, however it seemed slightly over the top to create a file for just one value. 
- During this project I found out that `case` is a reserved JavaScript word which was a little annoying at the time! 

## Wire Frames
This is the first time that I have used Sketch. I've enjoyed how simple it is to pick up the basics and I was quickly able to retrieve the information that I needed for the landing page. 

Before coding any of the web page I downloaded the files to mock up my own mobile version of the site. I felt that it was important to do this as my design decisions may have impacted the markup of the page. Although I may not have stuck to my design 100%, it gave me a good starting point. I created this in Adobe XD and I have included an image of the wire frame that I created in the `Wire Frames` folder. 

## Responsive Design

I have built this page 'mobile first'. A page with good HTML markup looks fairly reasonable on a mobile screen with no layout styling. A lot of the concepts used for larger screens to get elements to sit next to each other on a page break the natural flow of the markup and, if implemented first for desktop, often have to be undone for mobile devices. Designing a page mobile first tends to produce simpler and more concise CSS. 

One of my goals when constructing a web page is to make sure that it works for all screen width, and not just the most popular. The mobile design was built with a width of 360px in mind but i have made sure that it still functions well down to 320px which is the smallest screen size that the majority of web pages accommodate, although I know that there are some smaller ones out there! 

I try to minimise the use of breakpoints and allow elements to naturally resize as the screen shrinks and grows. Media queries for break points are, however, a very useful tool and necessary for layout changes as well as the odd font size adjustment.

I have chosen to use the same breakpoints as the [Bootstrap library](https://getbootstrap.com/docs/5.0/layout/breakpoints/) because these have been chosen with common devices types and sizes in mind.  




## CSS

### Class Names
My aim is to keep class names descriptive yet concise. 

I have loosely followed the BEM naming convention where a **B**lock is split into **E**lements (denoted by `__`) and similar elements can be distinguished by **M**odifiers (denoted by `--`).

A good example of BEM within this project is within the orange savings circle:
- `saving` is the entire circle and content
- `saving__text` is the text inside the circle
- `saving__text--small` and `saving__text--large` are the different styles of text within the circle

However there were other elements where it didn't seem necessary to follow the naming convention, such as `add-to-basket` which is descriptive enough in it's own right. 

### Variables
The main colours used on the site have all been set at CSS variables so that they can easily be referred to and all instances of the colour can be changed in one go if required. 

### Font
The font has been set to Sofia Pro which is the font used in the wireframe. However web searches for this font appear to show a slightly different style to that shown in the wireframe. 

A fallback Google font has been added which is said to be a good alternative to Sofia Pro.

### Sizing
The majority of the sizing (fonts, padding, margins) has been done in em and rem units. Rem units have been selected when the font size of the element is likely to change or when it was more appropriate to reference a size in relation to the body's font size of 16px rather than the element's font size. 

Some of the units did start to get a little complicated with up to 4 decimal places being used. On reflection I would potentially consider changing the body font size to 10px to make the conversions easier or leaving some of the sizes in pixels. 

### Crazy Calculations
In order to keep the ratios of elements in line with each other I ended up with a couple of crazy calculations. These were calculated from the sizes of other elements on the page and not found by trial and error. Here is one example: 

```
@media (min-width: 992px) {
  .saving__text {
    font-size: min(calc((100vw - 4em - ((100vw - 4em) * 0.07) - 395px) * 0.028), 1.125em);
  }  
}
```

As the image of the cases resized, I wanted the orange savings circle and the text inside it to resize at the same time and at the same rate. This is how I came to the above calculation. 

- The font size of the word "saving" in the wire frame is 18px and the image of the cases is 641px wide. 

- 18 is 2.8% of 641 so the text needs to be 2.8% of the width of the image. 

- For screen widths between 992px ans 1200px the width of the image is:

**(Full width of the page) - (left and right margins) - (margin in between the image and the summary card) - (summary card)**

- Full width of the page = `100vw`

- Left and right margins are 2m each = `4em`

- The margin in between the image and summary card is set to 7% of the main container which is the full width of the screen minus the margins on either side. Therefore = `(100vw - 4em) * 0.07`

- The width of the summary card = `395px`

Putting all of this together gives the final calculation. Eventually the image maxes out at 641px and the font needs to be set to a consistent 18px (or `1.125em`).


## Design Modifications

Although on the whole I have stuck to the provided design, there have been a few occasions where I have purposely deviated from them:
- The left and right arrows on the carousel were not level so I have made them sit in line with each other in my version. 
- The design didn't have consistent spacing between the icons (location, style and grape) and the associated text. All three had different values and I have chosen to make it consistent.
- The case selection buttons had different spacing between the text "Choose your case" and the "Mixed" button and the "Luxury" button and the end of the case image. To implement this would have required additional CSS which seemed unnecessary. 
- The margins around the "Add to basket" button were not consistent. 22px to the right, 24px to the left and 28px below. As they were so close I decided to make them consistent.  

I would raise all of these points with the designer. The difference to the naked eye is minimal and therefore it is likely that my solution would be accepted however there may be reasons behind the decisions for the specifics of the design that I am unaware of. 


## Flickity
There are many resources available which mean that it is not always necessary to start from scratch. I found this to be the case with the wine carousel. 

I have used the plugin [Flickity](https://flickity.metafizzy.co/) to create the carousel. I have worked with a different carousel plugin before and run into a few pain points when attempting to customise it. After some research, Flickity appeared to provide the functionality that I needed in this project. 

If you are using Flickity on commercial sites, you are required to purchase a licence.

I chose to link to the relevant JavaScript and CSS files directly using a CDN rather than download them or install the Flickity package. If I were using it on a larger project then I would consider downloading and hosting the files myself to avoid any issues with breaking changes. 

### Set Up
Flickity was simple to initialise, I chose to add the required class name and a data attribute to the `<div>` where I required the carousel. The majority of the styling can be controlled through CSS and the documentation on the [Style](https://flickity.metafizzy.co/style.html) page was very useful and easy to follow. 

### Design choices
Carousels on mobiles can sometimes cause problems. There is lots of research that says that they shouldn't be used as scrolling from left to right isn't as intuitive as scrolling up and down and that content can get lost and never seen. However I felt that a mobile carousel complemented the existing desktop design and would be preferable to stacking the eight wine cards ontop of each other. There are certain carousel layouts that improve the experience for the users. The main aim is to make it obvious that sideways swiping is available and to show the user how far along the carousel they are. 

Therefore I decided to introduce a 'peak' of the next card to indicate that the element is a carousel and provide the 'dot navigation' to show the user how long the carousel is. I feel that this has worked well in this situation. 

### Set backs
One of the features that initially attracted me to Flickity was the ability to set the position of the featured cell. It can be set to the left, centre or right of the carousel. I intended to set it to centre for mobile view and left for desktop view. I then learnt that this setting is an ['option'](https://flickity.metafizzy.co/options.html) which is set in the data attribute. I implemented it within the JSX (the syntax extension to JavaScript to mimic HTML in React) by using matched media queries within the JavaScript and although this worked well on first load, the settings did not change when the page was resized. I would have had to create a function that was always listening for a change in the page width. 

Instead, I investigated overriding the styling myself with a combination of padding and margins. Once I realised that this was a viable option I focused my attention on making this work for all screen sizes. 

### Calculations Explained
I chose to set the position of the featured cell to left aligned and manipulate the CSS to centre it on smaller screen sizes. I decided that on a mobile a card should take up 80% of the screen width with a slight 'peak' of the next and previous cards off to the side. I had to do the following:

```
.main-carousel {
  margin-left: -1em;
  margin-right: -1em;
}
```
- This counteracted the margin put in place on the entire content to allow the carousel to extend to the full width of the screen. This means that when you slide the carousel it gives the impression that the card is scrolling off the edge of the screen. 

```
.carousel-cell {
  width: min(450px, 90%);
  padding-left: max(10%, calc(100vw - 450px));
  margin-right: calc(1.5em - max(10%, calc(100vw - 450px)));
  height: max-content;
}
```
- The total width of the card also includes the padding that I needed to add to centralise the card. Therefore I had to increase my optimum `80%` to `90%` and to stop the card from becoming too large, I set the maximum size of the entire card to `450px`.
- As I required my card to fill `80%` of the screen I wanted a gap of `10%` either side. As the card would naturally sit to the left of the screen I added a `padding-left` of `10%` to push it into the centre. For the screen sizes where the width uses the `450px` instead of the `90%`, this padding has to be set to `100vw` (the full width of the screen) minus the `450px`.
- The above calculations have effectively moved the entire card to the right, so to compensate for this the `margin-right` needed bringing in by the same amount. The initial `1.5em` is the standard margin used in the desktop set up. 


```
.carousel-cell:last-of-type {
  padding-right: max(10%, calc(100vw - 450px));
  width: calc( min(450px, 90%) + max(10%, calc(100vw - 450px)));
}
```

- The final card was glued to the right hand side of the screen whereas I wanted it to be centred. This required a `padding-right` of the same amount as the `padding-left` on all cards. To compensate for this additional padding, the width of the card also needed to be increased by the same amount. 

Similar calculations were completed for other screen sizes to ensure the optimum view of the cards for all device widths. 

### Observed functionality
On first inspection the carousel appears to work well. However it does have a slight quirk which is that when you think you have come to the end of the carousel on desktop you are still able to click the right arrow again (and the same on the left when you go back to the start). This is because the penultimate card is actually the one that is selected and the final click is to allow the last card to become the selected card. I would like to look into whether it is possible to prevent this final click if the last card is in view on the screen to improve the user experience. 


## Summary 
I have enjoyed completing this task and I am pleased with the Final outcome. I have been able to combine numerous CSS techniques and tricks to produce a landing page that closely matched the provided design and that is also fully responsive. 

On reflection I would have liked to refactor some of the CSS and break it down into separate files for each component. 