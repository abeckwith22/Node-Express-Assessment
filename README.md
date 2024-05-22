# Unit 35 Assessment - Node Express

### Part 1: Conceptual
- [x] Answer the questions inside the ***conceptual.md*** file.

### Part 2: Async and Scripting Practice

#### Write a Command-Line Script
Write a script, ***urls.js***, that does the following:
- [x] It is called on the command line like `node urls.js FILENAME`, and it reads the contents of ***FILENAME***(each line of that file will be a URL).
- [x] For each URL, it will get that page (a GET request to the URL) and save the HTML in a new file.
- [x] For each URL, the output filename should be the hostname of the URL. For example, for the input URL *http://yahoo.com/blah/blah*, your script should write the contents to a plain text file called ***yahoo.com***

#### Handle Errors
- [x] If you cannot read the original file (***FILENAME***), immediately end your script with an error printed to the console.
- [x] If you cannot download a particular URL or cannot write to a particular output file, print an error to the console saying so, but **continue on with the rest of the script.**

### Part 3: Broken App!
You've been given a non-working small app, ***broken-app***, It should have one route:

- [x] **POST /** - Given a list of GitHub users names, this should return information about those developers.
- [x] Should get JSON body like `{developers: [username, ...]}`
- [x] Should return `[ {name, bio}, ...]`

#### Fix it!
Most of the script is written and working. There's at least one bug in it, though, so it doesn't work now.
**Find and fix any bugs!**

#### Refactor It!
- [x] In addition, the code is *terrible*. Use some of the common best practices you've learned for Express apps, and make this better. Feel free to change variable names, add comments, write helper functions/middleware, etc.

##### Document Issues
- [x] Lastly, you want to get credit with your boss for all the hard work you put in fixing this code.
In the starter code, document bad things into the ***issues.md*** file.
