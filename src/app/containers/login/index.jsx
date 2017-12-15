import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Form, Input, Button, Icon } from "antd";
import { loginUser } from "./../../actions/login/index";

import "./index.less";
const FormItem = Form.Item;

export class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "guest"
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
        sessionStorage.setItem("access_token", "111111111");
        window.location.hash = "#";
        // this.props.actions.loginUser().then(res => {
        //   console.log(res);
        //   // cookie.set("access_token", response.access_token);
        //   sessionStorage.setItem("access_token", res.access_token);
        // });
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <div className="login-container">
        <div className="login-mask" />
        <Form
          className="login-content"
          layout="horizontal"
          onSubmit={this.handleSubmit}
        >
          <h2>React Redux SPA</h2>

          <FormItem label="账号" hasFeedback>
            {getFieldDecorator("userName", {
              rules: [
                { required: true, message: "Please input your username!" }
              ]
            })(
              <Input
                prefix={
                  <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                placeholder="请输入：guest"
              />
            )}
          </FormItem>
          <FormItem label="密码" hasFeedback>
            {getFieldDecorator("password", {
              rules: [
                { required: true, message: "Please input your Password!" }
              ]
            })(
              <Input
                prefix={
                  <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                type="password"
                placeholder="请输入：123456"
              />
            )}
          </FormItem>

          <FormItem>
            <Button className="ant-col-24" type="primary" htmlType="submit">
              登录
            </Button>
          </FormItem>
        </Form>
      </div>
    );
  }
}

// const mapStateToProps = state => ({
//   const { auth } = state;
//   return {
//     auth
//   };
// });

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    {
      dispatch,
      loginUser
    },
    dispatch
  )
});

// export default connect(mapStateToProps)(createForm()(Login));
export default Form.create()(
  connect(mapStateToProps, mapDispatchToProps)(Login)
);
