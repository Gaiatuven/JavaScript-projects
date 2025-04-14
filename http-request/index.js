import express from "express";
const app = express();
const port = 3000;

// Serve static files from the 'public' directory
app.use(express.static('public'));

app.get("/", (req, res) => {
  res.send(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Welcome!</title>
        <style>
          body {
            font-family: sans-serif;
            background: linear-gradient(to right, #ff99cc, #66ccff);
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            margin: 0;
          }
          .container {
            background-color: #fff;
            margin: 20px;
            padding: 50px;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            text-align: center;
          }
          h1 {
            color: #333;
            margin-bottom: 20px;
          }
          p {
            color: #666;
            margin-bottom: 30px;
          }
          .button {
            display: inline-block;
            padding: 12px 24px;
            background-color: #007bff;
            color: #fff;
            text-decoration: none;
            border-radius: 6px;
            font-weight: bold;
            transition: background-color 0.3s ease;
          }
          .button:hover {
            background-color: #0056b3;
          }
          .info {
            margin-top: 30px;
            font-size: 0.9em;
            color: #999;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>Node with Express!</h1>
          <p>
            <img src=".http-request/NodeImage.jpg" alt="Node.js and Express.js Illustration">
          </p>
          <p>Node.js and Express.js offer a powerful and efficient solution for backend development. Their speed and lightweight nature enable rapid development and deployment. Leveraging JavaScript on both the front and back end streamlines workflows, while their non-blocking I/O architecture ensures high performance and scalability to handle demanding applications. Choose Node.js and Express.js for agile development, efficient resource utilization, and the ability to build robust and scalable backend systems.</p>
          <a href="/home" class="button">Explore the App</a>
          <div class="info">
            This is just a simple welcome page. You can customize it further!
          </div>
        </div>
      </body>
      </html>
    `);
});

app.get("/home", (req, res) => {
  res.send("<h1>Welcome to the Home Page!</h1>");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
