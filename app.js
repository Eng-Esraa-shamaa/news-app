const express=require('express')
const app=express()
const port=5000
const request=require('request')

const hbs=require('hbs')
const path=require('path')
//const publicDirectory=path.join(__dirname,'../public')
//app.use(express.static(publicDirectory)) ////use static when addding files to express

app.set('view engine','hbs') 

const url="https://newsapi.org/v2/top-headlines?country=eg&apiKey=d48cf7eefd7244459c1b2d86f6ba95ad"


app.set('view engine','hbs')         /////init the hbs module

const viewspath=path.join(__dirname,'../templates/views') 
app.set('views',viewspath)
           /* var title='';
            var descrition='';
            var image ='';
            var expressHbs =  require('express-handlebars');
            app.engine('.hbs', expressHbs({ defaultLayout: 'layout', extname: '.hbs'}))
            app.set('view engine', '.hbs');*/

            //Handlebars.registerHelper('times', function(n, block) {
            
               //for(var i = 0; i < n; ++i)
                
               // title += block.fn(i);
               // descrition += block.fn(i);
               //// image += block.fn(i);

                //return title,descrition,image;
               // })
    
request({url:url,json:true}, (error,response)=>{
    app.get('',(req,res)=>{
    res.render('index', {
       /* title :response.body.articles[0].title,
       // descrition :response.body.articles[0].description,
       image :response.body.articles[0].urlToImage*/
       data: response.body.articles
        
    }
)
})} )
    
        
const partialspath=path.join(__dirname,'../templates/partials')
hbs.registerPartials(partialspath)

app.listen(port,()=>
console.log('listen to port')
)