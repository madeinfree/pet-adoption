const express = require('express'),
      app = express(),
      PORT = 8081

app.use('/build', express.static('build'))
app.use('/api/v1', express.static('data'))

app.get('*', (req, res) => {
  res.send(`
    <html>
      <head>
        <style>
          * { margin: 0px; padding: 0px; }
        </style>
      </head>
      <body>
        <div id='view'></div>
        <script src="https://use.fontawesome.com/ad988b0b42.js"></script>
        <script src='/build/bundle.js'></script>
      </body>
    </html>
  `)
})

app.listen(8081, () => console.log(`Server listen on port ${PORT}`))
