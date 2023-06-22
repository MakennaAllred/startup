link to [ReadME](https://github.com/MakennaAllred/startup/blob/main/README.md)

I just completed the assignment to create my repository and push and pull from git and VS Code. 
I think it will take some getting used to, but it seems like a really useful tool. 

# Simon HTML
During this assignment I looked at what the HTML was doing. Because it is so new, it was nice to have Simon as an example. I think it will take som emore practice to understand how including lots of elements works, but overall I feel confident in attempting my own HTML pages.


# Notes

Introduction
- The essential first step to enabling what we now call web programming was the formation of a global communications network that was reliable and publicly available. This was made possible when the United States Department of Defense created the ARPANET as a means of sharing information between universities doing defense related research.
- Tim Burners-Lee is responsible for HTML: One of the key innovations of HTML was the idea that documents could be interconnected with what he termed hyperlinks to allow immediate access to related documents. In 1990 he put all the pieces together and built the world's first web server on his desktop NeXT computer. You can visit a reproduction of the first web site at info.cern.ch.
-  Berners-Lee also made other significant contributions. This included the definition of the HyperText Transfer Protocol (HTTP) and the Uniform Resource Locator (URL). These two definitions specify how web documents are addressed and transmitted across the Internet. The following gives an example of a URL and HTTP request.
-  *CSS* :  Berners-Lee also made other significant contributions. This included the definition of the HyperText Transfer Protocol (HTTP) and the Uniform Resource Locator (URL). These two definitions specify how web documents are addressed and transmitted across the Internet. The following gives an example of a URL and HTTP request.
-  *JAVASCRIPT* :  JavaScript turned the previously static web into an interactive experience where a web page could dynamically change based upon a user's interaction. Brendan Eich

# Console
- pwd: present working console
- echo - Output the parameters of the command
- cd - Change directory
- mkdir - Make directory
- rmdir - Remove directory
- rm - Remove file(s)
- mv - Move file(s)
- cp - Copy files
- ls - List files
- curl - Command line client URL browser
- grep - Regular expression search
- find - Find files
- top - View running processes with CPU and memory usage
- df - View disk statistics
- cat - Output the contents of a file
- less - Interactively output the contents of a file
- wc - Count the words in a file
- ps - View the currently running processes
- kill - Kill a currently running process
- sudo - Execute a command as a super user (admin)
- ssh - Create a secure shell on a remote computer
- scp - Securely copy files to a remote computer
- history - Show the history of commands
- ping - Check if a website is up
- tracert - Trace the connections to a website
- dig - Show the DNS information for a domain
- man - Look up a command in the manual
You can also chain the input and output of commands using special characters
You can get information about a domain name from the domain name registry using the whois console utility

- | - Take the output from the command on the left and pipe, or pass, it to the command on the right
- > - Redirect output to a file. Overwrites the file if it exists
- >> - Redirect output to a file. Appends if the file exists
- CTRL-R - Use type ahead to find previous commands
- CTRL-C - Kill the currently running command

# Git 
![image](https://github.com/MakennaAllred/startup/assets/132696940/c09fb4e5-c912-4346-a14e-0a37b94a6a37)

# The Internet 
Domain names are converted to IP address by doing a lookup in the Domain Name System (DNS). You can look up the IP address for any domain name using the dig console utility.
You can determine the hops in a connection using the traceroute console utility
- chmod: changes permissions to a file or directory
- chmod +x deploy.sh makes a script executable 

# REGEX
![image](https://github.com/MakennaAllred/startup/assets/132696940/0df8a211-ba5c-46f0-bf49-c63e2b781409)
![image](https://github.com/MakennaAllred/startup/assets/132696940/2c83a07d-0302-4c65-8181-99dd5b2cc233)
![image](https://github.com/MakennaAllred/startup/assets/132696940/1f99f433-bda8-4236-8353-cb83fd4574e9)
![image](https://github.com/MakennaAllred/startup/assets/132696940/e778d73b-8e15-441f-98ba-c118bd974edb)

# DNS
The DNS database records that facilitate the mapping of domain names to IP addresses come in several flavors. The main ones we are concerned with are the address (A) and the canonical name (CNAME) records. An A record is a straight mapping from a domain name to IP address. A CNAME record maps one domain name to another domain name. This acts as a domain name alias. You would use a CNAME to do things like map byu.com to the same IP address as byu.edu so that either one could be used.

When you enter a domain name into a browser, the browser first checks to see if it has the name already in its cache of names. If it does not, it contacts a DNS server and gets the IP address. The DNS server also keeps a cache of names. If the domain name is not in the cache, it will request the name from an authoritative name server. If the authority does not know the name then you get an unknown domain name error. If the process does resolve, then the browser makes the HTTP connection to the associated IP address.

As you can see, there is a lot of levels of name caching. This is done for performance reasons, but it also can be frustrating when you are trying to update the information associated with your domain name. This is where the time to live (TTL) setting for a domain record comes into play. You can set this to be something short like 5 minutes or as long as several days. The different caching layers should then honor the TTL and clear their cache after the requested period has passed.

The additional NS and SOA type records that were listed for your domain name are important for working with DNS. These records were created automatically for you when you registered your domain name. The name server (NS) record contains the names of the authoritative name servers that authorize you to place DNS records in this DNS server. Those same authoritative name servers are listed with the registrar that you leased your domain name from. That way the authoritative name server can verify that the DNS records and the DNS registration match and are authorized to represent the domain name when defining DNS records. Otherwise a hacker could just add DNS records and take over your domain name.

The start of authority (SOA) record provides contact information about the owner of this domain name.

# Caddy 
Configuration file: ~/Caddyfile

Contains the definitions for routing HTTP requests that Caddy receives. This is used to determine the location where static HTML files are loaded from, and also to proxy requests into the services you will create later. Except for when you configure the domain name of your server, you should never have to modify this file manually. However, it is good to know how it works in case things go wrong. You can read about this in the Caddy Server documentation.

HTML files: ~/public_html

This is the directory of files that Caddy servers up when requests are made to the root or your web server. This is configured in the Caddyfile discussed above. If you actually look at the Caddyfile you will see that the static file server is mapped to /usr/share/caddy. That is the location that the file link in the Ubuntu user's home directory, ~/public_html, is pointing to.

:80 {
      root * /usr/share/caddy
      file_server
}
Therefore, according to this configuration, whenever Caddy receives an HTTP request for any domain name on port 80 it will use the path of the request to find a corresponding file in this directory. For example, a request for http://yourdomainname/index.html will look for a file named index.html in the public_html directory.

# HTML 
We can continue adding structure to the page with additional elements. Each of these elements may contain other elements that provide the structure of our web page. The html element represents the top level page structure. The head element contains metadata about the page and the page title. The body element represents the content structure. The main element represents the main content structure, as opposed to things like headers, footers, asides, and navigation content. These additional elements result in the following HTML page.
- a hyperlink: <a href="https://byu.edu">Go to the Y</a>

| Element | Definition|
|------|---------|
| html |	the page container |
| head |	 Header information |
| title |	 Title of the page |
| meta |	 Metadata for the page such as character set or viewport settings |
| script |	 JavaScript reference. Either a external reference, or inline |
| include |	 External content reference |
| body |	The entire content body of the page |
| header |	 Header of the main content |
| footer |	 Footer of the main content |
| nav |	 Navigational inputs |
| main |	 Main content of the page |
| section 	A section of the main content |
| aside | Aside content from the main content |
| div |	A block division of content |
| span |	An inline span of content |
| h<1-9> |	Text heading. From h1, the highest level, down to h9, the lowest level |
| p |	A paragraph of text |
| b |	Bring attention |
| table |	  Table |
| tr |	Table row |
| th |	 Table header |
| td |	 Table data |
| ol,ul |	Ordered or unordered list |
| li |	 List item |
| a |	Anchor the text to a hyperlink |
| img |	Graphical image reference |
| dialog |	Interactive component such as a confirmation |
| form |	 A collection of user input |
| input	|  User input field |
| audio |	 Audio content |
| video |	 Video content |
| svg |	  Scalable vector graphic content |
| iframe |	 Inline frame of another HTML p |age

HTML Phases 
![image](https://github.com/MakennaAllred/startup/assets/132696940/fee5bdc4-1431-4163-87a2-bef223fd666b)

HTML Input Elements
![image](https://github.com/MakennaAllred/startup/assets/132696940/37e4c8b1-4420-4a53-894c-91649066640b)

# CSS

Box Model:
![image](https://github.com/MakennaAllred/startup/assets/132696940/c9be8a3d-6567-4e12-a699-34058e673b60)

- Functionally, CSS is primarily concerned with defining rulesets, or simply rules. A rule is comprised of a selector that selects the elements to apply the rule to, and one or more declarations that represent the property to style with the given property value.
- Include CSS with link <link rel="stylesheet" href="styles.css" />
- By default, the width and height of an element is defined by the width and height of the content box. You can change the box-sizing CSS property from the default value of content-box to border-box in order to redefine the width and height to also include the padding and the border. This often makes it easier to style elements when their visual size matches their actual size.
- Element selector: p {slkfs}
- Combinators: 
- ![image](https://github.com/MakennaAllred/startup/assets/132696940/a0e48581-3489-41d4-a726-fd369edc6087)
- Class selector: .summary{
  - can also use p.summary{ (this selects all paragraphs with class summary)
- ID selectors: #title{
- ![image](https://github.com/MakennaAllred/startup/assets/132696940/b276285e-e993-42a3-b92e-ae5093ed9dd2)

Declarations:
| Property           | Value                              | Example             | Discussion                                                                     |
| ------------------ | ---------------------------------- | ------------------- | ------------------------------------------------------------------------------ |
| background-color   | color                              | `red`               | Fill the background color                                                      |
| border             | color width style                  | `#fad solid medium` | Sets the border using shorthand where any or all of the values may be provided |
| border-radius      | unit                               | `50%`               | The size of the border radius                                                  |
| box-shadow         | x-offset y-offset blu-radius color | `2px 2px 2px gray`  | Creates a shadow                                                               |
| columns            | number                             | `3`                 | Number of textual columns                                                      |
| column-rule        | color width style                  | `solid thin black`  | Sets the border used between columns using border shorthand                    |
| color              | color                              | `rgb(128, 0, 0)`    | Sets the text color                                                            |
| cursor             | type                               | `grab`              | Sets the cursor to display when hovering over the element                      |
| display            | type                               | `none`              | Defines how to display the element and its children                            |
| filter             | filter-function                    | `grayscale(30%)`    | Applies a visual filter                                                        |
| float              | direction                          | `right`             | Places the element to the left or right in the flow                            |
| flex               |                                    |                     | Flex layout. Used for responsive design                                        |
| font               | family size style                  | `Arial 1.2em bold`  | Defines the text font using shorthand                                          |
| grid               |                                    |                     | Grid layout. Used for responsive design                                        |
| height             | unit                               | `.25em`             | Sets the height of the box                                                     |
| margin             | unit                               | `5px 5px 0 0`       | Sets the margin spacing                                                        |
| max-[width/height] | unit                               | `20%`               | Restricts the width or height to no more than the unit                         |
| min-[width/height] | unit                               | `10vh`              | Restricts the width or height to no less than the unit                         |
| opacity            | number                             | `.9`                | Sets how opaque the element is                                                 |
| overflow           | [visible/hidden/scroll/auto]       | `scroll`            | Defines what happens when the content does not fix in its box                  |
| position           | [static/relative/absolute/sticky]  | `absolute`          | Defines how the element is positioned in the document                          |
| padding            | unit                               | `1em 2em`           | Sets the padding spacing                                                       |
| left               | unit                               | `10rem`             | The horizontal value of a positioned element                                   |
| text-align         | [start/end/center/justify]         | `end`               | Defines how the text is aligned in the element                                 |
| top                | unit                               | `50px`              | The vertical value of a positioned element                                     |
| transform          | transform-function                 | `rotate(0.5turn)`   | Applies a transformation to the element                                        |
| width              | unit                               | `25vmin`            | Sets the width of the box                                                      |
| z-index            | number                             | `100`               | Controls the positioning of the element on the z axis                          |

Commonly Used  CSS Units: 
| Unit | Description                                                      |
| ---- | ---------------------------------------------------------------- |
| px   | The number of pixels                                             |
| pt   | The number of points (1/72 of an inch)                           |
| in   | The number of inches                                             |
| cm   | The number of centimeters                                        |
| %    | A percentage of the parent element                               |
| em   | A multiplier of the width of the letter `m` in the parent's font |
| rem  | A multiplier of the width of the letter `m` in the root's font   |
| ex   | A multiplier of the height of the element's font                 |
| vw   | A percentage of the viewport's width                             |
| vh   | A percentage of the viewport's height                            |
| vmin | A percentage of the viewport's smaller dimension                 |
| vmax | A percentage of the viewport's larger dimension                  |

Animation:
![image](https://github.com/MakennaAllred/startup/assets/132696940/379cd509-4a6e-44fa-af52-1163deebcf91)

Viewport Meta Tag: tells browser to not scale the page, has to do with responsive design

We can use the @media selector to tell us which side of the screen (technically the viewport) is the longest. A media query takes one or more predicates separated by boolean operators. In our case we simply want to know if the screen is oriented in portrait mode (short side on top) or not. If it is then we transform all of our div elements by rotating them 270 degrees. Media queries are also responsible for dropping header and footer if the viewport gets too small.

CSS Frameworks:
![image](https://github.com/MakennaAllred/startup/assets/132696940/f67adb82-9b1d-494d-8a2f-a082861cf5ec)


# JavaScript 

![image](https://github.com/MakennaAllred/startup/assets/132696940/e8fe6c3d-e6ea-4d43-aa85-78e6366c5b62)

JS strict equality makes the most sense (===) (= is assignment)

Conditionals:
![image](https://github.com/MakennaAllred/startup/assets/132696940/c62ad31d-f7a5-46b7-a543-85763dff43eb)

For:
![image](https://github.com/MakennaAllred/startup/assets/132696940/90138a63-e64f-4357-9c0a-81580fe81d8d)

Arrow functions can not be used for constructors or generators.

Return:
![image](https://github.com/MakennaAllred/startup/assets/132696940/4bdbbc43-9e50-48ff-a875-d1895cc15517)

JSON:
![image](https://github.com/MakennaAllred/startup/assets/132696940/5fe861dc-9ada-475b-8c0f-ce8b533bc57f)
Most commonly, a JSON document contains an object. Objects contain zero or more key value pairs. The key is always a string, and the value must be one of the valid JSON data types. Key value pairs are delimited with commas. Curly braces delimit an object, square brackets and commas delimit arrays, and strings are always delimited with double quotes.
You can convert JSON to, and from, JavaScript using the JSON.parse and JSON.stringify functions.
- rest: prefix with ... and parameters are then compiled into an array.

Spread:
![image](https://github.com/MakennaAllred/startup/assets/132696940/4185cca1-0416-4e19-8b59-bdc79b45b627)

Try//Catch
try {
  // normal execution code
} catch (err) {
  // exception handling code
} finally {
  // always called code
}


# DOM
You can provide a CSS selector to the querySelectorAll function in order to select elements from the document. The textContent property contains all of the element's text. You can even access a textual representation of an element's HTML content with the innerHTML property


# Midterm Review

# Web Services
- to make a web service request we supply the URL of the web service to the fetch function that is built into the browser
- our web serivce will provide static frontend files along with functions to handle fetch requests for things like storing data persistently, providing securtiy, running tasks, and executing application logic
- functions provided by a web service are called endpoints or APIs. You access web service endpoints from frontend JavaScritp with the fetch function
- backend will use fetch to make requests to other web services

## *URL* 
```yaml
<scheme>://<domain name>:<port>/<path>?<parameters>#<anchor>
```
| Part        | Example                              | Meaning                                                                                                                                                                                                                                                                             |
| ----------- | ------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Scheme      | https                                | The protocol required to ask for the resource. For web applications, this is usually HTTPS. But it could be any internet protocol such as FTP or MAILTO.                                                                                                                            |
| Domain name | byu.edu                              | The domain name that owns the resource represented by the URL.                                                                                                                                                                                                                      |
| Port        | 3000                                 | The port specifies the numbered network port used to connect to the domain server. Lower number ports are reserved for common internet protocols, higher number ports can be used for any purpose. The default port is 80 if the scheme is HTTP, or 443 if the scheme is HTTPS.     |
| Path        | /school/byu/user/8014                | The path to the resource on the domain. The resource does not have to physically be located on the file system with this path. It can be a logical path representing endpoint parameters, a database table, or an object schema.                                                    |
| Parameters  | filter=names&highlight=intro,summary | The parameters represent a list of key value pairs. Usually it provides additional qualifiers on the resource represented by the path. This might be a filter on the returned resource or how to highlight the resource. The parameters are also sometimes called the query string. |
| Anchor      | summary                              | The anchor usually represents a sub-location in the resource. For HTML pages this represents a request for the browser to automatically scroll to the element with an ID that matches the anchor. The anchor is also sometimes called the hash, or fragment ID. 

## *Ports*

| Port | Protocol                                                                                           |
| ---- | -------------------------------------------------------------------------------------------------- |
| 20   | File Transfer Protocol (FTP) for data transfer                                                     |
| 22   | Secure Shell (SSH) for connecting to remote devices                                                |
| 25   | Simple Mail Transfer Protocol (SMTP) for sending email                                             |
| 53   | Domain Name System (DNS) for looking up IP addresses                                               |
| 80   | Hypertext Transfer Protocol (HTTP) for web requests                                                |
| 110  | Post Office Protocol (POP3) for retrieving email                                                   |
| 123  | Network Time Protocol (NTP) for managing time                                                      |
| 161  | Simple Network Management Protocol (SNMP) for managing network devices such as routers or printers |
| 194  | Internet Relay Chat (IRC) for chatting                                                             |
| 443  | HTTP Secure (HTTPS) for secure web requests                                                        |

Caddy is listening on ports 80 and 443. When it gets a 443 request it examines path and if it matches a static file it reads the file off disk and returns it. If the path matches one of the definitions for a gateway service, Caddy makes a connection on that service's port and passes request to the service. 

## *HTTP*
When a web browser and server talk they exchange HTTP requests and responses. You can see this in the browser debugger or you can use a console tool like `curl`

An HTTP request has this general syntax.

```yaml
<verb> <url path, parameters, anchor> <version>
[<header key: value>]*
[

  <body>
]
```
The first line of the HTTP request contains the `verb` of the request, followed by the path, parameters, and anchor of the URL, and finally the version of HTTP being used. The following lines are optional headers that are defined by key value pairs. After the headers you have an optional body. The body start is delimited from the headers with two new lines.

## *Verbs*

There are several verbs that describe what the HTTP request is asking for. The list below only describes the most common ones.

| Verb    | Meaning                                                                                                                                                                                                                                                  |
| ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| GET     | Get the requested resource. This can represent a request to get a single resource or a resource representing a list of resources.                                                                                                                        |
| POST    | Create a new resource. The body of the request contains the resource. The response should include a unique ID of the newly created resource.                                                                                                             |
| PUT     | Update a resource. Either the URL path, HTTP header, or body must contain the unique ID of the resource being updated. The body of the request should contain the updated resource. The body of the response may contain the resulting updated resource. |
| DELETE  | Delete a resource. Either the URL path or HTTP header must contain the unique ID of the resource to delete.                                                                                                                                              |
| OPTIONS | Get metadata about a resource. Usually only HTTP headers are returned. The resource itself is not returned.                                                                                                                                              |

## Status codes

It is important that you use the standard HTTP status codes in your HTTP responses so that the client of a request can know how to interpret the response. The codes are partitioned into five blocks.

- 1xx - Informational.
- 2xx - Success.
- 3xx - Redirect to some other location, or that the previously cached resource is still valid.
- 4xx - Client errors. The request is invalid.
- 5xx - Server errors. The request cannot be satisfied due to an error on the server.

Within those ranges here are some of the more common codes. See the [MDN documentation](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status) for a full description of status codes.

| Code | Text                                                                                 | Meaning                                                                                                                           |
| ---- | ------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------- |
| 100  | Continue                                                                             | The service is working on the request                                                                                             |
| 200  | Success                                                                              | The requested resource was found and returned as appropriate.                                                                     |
| 201  | Created                                                                              | The request was successful and a new resource was created.                                                                        |
| 204  | No Content                                                                           | The request was successful but no resource is returned.                                                                           |
| 304  | Not Modified                                                                         | The cached version of the resource is still valid.                                                                                |
| 307  | Permanent redirect                                                                   | The resource is no longer at the requested location. The new location is specified in the response location header.               |
| 308  | Temporary redirect                                                                   | The resource is temporarily located at a different location. The temporary location is specified in the response location header. |
| 400  | Bad request                                                                          | The request was malformed or invalid.                                                                                             |
| 401  | Unauthorized                                                                         | The request did not provide a valid authentication token.                                                                         |
| 403  | Forbidden                                                                            | The provided authentication token is not authorized for the resource.                                                             |
| 404  | Not found                                                                            | An unknown resource was requested.                                                                                                |
| 408  | Request timeout                                                                      | The request takes too long.                                                                                                       |
| 409  | Conflict                                                                             | The provided resource represents an out of date version of the resource.                                                          |
| 418  | [I'm a teapot](https://en.wikipedia.org/wiki/Hyper_Text_Coffee_Pot_Control_Protocol) | The service refuses to brew coffee in a teapot.                                                                                   |
| 429  | Too many requests                                                                    | The client is making too many requests in too short of a time period.                                                             |
| 500  | Internal server error                                                                | The server failed to properly process the request.                                                                                |
| 503  | Service unavailable                                                                  | The server is temporarily down. The client should try again with an exponential back off.                                         |

## *Headers* 

![image](https://github.com/MakennaAllred/startup/assets/132696940/e620711b-a1a2-471d-b966-800b4610ed7a)


## *Cookies* 
HTTP requests are stateless, but we use cookies to track state across requests. Cookeis are generated by a server and passed to a client via HTTP request. Client caches the cookie and returns it as a HTTP header back to the server on subsequent requests



# SOP and CORS
SOP: Same origin policy- only allows JavaScript requests from the same domain as the origin
CORS: Cross origin Resource Sharing- allows the client (the browser) to specify the origin of request and then let the server respond with what origins are allowed

*Notice that with CORS, it is the browser that is protecting the user from accessing the course website's authentication endpoint from the wrong origin. CORS is only meant to alert the user that something nefarious is being attempted. A hacker can still proxy requests through their own server to the course website and completely ignore the Access-Control-Allow-Origin header. Therefore the course website needs to implement its own precautions to stop a hacker from using its services inappropriately.*

The allowed domain names will appear in the `Access-Control-Allow-Origin` header

# Fetch
Fetch takes a URL and returns a promise. The promise then function takes a callback function that is asynchronously called when the requested URL content is obtained. If the returned content is of type application/json you can use the json function on the response object to convert it to a JavaScript object.


# Endpoints

1. Grammatical- with HTTP everything is a resource (noun). You act on the resource with an HTTP verb. 
2. Readable- the resource you are referencing with an HTTP request should be clearly readable in the URL path. (should make sense to humans)
3. Discoverable- as you expose resources that contain other resources you can provide the endpoitns for the aggregated resources. THis makes it so someone suing your endpoints only needs to remember the top level endpoint and then they can discover everything else. 
4. Compatible- build endpoints so you can add new functionality without breaking existing clients
5. Simple- keep endpoints focused on primary resources of your application
6. Documented- open API specification is a good tool to create, use, and maintain documentation of your service endpoints. Allows you to provied client libraries for your endpoints and a sandboz for experimentation.

## RPC
Remote Procedure Calls (RPC) expose service endpoints as simple function calls. When RPC is used over HTTP it usually just leverages the POST HTTP verb. The actual verb and subject of the function call is represented by the function name. For example, `deleteOrder` or `updateOrder`. The name of the function is either the entire path of the URL or a parameter in the POST body.

![image](https://github.com/MakennaAllred/startup/assets/132696940/2ddd57ed-ce1e-4be5-9f9e-7bdf3a1eeffd)

## REST

![image](https://github.com/MakennaAllred/startup/assets/132696940/0f5bb0a6-b58d-4234-82f8-00ef4266bccf)


## GRAPHQL 

![image](https://github.com/MakennaAllred/startup/assets/132696940/225f921c-1127-45bf-90cb-a17c5f051af9)

# Node.js
node -e to execute
node in interpretive mode by executing it without any parameters and then typing JS code directly into the interpreter

![image](https://github.com/MakennaAllred/startup/assets/132696940/568b73a7-697e-41fd-b868-70328be47847)

1. Create your project directory
2. Initialize it for use with NPM by running `npm init -y`
3. Make sure `.gitignore` file contains `node-modules`
4. Install any desired packages with `npm install <package name here>`
5. Add `require('<package name here>')` to your application's JavaScript
6. Use the code the package provides in your JavaScript
7. Run your code with `node index.js`

# Express
1. provides support for routing requests for service and endpoints
2. provides support for manipulating HTTP requests with JSON body content
3. provides support for generating HTTP responses 
4. provides support for using `middleware` to add functionality

Create an Express application by using NPM to install the Express package and then call the `express` constructor to create the Express application and listen for HTTP requests on a desired port
      - npm install express
```js
const express = require('express');
const app = express();

app.listen(8080);
```
With the `app` object you can now add HTTP routing and middleware functions to the application

![image](https://github.com/MakennaAllred/startup/assets/132696940/1995ed81-163d-4c67-9cf2-b9bdbc6f5f5d)


```js
app.get('/store/:storeName', (req, res, next) => {
  res.send({name: req.params.storeName});
});
```

// Wildcard - matches /store/x and /star/y
app.put('/st*/:storeName', (req, res) => res.send({update: req.params.storeName}));

// Pure regular expression
app.delete(/\/store\/(.+)/, (req, res) => res.send({delete: req.params[0]}));

Notice that in these examples the next parameter was omitted. Since we are not calling next we do not need to include it as a parameter. However, if you do not call next then no following middleware functions will be invoked for the request.

## *Using Middleware*
Routing functions are only called if the associated pattern matches while middleware functions are always called for every HTTP request unless a preceding middlware function doesn't call next.

The middleware function parameters represent the HTTP request object (req), the HTTP response object (res), and the next middleware function to pass processing to. You should usually call the next function after completing processing so that the next middleware function can execute.

![image](https://github.com/MakennaAllred/startup/assets/132696940/f34aa483-6e84-472f-88c9-f8dc6755446e)


# Midterm Review 
1.
```
let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let c = a.reduce((total, number) => {
  return (total + number)
});
console.log(c);
```

- outputs 55

2. How would you use JavaScript to select an element with the id of header and change the text color of that element to red?
    - ```
       document.getElementById('header').color = 'red';
      ```
   
3. Given the following HTML what JS could you use to set the text 'yes' to 'cow' and leave the 'no' unaffected 
```
<p>no</p>
<p class="demo">yes</p>
<div class="demo">no</div> 
```

- ```
  document.querySelector("p.demo").textContent = "cow";
  ```

4. Which of the following correctly describes JSON?
  - JSON objects contain attribute-value pairs, and a server can use the JSON format to send a web browser some data

5. Which of the following is true when the `-la` parameter is specified for the `ls` console command?
  - outputs all files and outputs a long listing

6. Which of the following is true for the domain name `demo.simon.myfunkychicken.click`?
   - click is a top level domain(TLD), my funkychickens.click is a root domian, and the whole thing is a subdomain

7.
```
const p = new Promise((resolve, reject) => {
reject(false);
});
p
.then((a) => console.log('A'))
.then((b) => console.log('B'))
.catch((c) => console.log('C'))
.finally(() => console.log('D')); 
```
- outputs C D



