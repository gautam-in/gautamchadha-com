
module.exports = function(grunt){

    grunt.config('uglify', {
        dev: {
            files: {
                '<%= devPath %>/js/main.min.js': '<%= devPath %>/js/main.js'
            }
        },
        dist: {
            files: {
                '<%= distPath %>/js/main.js': '<%= devPath %>/js/main.js',
                '<%= distPath %>/sw.js': '<%= devPath %>/sw.js'
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-uglify');

};
