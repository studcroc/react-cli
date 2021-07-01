import chalk from "chalk";

const successLogger = (mssg: String): void => {
    console.log(chalk.green(`${mssg}`));
}; 

export default successLogger;