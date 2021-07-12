import React, { Component } from "react";

class PhoneInfo extends Component {
  // 각 전화번호 정보를 보여주는 component
  handleRemove = () => {
    const { info, onRemove } = this.props;
    onRemove(info.id);
  };

  render() {
    const { name, phone, id } = this.props.info;
    // 비구조 할당을 통한 props로 데이터를 전달받는다.
    const style = {
      border: "1px solid black",
      padding: "8px",
      margin: "8px",
    };
    return (
      <div style={style}>
        <div>
          <b>{name}</b>
        </div>
        <div>{phone}</div>
        <button onClick={this.handleRemove}>Delete</button>
      </div>
    );
  }
}

export default PhoneInfo;
