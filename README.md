# Shifty Words

## Problem Definition

Let's define a 'shifty' word as one that continues to be a valid English word even when each consonant has been shifted 'right' but has vowels left in place.
 
For example, BOLD and ABLE are shifty words while ROAD is not. (BOLD becomes COME which is a valid word. Similarly, ABLE becomes ACME which is valid. ROAD becomes SOAE which is invalid)
 
Write a program to find all valid shifty words in the English language ('valid' as defined by existence in /usr/share/dict/words). Your program can be in Java, PHP, Javascript, whatever. Submit your code and amount taken for execution in the comments.
 
To help test your program here are some longer shifty words that your code should find:
 
> FEMUR -> GENUS
> GEKKO -> HELLO
> ASSUME -> ATTUNE
> CHALICE -> DIAMIDE

### Solution

This solution was implemented in CoffeeScript. Consonants are shifted based on character codes, and /usr/share/dict/words (which must be present on your system) is grepped for the shifted word.

## Usage

Invoke shifty.js from the command line:

```shell
$ node shifty.js CHALICE
```

## Build

Prerequisites:
* [Node.js](http://nodejs.org)
* [CoffeeScript](http://coffeescript.org/)
* [Grunt](http://gruntjs.com/getting-started) - Or you can compile this without Grunt using the CoffeeScript compiler

After cloning this repo, run

```shell
$ npm install
```

then

```shell
$ grunt
```

or

```shell
$ coffee -c src/shifty.coffee -o target/shifty.js
```

Then invoke shifty.js as described above.