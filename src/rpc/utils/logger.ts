import chalk from "chalk";
import boxen from "boxen";

const logStyle = {
  borderColor: "red",
  borderStyle: "round",
  padding: 1,
  margin: 0.5,
} as const;

export const logAuth = (userName: string | undefined): void => {
  console.clear();
  const title = chalk.bold.blue("User Authentication");
  const message = userName
    ? `${title}\n${chalk.green("Authed for user:")} ${chalk.cyan(userName)}`
    : `${title}\n${chalk.red("Authentication failed: No user name available")}`;
  const boxedMessage = boxen(message, logStyle);
  console.log(boxedMessage);
};

export const loginSuccess = (userName: string | undefined): void => {
  const title = chalk.bold.blue("Logged In");
  const message = userName
    ? `${title}\n${chalk.green("Connected to discord with Application:")} ${chalk.cyan(userName)}`
    : `${title}\n${chalk.green("Connected to Discord")}`;
  const boxedMessage = boxen(message, logStyle);
  console.log(boxedMessage);
};

export const loginFailed = (retry?: number): void => {
  const title = chalk.bold.red("Login Failed");
  const message =
    retry === 0 || retry
      ? `${title}\n${chalk.green("Retrying in")} ${chalk.cyan(
          `${((retry <= 5 ? retry : 5) + 1) * 10000}`,
        )}ms`
      : `${title}\n${chalk.red("Exiting Process")}`;
  const boxedMessage = boxen(message, logStyle);
  console.log(boxedMessage);
};

export const connectionClosed = (): void => {
  const title = chalk.bold.red("Connection Closed");
  const message = `${title}\n${chalk.green("Retrying in")} ${chalk.cyan(`${1.5 * 10000}`)}ms`;
  const boxedMessage = boxen(message, logStyle);
  console.log(boxedMessage);
};

export const flatpakFix = (): void => {
  const title = chalk.bold.yellow("FLATPAK DETECTED");
  const message = `${title}\n${chalk.green("Implementing Symlink Fix")}`;
  const boxedMessage = boxen(message, logStyle);
  console.log(boxedMessage);
};

export default { logAuth, loginSuccess, loginFailed, connectionClosed, flatpakFix };
