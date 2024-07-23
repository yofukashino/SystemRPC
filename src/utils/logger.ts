import chalk from "chalk";
import boxen from "boxen";

const logStyle = {
  borderColor: "red",
  borderStyle: "round",
  padding: 1,
  margin: 0.5,
} as const;

export const logAuth = (userName: string | undefined) => {
  console.clear();
  const title = chalk.bold.blue("User Authentication");
  const message = userName
    ? `${title}\n${chalk.green("Authed for user:")} ${chalk.cyan(userName)}`
    : `${title}\n${chalk.red("Authentication failed: No user name available")}`;
  const boxedMessage = boxen(message, logStyle);
  console.log(boxedMessage);
};

export const loginSuccess = (userName: string | undefined) => {
  const title = chalk.bold.blue("Logged In");
  const message = userName
    ? `${title}\n${chalk.green("Connected to discord with Application:")} ${chalk.cyan(userName)}`
    : `${title}\n${chalk.green("Connected to Discord")}`;
  const boxedMessage = boxen(message, logStyle);
  console.log(boxedMessage);
};

export const loginFailed = (retry?: number) => {
  const title = chalk.bold.red("Login Failed");
  const message =
    retry || 0
      ? `${title}\n${chalk.green("Retrying in")} ${chalk.cyan(`${(retry || 0) + 1 * 10000}`)}ms`
      : `${title}\n${chalk.red("Exiting Process")}`;
  const boxedMessage = boxen(message, logStyle);
  console.log(boxedMessage);
};

export const connectionClosed = () => {
  const title = chalk.bold.red("Connection Closed");
  const message = `${title}\n${chalk.green("Retrying in")} ${chalk.cyan(`${6 * 10000}`)}ms`;
  const boxedMessage = boxen(message, logStyle);
  console.log(boxedMessage);
};

export default { logAuth, loginSuccess, loginFailed, connectionClosed };
