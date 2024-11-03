import { Console } from "@woowacourse/mission-utils";
import MESSAGES from "../constants/messages.js";

class LottoView {
  async inputLottoAmount() {
    const userInputAmounts = await Console.readLineAsync(
      MESSAGES.INPUT_PURCHASE_AMOUNT
    );
    return userInputAmounts;
  }
  //�ζ� ���� ����
  printGetLottos(count) {
    Console.print(`\n${count}${MESSAGES.USER_LOTTO_PURCHASE}`);
  }

  printLottos(lottos) {
    lottos.forEach((lotto) => {
      Console.print(`[${lotto.join(", ")}]`);
    });
  }

  async inputWinningNumber() {
    await Console.readLineAsync(MESSAGES.INPUT_WINNING_NUMBER);
  }
}

export default LottoView;
