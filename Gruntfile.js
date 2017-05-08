module.exports = function (grunt) {
	'use strict';

	// Measure time of grunt tasks. Can help when optimizing build times
	require('time-grunt')(grunt);

	// A JIT task loader for Grunt
	require('jit-grunt')(grunt)({
		customTasksDir: 'grunt/tasks'
	});

	grunt.initConfig({
		pkg: require('./package.json'),
		basePath: './',
		devPath: '<%= basePath %>/src',
		distPath: '<%= basePath %>/dist'
	});

	grunt.loadTasks('grunt/options');
};
