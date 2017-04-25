module.exports = function(grunt) {

  grunt.config('copy', {

    app: {
      expand: true,
      cwd: '<%= config.app %>',
      src: [
        'assets/**',
        'data/**',
        'fonts/**',
        '**/*.png',
        '**/*.jpg',
        '**/*.jpeg',
        '**/*.gif',
        '**/*.svg'
      ],
      dest: '<%= config.dist %>'
    },

    bootstrapFonts: {
      expand: true,
      cwd: 'bower_components/bootstrap/fonts',
      src: '*',
      dest: '<%= config.dist %>/fonts'
    },

    fontawesomeFonts: {
      expand: true,
      cwd: 'bower_components/fontawesome/fonts',
      src: '*',
      dest: '<%= config.dist %>/fonts'
    },
    framework: {
      src: "<%= config.generated %>/index-framework.html",
      dest: "<%= config.dist %>/index.html"
    },
    cssimages: {
      expand: true,
      cwd: "bower_components/jquery-ui/themes/base/images",
      src: "*",
      dest: "<%= config.dist %>/css/images"
    },
    cssselect2: {
      expand: true,
      cwd: "bower_components/select2",
      src: [
          '**/*.png',
          '**/*.gif'
      ],
      dest: "<%= config.dist %>/css"
    },
    cssuigrid: {
      expand: true,
      cwd: "bower_components/angular-ui-grid",
      src: [
          '**/*.ttf',
          '**/*.woff',
          '**/*.svg'
      ],
      dest: "<%= config.dist %>/css"
    }

  });
};