import chalk from "chalk";

const infoLogger = (mssg: String): void => {
    console.log(chalk.white(`${mssg}`));
}; 

export default infoLogger;