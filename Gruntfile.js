module.exports = gruntfile;

function gruntfile(grunt) {

  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    config: {
      app: 'app',
      generated: '.tmp/generated',
      dist: 'dist',
      temp: '.tmp',
      framework: 'templates'
    },
  });
  grunt.loadTasks('tasks');

  grunt.registerTask('build', [
    'clean',
    'prepareHtml',
    'prepareBower',
    'copy:app',
    'copy:framework',
    'copy:bootstrapFonts',
    'copy:fontawesomeFonts',
    'copy:cssimages',
    'copy:cssselect2',
    'copy:cssuigrid',
    'useminPrepare',
    'generated',
    'usemin',
    'ngTemplate'
  ]);

  grunt.registerTask('generated', [
    'concat:generated',
    'concat:useStrict',
    'cssmin:generated',
    'ngAnnotate',
    'uglify:generated',
    'less:generated',
    'filerev'
  ]);

  grunt.registerTask('ngTemplate', [
    'htmlmin',
    'concat:ngTemplate',
    'replace'
  ]);

  grunt.registerTask('prepareHtml', [
    'template:html',
    'generateProject',
    'includeSource:scripts',
    'includeSource:stylesheets'
  ]);

  grunt.registerTask('prepareBower', [
    'template:bower',
    'wiredep'
  ]);

  grunt.registerTask('serve', [
    'prepareHtml',
    'prepareBower',
    'connect:dev',
    'watch'
  ]);

  grunt.registerTask('init', [
    'clean',
    'generateProject',
    'prepareHtml',
    'template:bower',
    'shell:bowerPrune',
    'shell:bowerInstall',
    'wiredep'
  ]);
  grunt.registerTask('default', ['serve']);

  grunt.registerTask('localDeploy', [
    'init',
    'build',
    'sshexec:testRemovePath',
    'sftp:test'
  ]);

  grunt.registerTask('ld', [
    'localDeploy'
  ]);

  grunt.registerTask('productDeploy', [
    'init',
    'build',
    'sshexec:prductionRemovePath',
    'sftp:production'
  ]);
  grunt.registerTask('pd', [
    'productDeploy'
  ]);

  grunt.registerTask('localDeployWithCache', [
    'init',
    'build',
    'manifest',
    'sshexec:testRemovePath',
    'sftp:test'
  ]);

  grunt.registerTask('ldwc', [
    'localDeployWithCache'
  ]);

  grunt.registerTask('productDeployWithCache', [
    'init',
    'build',
    'manifest',
    'sshexec:prductionRemovePath',
    'sftp:production'
  ]);

  grunt.registerTask('pdwc', [
    'productDeployWithCache'
  ]);
}
