module.exports = function(grunt) {
  return {
    options: {
      sizes: {
        '50%': {
          suffix: ''
        }
      }
    },
    files: {
      expand: true,
      cwd: 'src/img/flags/@2x/',
      src: ['*.png'],
      dest: 'src/img/flags/'
    }
  };
};
