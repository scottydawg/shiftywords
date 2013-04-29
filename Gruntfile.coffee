module.exports = (grunt) ->

  grunt.initConfig

    watch:
      coffee:
        files: '**/*.coffee'
        tasks: ['clean','coffee']

    clean:
      build: ['target']

    coffee:
      source:
        options:
          join: true
        files:
          'target/shifty.js': ['src/**/*.coffee']

  grunt.loadNpmTasks('grunt-contrib-watch')
  grunt.loadNpmTasks('grunt-contrib-coffee')
  grunt.loadNpmTasks('grunt-contrib-clean')

  grunt.registerTask('default', ['clean', 'coffee', 'watch'])