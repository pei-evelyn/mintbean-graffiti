npm init -y
npm install -D webpack webpack-cli @babel/core babel-loader @babel/plugin-transform-react-jsx
npm install react react-dom
mkdir src dist
touch src/index.jsx dist/index.html webpack.config.js
cat << EOF > webpack.config.js
module.exports = {
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: {
          loader: 'babel-loader',
          options: {
            plugins: [
              '@babel/plugin-transform-react-jsx'
            ]
          }
        }
      }
    ]
  }
};
EOF

cat << EOF > dist/index.html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ENTER FILE NAME</title>
</head>
<body>
    <div id="root"></div>
    <script src="main.js"></script>
</body>
</html>
EOF
