import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import {Input, Button} from 'antd';
const { TextArea } = Input;


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      loading: false,
      iconLoading: false,
    };
    this.enterLoading = this.enterLoading.bind(this);
    this.enterIconLoading = this.enterIconLoading.bind(this);
    this.onContentChange = this.onContentChange.bind(this);
    this.onTitleChange = this.onTitleChange.bind(this);
  }


  enterLoading = () => {
    this.setState({ loading: true });
  }

  enterIconLoading = () => {
    this.setState({ iconLoading: true });
  }

  onTitleChange(title){
    this.setState({title: title.target.value});
    console.log(this.state);
  }

  onContentChange(content){
    this.setState({content: content.target.value});
    console.log(this.state);
  }

  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}
        <div className="example-input">
          <h3>文章标题:</h3>
          <Input size="large" placeholder="标题" onChange={this.onTitleChange}/>
        </div>
        <div style={{width:400}}>
          <h3>文章正文:</h3>
          <TextArea rows={8} placeholder="正文内容" onChange={this.onContentChange}/>
        </div>
        <br/>
        <Button type="primary" loading={this.state.loading} onClick={this.enterLoading}>
          提交
        </Button>

      </div>
    );
  }
}

export default App;
