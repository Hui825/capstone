import React, { Component } from 'react';
import { clickProps } from 'react-native-web/dist/cjs/modules/forwardedProps';
import { WebView } from 'react-native-webview';
import { compile } from 'sass';



class map extends Component {
  render() {
    return (
      <WebView source={"../../assets/map/춘천중앙시장.html"} />
    );
  }
}
export default map;