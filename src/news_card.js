import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useState, useEffect } from 'react';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Alert from '@mui/material/Alert'
import './App.css';
import offlinenews from'./sample.json'
import { Snackbar } from '@mui/material';
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
const API = "870c9b638b464d83843f2027b1b50425";

export default function NewsCard({ searchQuery }, { sort }) {
  const [filter, setFilter] = useState("popularity")
  const [url, setUrl] = useState(`https://newsapi.org/v2/everything?`+`q=${searchQuery}&`+
           `from=2023-10-23&`+`sortBy=${filter}&`+`apiKey=${API}` )
           const[close,setClose]=useState(true)
const [offnews,setOffnews]=useState(offlinenews)

  //console.log(doSearch)


  // const[refresh,setRefresh]=useState(0);
  const [news, setNews] = useState(offlinenews);
  const [refresh,setRefresh]=useState(0);

  useEffect(() => {
    var req = new Request(url);
    fetch(req)
      .then(response =>  response.json())
      .then(data => setNews(data))
    console.log("fetched"+refresh)
   
  
  },[url,refresh,filter])

//   function getofflineNews(){
//     const offurl=`https://saurav.tech/NewsAPI/top-headlines/category/health/in.json`
//     var req = new Request(offurl);
//     fetch(req)
//       .then(response =>  response.json())
//       .then(data => setOffnews(data))
//     console.log(offnews)
//     console.log(url)
  
//   }

if(news.status==="error"){
 
  console.log("entered")
 
  return(
    <>
    <Snackbar open={close} >
     <Alert severity='warning' color='warning' onClose={()=>{setClose(!close)}}>Clone the Repository to get latest news</Alert>
     </Snackbar> 
    <Button onClick={() => {
        setFilter(sort); setUrl("https://saurav.tech/NewsAPI/top-headlines/category/health/in.json");setRefresh(2);
       }}>Refresh</Button>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 1, sm: 8, md: 12 }}
     ></Grid>
  
  <Grid container rowSpacing={2} columnSpacing={{xs:2,sm:3,md:3}} columns={{ xs: 1, sm: 8, md: 12 }}
 >

    { 
      
      offnews.articles.map((element) => (
      
        //console.log(element.urlToImage)
        <Grid className='body' xs={1} sm={4} md={4} rowSpacing={{xs:2,sm:4,md:4}}key={element.url}>
      {/* return (
        <> */}
         
        {/* <Button onClick={() => {
          setFilter(sort); setUrl(`https://saurav.tech/NewsAPI/everything?` +
            `q=${searchQuery}&` +
            `from=2023-10-23&` +
            `sortBy=${filter}&` +
            `apiKey=${API}`);
        }}>Refresh</Button> */}
           

          <div className='mainbody' >
 
  <Item sx={{marginTop:3,marginLeft:2,borderRadius:5}}>
    <Card className='glass' sx={{ maxWidth: 400, maxHeight: 450, minWidth: 250, minHeight: 450, borderRadius: "10px" }}>
  
                    <CardMedia className='cards'
                      sx={{ height: 200 }}
                      image={element.urlToImage}
                      title={element.title}
                    />
                    <CardContent  sx={{ maxWidth: 400, minWidth: 250, maxHeight:'150px', borderRadius: "10px", overflow:'hidden', WebkitScrollSnapType:'none'}}>
                    <Typography gutterBottom variant="h6" component="div" sx={{fontStyle:'bold'}}>
                        {element.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {
                        ( element.description==null)?element.description:element.description.slice(0,100)+"...."
                           
                             
                      }
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small">Share</Button>
                      <a href={element.url} target='blank' ><Button size="small">Learn More</Button></a>
                    </CardActions>
                    
                    <Typography sx={{fontSize:12,fontStyle:'italic',textAlign:'right',marginRight:'10px'}} >{(parseInt(element.publishedAt.slice(11,13))>12)?(parseInt(element.publishedAt.slice(11,13))-12)+element.publishedAt.slice(13,17)+"pm":parseInt(element.publishedAt.slice(11,13))+element.publishedAt.slice(13,17)+'am'}  {element.publishedAt.slice(0,10)} </Typography>

                  </Card>
                  </Item>
                
          </div>
          {/* </>
          ); */}
          </Grid>
          
         

       ))}
       </Grid>
       </>
       );
 }

//   if (refresh ===0) {
//     return (<>
// <Button onClick={() => {
//         setFilter(sort); setUrl(`https://newsapi.org/v2/everything?`+`q=${searchQuery}&`+
//            `from=2023-10-23&`+`sortBy=${filter}&`+`apiKey=${API}`);setRefresh(1);
//        }}>Refresh</Button>
//       <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 1, sm: 8, md: 12 }}
//      >

// {Array.from(Array(6)).map((_, index) => (
//             //console.log(element.urlToImage)
//             <Grid className='body'  xs={1} sm={4} md={4} key={index}>
//           {/* return (
//             <> */}
             
