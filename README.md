# react-native-android-meta-data

get android meta data

## Installation

```sh
npm install react-native-android-meta-data
```

## Usage
```xml
// add this to your android AndroidManifest file
<meta-data
    android:name="appStoreName"
    android:value="googlePlay" />
```
```js
import AndroidMetaData from "react-native-android-meta-data";

// Javascript
const res = await AndroidMetaData.getKey('appStoreName')
// in android
console.log(res) // googlePlay
// in ios 
console.log(res) // IOS is not supported
```


## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT
