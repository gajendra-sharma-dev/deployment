const express = require('express');
const cors = require("cors")
const app = express()
const port = 3000
  let jokes = [
  { "id": 1, "title": "The Broken Pencil", "content": "I bought the world's worst thesaurus yesterday. Not only is it terrible, it's terrible." },
  { "id": 2, "title": "Scarecrow's Secret", "content": "Why did the scarecrow win an award? Because he was outstanding in his field." },
  { "id": 3, "title": "Atoms", "content": "I would tell you a joke about atoms, but I don't want to make a big deal about it." },
  { "id": 4, "title": "The Math Book", "content": "Why was the math book sad? Because it had too many problems." },
  { "id": 5, "title": "Skeleton Party", "content": "Why don't skeletons fight each other? They don't have the guts." },
  { "id": 6, "title": "Ocean Greetings", "content": "What did the ocean say to the beach? Nothing, it just waved." },
  { "id": 7, "title": "The Sleepy Doctor", "content": "Why did the doctor carry a red pen? In case they needed to draw blood." },
  { "id": 8, "title": "Bicycle Trouble", "content": "I couldn't figure out why the baseball kept getting bigger. Then it hit me." },
  { "id": 9, "title": "Coffee Complaint", "content": "I used to be a banker, but I lost interest." },
  { "id": 10, "title": "Pizza Philosophy", "content": "What do you call a fake noodle? An impasta." },
  { "id": 11, "title": "The Broken Clock", "content": "I told my wife she was drawing her eyebrows too high. She looked surprised." },
  { "id": 12, "title": "Space Cadet", "content": "Why did the astronaut break up with his girlfriend? He needed space." },
  { "id": 13, "title": "The Lazy Kangaroo", "content": "Why don't scientists trust atoms? Because they make up everything." },
  { "id": 14, "title": "Vegetable Comedian", "content": "What do you call a can opener that doesn't work? A can't opener." },
  { "id": 15, "title": "The Grumpy Cat", "content": "I'm reading a book about anti-gravity. It's impossible to put down." },
  { "id": 16, "title": "Elevator Etiquette", "content": "My elevator pitch failed because it kept going up and down." },
  { "id": 17, "title": "The Forgetful Fish", "content": "Why did the fish blush? Because it saw the ocean's bottom." },
  { "id": 18, "title": "Cheese Alone", "content": "What do you call cheese that isn't yours? Nacho cheese." },
  { "id": 19, "title": "The Time Traveler", "content": "I used to hate facial hair, but then it grew on me." },
  { "id": 20, "title": "The Overachieving Ladder", "content": "I'm on a seafood diet. I see food and I eat it." }
]


app.use(cors( {
  origin:"https://deployment-1-wsjr.onrender.com/api/code"
}) );

app.get('/api/code', (req, res) => {
  res.send(jokes)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})