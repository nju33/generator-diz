import gulp from 'gulp';
import lazypipe from 'lazypipe';
import htmlmin from 'gulp-htmlmin';
import gulpif from 'gulp-if';

export const postStream = dest => {
  return lazypipe()
    .pipe(htmlmin, {
       collapseWhitespace: true,
       removeComments: true,
       removeAttributeQuotes: true,
       minifyCSS: true,
       minifyJS: true,
       minifyURLs: true,
       sortAttributes: true,
       sortClassName: true
    })
    .pipe(gulp.dest, dest)
    .pipe(gulpif, bs.active, bs.stream());
};
