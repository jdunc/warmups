var gulp = require('gulp');
var eslint = require('gulp-eslint');

gulp.task('default', ['new_new_task', 'eslint'], function(){
  console.log('Hey there!');
})
//runs all defined tasks before running the new default function, runs in order of the array (0 -> n)
gulp.task('changed', function(){
  console.log("hey this is a changed file notification");
})
gulp.task('new_new_task', function(){
  console.log("hey this is a new_second task");
})
// gulp.watch(['./typoglycemia.js'], ['changed']);

gulp.task('eslint', function () {
  gulp.src(['./typoglycemia.js'])
    .pipe(eslint())
    .pipe(eslint.format())
});
