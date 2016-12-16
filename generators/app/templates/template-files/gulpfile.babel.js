import gulp from 'gulp';
import browserSync from 'browser-sync';
import mainBlog from './gulp-tasks/blog/main';
import style from './gulp-tasks/style';
import script from './gulp-tasks/script';
import favicon from './gulp-tasks/favicon';
import bsConfig from './bs-config';
import pkg from './package';

const bs = browserSync.create(pkg.name);

const conf = {
  style: [
    'src/styles/index.less',
    'local/styles/',
    'src/styles/**/*.less'
  ],
  script: [
    'src/scripts/index.js',
    'local/scripts/',
    'src/scripts/**/*.js'
  ],
  favicon: ['assets/favicons/*', 'local/']
};

const tasks = {
  style,
  script,
  favicon
};

Object.keys(conf).forEach(key => {
  const task = tasks[key];
  gulp.task(task.name, task.stream.bind(task, gulp, conf));

  const preTasks = Object.keys(conf).filter(key => Boolean(conf[key][2]));
  gulp.task('watch', preTasks, () => {
    bs.init(bsConfig);
    preTasks.forEach(task => {
      gulp.watch(conf[task][2], [task]);
    });
  });
});
