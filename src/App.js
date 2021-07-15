import React, { Component } from "react";
import PhoneForm from "./components/PhoneForm";
import PhoneInfoList from "./components/PhoneInfoList";

class App extends Component {
  id = 3;
  // 초기값 정의
  // 렌더링 되는 값이 아니므로 setState 해줄 필요x
  // 수정/삭제 시에 index와 다른 원리로 작동한다.
  // 다음에 들어갈 값이 3이므로 값을 3으로 정의한다.

  state = {
    information: [
      {
        id: 0,
        name: "홍길동",
        phone: "010-0000-0001",
      },
      {
        id: 1,
        name: "홍길영",
        phone: "010-0000-0002",
      },
      {
        id: 2,
        name: "홍길조",
        phone: "010-0000-0003",
      },
    ],
    // 배열을 만들어주기
    keyword: "",
  };

  handleChange = (e) => {
    // keyword 변환 함수
    this.setState({
      keyword: e.target.value,
    });
  };
  handleCreate = (data) => {
    //  data를 parameter로 갖는 함수
    //  console.log(data);

    //  this.state.information.push(data);
    // -> react에서는 불변성을 꼭 유지해줘야 한다
    // -> 내부의 배열이나 객체를 수정할 때에는 새로운 배열이나 객체를 만들어서 값을 주입해주어야 한다.
    const { information } = this.state;
    // 비구조 할당 문법 사용 -> 코드가 길어지는 걸 막는다.
    this.setState({
      // information : this.state.information.concat(data),
      information: information.concat({
        // Object.assign({}, data, {
        ...data,

        // name : data.name,
        // phone: data.phone,
        id: this.id++,
        //data가 추가될 때마다 id값이 1씩 상승
        //값이 수정되었을때 리렌더링을 해주는 setState
      }),
    });
  };

  handleRemove = (id) => {
    const { information } = this.state;
    this.setState({
      information: information.filter((info) => info.id !== id),
      // information에 필터를 걸어서 information 안의 info.id가 parameter로 받은 id값이 아닌 것들만 필터링
    });
  };

  handleUpdate = (id, data) => {
    const { information } = this.state;
    // information에 대한 레퍼런스 가져오기
    this.setState({
      information: information.map((info) => {
        if (info.id === id) {
          return {
            id,
            ...data,
            // name 과 phone 값이 들어감
          };
        }
        return info;
      }),
    });
  };
  render() {
    return (
      <div>
        <PhoneForm onCreate={this.handleCreate} />
        <input
          value={this.state.keyword}
          onChange={this.handleChange}
          placeholder="Search..."
        />
        {/* {JSON.stringify(this.state.information)} */}
        <PhoneInfoList
          data={this.state.information.filter(
            (info) => info.name.indexOf(this.state.keyword) > -1
          )}
          onRemove={this.handleRemove}
          onUpdate={this.handleUpdate}
        />
      </div>
    );
  }
}

export default App;
