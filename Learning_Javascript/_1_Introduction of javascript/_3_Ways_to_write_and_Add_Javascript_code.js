// Between the body tag of html
/* <body>
    <script>
        code content..
    </script>
</body> */



// Between the head tag of html
/* <head>
    <script>
        code content.....
    </script>
</head> */


// In .js file (external JavaScript)
/* <script src=" "> </script> */


// ------------------------------------Advatages of JavaScript
// There will be following benefits if a user creates an external  javascript

// 1. It helps in the reusability of code in more than on HTML File.
// 2. It allows easy code readability
// 3. It is time-efficient as web browsers cache the external js file , which further reduces the page loading time.
// 4. It is easy to maintain the code as it is stored in a single file.
// 5. it enables both web designers and coders to work with html and js files parallelly and separately , i.e., without facing any code conflicts.
// 6. The length of the code reduces as only we need to specify the location of the js file.



//---------------------- Disadvatages of JavaScript
// 1.  The stealer may download the coder's code using the url of the js file
// 2.  If two js file are dependent on one another, then a failure in one file may affect the execution of the other dependent  file.
// 3.  The web browser needs to make an addtional http request to get the js code.
// 4. A tiny tp large change in the js code may cause unexpected results in all its dependent files
// 5. We need to check each file that depends on the commonly created external javascript file.
// 6. if it is a few lines of code, then better to implement the internal javascript code.