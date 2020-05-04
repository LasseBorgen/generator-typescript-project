import * as Generator from 'yeoman-generator';
import * as chalk from 'chalk';

const yosay = require('yosay');

class TypescriptGenerator extends Generator {
    answers: { projectId?: string };

    // I've overridden the default template location to something more sensible
    templatePath(itemPath: string) {
        return super.templatePath(`../../../templates/${itemPath}`);
    }

    templateRoot() {
        return super.templatePath(`../../../templates/`);
    }

    initializing() {
        this.argument('projectId', { type: String, required: false });
        this.answers = {};
    }

    async prompting() {
        this.log(yosay(`Welcome to the\n${chalk.red('Generic Typescript project')}\ngenerator!`));

        const prompts = [
            {
                type: 'input',
                name: 'projectId',
                message: 'What is the id of the new project?',
                when: () => this.options.projectId === undefined,
            },
        ];

        this.answers.projectId = this.options.projectId ? this.options.projectId : (await this.prompt(prompts)).projectId;
    }

    writing() {
        const workingDirectoryPath = process.cwd();
        this.fs.copyTpl(this.templateRoot(), this.destinationRoot(), { projectId: this.answers.projectId, workingDirectoryPath }, {}, { globOptions: { dot: true } });
    }

    async install() {
        this.installDependencies({
            bower: false,
            yarn: false,
            npm: true,
        });
    }

    async end() {
        this.log(chalk.green('Generator is done!'));
    }
}

export default TypescriptGenerator;
