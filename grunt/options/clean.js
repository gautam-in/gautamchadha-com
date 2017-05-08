module.exports = function(grunt){

    grunt.config('clean', {
        options: {
            force: true
        },
        dev: [
            '<%= devPath %>/css/',
            '<%= devPath %>/index.min.html',
            '<%= devPath %>/js/main.min.js'
        ],
        dist: [
            '<%= distPath %>/'
        ]
    });

    grunt.loadNpmTasks('grunt-contrib-clean');

};
