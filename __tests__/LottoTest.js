import Lotto from "../src/model/Lotto";
import ERROR_MESSAGE from "../src/constants/error";

describe("로또 클래스 테스트", () => {
  test("로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow("[ERROR]");
  });
  test("로또 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow("[ERROR]");
  });
  test("로또 번호가 1보다 작거나 45보다 크면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([0, 2, 3, 4, 5, 6]);
    }).toThrow(ERROR_MESSAGE.WINNING_NUMBER_RANGE);

    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 46]);
    }).toThrow(ERROR_MESSAGE.WINNING_NUMBER_RANGE);
  });
  test("로또 번호의 개수가 6개가 아니면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5]);
    }).toThrow(ERROR_MESSAGE.WINNING_NUMBER_DUP);
  });
});
