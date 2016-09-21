module.exports = function(grunt) {
  grunt.initConfig({
   
    usemin : {
      html: 'app/views/**/*.pug'
    },

    useminPrepare: { 
      options: {
        root: 'public',
        dest: 'public'
      },
      html: 'app/views/**/*.pug'
    }, 

    ngAnnotate: {
        scripts: {
            expand: true, 
            src: ['public/js/**/*.js']
        },
    }
  });

  grunt.registerTask('minify', ['useminPrepare', 'ngAnnotate', 'concat', 
  'uglify', 'cssmin', 'usemin']);
  
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-usemin');
  grunt.loadNpmTasks('grunt-ng-annotate');
};