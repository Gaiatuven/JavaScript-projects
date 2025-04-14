import express from "express";
const app = express();
const port = 3000;

// Serve static files from the 'public' directory
app.use(express.static("public"));

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
            flex-direction: column;
            align-items: center; /* Center the hero section */
            min-height: 100vh;
            margin: 0;
        }

        .hero {
            background-color: #f8f9fa;
            padding: 60px 20px; /* Adjust vertical padding as needed */
            margin: 100px auto; /* Center the hero section with top/bottom margin */
            width: 80%;
            max-width: 600px;
            box-sizing: border-box; /* Include padding in width calculation */
        }

        .container {
            background-color: #fff;
            padding: 50px;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            text-align: center;
            width: 100%; /* Make the container fill the hero's content area */
            box-sizing: border-box; /* Include padding in width calculation */
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

        .hero h1 {
            font-size: 2.5em;
            color: #333;
            margin-bottom: 15px;
        }

        .hero .subheadline {
            font-size: 1.1em;
            color: #555;
            line-height: 1.6;
        }
    </style>
</head>

<body>
    <search id="hero" class="hero">
        <div class="container">
            <h1>Build Powerful Web Applications with Node and Express</h1>
            <p class="subheadline">Leverage the speed and flexibility of Node.js and the robust features of Express to build
                high-performance web applications efficiently.
            </p>
            <a href="#" class="button">Learn More</a>
        </div>
    </search>
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
