#User client

A teleprompter using React, Webpack, jquery scrollTo and Mousetrap.

It is not a real Flux architecture (only a store) since the application was too simple.

There is 3 shortcut:
- 0 to start the scrolling animation
- + to add 2second per 1000px (slower so)
- - to take out 2 seconde per 1000px (faster so)

# Run the server
You must install [Docker](https://docs.docker.com/installation/) first.
Then you can run the server :
```shell
docker build -t my_awesome_name .
docker run -d -p 80:80 my_awesome_name
```

#License

The MIT License (MIT)

Copyright (c) 2015 QQorp

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
