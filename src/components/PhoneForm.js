import React, { Component } from "react";
// 부모 컴포넌트에게 데이터를 전달할 자식 컴포넌트
class PhoneForm extends Component {
  state = {
    name: "",
    phone: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name] : e.target.value,
      // input의 value를 name 값에 setState로 설정
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onCreate(this.state);
    this.setState({
      // 값 초기화
      name : '',
      phone: '',
    })
  }
  // 이벤트 객체 조정
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            name = "name"
            placeholder="name"
            onChange={this.handleChange}
            value={this.state.name}
          />
          {/* onChange => input에서 값을 변경할 때마다 name 값이 바뀐다. */}
          <input 
            name="phone" 
            placeholder="phone number" 
            onChange={this.handleChange}
            value={this.state.phone} />
          {/* input이 여러 개 생길 때의 state 관리법 */}
          <button type ="submit">submit</button>
          {/* <div>
            {this.state.name}
            {this.state.phone}
          </div> */}
        </form>
      </div>
    );
  }
}

export default PhoneForm;
