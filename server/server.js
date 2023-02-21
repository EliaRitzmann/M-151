const express = require("express");
const uuidv4 = require("uuid").v4
const cors = require('cors');
const { PrismaClient } = require('@prisma/client');


const app = express();
const prisma = new PrismaClient()

app.use(express.json());
//app.use(session({ secret: "secret", resave: false, saveUninitialized: false, cookie: { secure: true } }));
app.use(cors());

//adminLogin
app.post("/adminLogin", (req, res) => {
  const {username, password } = req.body;
  if(username !== "admin" || password !== "admin"){
    return res.status(401).send("Invalid username or password")
  }

  const sessionId = uuidv4()
  
})


app.post("/registerPlayer", async (req, res) => {
  const {username} = req.body;
  if(username === ""){
    return res.status(401).send("Invalid username")
  }

  const sessionId = uuidv4()
  const player = await prisma.player.create({
    data: {
      sessionId: sessionId,
     username: username,
     money: 1000,
     hearts: 3
    },
  })

  
  res.status(200).json(sessionId)
})


app.post("/getPlayer",async (req, res) =>{
  const {sessionId} = req.body;
  console.log(sessionId)
  const userSession = await prisma.player.findFirst({
    where: { sessionId: sessionId },
  })

  console.log(userSession)

  if(!userSession){
    return res.status(401).send("Invalid session")
  } 
  
  res.json(userSession)
})


app.listen(3001);
