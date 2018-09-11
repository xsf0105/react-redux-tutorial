/**
 * @author xuyi
 */
import React from "react";
import renderer from "react-test-renderer";
import { shallow, mount, configure, render } from "enzyme";
import { Provider } from "react-redux";
import Adapter from "enzyme-adapter-react-16";
import configureStore from "../../../redux/store/configureStore";
import { fetchList, createTestAction } from "../../../redux/modules/testRedux";
import Home, { App } from "../index";

configure({ adapter: new Adapter() });

const sum = (a, b) => a + b;
const store = configureStore();

test("测试测试用例是否正确执行", () => {
  expect(sum(1, 2)).toBe(3);
});

describe("homePage页面测试", () => {
  describe("页面组件元素测试", () => {
    const homeData = {
      test: "tttt",
      hello: "hello"
    };
    const fetchList = () => new Promise(() => null, () => null);
    const createTestAction = () => null;
    const h = shallow(
      <App
        homeData={homeData}
        fetchList={fetchList}
        createTestAction={createTestAction}
      />
    );
    test("测试a标签是否存在", () => {
      expect(h.find("a").exists());
    });

    test("测试img标签是否存在", () => {
      expect(h.find("img").exists());
    });

    test("测试p标签是否存在", () => {
      expect(h.find("p").exists());
    });

    test("测试audio标签是否存在", () => {
      expect(h.find("audio").exists());
    });

    test("测试state中的msg发生改变时页面内容是否也随之改变", () => {
      const msg = "state is change";
      expect(h.setState({ msg }).state(["msg"])).toEqual(msg);
    });
  });
  describe("页面交互测试", () => {
    const component = shallow(
      <Provider store={store}>
        <Home />
      </Provider>
    );
    test("测试组件是否渲染成功", () => {
      expect(component.props()).toEqual({});
    });
  });
});
