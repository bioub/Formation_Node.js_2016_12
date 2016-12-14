module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-babel');
    grunt.loadNpmTasks('grunt-browserify');

    grunt.initConfig({
        watch: {
            scripts: {
                files: ['Grunt/src/js/**/*.js'],
                tasks: [
                    'browserify:dist',
                    'babel:dist',
                    'uglify:dist'
                ],
                options: {
                    spawn: false,
                },
            },
        },
        uglify: {
            dist: {
                files: {
                    'Grunt/dist/js/index-browser.js': 'Grunt/dist/js/index-browser.js'
                }
            }
        },
        clean: {
            dist: ['Grunt/dist']
        },
        babel: {
            options: {
                sourceMap: false,
                presets: ['babel-preset-es2015']
            },
            dist: {
                files: {
                    'Grunt/dist/js/index-browser.js': 'Grunt/dist/js/index-browser.js'
                }
            }
        },
        browserify: {
            dist: {
                src: 'Grunt/src/js/index.js',
                dest: 'Grunt/dist/js/index-browser.js'
            }
        },
        copy: {
            dist: {
                files: [{
                    expand: true,
                    cwd: 'Grunt/src',
                    src: 'index.html',
                    dest: 'Grunt/dist'
                },/*{
                    expand: true,
                    cwd: 'Grunt/src',
                    src: 'js/*.js',
                    dest: 'Grunt/dist'
                }*/]
            }
        }
    });

    grunt.registerTask('dist', [
        'clean:dist',
        'copy:dist',
        'browserify:dist',
        'babel:dist',
        'uglify:dist'
    ]);


};