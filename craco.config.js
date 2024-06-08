const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@api/*': path.resolve(__dirname, 'src/api/'),
      '@components/*': path.resolve(__dirname, 'src/components/'),
      '@features/*': path.resolve(__dirname, 'src/features/'),
      '@hooks/*': path.resolve(__dirname, 'src/hooks/'),
      '@models/*': path.resolve(__dirname, 'src/models/'),
      '@state/*': path.resolve(__dirname, 'src/state/'),
      '@utils/*': path.resolve(__dirname, 'src/utils/'),
      '@views/*': path.resolve(__dirname, 'src/views/'),
    },
  },
};
