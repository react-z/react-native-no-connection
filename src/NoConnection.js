// @flow

import React, { Component } from 'react'
import { NetInfo } from 'react-native'
import styled from 'styled-components/native'

export class NoConnection extends Component {
  constructor(props) {
    super(props)
    this.state = { isConnected: true }
  }

  componentDidMount() {
    NetInfo.addEventListener('connectionChange', this.handleConnectivityChange)
  }

  componentWillUnmount() {
    NetInfo.removeEventListener(
      'connectionChange',
      this.handleConnectivityChange
    )
  }

  handleConnectivityChange = ({ type }) => {
    if (
      this.state.isConnected === false &&
      type !== 'none' &&
      this.props.onConnectionRestored
    ) {
      this.props.onConnectionRestored()
    }

    this.setState({ isConnected: type !== 'none' })
  }

  render() {
    if (!this.state.isConnected) {
      return (
        <NoConnectionWrapper>
          <NoConnectionText>No wifi connection</NoConnectionText>
        </NoConnectionWrapper>
      )
    }

    return this.props.children
  }
}

const NoConnectionWrapper = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  margin-top: -60px;
`

const NoConnectionText = styled.Text`
  font-size: 20;
  text-align: center;
  margin: 10px;
  margin-top: 0;
`
