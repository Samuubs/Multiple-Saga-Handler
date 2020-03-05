import React, { Component } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { connect } from 'react-redux';
import {showAlert} from "./actions/buttonAction";



class ButtonClass extends Component {
  render() {
    return (
        <View>
            <TouchableOpacity onPress={this.props.showAlert}><Text>Saga Teste</Text></TouchableOpacity>
        </View>
    )
  }
}

const mapStateToProps = state => (
    {

    }
)

const mapDispatchToProps = dispatch => (
    {
        showAlert: () => dispatch(showAlert())
    }
)

export default connect(mapStateToProps, mapDispatchToProps)(ButtonClass)