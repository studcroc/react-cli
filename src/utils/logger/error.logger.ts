import chalk from "chalk";

const errorLogger = (error: String): void => {
    console.log(chalk.red(`${error}`));
}; 

export default errorLogger;