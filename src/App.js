import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import app_store from './AppStore';
import {Input, Button} from 'antd';
const { TextArea } = Input;

const TodoItem = ({completed, text, key}) => {
  const checkedProp = completed ? {checked: true} : {};

  function removeItem(){
    app_store.filter((todoItem) => {
      return todoItem.id !== key;
    });
    console.log(key);
    console.log(app_store);
  }

  return (
    <li
      className="todo-item"
      style={{
        textDecoration: completed ? 'line-through' : 'none'
      }}
    >
      <input className="toggle" type="checkbox" {...checkedProp} readOnly />
      <label className="text">{text}</label>
      <button className="remove" onClick={removeItem}>×</button>
    </li>
  )
}

class App extends Component {

  constructor(props){
    super(props);
    this.articleId = 0;
    this.state = {
      loading: false,
      iconLoading: false,
      id: 0,
      completed: false
    };
    this.enterLoading = this.enterLoading.bind(this);
    this.enterIconLoading = this.enterIconLoading.bind(this);
    this.onContentChange = this.onContentChange.bind(this);
    this.onTitleChange = this.onTitleChange.bind(this);
    this.onSubmitClick = this.onSubmitClick.bind(this);
    this.onTodoItemChange = this.onTodoItemChange.bind(this);
    this.onAddTodoListClick = this.onAddTodoListClick.bind(this);

  }


  enterLoading = () => {
    this.setState({ loading: true });
  }

  enterIconLoading = () => {
    this.setState({ iconLoading: true });
  }

  onTitleChange(title){
    this.setState({title: title.target.value});
  }

  onContentChange(content){
    this.setState({content: content.target.value});
  }

  onTodoItemChange(content){
    this.setState({text: content.target.value});
  }

  onSubmitClick(){
    this.setState({ id: ++this.articleId});
    // this.appStore = {articles: this.state};
    // console.log(this.appStore);

  }

  onAddTodoListClick(){
    this.setState({id: ++this.articleId, text: this.state.text, completed: false});
    app_store.push(this.state);
    console.log(app_store);
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
        <Button type="primary" loading={this.state.loading} onClick={this.onSubmitClick}>
          提交
        </Button>
        <h3>title: </h3>
        <h5>{this.state.title}</h5>
        <h3>content: </h3>
        <h5>{this.state.content}</h5>

        <div>
          <Input style={{width:300}} onChange={this.onTodoItemChange}/>
          <Button type="primary" onClick={this.onAddTodoListClick}>add to list</Button>
        </div>
        <ul>
        {
          app_store.map((item) => (
            <TodoItem
              key={item.id}
              text={item.text}
              completed={item.completed}
            />
            ))
        }
        </ul>
      </div>
    );
  }
}

export default App;
