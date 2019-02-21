import React, { Component } from 'react'
import { AppRegistry, ScrollView, Text } from 'react-native'
import { NoConnection } from '../lib/NoConnection'

class TestComponent extends Component {
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

AppRegistry.registerComponent('App', () => TestComponent);
AppRegistry.runApplication('App', { rootTag: document.getElementById('root') });
