module.exports = function(grunt) {
    'use strict';

    grunt.registerTask('prod-build', [
        'clean:dev',
        'htmlmin:dev',
        'sass:dev',
        'postcss:dev',
        'uglify:dev',
        'clean:dist',
        'htmlmin:dist',
        'sass:dist',
        'postcss:dist',
        'uglify:dist'
    ]);
};
