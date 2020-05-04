import * as Generator from 'yeoman-generator';
import * as chalk from 'chalk';

const yosay = require('yosay');

class TypescriptGenerator extends Generator {
    answers: { projectId: string };

    constructor(args, opts) {
        super(args, opts);
        this.answers = { projectId: '' };
    }

    // I've overridden the default template location to something more sensible
    templatePath(itemPath: string) {
        return super.templatePath(`../../../templates/${itemPath}`);
    }

    templateRoot() {
        return super.templatePath(`../../../templates/`);
    }

    initializing() {
        this.argument('projectId', { type: String, required: false });
        this.answers = { projectId: this.options.projectId };
    }

    async prompting() {
        this.log(yosay(`Welcome to the\n${chalk.red('Generic Typescript project')}\ngenerator!`));

        const prompts = [
            {
                type: 'input',
                name: 'projectId',
                message: 'What is the id of the new project?',
                when: () => this.answers.projectId.length === 0,
            },
        ];

        this.answers = await this.prompt(prompts);
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
