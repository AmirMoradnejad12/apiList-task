import express from 'express';
import pkg  from 'body-parser';
import fetch from 'node-fetch';
import  connectDB from './config/db.js'
import apiList from './models/apiListModal.js';
const  { json:_json, urlencoded } =pkg;
connectDB();

const app = express();
const port = process.env.PORT || 5000;

app.use(_json());
app.use(urlencoded({ extended: true }));
app.post('/api/save', async(req, res) => {
  const{list} = res.body;
  try{
      await apiList.create({
        api:list
      }
      );
     res.send({status:"ok data saveds"})
  } catch(err){
    console.log(err)

    res.send({status:err})

  }
  
});


app.get('/api/entries', async(req, res) => {
  const api_url = " https://api.publicapis.org/entries";
  const fetch_response = await fetch(api_url);
  const json = await fetch_response.json();
  res.json(json)
});

app.post('/api/world', (req, res) => {
  console.log(req.body);
  res.send(
    `I received your POST request. This is what you sent me: ${req.body.post}`,
  );
});

app.listen(port, () => console.log(`Listening on port ${port}`));