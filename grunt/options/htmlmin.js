module.exports = function(grunt){

    grunt.config('htmlmin', {
        dev: {
            options: {
                removeComments: true,
                collapseWhitespace: true
            },
            files: {
                '<%= devPath %>/index.min.html': '<%= devPath %>/index.html'
            }
        },
        dist: {
            options: {
                removeComments: true,
                collapseWhitespace: true
            },
            files: {
                '<%= distPath %>/index.html': '<%= devPath %>/index.html'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-htmlmin');

};
