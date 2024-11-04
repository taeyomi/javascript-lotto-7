import { Console } from "@woowacourse/mission-utils";
import MESSAGES from "../constants/messages.js";
import STATISTICS_MESSAGE from "../constants/statistics.js";

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

  //��÷��ȣ �Է�
  async inputWinningNumber() {
    const winningNumbers = await Console.readLineAsync(
      MESSAGES.INPUT_WINNING_NUMBER
    );
    return winningNumbers.split(",").map(Number);
  }

  //���ʽ���ȣ �Է�
  async inputBonusNumber() {
    const bonusNumbers = await Console.readLineAsync(
      MESSAGES.INPUT_BONUS_NUMBER
    );
    return Number(bonusNumbers);
  }

  printStatistics(statistics) {
    Console.print(STATISTICS_MESSAGE.STATISTICS_DEFAULT_MESSAGE);
    Console.print(`${STATISTICS_MESSAGE.FIFTH}${statistics.fifth}��`);
    Console.print(`${STATISTICS_MESSAGE.FOURTH}${statistics.fourth}��`);
    Console.print(`${STATISTICS_MESSAGE.THIRD}${statistics.third}��`);
    Console.print(`${STATISTICS_MESSAGE.SECOND}${statistics.second}��`);
    Console.print(`${STATISTICS_MESSAGE.FIRST}${statistics.first}��`);
    Console.print(
      `${STATISTICS_MESSAGE.RATE_OF_RETURN}${statistics.rate}${STATISTICS_MESSAGE.PERCENT}`
    );
  }
}

export default LottoView;
