import {React,Component} from 'react';
// import {connect} from 'react-redux';
import {Input} from "antd";
import PropTypes from "prop-types";

class InputView extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        <Input placeholder="Basic usage" />
      </div>
    );
  }

}


export default InputView;