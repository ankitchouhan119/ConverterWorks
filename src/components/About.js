import React, {useState} from 'react'

export default function About() {
    const[mystyle,setMyStyle] = useState(  {
        color: 'black',
        backgroundColor: 'white'
    })
    
    const[btnText,setBtnText] = useState("Enable Dark Mode")

    const toggleStyle = ()=>{
        if(mystyle.color === 'black'){
            setMyStyle({
                color: 'white',
        backgroundColor: 'black'
            })
        setBtnText("Enable Light Mode")
        }
        else{
            setMyStyle({
                color: 'black',
        backgroundColor: 'white'
            })
        setBtnText("Enable Dark Mode")
        }
    }
  return (
    <>
        <div className="container" style={mystyle}>
        <h2 className='my-3'>About Us </h2>
        <div className="accordion" id="accordionExample" style={mystyle}>
    <div className="accordion-item">
        <h2 className="accordion-header">
        <button className="accordion-button" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            Uppercase 
        </button>
        </h2>
        <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
        <div className="accordion-body" style={mystyle}>
            <strong>Welcome to the Uppercase Button!</strong><br/> This tool is designed to make it easy for you to quickly convert your text to UPPERCASE letters. Whether you're writing a document, an email, or a social media post, our Uppercase Button can help you achieve a bold, attention-grabbing look for your text.<br/><br/>
            Our Uppercase Button is a fast and easy-to-use tool that can save you time and effort when working with text. Whether you're a student, a professional, or just someone who wants to make their text stand out, this tool can help you achieve the desired result quickly and easily. Give it a try today and see how it can help elevate your text to the next level!
        </div>
        </div>
    </div>
    <div className="accordion-item">
        <h2 className="accordion-header">
        <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
            Lowercase
        </button>
        </h2>
        <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
        <div className="accordion-body" style={mystyle}>
            <strong>Welcome to the Lowercase Button!</strong> <br/>This tool is designed to make it easy for you to quickly convert your text to lowercase letters. Whether you're writing a document, an email, or a social media post, our Lowercase Button can help you achieve a simple and clean look for your text. <br/><br/>
            Our Lowercase Button is a fast and easy-to-use tool that can save you time and effort when working with text. Whether you're a student, a professional, or just someone who wants to simplify their text, this tool can help you achieve the desired result quickly and easily. Give it a try today and see how it can help you make your text look its best!
        </div>
        </div>
    </div>
    <div className="accordion-item">
        <h2 className="accordion-header">
        <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
            Clear Text
        </button>
        </h2>
        <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
        <div className="accordion-body" style={mystyle}>
            <strong>Welcome to the Clear Text Button!</strong> <br/> This tool is designed to make it easy for you to quickly clear the text from the input field. Whether you're done with your work or want to start fresh, our Clear Button can help you remove all the text from the input field with just one click.
            <br/><br/>
            Our Clear Text Button is a fast and easy-to-use tool that can save you time and effort when working with text. Whether you're a student, a professional, or just someone who wants to easily clear the input field, this tool can help you achieve the desired result quickly and easily. Give it a try today and see how it can help streamline your workflow!
        </div>
        </div>
    </div>
    <div className="accordion-item">
        <h2 className="accordion-header">
        <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
            Remove Extra Spaces
        </button>
        </h2>
        <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
        <div className="accordion-body" style={mystyle}>
            <strong>Welcome to the Remove Extra Spaces Button!</strong><br/>  This tool is designed to make it easy for you to quickly remove extra spaces from your text. Whether you have accidentally added extra spaces, or your text contains inconsistent spacing, our Remove Extra Spaces Button can help you achieve a clean and consistent look for your text. <br/><br/>
            Our Lowercase Button is a fast and easy-to-use tool that can save you time and effort when working with text. Whether you're a student, a professional, or just someone who wants to simplify their text, this tool can help you achieve the desired result quickly and easily. Give it a try today and see how it can help you make your text look its best!
        </div>
        </div>
    </div>
    <div className="accordion-item">
        <h2 className="accordion-header">
        <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
            Copy Text
        </button>
        </h2>
        <div id="collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
        <div className="accordion-body" style={mystyle}>
            <strong> Welcome to the Copy Text Button!</strong><br/>  This tool is designed to make it easy for you to quickly copy the converted text from the input field. Whether you're working on a document, a presentation, or a website, our Copy Text Button can help you easily copy the text to your clipboard. <br/><br/>
            Our Lowercase Button is a fast and easy-to-use tool that can save you time and effort when working with text. Whether you're a student, a professional, or just someone who wants to simplify their text, this tool can help you achieve the desired result quickly and easily. Give it a try today and see how it can help you make your text look its best!
        </div>
        </div>
    </div>
    </div>
    <div className="container">
    <button type="button" onClick={toggleStyle} className="btn btn-primary my-3">{btnText}</button>

    </div>
        </div>
    </>
  )
}
