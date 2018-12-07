# Description
Implementation of a function to convert decimal number to roman literals

# Usage
Open index.html in a browser that supports ECMAScript 6

# Explanation

The code uses a while loop to perform a modulus operation.
At each modulus result the function adds the corresponding roman literal 
to the result string. At the same time, the function subtracts the value from 
operated number that corresponds to the that roman literal.
Thus the code exhaustively breaks down the operated number into roman literals.
Moreover, the code manages the special cases of multiples of 4 and 9.