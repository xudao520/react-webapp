/**
 * Created by xudao on 16/6/20.
 */
require('normalize.css/normalize.css');
require('styles/animate.css');
require('styles/overflow.css');

import React from 'react';

export default class Alert extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      btns: '',
      animateClassList: 'alert-box animated bounceIn',
      animateClassOverflow: 'overflow animated fadeIn'
    };
  }

  componentDidMount() {
    this.mapBtns(this);
  }

  componentWillUnmount() {

  }

  render() {
    return (
      <div className={this.state.animateClassOverflow}>
        <div className={this.state.animateClassList}>
          <div className="alert-box-header">{this.props.title}</div>
          <div className="alert-box-body">{this.props.content}</div>
          <div className="alert-box-footer">{this.state.btns}</div>
        </div>
      </div>
    );
  }


  closeModal(index) {
    this.setState({
      animateClassList: 'alert-box animated bounceOut'
    });

    const _this = this;
    setTimeout(function(){
      _this.setState({
        animateClassOverflow: 'overflow animated fadeOut'
      });
    },300);

    this.props.close(this.props._this, index);
  }

  mapBtns(that){
    const _this = that;
    var btns = this.props.btns.map(function(b, index){
      return(
        <div className="aui-box-btn" onClick={_this.closeModal.bind(_this, index)} style={{color:b.color}}>{b.text}</div>
      )
    });

    this.setState({
      btns: btns
    });
  }

}
