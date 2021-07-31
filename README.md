# Keeper-App

This is my first React app. This is a solution to the keeper-app project challenge by Angela Yu. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Add a note
- Delete a note

### Screenshot

![](./screenshot.png)


### Links

- Solution URL: (https://github.com/faozziyyah/keeper-app)
- Live Site URL: (https://faozziyyah.github.io/keeper-app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- [React](https://reactjs.org/) - React: JS library
- [Material Ui Icons] - For styles

### What I learned

- How to use material UI Icons in React
- React state and hooks

```React.js
const [notes, setNotes] = useState([]);
```
```React.js
function Header() {
    return (
    <header>
        <h1>
        <HighlightIcon />
        Keeper
        </h1>
    </header>
    );
}
```

### Useful resources

- [The App Brewery 1](https://www.appbrewery.co/p/web-development-course-resources) - Web Development Course Resources
- [Material UI Icons](https://www.npmjs.com/package/@material-ui/icons) - This package provides the Google Material icons packaged as a set of React components

## Author

- Linkedin - [omowunmi daud](https://linkedin.com/in/faasamomowunmi-daud)
- Twitter - [@muslimahdev](https://www.twitter.com/muslimahdev)

## Acknowledgments

I'd like to acknowledge Angela Yu on her website development course which I used to learn React.
