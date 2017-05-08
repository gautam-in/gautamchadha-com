module.exports = function(grunt) {
    'use strict';

    grunt.registerTask('dev-build', [
        'clean:dev',
        'htmlmin:dev',
        'sass:dev',
        'uglify:dev'
    ]);
};
