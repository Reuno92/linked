module.exports = function(grunt) {

    // Configuration de Grunt
    grunt.initConfig({
        dirs: {
            srcJs  : 'src/js/',
            destJS : 'asset/js/'
        },

        concat: {
            options: {
                separator: ';' // permet d'ajouter un point-virgule entre chaque fichier concaténé si inexistant à la fin de chaque fichier.
            },
            dist: {
                src: [ '<%= dirs.srcJs %>jquery-2.2.0.min.js', '<%= dirs.srcJs %>bootstrap.js', '<%= dirs.srcJs %>animationCSS.js', '<%= dirs.srcJs %>product.js', '<%= dirs.srcJs %>newsletter.js'],
                dest: '<%= dirs.srcJs %>main.js'
            }
        },

        uglify: {
            options: {
                mangle: "false"
            },

            dist: {
                src: '<%= dirs.srcJs %>main.js',
                dest: '<%= dirs.destJs %>main.min.js'
            }
        }/*,

        csscomb: {
            dist: {
                options: {
                    config: 'config.json'
                },

                files: {
                    'dest/resorted-foo.css': ['src/foo.css']
                }
            }
        }*/
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-csscomb');

    // Définition des tâches Grunt
    grunt.registerTask('default', ['concat:dist', 'uglify:dist']);
    /*grunt.registerTask('beauty', ['csscomb']);*/
};