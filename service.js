
const baseUrl="https://blog-api-t6u0.onrender.com"

const getPosts = async()=>{ 

try{

    
    const response = await fetch( baseUrl+"/posts",{method:"GET",})
    
    const data=await response.json()

    return data
    
 console.log(data,"data");

}catch(err){

    console.log(err,"err");

}

}



getPosts()





const addPosts = async(form)=>{ 

    try{
    
        
        const response = await fetch( baseUrl+"/posts",{method:"POST",
        headers: {
            "Content-Type": "application/json",
          
          },
        
        body:JSON.stringify(form)})
        
        const data=await response.json(form)

        console.log(data,"data");

        return data
        
  
    
    }catch(err){
    
        console.log(err,"err");
    
    }
    
    }
    








const upPosts = async(id,form)=>{ 

    try{
    
        
        const response = await fetch( baseUrl+"/posts/"+ id,{method:"PUT",
        headers: {
            "Content-Type": "application/json",
          
          },
        
        body:JSON.stringify(form)})
        
        const data=await response.json(form)

        console.log(data,"data");

        return data
        
  
    
    }catch(err){
    
        console.log(err,"err");
    
    }
    
    }
    





const removePosts = async(id)=>{ 

    try{
    
        
        const response = await fetch( baseUrl+"/posts/"+ id,{method:"DELETE",
       })
        
        const data=await response.json(form)

        console.log(data,"data");

        return data
        
  
    
    }catch(err){
    
        console.log(err,"err");
    
    }
    
    }


