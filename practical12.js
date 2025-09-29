  
Form.html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calhello</title>
</head>
<body>
    <h2>Calculator</h2>
    <form method="post" action="/calculator">
        <input type="number" name="n1" placeholder="Enter first number" required/>
        <input type="number" name="n2" placeholder="Enter second number" required/>
        <br><br>
        <select name="operation">
            <option value="add">Add</option>
            <option value="sub">Subtract</option>
            <option value="mul">Multiply</option>
            <option value="div">Divide</option>
        </select>
        <br><br>
        <button type="submit">Calculate</button>
    </form>
</body>
</html>

Form.js
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calhello</title>
</head>
<body>
    <h2>Calculator</h2>
    <form method="post" action="/calculator">
        <input type="number" name="n1" placeholder="Enter first number" required/>
        <input type="number" name="n2" placeholder="Enter second number" required/>
        <br><br>
        <select name="operation">
            <option value="add">Add</option>
            <option value="sub">Subtract</option>
            <option value="mul">Multiply</option>
            <option value="div">Divide</option>
        </select>
        <br><br>
        <button type="submit">Calculate</button>
    </form>
</body>
</html>

Server.js
const express = require('express');
const bodyParser = require('body-parser');
const app=express();
const port=3000;

const cal=require('./form');

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use('/',cal);

app.listen(port,()=>{
    console.log(`Server running at http://localhost:${port}`);
});


