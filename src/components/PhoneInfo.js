import React, { Component, Fragment } from "react";

class PhoneInfo extends Component {
  // 각 전화번호 정보를 보여주는 component

  state = {
    editing: false,
    name: "",
    phone: "",
  };

  handleRemove = () => {
    const { info, onRemove } = this.props;
    onRemove(info.id);
  };

  handleToggleEdit = () => {
    // 함수가 한 번 실행될 때마다 반전
    // true -> false
    // = onUpdate
    // false -> true
    // = state에 info 값을 넣어주기
    const { info, onUpdate } = this.props;
    if (this.state.editing) {
      onUpdate(info.id, {
        name: this.state.name,
        phone: this.state.phone,
      });
    } else {
      this.setState({
        name: info.name,
        phone: info.phone,
      });
    }
    this.setState({
      editing: !this.state.editing,
    });
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
      // name이 target의 value값이 된다.
    });
  };

  render() {
    const { name, phone, id } = this.props.info;
    // 비구조 할당을 통한 props로 데이터를 전달받는다.
    const { editing } = this.state;
    // 레퍼런스 끌어오기

    const style = {
      border: "1px solid black",
      padding: "8px",
      margin: "8px",
    };
    return (
      <div style={style}>
        {editing ? (
          <Fragment>
            {/* div 대용으로 쓰는 Fragment */}
            <div>
              <input
                name="name"
                onChange={this.handleChange}
                value={this.state.name}
              />
            </div>
            <div>
              <input
                name="phone"
                onChange={this.handleChange}
                value={this.state.phone}
              />
            </div>
            {/* inline 대신 block 으로 표현하기 위해 div로 감싸기 */}
          </Fragment>
        ) : (
          <Fragment>
            <div>
              <b>{name}</b>
            </div>
            <div>{phone}</div>
          </Fragment>
        )}
        <button onClick={this.handleRemove}>Delete</button>
        <button onClick={this.handleToggleEdit}>
          {editing ? "update" : "edit"}
          {/* 삼항 연산자를 사용해서 표현 */}
        </button>
      </div>
    );
  }
}

export default PhoneInfo;
