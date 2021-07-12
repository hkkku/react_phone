import React, { Component } from "react";
import PhoneInfo from "./PhoneInfo";

class PhoneInfoList extends Component {
  static defaultProps = {
    //defaultProps 를 정해줄 때에는 앞에 static을 붙인다.
    data: [],
  };
  render() {
    const { data, onRemove } = this.props;
    //data 값을 props로 받아온다.

    // if (!data) return null;
    // Data가 없으면 하단 문을 실행하지 않는다.
    const list = data.map(
      (info) => <PhoneInfo onRemove={onRemove} info={info} key={info.id} />
      // key = 여러 component를 렌더링 할 때 key를 통해 고유 값을 정해줌 -> 업데이트 성능 최적화
      // react 내에서 배열 내용이 수정되더라도 효율적으로 다시 업데이트 시킬 수 있다.
      // key가 없다면 배열의 index가 key 대신으로 사용된다.
    );

    return <div>{list}</div>;
  }
}

export default PhoneInfoList;
