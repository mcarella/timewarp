module.exports = function(grunt) { 
  
  grunt.initConfig({ 
    pkg: grunt.file.readJSON('package.json'), 
  
    // Define our source and build folders 
    js_src_path: 'js', 
    js_build_path: "js", 
  
    // Grunt Tasks 
    concat: { 
      options:{ 
        separator: ';'
      }, 
  
      js: { 
        src: ['<%= js_src_path %>/*.js'], 
        dest: '<%= js_build_path %>/timewarp.js'
      } 
  
    }, 
  
    uglify: { 
      options:{ 
        mangle: true, 
        banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version + "\\n" %>' + 
        '* <%= grunt.template.today("yyyy-mm-dd") + "\\n" %>' + 
        '* <%= pkg.homepage + "\\n" %>' +  
        '* Copyright (c) <%= grunt.template.today("yyyy") %> - <%= pkg.title %> */ <%= "\\n" %>'
      }, 
  
      js: { 
        src: '<%= concat.js.dest %>', 
        dest:'<%= js_build_path %>/timewarp.min.js'
      } 
  
    } 
  
  }); 
  
  grunt.loadNpmTasks('grunt-contrib-concat'); 
  grunt.loadNpmTasks('grunt-contrib-uglify'); 
  
  // Default task. 
  grunt.registerTask('default', ['concat', 'uglify']); 
};