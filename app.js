const express=require('express')
const app=express()
const port=5000
const request=require('request')

const hbs=require('hbs')
const path=require('path')


app.set('view engine','hbs') 

const url="https://newsapi.org/v2/top-headlines?country=eg&apiKey=d48cf7eefd7244459c1b2d86f6ba95ad"


app.set('view engine','hbs')         /////init the hbs module

const viewspath=path.join(__dirname,'../templates/views') 
app.set('views',viewspath)
         
    
request({url:url,json:true}, (error,response)=>{
    app.get('',(req,res)=>{
    res.render('index', {
       
       data: response.body.articles
        
    }
)
})} )
    
        
const partialspath=path.join(__dirname,'../templates/partials')
hbs.registerPartials(partialspath)

app.listen(port,()=>
console.log('listen to port')
)