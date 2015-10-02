gulp = require 'gulp'
connect = require 'gulp-connect'

gulp.task 'copy', ->
  gulp.src('src/**/*')
    .pipe gulp.dest('dist')
    .pipe connect.reload()

gulp.task 'connect', ->
  connect.server
    root: 'dist'
    livereload: true

gulp.task 'watch', ->
  gulp.watch 'src/**/*', [
    'copy'
  ]

gulp.task 'build', [
  'copy'
]

gulp.task 'default', [
  'build'
  'connect'
  'watch'
]
