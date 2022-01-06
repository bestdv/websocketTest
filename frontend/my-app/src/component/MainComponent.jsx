import React, { Component } from 'react';
import axios from 'axios';

class MainComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
    };
  }

  componentDidMount() {
    this.getApi();
  }

  getApi = () => {
    axios
      //   .get('http://192.168.120.6:8080/monitoring/api/test', {
      //     params: {
      //       hi: '안녕하세용~',
      //     },
      //   })
      .get('http://192.168.120.8:8080/api/hello')
      .then((res) => {
        console.log(res);
        console.log('res', res);
        this.setState({
          message: res.data.message,
        });
      })
      .catch((res) => console.log(res));
  };

  render() {
    return (
      <div>
        Main 페이지
        <br />
        {this.state.message}
      </div>
    );
  }
}

export default MainComponent;
