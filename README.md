# affectiva-emotion-as-a-service-example
Example of using Affectiva's Emotion as a Service API

*NOTE:* the example code does not currently work and gives the error: 

> XMLHttpRequest cannot load https://index.affectiva.com/. No 'Access-Control-Allow-Origin' header is present on the requested resource. Origin 'http://localhost:8080' is therefore not allowed access. The response had HTTP status code 401.

A possible solution might involve asking Affectiva to add this header on the server-side.

However, the code will work inside of a Google Chrome Extension because Chrome Extensions are not limited by the same-origin policy (see: https://developer.chrome.com/extensions/xhr) :)