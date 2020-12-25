# JavaScript and the Browser

## Because I like writing, learning, and I like teaching, I am going to write a series of blogs related to software. When I decided I wanted to get into software development as a career, one of the first languages I was encouraged to learn and tried to learn was JavaScript.

<img height="400" src="../javascriptAndTheBrowser/coolJSGif.gif" alt="Cool JavaScript GIF">

###### I took this GIF from DRIES BUYTAERT's [website](https://dri.es/). Its pretty awesome in my humble opinion.

## JavaScript: What is it?

[JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) is a programming language that gained notoriety for being so useful on the web. [W3 Techs] (https://w3techs.com/technologies/details/cp-javascript) says 97% percent of websites use JavaScript on their front ends. On the back end of things, Node.js, the popular JavaScript runtime environment, continues to gain market share in usage as well for developers.

To quote [Jeff Atwood](https://en.wikipedia.org/wiki/Jeff_Atwood), “Any application that can be written in JavaScript, will eventually be written in JavaScript.”

Jeff’s statement is knowns as Atwood’s Law. In 2020, it increasingly looks like Jeff seems to be correct. Before we dive any deeper into JavaScript’s relationship with the browser, lets talk about web browsers.

## What is a web browser?

Web browsers enable users to look around the internet! Google Chome, Apple’s Safari, and Mozilla FireFox are a few of the popular ones. [Here](https://www.mozilla.org/en-US/firefox/browsers/what-is-a-browser/) is a better explanation.

## What happens when a user types a website address into a browser and clicks enter?

<img height="200" src="../javascriptAndTheBrowser/userError.png" alt="A puzzled user loking at her computer screen">

When a user on a web browser, enters a website URL, such as, www.google.com or www.fatcatdog.github.io, into a browser search bar and hits enter, what happens next?

The way I understand it is the following:

We will refer to the user’s browser as the client (on their smartphone or laptop). The client sends a request to a web server asking for the contents of the website at address www.google.com/, which is mapped to an IP address like 123.123.123 (basically a phone number for computers) using the [DNS system](https://en.wikipedia.org/wiki/Domain_Name_System), which is pretty much a phonebook for computers. Assuming the web server we’ve been routed to behind www.google.com is up and running, Google’s backend server responds with the assets like HTML, images, CSS, and JavaScript back to the user’s client over the cable wire connected from Google’s local CDN to our Wifi modem.

The explanation I just gave skips over many important aspects of modern web applications that are pretty much common to high-traffic websites like [CDN](https://www.cloudflare.com/learning/cdn/what-is-a-cdn/), [load balancers](https://www.nginx.com/resources/glossary/load-balancing/), [firewalls](https://www.cisco.com/c/en/us/products/security/firewalls/what-is-a-firewall.html) , [web servers](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/What_is_a_web_server) and [databases](https://www.oracle.com/database/what-is-database/). A common interview question for developers is actually, “Explain to me what happens when a user puts www.google.com into a browser and hits enter?”. Mozilla gives a great introductory explanation [here](https://developer.mozilla.org/en-US/docs/Web/Performance/How_browsers_work). [Mariko Kosaka](https://twitter.com/kosamari) of Google gives a much more in depth explanation [here](https://developers.google.com/web/updates/2018/09/inside-browser-part1#cpu_gpu_memory_and_multi-process_architecture)

Realistically, 99.9% of developers, including me, wouldn’t be able to explain what happens when you hit enter to the extent of Mariko’s explanation, but it’s good to know the things you don’t know.

<img height="200" src="../javascriptAndTheBrowser/knownUnknown.jpg" alt="Donald Rumsfeld in Errol Morris's movie about his US military career">

###### This image is from Errol Morris's [documentary on Donald Rumsfeld](https://en.wikipedia.org/wiki/The_Unknown_Known). Rumsfeld's controversial speech included a statement explaining "...there are known knowns; there are things we know we know. We also know there are known unknowns; that is to say we know there are some things we do not know. But there are also unknown unknowns—the ones we don't know we don't know...." I think this statement can also be used as a good learning strategy for developers approaching systems unfamiliar to them. While you don't need to learn everything about everything you are working on, you should at least try understand what you don't know.

Because so many man hours go into building a modern web browser, most modern web browsers are forked, or based on, a version of Google’s open source [Chromium project](https://en.wikipedia.org/wiki/Chromium_(web_browser)) so every company doesn't need to reinvent the wheel to release a browser. Chromium is primarily built in the programming languages C, C++, and in part you guessed it, JavaScript. Academics and industry leaders work together, within organizations such as the World Wide Web Consortium [(W3C)][https://en.wikipedia.org/wiki/World_Wide_Web_Consortium] to agree on the standards and rules that govern the world wide web and what browsers are expected to be able to do on the web. Along with JavaScript, modern web browsers are also able to run the programming languages HTML, CSS, and lesser well known [WebAssembly](https://en.wikipedia.org/wiki/WebAssembly#Specification).

## History of JavaScript

<img height="200" src="../javascriptAndTheBrowser/oldCell.jpg" alt="A guy in the 1950's using an early car phone">

###### Image of a guy in the 1950's using an early mobile phone (phone attached to his car which we should assume is attached to a huge antenna!) from this [site showing how old cell phones looked](https://www.considerable.com/entertainment/retronaut/can-you-hear-me-now-the-rise-of-the-monster-mobile-phone/).

In 1995, JavaScript was initially designed and released to the public to perform small animations in your browser, like changing the CSS (styling) on a section of text when a user clicks it, or forcing the page to load a different URL when a user clicks a button. 25 years later, pretty much anything that you can do with a computer you can probably do it with JavaScript, and if not, there is probably a company or team of developers working to make it so.

In a [lecture](https://www.youtube.com/watch?v=v2ifWcnQs6) by [Douglas Crockford](https://en.wikipedia.org/wiki/Douglas_Crockford), a well known JavaScript professional, Douglas details the logic the designers and experts of the JavaScript language were forced to use to continually improve and design JavaScript over the years. Because so many developers and companies were using JavaScript as soon as it was made available to the public, the designers of the language were not really able to design a language as they would have preferred, but rather, the brains behind JavaScript were forced to channel most of their energies into not breaking every website on the internet while working on introducing newer needed features into the language.

So in a way, some things about JavaScript [don’t make too much sense](https://medium.com/javascript-non-grata/the-top-10-things-wrong-with-javascript-58f440d6b3d8). Regardless of that, for early career devs who want to get hired, JavaScript is a great language to learn because of its usage in the market even though many aspects of the language simply don’t make sense intuitively and can cause great headaches to JavaScript devs.

How could we find out if a website is using JavaScript running in its front end?

On Google Chrome on a laptop or desktop, open up [Chrome Dev Tools](https://developers.google.com/web/tools/chrome-devtools). (all of the other major browsers, like Safari, Firefox, etc. have similar tooling systems for the browser).

Click the Sources tab

<img height="400" src="../javascriptAndTheBrowser/indexFileShowingNoScript.png" alt="Index.html file in sources tab in Chrome dev tools">

Click the file called index on the left side of the page. By default, browsers attempt to open up the index.html file located at the root of the web application folder upon loading assets from a URL. If you see anything like “<noscript>You need to enable JavaScript to run this app.</noscript>” Chances are that website is using additional JavaScript on the front end to instruct the web application to render the website. Some users disable JavaScript in their browsers, so this message will be rendered to the user if this is the case for them. If we see any "function"s in between any <script> and </script> tag, like we do in the above screenshot, that look like JavaScript to me as well!

<img height="45" src="../javascriptAndTheBrowser/showingImportCSSSHeets.png" alt="Index.html file showing css imports">

In the screen shot above, we see the website attempts to import and run a few different CSS sheets. Websites can also import JavaScript files here just like we are loading CSS styles here. If you see any JavaScript files being imported here, there we go!

Lets look at the other folders and files in our folder. We want to stay in the files/folders within our domain (our domain is our website URL being fatcatdog.github.io, if you have Chrome plugins installed like I do, you will see a few other domains as well). This is where our site will probably have its images, other stylesheets, and more javascript files.

<img height="400" src="../javascriptAndTheBrowser/sourcesFolderShowingIndexFile.png" alt="Looking at the files in our domain sources folder">

### Lets look around, surprise surprise, I see lots of JavaScript!


<img height="400" src="../javascriptAndTheBrowser/allStaticFiles.png" alt="Lots of files in our sources tab">

My website, fatcatdog.github.io, is built with React's Create React App framework. If you look at a Create React App's configuration files, there is a lot going on. To be honest, i don't understand what all the different properties and settings are doing. Create React App definitly saved time in building this website though.

## Lets try execute some JavaScript in Chrome Dev Tools

I was wondering, how much money does the average American spend on Christmas festivities every year?

<img height="400" src="../javascriptAndTheBrowser/avgChristmasSpend.png" alt="Avg american spend on christmas is 1000 $ looks like">

Looks like $1000 to me. I want to calculate, over 40 years, from the ages of 21 to 61, how much money could the average American have saved if they were not to spend any money on Christmas? Lets assume, if instead of spending $1000 on gifts and party stuff, they were to invest that into the S&P 500 into a low fee or no fee investment vehicle. The average return on the S&P 500 looks to be close to 10%, so we need to do some math to calculate how much Americans are missing in savings here.

Here is the JavaScript/math i came up with:

```
missedSavings = 0;

for (let i = 0; i < 40; i++) {
missedSavings = missedSavings + 2000;
missedSavings = missedSavings * 1.10;
}

missedSavings;
```
Lets pop it in Chrome Dev Tools's Console:

<img height="400" src="../javascriptAndTheBrowser/missedSavingsConsole.png" alt="screenshot of our javascript in chrome dev tools console">

It looks like average Americans are missing out on close to $1,000,000 dollars in lifetime savings by celebrating Christmas! Santa Claus isn't even real and they are throwing away McMansions!

## Without using React, or any other complicated JavaScript front-end framework, how can we run some JavaScript in the browser?

1. Lets start by creating a folder on our desktop. I'm going to name my folder JavaScriptInTheBrowser

2. I am going to add an index.html file in my folder.

If you are on a Mac. You can execute these commands to create your folder, and file, using the Terminal. Commands might differ if you are using an alternative operating system.

<img height="300" src="../javascriptAndTheBrowser/terminalScreenshot.png" alt="Screenshot of my terminal">

3. I am going to add some boiler plate HTML code so i can try deploy my index.html file into my browser. I copied my code from this [website](https://csswizardry.com/2011/01/the-real-html5-boilerplate/) I am going to delete the lines that are importing CSS and JS sheets. I am also going to change some the text.

```
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<title>HTML5 boilerplate</title>
</head>

<body id="home">

	<h1>HTML5 boilerplate – fatcatdogs new website</h1>

</body>
</html>
```

4. Now i am going to copy the location of my newly created index.html file, so for me it:

/Users/jacob/desktop/JavaScriptInTheBrowser/index.html

I am going to paste it in the browser, and voila, I see my index.html file in action!

<img height="150" src="../javascriptAndTheBrowser/fatcatdogsNewIndexFile.png" alt="Screenshot of my terminal">

5. Lets create a JavaScript function called ourFirstFunction in between a <script> tag  and </script> tag within our head div, a button that will call this function, and a paragraph component with id "firstDiv" which will be changed by our function.

```
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<title>HTML5 boilerplate</title>

<script>
	function ourFirstFunction() {
	  document.getElementById("firstDiv").innerHTML = "We just used JavaScript to add some text!";
	}
</script>

</head>

<body id="home">

	<h1>HTML5 boilerplate – fatcatdogs new website</h1>

	<button type="button" onclick="ourFirstFunction()">Try it</button>

	<p id="firstDiv"></p>

</body>
</html>
```
6. If we reload our index.html file in the browser, initially we don't see any new text. After clicking our button, we do! If you don't see any new text which should be added if our function is working, open up chrome dev tools, open up the console tab, and see if the browser is complaining about its issues executing our JavaScript function. Feel free to ping me on Twitter if you are stuck here, or anywhere for that matter!

This is one way to add JavaScript to an HTML file. Usually, with the more features you add to a website, the more JavaScript gets added as well. Before you know it, your inline JavaScript could start resembling a non-understandable pile of spaghetti code. In an effort to reduce the spaghetti-ness of our JavaScript, lets create a JavaScript in a new folder within our project's directory, and lets try import it into our index.html file.

7. Lets create a new folder, with a new JS file in it.

<img height="150" src="../javascriptAndTheBrowser/ourFirstJsFile.png" alt="Screenshot directory">

8. Lets add some code into our new JS file:

```
function ourSecondFunction() {
  document.getElementById("home").style.color = 'orange'
}
```

This function tries to change the color of the contents in element with ID "home" to the color orange.

9. Lets update our HTML in index.html to import our JS file.

```
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<title>HTML5 boilerplate</title>

<script>
	function ourFirstFunction() {
	  document.getElementById("firstDiv").innerHTML = "We just used JavaScript to add some text!";
	}
</script>

<script  type="text/javascript" src="/Users/jacob/desktop/JavaScriptInTheBrowser/JS/ourJSFile.js"></script>

</head>

<body id="home">

	<h1>HTML5 boilerplate – fatcatdogs new website</h1>

	<button type="button" onclick="ourFirstFunction()">Try it</button>

	<p id="firstDiv"></p>

	<button type="button" onclick="ourSecondFunction()">Try it again!</button>

</body>
</html>
```
10. Lets click some buttons!

<img height="300" src="../javascriptAndTheBrowser/websiteInAction.png" alt="Looks like our JavaScript is working">

The only changes we would need to make in this project to deploy it online, would be to change the file/path location from our local computer environment.

Thats is for now, thanks for reading. Feel free to contact me at [@fatcatdog2](https://twitter.com/fatcatdog2) with any comments, pointers, or suggestions for different content.
