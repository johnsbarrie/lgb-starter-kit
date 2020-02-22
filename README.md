# CWA Skeleton Application

A basic build for CWAs

- Ready to start React App (CWA)
- Integrate configuration and builds for the Lloyds Constellation package
- Image loader configured
- SASS and CSS loaders configured
- Unit test tools configured
- Production build optimized

## Motivation

The purpose of starter kit is help to create new apps and projects for CWA

### Prerequisites

- Node.js v8 or above

You can check your node version using the command:

```CLI
node --version
```

### Installing

Install dependencies and start using [yarn](https://yarnpkg.com):

```CLI
yarn install
yarn start
```

Or via [npm](https://www.npmjs.com/):

```CLI
npm install
npm start
```

### Testing

You can run your tests using:

```CLI
yarn test
```

It´s possible to generate the code coverage of your code. Jest will generate a HTML file with all information from your tests. To do this run the command:

```CLI
yarn test:coverage
```

### Production build

You can generate an optimized distribution bundle by running this command:

```CLI
yarn build
```
The .env contains information that can be edited to includes or remove target such as bos.

It´s possible to check the size and content of your bundled file. To do this run the command:

```CLI
yarn analyze
```

## Contributing

Suggestions or pull requests are welcome.

For major changes, please open an issue first to discuss what you would like to change.


## License

This project is licensed under the MIT Licensed - see the [LICENSE](LICENSE) file for details
