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
