import React, { Component } from "react";

class PhoneForm extends Component {
  state = {
    name: "",
    phone: "",
  };

  handleChange = (e) => {
    this.setState({
      name: e.target.value,
      // input의 value를 name 값에 setState로 설정
    });
  };
  // 이벤트 객체 조정
  render() {
    return (
      <div>
        <form>
          <input
            placeholder="name"
            onChange={this.handleChange}
            value={this.state.name}
          />
          {/* onChange => input에서 값을 변경할 때마다 name 값이 바뀐다. */}
          <input placeholder="phone number" value={this.state.phone} />
          {/* input이 여러 개 생길 때의 state 관리법 */}
          {this.state.name}
        </form>
      </div>
    );
  }
}

export default PhoneForm;
