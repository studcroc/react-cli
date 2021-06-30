module.exports = {
    entry: './build/bin/index.js',
    resolve: {
      fallback: {
        "child_process": false,
        "fs": false,
        "path": false,
      }
    }
};  