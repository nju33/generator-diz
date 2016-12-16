import plumber from 'gulp-plumber'
import rollup from 'gulp-rollup-stream';
import rollupConfig from '../rollup.config';

export default {
  name: 'script',
  stream(gulp, config) {
    return gulp.src(config[this.name][0])
    .pipe(plumber())
    .pipe(rollup(rollupConfig()))
    .pipe(gulp.dest(config[this.name][1]))
  }
}
