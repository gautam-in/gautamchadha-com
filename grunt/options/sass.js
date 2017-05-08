module.exports = function(grunt){

	grunt.config('sass', {
		dev: {
			options: {
				style: 'compressed' //Can be nested, compact, compressed, expanded.
			},
			files: {
				'<%= devPath %>/css/style.css': '<%= devPath %>/sass/style.scss'
			}
		},
        dist: {
			options: {
				style: 'compressed' //Can be nested, compact, compressed, expanded.
			},
			files: {
				'<%= distPath %>/css/style.css': '<%= devPath %>/sass/style.scss'
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-sass');

};
