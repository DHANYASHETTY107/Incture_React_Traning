// import { useState } from "react";


// function FirstEvent() {
// const[text,setText]=useState('')
// //One event in passed to the function called handleClick
//   const handleClick = (event) => {
//     setText(event.target.value);
//   };

//   return (
//     <div>
//       <h2>React Events:</h2>
//       {/* //when  we click  enter a text handle click called */}
//       <input type="text" placeholder="Enter a text" onChange={handleClick }/> 
//       <p>Your Text:{text}</p>
//     </div>
//   );
// }

// export default FirstEvent; 

//next typef the event submission form
// import { useState } from "react";


// function FirstEvent() {
//     const[name,setName]=useState('')
//     const handleSubmit=()=>{
//         alert(`Form Submitted by :${name}`)

//     }


//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <h2> Enter a name:</h2>
//         <input type="text" value={name} onChange={(event)=>setName(event.target.value)}/><br></br>
//         <button type="submit">Submit</button>

//       </form>
//     </div>
//   );
// }

// export default FirstEvent; 

//mouse event
// import { useState } from "react";


// function FirstEvent() {
//    const handleMouseEnter=()=>{
//     console.log("Mouse entered the box")
//    }
//    const handleMouseLeave=()=>{
//     console.log("Mouse leaved")
//    }

//   return (
//     <div onMouseEnter={handleMouseEnter}
//     onMouseLeave={handleMouseLeave}
//      style={{
//         width:"200px",
//         height:"200px",
//         backgroundColor:"lightblue",
//         textAlign:"center",
//         lineheight:"200px"


//      }}>
//         Hover over meee
      
//     </div>
//   );
// }

// export default FirstEvent; 

//passing argument in ebvent handlin
// import { useState } from "react";
// function FirstEvent() {
//     const greet=(name)=>{
//         alert(`Wlcome ${name} to React Session`)

//     }
   

//   return (
//     <div>
//         <button onClick={()=>greet("Ajay")}>Greet</button>
//     </div>
//   );
// }

// export default FirstEvent; 


//keyboard event
// import { useState } from "react";
// function FirstEvent() {
//     const handleKeyDown=(event)=>
//     {
//         alert(`key Pressed:${event.key}`)

//     }
   

//   return (
//     <div>
//        <h2> Type Somthing:</h2>
//        <input type="text" onKeyDown={handleKeyDown}/>
//     </div>
//   );
// }

// export default FirstEvent; 

//On Key Up KeyBorad 
function FirstEvent() {
  const handleKeyUp = (event) => {
    if(event.key==='Enter')
    {
        alert("Enter into react class")
    }
    // alert(`Key Released: ${event.key}`);
  };

  return (
    <div>
      <h2>Type Something:</h2>
      <input type="text" onKeyDown={handleKeyUp} />
    </div>
  );
}

export default FirstEvent;




