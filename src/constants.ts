import Package from "../package.json";

export const RetireVersion = Package.version;

export const RetireRefreshRate = 1000;

export const RetireSaveDataKey = "retire-save-data";
export const RetireTotalMoneyKey = "retire-total-money";

export const RetireCurrencyList: string[] = ["CNY", "USD", "CAN", "EUR", "BTC"];
export const RetireFallbackCurrency = RetireCurrencyList[0];

export const RetireDefaultSaveData: SaveData = {
  version: RetireVersion,
  edited: false,
  soul_mode: false,
  workTime: {
    start: { hour: 9, minute: 0, second: 0 },
    end: { hour: 18, minute: 0, second: 0 },
  },
  breaks: [],
  salary: 1636,
  working_days: 20,
  currency: RetireFallbackCurrency,
};

export const RetireGithubRepo = "https://github.com/LASER-Yi/retire.run";