//             {/* <Button onClick={() => {
//               setFilter(sort); setUrl(`https://saurav.tech/NewsAPI/everything?` +
//                 `q=${searchQuery}&` +
//                 `from=2023-10-23&` +
//                 `sortBy=${filter}&` +
//                 `apiKey=${API}`);
//             }}>Refresh</Button> */}
               

//               <div className='mainbody' >
     
//       <Item sx={{marginTop:3,marginLeft:2}}>
//         <Card  sx={{ maxWidth:'800', maxHeight: 450, minWidth: 400, minHeight: 200, borderRadius: "10px" }}>
//                         {/* <CardMedia className='cards'
//                           sx={{ height: 150 }}
//                           image={element.urlToImage}
//                           title={element.title}
//                         /> */}
//                          <Stack spacing={2}>
//                         <Skeleton variant='rectangular' sx={{height:150}}/>

                       
                          
//                           <Skeleton variant="rectangular"  sx={{ maxWidth:500, maxHeight: 550, minWidth: 250, minHeight: 300 }}  />
                         
                         
//                           </Stack>
                      
//                       </Card>
//                       </Item>
//               </div>
//               {/* </>
//               ); */}
//               </Grid>
              
             

//            ))}
//            </Grid>
      
//       </>);

//   }
  if(news.status==="ok") {
    
    return (
<>
<Button sx={{backgroundColor:'green',borderRadius:'10px',marginX:'10px',color:'white'}} onClick={() => {
        setFilter(sort); setUrl(`https://newsapi.org/v2/everything?`+`q=${searchQuery}&`+
           `from=2023-10-23&`+`sortBy=${filter}&`+`apiKey=${API}`) ;setRefresh(prevReferesh=>prevReferesh+1);console.log("was called times"+refresh)
        
       }}>Refresh</Button>

      <Grid container rowSpacing={2} columnSpacing={{xs:2,sm:3,md:3}} columns={{ xs: 1, sm: 8, md: 12 }}
      onMouseMove={() => {
        setFilter(sort); setUrl(`https://newsapi.org/v2/everything?`+`q=${searchQuery}&`+
           `from=2023-10-23&`+`sortBy=${filter}&`+`apiKey=${API}`);
       }}
      >

        { 
          
          news.articles.map((element) => (
          
            //console.log(element.urlToImage)
            <Grid className='body' xs={1} sm={4} md={4} rowSpacing={{xs:2,sm:4,md:4}}key={element.url}>
          {/* return (
            <> */}
             
            {/* <Button onClick={() => {
              setFilter(sort); setUrl(`https://saurav.tech/NewsAPI/everything?` +
                `q=${searchQuery}&` +
                `from=2023-10-23&` +
                `sortBy=${filter}&` +
                `apiKey=${API}`);
            }}>Refresh</Button> */}
               

              <div className='mainbody' >
     
      <Item sx={{marginTop:3,marginLeft:2,borderRadius:5}}>
        <Card sx={{ maxWidth: 400, maxHeight: 450, minWidth: 250, minHeight: 450, borderRadius: "10px" }}>
      
                        <CardMedia className='cards'
                          sx={{ height: 200 }}
                          image={element.urlToImage}
                          title={element.title}
                        />
                        <CardContent  sx={{ maxWidth: 400, minWidth: 250, maxHeight:'150px', borderRadius: "10px", overflow:'hidden', WebkitScrollSnapType:'none'}}>
                        <Typography gutterBottom variant="h6" component="div" sx={{fontStyle:'bold'}}>
                            {element.title}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {
                            ( element.description==null)?element.description:element.description.slice(0,100)+"...."
                               
                                 
                          }
                          </Typography>
                        </CardContent>
                        <CardActions>
                          <Button size="small">Share</Button>
                          <a href={element.url} target='blank' ><Button size="small">Learn More</Button></a>
                        </CardActions>
                        
                        <Typography sx={{fontSize:12,fontStyle:'italic',textAlign:'right',marginRight:'10px'}} >{(parseInt(element.publishedAt.slice(11,13))>12)?(parseInt(element.publishedAt.slice(11,13))-12)+element.publishedAt.slice(13,17)+"pm":parseInt(element.publishedAt.slice(11,13))+element.publishedAt.slice(13,17)+'am'}  {element.publishedAt.slice(0,10)} </Typography>

                      </Card>
                      </Item>
                    
              </div>
              {/* </>
              ); */}
              </Grid>
              
             

           ))}
           </Grid>
           </>
           );
           }
           }

      
          //  https://saurav.tech/NewsAPI/everything/cnn` +
          // +`q=${searchQuery}&` +
          //  `from=2023-10-23&` +
          //  `sortBy=${filter}&` +
          //  `apiKey=${API}`)





                    
        