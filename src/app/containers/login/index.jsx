import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Form, Input, Button, Icon, message } from "antd";

import "./index.less";

const FormItem = Form.Item;
const error = () => {
  message.error("Please check your username and password and try again.");
};

export class Login extends React.Component {
  componentDidMount() {
    sessionStorage.clear();
  }

  /**
   * 表单提交
   * 详情见antd：https://ant.design/components/form-cn/
   */
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (values.userName === "guest" && values.password === "123456") {
        if (!err) {
          console.log("Received values of form: ", values);
          sessionStorage.setItem("access_token", "guest");
          window.location.hash = "/"
        }
      } else {
        error();
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

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    {
      dispatch
    },
    dispatch
  )
});

export default Form.create()(
  connect(mapStateToProps, mapDispatchToProps)(Login)
);
