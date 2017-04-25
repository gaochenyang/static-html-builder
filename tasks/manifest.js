/**
 * [自动生成manifest]
 * @param  {[type]} grunt [description]
 * @return {[type]}       [description]
 */
module.exports = function(grunt) {

  grunt.config('manifest', {
    generate: {
      options: {
        basePath: '<%= config.dist %>',
        //cache: [''],
        network: ['*'],
        fallback: ['/#/error?message=无网络'],
        preferOnline: true,
        headcomment: "viswx v0.0.1",
        verbose: true,
        timestamp: true,
        hash: true,
        master: ['index.html'] //,
          /* process: function(path) {
             return path.substring('dist/'.length);
           }*/
      },
      src: [
        '*.html',
        '*/*.*',
      ],
      dest: 'dist/manifest.appcache'
    }
  });

};
