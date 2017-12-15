import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Button, Row, Form, Input } from "antd";
// import { config } from "utils";
import styles from "./index.less";

const FormItem = Form.Item;

export class SubPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      img:
        "https://orig00.deviantart.net/95a9/f/2012/363/6/4/pixel_duck_by_pixeldinosaur-d5pkk28.png"
    };
  }

  handleOk = () => {
    validateFieldsAndScroll((errors, values) => {
      if (errors) {
        return;
      }
      dispatch({ type: "login/login", payload: values });
    });
  };

  return() {
    <div className={styles.form}>
      {/* <div className={styles.logo}>
            <img alt={"logo"} src={config.logo} />
            <span>{config.name}</span>
          </div> */}
      <form>
        <FormItem hasFeedback>
          {getFieldDecorator("username", {
            rules: [
              {
                required: true
              }
            ]
          })(
            <Input
              size="large"
              onPressEnter={handleOk}
              placeholder="Username"
            />
          )}
        </FormItem>
        <FormItem hasFeedback>
          {getFieldDecorator("password", {
            rules: [
              {
                required: true
              }
            ]
          })(
            <Input
              size="large"
              type="password"
              onPressEnter={handleOk}
              placeholder="Password"
            />
          )}
        </FormItem>
        <Row>
          <Button
            type="primary"
            size="large"
            onClick={handleOk}
            loading={loading.effects.login}
          >
            Sign in
          </Button>
          <p>
            <span>Username：guest</span>
            <span>Password：guest</span>
          </p>
        </Row>
      </form>
    </div>;
  }
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(Login);
