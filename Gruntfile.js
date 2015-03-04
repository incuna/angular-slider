module.exports = function(grunt){
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        srcFiles: [
            'src/rangeInputSupported.js',
            'src/angular-slider.js'
        ],
        concat: {
            prod: {
                src: ['<%= srcFiles %>'],
                dest: 'build/<%= pkg.name %>.js'
            }
        },
        uglify: {
            options: {
                banner: '/*\n <%= pkg.name %> v<%= pkg.version %> \n (c) 2013-2014 Venturocket, Inc. http://github.com/Venturocket \n License: MIT \n*/\n'
            },
            build: {
                src: ['<%= srcFiles %>'],
                dest: 'build/<%= pkg.name %>.min.js'
            }
        },
        watch: {
            options: {
                livereload: true
            },
            all: {
                files: ["src/**.js", "test/*/*"],
                tasks: ["default"]
            }
        }        
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // Load the plugin that provides the "watch" task.
    grunt.loadNpmTasks("grunt-contrib-watch");

    // Default task(s).
    grunt.registerTask('default', ['uglify', 'concat:prod']);

    grunt.loadNpmTasks('grunt-contrib-concat');

};
