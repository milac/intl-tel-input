module.exports = function(grunt) {
  return {
    main: {
      src: 'bower_components/flag-icon/png/36/country-4x3/*.png',
      dest: 'build/img/flags@2x.png',
      cssTemplate: 'grunt/tmpl/sprite-retina-mustache.scss',
      //cssFormat: 'scss',
      destCss: 'src/css/sprites.scss',
      padding: 1
    },
    smaller: {
      src: 'bower_components/flag-icon/png/16/country-4x3/*.png',
      dest: 'build/img/flags.png',
      cssTemplate: 'grunt/tmpl/sprite-mustache.scss',
      destCss: 'src/css/sprites-smaller.scss'
    }
  };
};
