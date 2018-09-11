/**
 * @author xuyi
 */
import testRedux, { testActionType, fetchListAction } from "../testRedux";

const asyncRequest = (param, resolveTime, rejectTime) => {
  const promise = new Promise((resolve, reject) => {
    const timer1 = setTimeout(() => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      resolve(param);
    }, resolveTime);
    const timer2 = setTimeout(() => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      reject();
    }, rejectTime);
  });
  return promise;
};

describe("test redux 测试", () => {
  test("初始化测试", () => {
    expect(testRedux(undefined, {})).toEqual({
      msg: "",
      homeData: {}
    });
  });

  test("testActionType测试", () => {
    expect(
      testRedux(undefined, {
        type: testActionType,
        payload: "hello world!"
      })
    ).toEqual({
      msg: "hello world!",
      homeData: {}
    });
  });

  test("fetchListAction请求成功测试", async () => {
    expect(
      testRedux(undefined, {
        type: fetchListAction.pending
      })
    ).toEqual({
      msg: "",
      homeData: {}
    });
    try {
      const param = { data: "test" };
      const data = await asyncRequest(param, 100, 200);
      expect(
        testRedux(undefined, {
          type: fetchListAction.accept,
          payload: data
        })
      ).toEqual({
        msg: "",
        homeData: param
      });
    } catch (e) {
      expect(
        testRedux(undefined, {
          type: fetchListAction.reject
        })
      ).toEqual({
        msg: "",
        homeData: {}
      });
    }
  });

  test("fetchListAction请求失败测试", async () => {
    expect(
      testRedux(undefined, {
        type: fetchListAction.pending
      })
    ).toEqual({
      msg: "",
      homeData: {}
    });
    try {
      const param = { data: "test" };
      const data = await asyncRequest(param, 200, 100);
      expect(
        testRedux(undefined, {
          type: fetchListAction.accept,
          payload: data
        })
      ).toEqual({
        msg: "",
        homeData: param
      });
    } catch (e) {
      expect(
        testRedux(undefined, {
          type: fetchListAction.reject
        })
      ).toEqual({
        msg: "",
        homeData: {}
      });
    }
  });
});
