# react-native-no-connection

[![npm version](https://badge.fury.io/js/react-native-no-connection.svg)](https://badge.fury.io/js/react-native-no-connection)

react-native-no-connection is a wrapper component indicating when network connection has been lost

## Install

`yarn add react-native-no-connection`

## Usage

```jsx
import React from 'react'
import { ScrollView, Text } from 'react-native'
import NoConnection from 'react-native-no-connection'

export default class extends React.Component {
  getData () {
    console.log('fetching data now')
  }

  render() {
    return (
      <ScrollView>
        <NoConnection onConnectionRestored={this.getData.bind(this)}>
          <Text>Showing content now</Text>
        </NoConnection>
      </ScrollView>
    )
  }
}
```

## Props

#### `onConnectionRestored` (required)
Function to run when connection has been restored

## Styles
Uses styled-components 💅 for the base styling.

## Development
    yarn
    npm run dev

## Build
    yarn
    npm run build
    npm login
    npm version patch
    git add -A
    git push origin master
    npm publish

## License

[MIT](http://isekivacenz.mit-license.org/)
