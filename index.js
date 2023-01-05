/**
 * AnalogJS - Configuration
 */
const config = {
    selector: "#analogjs", // the selector of your canvas
    backgroundColor: "transparent", // the background color of your clock, e. g. "white", "#FF0000", "transparent"
    color: "#252623", // the color of the numbers, ring and hands of your clock, e. g. "white", "#FF0000", "transparent"
    borderWidth: 5, // the width of the clocks border
  };
  
  const date = new Date();
  const analog = new AnalogJS(config);
  analog.setTime(date);
  
  setInterval(() => {
    const date = new Date();
    analog.setTime(date);
  }, 1000);