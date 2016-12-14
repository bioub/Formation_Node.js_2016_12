module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-babel');

    grunt.initConfig({
        clean: {
            dist: ['Grunt/dist']
        },
        babel: {
            options: {
                sourceMap: false,
                minified: true,
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
        'babel:dist'
    ]);


};