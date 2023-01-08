# AnalogJS
A simple analog clock written in vanilla JavaScript and CSS.

Example: https://dominique-boerner.github.io/analogjs/

## Folder Structure

```
.
├── css                           # Contains CSS for AnalogJS and different clocks
    ├── themes                    # Contains different clock themes
        ├── default               # Contains clock default theme
        ├── minimal               # Contains clock minimal theme
    ├── variants                  # Contains different clock variants
    ├── style.css                 # Exports the clock styles
├── analog.js                     # The AnalogJS starting point for making the clock work
├── index.html                    # Index.html of the example
├── style.css                     # Contains styles of the example
└── README.md
```

## Create a new Theme

To create a new theme, it is best to make a copy of the folder "css/themes/default/". After you finished, make sure to import your new theme in "css/themes/themes.css".

A theme is made up of three different files:

### clock.css

Describes the design of the watch ring and the point in the middle.

### hands.css

Describes the design of the different watch hands.

### [theme-name].css

Imports clock.css and hands.css, also contains a configuration for your own theme in the form of CSS variables.
