# common
Provides components for the use of a simple set of functions to be utilised throughtout 
an application.

# Install

```
npm install @caribviper/common
```

# Usage
## Common Utilities Methods

### getRandomId 
generates a random id for use with objects
e.g.: Utilities.getRandomId()

### getPropertyName
get the property name of the passed property. Property can either string or (model) => TValue)
e.g.: Utilities.getPropertyName(('property')
Utilities.getPropertyName((x=>x.property))

### isNumberValid/isNumeric 
checks to see if a number is numeric
e.g.: Utilities.isNumberValid(n)
Utilities.isNumeric(n)

### isFunction 
Checks if the passed item is a function
e.g.: Utilities.isFunction(functionName)

### isDate 
Checks if the passed item is a date
e.g.: Utilities.isDate(d)

### isDateRangeValid 
Checks if the passed date range is valid
e.g.: Utilities.isDateRangeValid(start, end)

### join 
Joins path segments.  Preserves initial "/" and resolves ".." and "." Does not support using ".." to go above/outside the root.
e.g.: Utilities.join(path1, path2, path3)

### sortBy 
Sorts an array based on the passed properties. Should be used for multiple field sorts.
e.g.: Utilities.sortBy(sortArray, {propertyName, descending})

## String Utility Methods

### replaceAll 
Searches a string for all matches and replaces them with the replacement text.
e.g.: StringUtilities.replaceAll(target, search, replacement)

### join 
Join a series of string separated by defined character
e.g.: StringUtilities.join(':', 'string', 'string2', 'string3') //result 'string:string2:string3'

### capitalize 
Capitalize a given value of text.
e.g.: StringUtilities.capitalize('boy') //result 'Boy'

### ellipse 
Truncates a string to be shown as an ellipse
e.g.: StringUtilities.ellipse('This is a sentence', 4, true) //result 'This...'

## Assert Methods
All assert methods throw an error when validated to false

### isTrue 
Asserts whether the value passed is true
e.g.: Assert.isTrue(value, 'Not trye', 'Assertion Title')

### isFalse 
Asserts whether the value passed is false
e.g.: Assert.isFalse(value, 'Not false', 'Assertion Title')

### isTruthy 
Asserts whether the value is not false/undefined
e.g.: Assert.isTruthy(value, 'Not truthy', 'Assertion Title')

### isFalsey 
Asserts whether the value is not falsey or undefined
e.g.: Assert.isFalsey(value, 'Not falsey', 'Assertion Title')

### isNonEmptyArray 
Asserts whether the value passed is a non empty array
e.g.: Assert.isNonEmptyArray(value, 'Invalid array', 'Assertion Title')
