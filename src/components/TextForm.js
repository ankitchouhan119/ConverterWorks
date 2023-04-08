import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
         console.log("Uppercase was clicked");
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleLoClick = ()=>{
         console.log("Lowercase was clicked");
        let newText = text.toLowerCase();
        setText(newText)
    }
    const handleClear = ()=>{
         console.log("Lowercase was clicked");
        let newText = ("");
        setText(newText)
    }


    const handleOnChange = (event)=> {
         console.log("Uppercase was clicked");
         setText(event.target.value);
    }

    // copy Text
    const handlecopyText = () => {
      navigator.clipboard.writeText(text);
  }

    // Remove Extra Spaces 
    const handleExtraSpaces = ()=>{
      let words = text.split(' ');
      let joinedWords = '';
      words.forEach((elem)=>{
          if(elem[0] !== undefined){
              joinedWords += elem + " ";
              console.log(joinedWords);
          }
      })
      setText(joinedWords);
  }


    


    const [text, setText] = useState('');
 
    
  return ( 

    <>
    <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" placeholder='Enter your text' value={text}  onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to lowercase</button>
        <button className="btn btn-primary mx-2" onClick={handleClear}>Clear text</button>
        <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        <button className="btn btn-primary mx-2" onClick={handlecopyText}>Copy Text</button>
        
    </div>
    <div className="container my-3">
        <h2>Your text sumary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008*text.split(" ").length} Minutes</p>

        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  )
}
