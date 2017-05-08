module.exports = function(grunt) {
    'use strict';

    grunt.registerTask('prod-build', [
        'clean:dev',
        'htmlmin:dev',
        'sass:dev',
        'uglify:dev',
        'clean:dist',
        'htmlmin:dist',
        'sass:dist',
        'uglify:dist'
    ]);
};
