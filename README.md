# common
Provides components for the use of a simple set of functions to be utilised throughtout 
an application.

# Install

```
npm install @caribviper/common
```

## Usage
Common Utilities Methods

getRandomId - generates a random id for use with objects

getPropertyName - get the property name of the passed property. Property can either string or (model) => TValue)

isNumberValid/IsNumeric - checks to see if a number is numeric

isFunction - Checks if the passed item is a function

isDate - Checks if the passed item is a date

isDateRangeValid - Checks if the passed date range is valid

join - Joins path segments.  Preserves initial "/" and resolves ".." and "." Does not support using ".." to go above/outside the root.

sortBy - Sorts an array based on the passed properties. Should be used for multiple field sorts.

String Utility Methods

replaceAll - Searches a string for all matches and replaces them with the replacement text.

join - Join a series of string separated by defined character

capitalize - Capitalize a given value of text.

ellipse - Truncates a string to be shown as an ellipse

Assert Methods
All assert methods throw an error when validated to false

isTrue - Asserts whether the value passed is true

isFalse - Asserts whether the value passed is false

isTruthy - Asserts whether the value is not false/undefined

isFalsey - Asserts whether the value is not falsey or undefined

isNonEmptyArray - Asserts whether the value passed is a non empty array
