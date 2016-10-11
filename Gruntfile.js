module.exports = function(grunt) {

    // Configuration de Grunt
    grunt.initConfig({

        concat: {
            options: {
                separator: ';' // permet d'ajouter un point-virgule entre chaque fichier concaténé si inexistant à la fin de chaque fichier.
            },
            dist: {
                src: ['src/js/jquery.js', 'src/js/bootstrap.js', 'src/js/animation.js', 'src/js/product.js', 'src/js/newsletter.js'],
                dest: 'asset/js/main.js'
            }
        },

        uglify: {
            options: {
                separator: ';'
            },
            dist: {
                src: 'asset/js/main.js',
                dest: 'asset/js/main.min.js'
            }
        }


    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // Définition des tâches Grunt
    grunt.registerTask('default', ['concat:dist', 'uglify:dist']);

};