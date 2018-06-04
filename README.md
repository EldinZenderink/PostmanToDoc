# PostmanToDoc
A simplistic online tool for generating simplistic documentation which is printable using bootstrap. 

## How to use it?

- Export your API collection within postman
- Make sure you select "Collection v2.1" .
- Open this link: [PostmanToDoc](https://eldinzenderink.github.io/PostmanToDoc/).
- Upload the exported json file.
- If you only want a webpage, hit Generate.
- If you want a print window to pop up automatically, check the checkbox "Open Print window automatically.".
- If you want to download the HTML file, check the checkbox "Download generated html automatically.", if previous option is checked, you need to close the print window first before it starts downloading. Be aware, you still need a internet connection to allow bootstrap to load.
- If you want to generate again, refresh the page.

## Why?
Obviously, the official documentation generated by postman is 10 times better than what this does. But I needed my documenation in PDF format. Though postman documenation itself can be printed to PDF, it only shows one request and response. But my api documentation contains multiple examples with different responses, so I needed a way to generate documenation that showed all the examples. Unfortunately I couldn't find an already existing alternative that does what I need it to do.

### Disclaimer
This is really ugly code. Had to make something real quick. Unless people are actually using it, I won't be actively developing this.

License
----

MIT

**Free Software, Hell Yeah!**

