import { Component, ViewChild } from '@angular/core';
import {NgbModal, ModalDismissReasons, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import 'rxjs/Rx' ;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    @ViewChild('start') private start;
    @ViewChild('container') private container;

    errorMessage:string= "";
    file:any;
    fileName: string = "";
    jsonObject: any;
    activeNgbModal: any;
    succesfullyParsed : boolean = false;
    download : boolean = false;
    print : boolean = false;

    exampleJson : any = {
      "info": {
        "_postman_id": "82b1cd34-b4c2-480c-90ba-6cbf0241fe12",
        "name": "JSONPlaceholder",
        "description": "Fake Online REST API for Testing and Prototyping ",
        "schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json"
      },
      "item": [
        {
          "name": "Get a single post.",
          "request": {
            "method": "GET",
            "header": [],
            "body": {},
            "url": {
              "raw": "https://jsonplaceholder.typicode.com/posts/1",
              "protocol": "https",
              "host": [
                "jsonplaceholder",
                "typicode",
                "com"
              ],
              "path": [
                "posts",
                "1"
              ]
            },
            "description": "Gest a single post."
          },
          "response": [
            {
              "id": "6a746528-d1fd-4727-85cf-7cfc7549b1e0",
              "name": "Get a single post that does not exist.",
              "originalRequest": {
                "method": "GET",
                "header": [],
                "body": {},
                "url": {
                  "raw": "https://jsonplaceholder.typicode.com/posts/-1",
                  "protocol": "https",
                  "host": [
                    "jsonplaceholder",
                    "typicode",
                    "com"
                  ],
                  "path": [
                    "posts",
                    "-1"
                  ]
                }
              },
              "status": "Not Found",
              "code": 404,
              "_postman_previewlanguage": "json",
              "header": [
                {
                  "key": "Access-Control-Allow-Credentials",
                  "value": "true",
                  "name": "Access-Control-Allow-Credentials",
                  "description": "Indicates whether or not the response to the request can be exposed when the credentials flag is true. When used as part of a response to a preflight request, this indicates whether or not the actual request can be made using credentials."
                },
                {
                  "key": "CF-Cache-Status",
                  "value": "HIT",
                  "name": "CF-Cache-Status",
                  "description": "Custom header"
                },
                {
                  "key": "CF-RAY",
                  "value": "42591107edf62b52-AMS",
                  "name": "CF-RAY",
                  "description": "Custom header"
                },
                {
                  "key": "Cache-Control",
                  "value": "public, max-age=14400",
                  "name": "Cache-Control",
                  "description": "Tells all caching mechanisms from server to client whether they may cache this object. It is measured in seconds"
                },
                {
                  "key": "Connection",
                  "value": "keep-alive",
                  "name": "Connection",
                  "description": "Options that are desired for the connection"
                },
                {
                  "key": "Content-Length",
                  "value": "2",
                  "name": "Content-Length",
                  "description": "The length of the response body in octets (8-bit bytes)"
                },
                {
                  "key": "Content-Type",
                  "value": "application/json; charset=utf-8",
                  "name": "Content-Type",
                  "description": "The mime type of this content"
                },
                {
                  "key": "Date",
                  "value": "Mon, 04 Jun 2018 08:35:31 GMT",
                  "name": "Date",
                  "description": "The date and time that the message was sent"
                },
                {
                  "key": "Etag",
                  "value": "W/\"2-vyGp6PvFo4RvsFtPoIWeCReyIC8\"",
                  "name": "Etag",
                  "description": "An identifier for a specific version of a resource, often a message digest"
                },
                {
                  "key": "Expect-CT",
                  "value": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
                  "name": "Expect-CT",
                  "description": "Custom header"
                },
                {
                  "key": "Expires",
                  "value": "Mon, 04 Jun 2018 12:35:31 GMT",
                  "name": "Expires",
                  "description": "Gives the date/time after which the response is considered stale"
                },
                {
                  "key": "Pragma",
                  "value": "no-cache",
                  "name": "Pragma",
                  "description": "Implementation-specific headers that may have various effects anywhere along the request-response chain."
                },
                {
                  "key": "Server",
                  "value": "cloudflare",
                  "name": "Server",
                  "description": "A name for the server"
                },
                {
                  "key": "Vary",
                  "value": "Origin, Accept-Encoding",
                  "name": "Vary",
                  "description": "Tells downstream proxies how to match future request headers to decide whether the cached response can be used rather than requesting a fresh one from the origin server."
                },
                {
                  "key": "Via",
                  "value": "1.1 vegur",
                  "name": "Via",
                  "description": "Informs the client of proxies through which the response was sent."
                },
                {
                  "key": "X-Content-Type-Options",
                  "value": "nosniff",
                  "name": "X-Content-Type-Options",
                  "description": "The only defined value, \"nosniff\", prevents Internet Explorer from MIME-sniffing a response away from the declared content-type"
                },
                {
                  "key": "X-Powered-By",
                  "value": "Express",
                  "name": "X-Powered-By",
                  "description": "Specifies the technology (ASP.NET, PHP, JBoss, e.g.) supporting the web application (version details are often in X-Runtime, X-Version, or X-AspNet-Version)"
                }
              ],
              "cookie": [
                {
                  "expires": "Tue Jun 04 2019 10:34:16 GMT+0200 (W. Europe Daylight Time)",
                  "httpOnly": true,
                  "domain": "typicode.com",
                  "path": "/",
                  "secure": false,
                  "value": "de41ea6edc1b39ba0d4d8ba4c136b7b601528101256",
                  "key": "__cfduid"
                }
              ],
              "body": "{}"
            },
            {
              "id": "799ae963-12c3-4d5b-bf73-90473a725fe7",
              "name": "Get a single post.",
              "originalRequest": {
                "method": "GET",
                "header": [],
                "body": {},
                "url": {
                  "raw": "https://jsonplaceholder.typicode.com/posts/1",
                  "protocol": "https",
                  "host": [
                    "jsonplaceholder",
                    "typicode",
                    "com"
                  ],
                  "path": [
                    "posts",
                    "1"
                  ]
                }
              },
              "status": "OK",
              "code": 200,
              "_postman_previewlanguage": "json",
              "header": [
                {
                  "key": "Access-Control-Allow-Credentials",
                  "value": "true",
                  "name": "Access-Control-Allow-Credentials",
                  "description": "Indicates whether or not the response to the request can be exposed when the credentials flag is true. When used as part of a response to a preflight request, this indicates whether or not the actual request can be made using credentials."
                },
                {
                  "key": "CF-Cache-Status",
                  "value": "HIT",
                  "name": "CF-Cache-Status",
                  "description": "Custom header"
                },
                {
                  "key": "CF-RAY",
                  "value": "42590f32fddc2b52-AMS",
                  "name": "CF-RAY",
                  "description": "Custom header"
                },
                {
                  "key": "Cache-Control",
                  "value": "public, max-age=14400",
                  "name": "Cache-Control",
                  "description": "Tells all caching mechanisms from server to client whether they may cache this object. It is measured in seconds"
                },
                {
                  "key": "Connection",
                  "value": "keep-alive",
                  "name": "Connection",
                  "description": "Options that are desired for the connection"
                },
                {
                  "key": "Content-Encoding",
                  "value": "gzip",
                  "name": "Content-Encoding",
                  "description": "The type of encoding used on the data."
                },
                {
                  "key": "Content-Type",
                  "value": "application/json; charset=utf-8",
                  "name": "Content-Type",
                  "description": "The mime type of this content"
                },
                {
                  "key": "Date",
                  "value": "Mon, 04 Jun 2018 08:34:16 GMT",
                  "name": "Date",
                  "description": "The date and time that the message was sent"
                },
                {
                  "key": "Etag",
                  "value": "W/\"124-yiKdLzqO5gfBrJFrcdJ8Yq0LGnU\"",
                  "name": "Etag",
                  "description": "An identifier for a specific version of a resource, often a message digest"
                },
                {
                  "key": "Expect-CT",
                  "value": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
                  "name": "Expect-CT",
                  "description": "Custom header"
                },
                {
                  "key": "Expires",
                  "value": "Mon, 04 Jun 2018 12:34:16 GMT",
                  "name": "Expires",
                  "description": "Gives the date/time after which the response is considered stale"
                },
                {
                  "key": "Pragma",
                  "value": "no-cache",
                  "name": "Pragma",
                  "description": "Implementation-specific headers that may have various effects anywhere along the request-response chain."
                },
                {
                  "key": "Server",
                  "value": "cloudflare",
                  "name": "Server",
                  "description": "A name for the server"
                },
                {
                  "key": "Set-Cookie",
                  "value": "__cfduid=de41ea6edc1b39ba0d4d8ba4c136b7b601528101256; expires=Tue, 04-Jun-19 08:34:16 GMT; path=/; domain=.typicode.com; HttpOnly",
                  "name": "Set-Cookie",
                  "description": "an HTTP cookie"
                },
                {
                  "key": "Transfer-Encoding",
                  "value": "chunked",
                  "name": "Transfer-Encoding",
                  "description": "The form of encoding used to safely transfer the entity to the user. Currently defined methods are: chunked, compress, deflate, gzip, identity."
                },
                {
                  "key": "Vary",
                  "value": "Origin, Accept-Encoding",
                  "name": "Vary",
                  "description": "Tells downstream proxies how to match future request headers to decide whether the cached response can be used rather than requesting a fresh one from the origin server."
                },
                {
                  "key": "Via",
                  "value": "1.1 vegur",
                  "name": "Via",
                  "description": "Informs the client of proxies through which the response was sent."
                },
                {
                  "key": "X-Content-Type-Options",
                  "value": "nosniff",
                  "name": "X-Content-Type-Options",
                  "description": "The only defined value, \"nosniff\", prevents Internet Explorer from MIME-sniffing a response away from the declared content-type"
                },
                {
                  "key": "X-Powered-By",
                  "value": "Express",
                  "name": "X-Powered-By",
                  "description": "Specifies the technology (ASP.NET, PHP, JBoss, e.g.) supporting the web application (version details are often in X-Runtime, X-Version, or X-AspNet-Version)"
                }
              ],
              "cookie": [
                {
                  "expires": "Tue Jun 04 2019 10:34:16 GMT+0200 (W. Europe Daylight Time)",
                  "httpOnly": true,
                  "domain": "typicode.com",
                  "path": "/",
                  "secure": false,
                  "value": "de41ea6edc1b39ba0d4d8ba4c136b7b601528101256",
                  "key": "__cfduid"
                }
              ],
              "body": "{\n  \"userId\": 1,\n  \"id\": 1,\n  \"title\": \"sunt aut facere repellat provident occaecati excepturi optio reprehenderit\",\n  \"body\": \"quia et suscipit\\nsuscipit recusandae consequuntur expedita et cum\\nreprehenderit molestiae ut ut quas totam\\nnostrum rerum est autem sunt rem eveniet architecto\"\n}"
            }
          ]
        },
        {
          "name": "Post a post.",
          "request": {
            "method": "POST",
            "header": [
              {
                "key": "Content-Type",
                "value": "application/json"
              }
            ],
            "body": {
              "mode": "raw",
              "raw": "SHOULD FAIL"
            },
            "url": {
              "raw": "https://jsonplaceholder.typicode.com/posts",
              "protocol": "https",
              "host": [
                "jsonplaceholder",
                "typicode",
                "com"
              ],
              "path": [
                "posts"
              ]
            },
            "description": "Posts a post to the api end-point."
          },
          "response": [
            {
              "id": "04d03a79-6ba2-49a1-ace9-94a1a84b23fc",
              "name": "Post a post that should fail.",
              "originalRequest": {
                "method": "POST",
                "header": [
                  {
                    "key": "Content-Type",
                    "value": "application/json",
                    "disabled": false
                  }
                ],
                "body": {
                  "mode": "raw",
                  "raw": "SHOULD FAIL"
                },
                "url": {
                  "raw": "https://jsonplaceholder.typicode.com/posts",
                  "protocol": "https",
                  "host": [
                    "jsonplaceholder",
                    "typicode",
                    "com"
                  ],
                  "path": [
                    "posts"
                  ]
                }
              },
              "status": "Internal Server Error",
              "code": 500,
              "_postman_previewlanguage": "html",
              "header": [
                {
                  "key": "Access-Control-Allow-Credentials",
                  "value": "true",
                  "name": "Access-Control-Allow-Credentials",
                  "description": "Indicates whether or not the response to the request can be exposed when the credentials flag is true. When used as part of a response to a preflight request, this indicates whether or not the actual request can be made using credentials."
                },
                {
                  "key": "CF-RAY",
                  "value": "425914fe9c892b52-AMS",
                  "name": "CF-RAY",
                  "description": "Custom header"
                },
                {
                  "key": "Cache-Control",
                  "value": "no-cache",
                  "name": "Cache-Control",
                  "description": "Tells all caching mechanisms from server to client whether they may cache this object. It is measured in seconds"
                },
                {
                  "key": "Connection",
                  "value": "keep-alive",
                  "name": "Connection",
                  "description": "Options that are desired for the connection"
                },
                {
                  "key": "Content-Type",
                  "value": "text/html; charset=utf-8",
                  "name": "Content-Type",
                  "description": "The mime type of this content"
                },
                {
                  "key": "Date",
                  "value": "Mon, 04 Jun 2018 08:38:13 GMT",
                  "name": "Date",
                  "description": "The date and time that the message was sent"
                },
                {
                  "key": "Expect-CT",
                  "value": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
                  "name": "Expect-CT",
                  "description": "Custom header"
                },
                {
                  "key": "Expires",
                  "value": "-1",
                  "name": "Expires",
                  "description": "Gives the date/time after which the response is considered stale"
                },
                {
                  "key": "Pragma",
                  "value": "no-cache",
                  "name": "Pragma",
                  "description": "Implementation-specific headers that may have various effects anywhere along the request-response chain."
                },
                {
                  "key": "Server",
                  "value": "cloudflare",
                  "name": "Server",
                  "description": "A name for the server"
                },
                {
                  "key": "Transfer-Encoding",
                  "value": "chunked",
                  "name": "Transfer-Encoding",
                  "description": "The form of encoding used to safely transfer the entity to the user. Currently defined methods are: chunked, compress, deflate, gzip, identity."
                },
                {
                  "key": "Vary",
                  "value": "Origin, X-HTTP-Method-Override, Accept-Encoding",
                  "name": "Vary",
                  "description": "Tells downstream proxies how to match future request headers to decide whether the cached response can be used rather than requesting a fresh one from the origin server."
                },
                {
                  "key": "Via",
                  "value": "1.1 vegur",
                  "name": "Via",
                  "description": "Informs the client of proxies through which the response was sent."
                },
                {
                  "key": "X-Powered-By",
                  "value": "Express",
                  "name": "X-Powered-By",
                  "description": "Specifies the technology (ASP.NET, PHP, JBoss, e.g.) supporting the web application (version details are often in X-Runtime, X-Version, or X-AspNet-Version)"
                }
              ],
              "cookie": [
                {
                  "expires": "Tue Jun 04 2019 10:34:16 GMT+0200 (W. Europe Daylight Time)",
                  "httpOnly": true,
                  "domain": "typicode.com",
                  "path": "/",
                  "secure": false,
                  "value": "de41ea6edc1b39ba0d4d8ba4c136b7b601528101256",
                  "key": "__cfduid"
                }
              ],
              "body": "SyntaxError: Unexpected token # in JSON at position 0\n    at JSON.parse (<anonymous>)\n    at createStrictSyntaxError (/app/node_modules/body-parser/lib/types/json.js:157:10)\n    at parse (/app/node_modules/body-parser/lib/types/json.js:83:15)\n    at /app/node_modules/body-parser/lib/read.js:121:18\n    at invokeCallback (/app/node_modules/raw-body/index.js:224:16)\n    at done (/app/node_modules/raw-body/index.js:213:7)\n    at IncomingMessage.onEnd (/app/node_modules/raw-body/index.js:273:7)\n    at emitNone (events.js:86:13)\n    at IncomingMessage.emit (events.js:188:7)\n    at endReadableNT (_stream_readable.js:975:12)"
            },
            {
              "id": "647fa06c-c04e-4c00-86e2-f9e9cf451c9e",
              "name": "Succesfully post a post.",
              "originalRequest": {
                "method": "POST",
                "header": [
                  {
                    "key": "Content-Type",
                    "name": "Content-Type",
                    "value": "application/json",
                    "disabled": false
                  }
                ],
                "body": {
                  "mode": "raw",
                  "raw": "{\r\n  \"title\": \"foo\",\r\n  \"body\": \"bar\",\r\n  \"userId\": 1\r\n}"
                },
                "url": {
                  "raw": "https://jsonplaceholder.typicode.com/posts",
                  "protocol": "https",
                  "host": [
                    "jsonplaceholder",
                    "typicode",
                    "com"
                  ],
                  "path": [
                    "posts"
                  ]
                }
              },
              "status": "Created",
              "code": 201,
              "_postman_previewlanguage": "json",
              "header": [
                {
                  "key": "Access-Control-Allow-Credentials",
                  "value": "true",
                  "name": "Access-Control-Allow-Credentials",
                  "description": "Indicates whether or not the response to the request can be exposed when the credentials flag is true. When used as part of a response to a preflight request, this indicates whether or not the actual request can be made using credentials."
                },
                {
                  "key": "Access-Control-Expose-Headers",
                  "value": "Location",
                  "name": "Access-Control-Expose-Headers",
                  "description": "Lets a server whitelist headers that browsers are allowed to access."
                },
                {
                  "key": "CF-RAY",
                  "value": "425913889f4e2b52-AMS",
                  "name": "CF-RAY",
                  "description": "Custom header"
                },
                {
                  "key": "Cache-Control",
                  "value": "no-cache",
                  "name": "Cache-Control",
                  "description": "Tells all caching mechanisms from server to client whether they may cache this object. It is measured in seconds"
                },
                {
                  "key": "Connection",
                  "value": "keep-alive",
                  "name": "Connection",
                  "description": "Options that are desired for the connection"
                },
                {
                  "key": "Content-Length",
                  "value": "65",
                  "name": "Content-Length",
                  "description": "The length of the response body in octets (8-bit bytes)"
                },
                {
                  "key": "Content-Type",
                  "value": "application/json; charset=utf-8",
                  "name": "Content-Type",
                  "description": "The mime type of this content"
                },
                {
                  "key": "Date",
                  "value": "Mon, 04 Jun 2018 08:37:13 GMT",
                  "name": "Date",
                  "description": "The date and time that the message was sent"
                },
                {
                  "key": "Etag",
                  "value": "W/\"41-GDNaWfnVU6RZhpLbye0veBaqcHA\"",
                  "name": "Etag",
                  "description": "An identifier for a specific version of a resource, often a message digest"
                },
                {
                  "key": "Expect-CT",
                  "value": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
                  "name": "Expect-CT",
                  "description": "Custom header"
                },
                {
                  "key": "Expires",
                  "value": "-1",
                  "name": "Expires",
                  "description": "Gives the date/time after which the response is considered stale"
                },
                {
                  "key": "Location",
                  "value": "http://jsonplaceholder.typicode.com/posts/101",
                  "name": "Location",
                  "description": "Used in redirection, or when a new resource has been created."
                },
                {
                  "key": "Pragma",
                  "value": "no-cache",
                  "name": "Pragma",
                  "description": "Implementation-specific headers that may have various effects anywhere along the request-response chain."
                },
                {
                  "key": "Server",
                  "value": "cloudflare",
                  "name": "Server",
                  "description": "A name for the server"
                },
                {
                  "key": "Vary",
                  "value": "Origin, X-HTTP-Method-Override, Accept-Encoding",
                  "name": "Vary",
                  "description": "Tells downstream proxies how to match future request headers to decide whether the cached response can be used rather than requesting a fresh one from the origin server."
                },
                {
                  "key": "Via",
                  "value": "1.1 vegur",
                  "name": "Via",
                  "description": "Informs the client of proxies through which the response was sent."
                },
                {
                  "key": "X-Content-Type-Options",
                  "value": "nosniff",
                  "name": "X-Content-Type-Options",
                  "description": "The only defined value, \"nosniff\", prevents Internet Explorer from MIME-sniffing a response away from the declared content-type"
                },
                {
                  "key": "X-Powered-By",
                  "value": "Express",
                  "name": "X-Powered-By",
                  "description": "Specifies the technology (ASP.NET, PHP, JBoss, e.g.) supporting the web application (version details are often in X-Runtime, X-Version, or X-AspNet-Version)"
                }
              ],
              "cookie": [
                {
                  "expires": "Tue Jun 04 2019 10:34:16 GMT+0200 (W. Europe Daylight Time)",
                  "httpOnly": true,
                  "domain": "typicode.com",
                  "path": "/",
                  "secure": false,
                  "value": "de41ea6edc1b39ba0d4d8ba4c136b7b601528101256",
                  "key": "__cfduid"
                }
              ],
              "body": "{\n  \"title\": \"foo\",\n  \"body\": \"bar\",\n  \"userId\": 1,\n  \"id\": 101\n}"
            }
          ]
        },
        {
          "name": "Delete a post.",
          "request": {
            "method": "DELETE",
            "header": [],
            "body": {},
            "url": {
              "raw": "https://jsonplaceholder.typicode.com/posts/1",
              "protocol": "https",
              "host": [
                "jsonplaceholder",
                "typicode",
                "com"
              ],
              "path": [
                "posts",
                "1"
              ]
            },
            "description": "Deletes a post, Note: the resource will not be really deleted on the server but it will be faked as if."
          },
          "response": [
            {
              "id": "33d1d0de-74f5-46b2-9773-d9b122fdfcf5",
              "name": "Delete a not existing post.",
              "originalRequest": {
                "method": "DELETE",
                "header": [],
                "body": {},
                "url": {
                  "raw": "https://jsonplaceholder.typicode.com/posts/-1",
                  "protocol": "https",
                  "host": [
                    "jsonplaceholder",
                    "typicode",
                    "com"
                  ],
                  "path": [
                    "posts",
                    "-1"
                  ]
                }
              },
              "status": "Not Found",
              "code": 404,
              "_postman_previewlanguage": "json",
              "header": [
                {
                  "key": "Access-Control-Allow-Credentials",
                  "value": "true",
                  "name": "Access-Control-Allow-Credentials",
                  "description": "Indicates whether or not the response to the request can be exposed when the credentials flag is true. When used as part of a response to a preflight request, this indicates whether or not the actual request can be made using credentials."
                },
                {
                  "key": "CF-RAY",
                  "value": "42591719fabe2b52-AMS",
                  "name": "CF-RAY",
                  "description": "Custom header"
                },
                {
                  "key": "Cache-Control",
                  "value": "no-cache",
                  "name": "Cache-Control",
                  "description": "Tells all caching mechanisms from server to client whether they may cache this object. It is measured in seconds"
                },
                {
                  "key": "Connection",
                  "value": "keep-alive",
                  "name": "Connection",
                  "description": "Options that are desired for the connection"
                },
                {
                  "key": "Content-Length",
                  "value": "2",
                  "name": "Content-Length",
                  "description": "The length of the response body in octets (8-bit bytes)"
                },
                {
                  "key": "Content-Type",
                  "value": "application/json; charset=utf-8",
                  "name": "Content-Type",
                  "description": "The mime type of this content"
                },
                {
                  "key": "Date",
                  "value": "Mon, 04 Jun 2018 08:39:40 GMT",
                  "name": "Date",
                  "description": "The date and time that the message was sent"
                },
                {
                  "key": "Etag",
                  "value": "W/\"2-vyGp6PvFo4RvsFtPoIWeCReyIC8\"",
                  "name": "Etag",
                  "description": "An identifier for a specific version of a resource, often a message digest"
                },
                {
                  "key": "Expect-CT",
                  "value": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
                  "name": "Expect-CT",
                  "description": "Custom header"
                },
                {
                  "key": "Expires",
                  "value": "-1",
                  "name": "Expires",
                  "description": "Gives the date/time after which the response is considered stale"
                },
                {
                  "key": "Pragma",
                  "value": "no-cache",
                  "name": "Pragma",
                  "description": "Implementation-specific headers that may have various effects anywhere along the request-response chain."
                },
                {
                  "key": "Server",
                  "value": "cloudflare",
                  "name": "Server",
                  "description": "A name for the server"
                },
                {
                  "key": "Vary",
                  "value": "Origin, Accept-Encoding",
                  "name": "Vary",
                  "description": "Tells downstream proxies how to match future request headers to decide whether the cached response can be used rather than requesting a fresh one from the origin server."
                },
                {
                  "key": "Via",
                  "value": "1.1 vegur",
                  "name": "Via",
                  "description": "Informs the client of proxies through which the response was sent."
                },
                {
                  "key": "X-Content-Type-Options",
                  "value": "nosniff",
                  "name": "X-Content-Type-Options",
                  "description": "The only defined value, \"nosniff\", prevents Internet Explorer from MIME-sniffing a response away from the declared content-type"
                },
                {
                  "key": "X-Powered-By",
                  "value": "Express",
                  "name": "X-Powered-By",
                  "description": "Specifies the technology (ASP.NET, PHP, JBoss, e.g.) supporting the web application (version details are often in X-Runtime, X-Version, or X-AspNet-Version)"
                }
              ],
              "cookie": [
                {
                  "expires": "Tue Jun 04 2019 10:34:16 GMT+0200 (W. Europe Daylight Time)",
                  "httpOnly": true,
                  "domain": "typicode.com",
                  "path": "/",
                  "secure": false,
                  "value": "de41ea6edc1b39ba0d4d8ba4c136b7b601528101256",
                  "key": "__cfduid"
                }
              ],
              "body": "{}"
            },
            {
              "id": "aec2b4cf-9ec9-472f-bfa1-42d51233f25f",
              "name": "Succesfully delete a post.",
              "originalRequest": {
                "method": "DELETE",
                "header": [],
                "body": {},
                "url": {
                  "raw": "https://jsonplaceholder.typicode.com/posts/1",
                  "protocol": "https",
                  "host": [
                    "jsonplaceholder",
                    "typicode",
                    "com"
                  ],
                  "path": [
                    "posts",
                    "1"
                  ]
                }
              },
              "status": "OK",
              "code": 200,
              "_postman_previewlanguage": "json",
              "header": [
                {
                  "key": "Access-Control-Allow-Credentials",
                  "value": "true",
                  "name": "Access-Control-Allow-Credentials",
                  "description": "Indicates whether or not the response to the request can be exposed when the credentials flag is true. When used as part of a response to a preflight request, this indicates whether or not the actual request can be made using credentials."
                },
                {
                  "key": "CF-RAY",
                  "value": "425916018ea42b52-AMS",
                  "name": "CF-RAY",
                  "description": "Custom header"
                },
                {
                  "key": "Cache-Control",
                  "value": "no-cache",
                  "name": "Cache-Control",
                  "description": "Tells all caching mechanisms from server to client whether they may cache this object. It is measured in seconds"
                },
                {
                  "key": "Connection",
                  "value": "keep-alive",
                  "name": "Connection",
                  "description": "Options that are desired for the connection"
                },
                {
                  "key": "Content-Length",
                  "value": "2",
                  "name": "Content-Length",
                  "description": "The length of the response body in octets (8-bit bytes)"
                },
                {
                  "key": "Content-Type",
                  "value": "application/json; charset=utf-8",
                  "name": "Content-Type",
                  "description": "The mime type of this content"
                },
                {
                  "key": "Date",
                  "value": "Mon, 04 Jun 2018 08:38:55 GMT",
                  "name": "Date",
                  "description": "The date and time that the message was sent"
                },
                {
                  "key": "Etag",
                  "value": "W/\"2-vyGp6PvFo4RvsFtPoIWeCReyIC8\"",
                  "name": "Etag",
                  "description": "An identifier for a specific version of a resource, often a message digest"
                },
                {
                  "key": "Expect-CT",
                  "value": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
                  "name": "Expect-CT",
                  "description": "Custom header"
                },
                {
                  "key": "Expires",
                  "value": "-1",
                  "name": "Expires",
                  "description": "Gives the date/time after which the response is considered stale"
                },
                {
                  "key": "Pragma",
                  "value": "no-cache",
                  "name": "Pragma",
                  "description": "Implementation-specific headers that may have various effects anywhere along the request-response chain."
                },
                {
                  "key": "Server",
                  "value": "cloudflare",
                  "name": "Server",
                  "description": "A name for the server"
                },
                {
                  "key": "Vary",
                  "value": "Origin, Accept-Encoding",
                  "name": "Vary",
                  "description": "Tells downstream proxies how to match future request headers to decide whether the cached response can be used rather than requesting a fresh one from the origin server."
                },
                {
                  "key": "Via",
                  "value": "1.1 vegur",
                  "name": "Via",
                  "description": "Informs the client of proxies through which the response was sent."
                },
                {
                  "key": "X-Content-Type-Options",
                  "value": "nosniff",
                  "name": "X-Content-Type-Options",
                  "description": "The only defined value, \"nosniff\", prevents Internet Explorer from MIME-sniffing a response away from the declared content-type"
                },
                {
                  "key": "X-Powered-By",
                  "value": "Express",
                  "name": "X-Powered-By",
                  "description": "Specifies the technology (ASP.NET, PHP, JBoss, e.g.) supporting the web application (version details are often in X-Runtime, X-Version, or X-AspNet-Version)"
                }
              ],
              "cookie": [
                {
                  "expires": "Tue Jun 04 2019 10:34:16 GMT+0200 (W. Europe Daylight Time)",
                  "httpOnly": true,
                  "domain": "typicode.com",
                  "path": "/",
                  "secure": false,
                  "value": "de41ea6edc1b39ba0d4d8ba4c136b7b601528101256",
                  "key": "__cfduid"
                }
              ],
              "body": "{}"
            }
          ]
        }
      ]
    };

    constructor(private modalService: NgbModal){

    }

    ngOnInit(){
      let shouldshowExample = false;
      if(this.GetParam('example') == "true"){
        shouldshowExample = true;
        this.fileName = "example.json";
        this.jsonObject = this.exampleJson;
        console.log(this.jsonObject);
        this.startGenerating(this.jsonObject);
      }
      if(!shouldshowExample){
        this.activeNgbModal = this.modalService.open(this.start);
      }
      
    }


    GetParam(name){
      const results = new RegExp('[\\?&]' + name + '=([^&#]*)').exec(window.location.href);
      if(!results){
        return 0;
      }
      return results[1] || 0;
    }  

    fileChanged(e) {
        this.file = e.target.files[0];
        this.fileName = e.target.files[0].name.split('.')[0] + "_PostmanToDoc.html"
    }


    generate() {
        if(this.fileName != ""){
          let fileReader = new FileReader();
          fileReader.onload = (e) => {


            let localObj = JSON.parse(fileReader.result);
            this.startGenerating(localObj);
           
            
          }          
          fileReader.readAsText(this.file);
        } else {
          this.errorMessage = "You did not select a file.";
        }
        
    }

    startGenerating(localObj : any){
      if(localObj.info !== undefined){
        if(localObj.info.schema !== undefined){
          if(localObj.info.schema == "https://schema.getpostman.com/json/collection/v2.1.0/collection.json"){

            let i = 0;
            let r = 0;
            for(let item of localObj .item){
              r = 0;
              for(let response of item.response){
                try{
                  let jsonstring =  response.body.replace(/\\\"/g , '');
                  let jsonstring2 = jsonstring.replace(/\\/g, '');  
                  let obj = JSON.parse(jsonstring2);
                  jsonstring2 = JSON.stringify(obj, null, 4);
                  localObj.item[i].response[r].body = jsonstring2;
                  jsonstring =  response.originalRequest.body.raw.replace(/\\\"/g , '');
                  jsonstring2 = jsonstring.replace(/\\/g, '');  
                  obj = JSON.parse(jsonstring2);
                  jsonstring2 = JSON.stringify(obj, null, 4);
                  localObj.item[i].response[r].originalRequest.body.raw = jsonstring2;
                  
                }catch(e){

                }
                
                  r++;
              }
              
              i++;
            }
            this.jsonObject = localObj;
          
            if(this.activeNgbModal !== undefined){

              this.activeNgbModal.close();
            }
            this.succesfullyParsed = true;

            if(this.download){
              setTimeout(()=>{
                let importanthtml = this.container.nativeElement.innerHTML;
                console.log(this.container.nativeElement.innerHTML);
                
                var fullHtml = `
                
                <!doctype html>
                  <html lang="en">
                  <head>
                    <meta charset="utf-8">
                    <title>PostmanToDoc</title>
                    <base href="/">
                    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" integrity="sha384-WskhaSGFgHYWDcbwN70/dfYBj47jz9qbsMId/iRN3ewGhXQFZCSftd1LZCfmhktB" crossorigin="anonymous">
                    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
                    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.0/umd/popper.min.js" integrity="sha384-cs/chFZiN24E4KMATLdqdvsezGxaGsi4hLGOzlXwp5UZB1LY//20VyM2taTB4QvJ" crossorigin="anonymous"></script>
                    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/js/bootstrap.min.js" integrity="sha384-uefMccjFJAIv6A+rW+L4AHf99KvxDjWSu1z9VI8SKNVmz4sk7buKt/6v9KI65qnm" crossorigin="anonymous"></script>
            
                    <meta name="viewport" content="width=device-width, initial-scale=1">
                    <link rel="icon" type="image/x-icon" href="favicon.ico">
                    <style>
                    @media print  
                    {
                        .card_printable {
                            page-break-inside: avoid;
                        }
                    }
                    </style>
                  </head>
                  <body>
                    `+ importanthtml +`
                  </body>
                  </html>
    
                `;

          
                var url= "data:text/html;charset=UTF-8,"+encodeURIComponent(fullHtml);
                const a = document.createElement('a');
                a.setAttribute('style', 'display:none;');
                document.body.appendChild(a);

                // create file, attach to hidden element and open hidden element
                a.href = url;
                a.download = this.fileName;
                a.click();
              }, 1000);
            }


            if(this.print){
              setTimeout(()=>{
                window.print();  
              }, 1000);
            }

          } else {
            this.errorMessage = "Postman JSON File is < Version 2.1";
          }
        }else {
          this.errorMessage = "JSON Is not exported postman file!";
        }
        
      } else {
        this.errorMessage = "JSON Is not exported postman file!";
      }          
    }

    togglePrint(){
      if(!this.print){
        this.print = true;
      } else{
        this.print = false;
      }
    }

    toggleDownload(){
      if(!this.download){
        this.download = true;
      } else{
        this.download = false;
      }
    }


}
