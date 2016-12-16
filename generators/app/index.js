'use strict';
const yeoman = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = yeoman.Base.extend({
  prompting() {
    this.log(yosay(
      'Welcome to the super-duper ' + chalk.red('generator-library') + ' generator!'
    ));

    const prompts = [
      {
        type: 'input',
        name: 'name',
        message: 'Library name',
        default: this.appname
      },
      {
        type: 'input',
        name: 'description',
        message: 'Library description',
        default: ''
      }
    ];

    return this.prompt(prompts).then(function (props) {
      this.props = props;
    }.bind(this));
  },

  writing() {
    this.fs.copyTpl(
      this.templatePath('template-files/'),
      this.destinationPath('.'),
      this.props
    );
    this.fs.copyTpl(
      this.templatePath('template-files/.*'),
      this.destinationPath('.'),
      this.props
    );
  },

  install() {
    this.runInstall('yarn', [],  err => {
      if (err) {
        throw new Error(err);
      }

      console.log(yosay('Complete!'));
    });
  }
});
