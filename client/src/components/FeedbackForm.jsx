import React, { useState } from "react";

const FeedbackForm = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const fbHandler = async (event) => {
    event.preventDefault();

    // making data which user will pass or write

    const formData = { name, message };

    try {
      const res = await fetch("http://localhost:3001/api/feedback", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        alert("feedback submitted succesfully");
        // const data = await res.json();
        // console.log(data.message);
        setName("");
        setMessage("");
      } else {
        alert("Something went wrong.");
      }
    } catch (error) {
      console.error("error submitting feedback");
      alert("Network error.");
    }
  };
  return (
    <div>
      <h2>How was your experience in our flight ?</h2>
      <h3>Share with us </h3>
      <form onSubmit={fbHandler}>
        <div>
        <label>
          Name:
          </label> <br/>

          <input type="text"
           value={name}
          onChange={(eve)=> setName(eve.target.value)}
          required
          placeholder="Enter your name" />
        </div>
         
         <div>

        <label>Your feedback:  
           
        </label><br/>
        <textarea
         value={message}
         onChange={(eve)=> setMessage(eve.target.value)}
         required
         placeholder="Write your feedback here..."
        />
         </div>

       <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FeedbackForm;

// const handle_fetch = async()=>{
//     const res = await fetch('http://localhost:3000/post_api' , {
//       method   : "POST",
//       headers : {
//         'Content-Type': 'application/json',
//         'Accept': 'application/json'
//       },
//       body : JSON.stringify({"id" :  "1"})
//     });
//     if(res.ok){
//       console.log(res)
//       const data = await res.json();
//       console.log(JSON.stringify(data));
//     }
//   }

//   useEffect(()=>{
//     handle_fetch()
//   },[]);
