import React, { Component } from "react";
import PhoneForm from "./components/PhoneForm";

class App extends Component {
 
 id = 0;
 // 초기값 정의   
 // 렌더링 되는 값이 아니므로 setState 해줄 필요x 
 state = {
   information : [],
   // 배열을 만들어주기
 } 
 
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
      information : information.concat(Object.assign({}, data,{
        // ...data,

        // name : data.name,
        // phone: data.phone,
        id : this.id++
        //data가 추가될 때마다 id값이 1씩 상승
        //값이 수정되었을때 리렌더링을 해주는 setState 
      })),
    })
 }
 
 render() {
    return (
      <div>
        <PhoneForm onCreate = {this.handleCreate}/>
        {JSON.stringify(this.state.information)}
      </div>
    );
  }
}

export default App;
