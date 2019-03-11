# JS Weekdays Generator

This package uses a simple array and returns a single string, separated by commas and with an "e" separator on the last two days.

## 🤖 Installation Instructions

This service is based on Node. To run it you just need to install any version above Node 11.2. We use Docker to build and deploy our services, so you just need to keep the Docker's and CI files, this will trigger the CI automatically.

To install the package, just run:

```
npm i
```

And then, to start the server:

```
npm start
```

Or, you can start the server as development mode:

```
npm run dev
```

After that the server will be up and running, waiting for any API calls.

## 🧐 Usage

To use this package, just use this code snippet:

```
const weekdays = require("./js-weekdays-generator");
const yourList = ["segunda", "domingo", "quinta"];

const string = weekdays(yourList);
// => Expected output:
//    "Segunda, quinta e domingo"
```

## 💀 Testing

We use Jest to test our file. Every test file should follow this pattern:

```
<nome>.test.js
```

To test it, just run:
```
npm test
```

## 💅 Versioning

We use [SemVer](https://semver.org/) for versioning.
