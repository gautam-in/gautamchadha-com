module.exports = function(grunt){

    grunt.config('postcss', {
        dev: {
            options: {
                map: true,
                processors: [
                    require('autoprefixer')
                ]
            },
            files: {
                '<%= devPath %>/css/style.css': '<%= devPath %>/css/style.css'
            }
        },
        dist: {
            options: {
                map: true,
                processors: [
                    require('autoprefixer')
                ]
            },
            files: {
                '<%= distPath %>/css/style.css': '<%= devPath %>/css/style.css'
            }
        }
    });

    grunt.loadNpmTasks('grunt-postcss');

};
