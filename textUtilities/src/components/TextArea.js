import { useState } from "react"
import React from 'react'

export default function TextArea(props) {
    const handleUpcase = () => {
        let newtext = text.toUpperCase()
        setText(newtext)


    }
    const handleLowerCase = () => {
        let lowtext = text.toLowerCase()
        setText(lowtext)
    }
    const clearText = () => {

        setText('')
    }

    // const [mystyle ,setMystyle]=useState({
    //     color:'white',
    //     backgroundColor:'black'
    // })
    // const [btntext,setBtnText]=useState('Enable Dark Mode')

    // const togglestyle=()=>{
    //     if(mystyle.color==='white'){
    //         setMystyle({
    //             color:'black',
    //              backgroundColor:'white'
    //         })
    //         setBtnText('Enable Dark Mode')
    //     }

    //     else{
    //     setMystyle({
    //         color:'white',
    //         backgroundColor:'black'
    //     })
    //     setBtnText ('Enable Light Mode')
    // }
    // }

    const  removeSpaces=()=>{
        let newtext=text.split(/[ ]+/)
        setText(newtext.join(" "))
    }

    


    const onChangeclick = (event) => {
        setText(event.target.value)


    }
    const [text, setText] = useState('')
    return (
        <>
       
            <div className="container" style={{background:props.mode==='white'?'white':'#24213e',color:props.mode==='white'?'black':'white'}} >
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={onChangeclick} 
                    style={{background:props.mode==='white'?'white':'grey'}}
                     id="exampleFormControlTextarea1" rows="6"></textarea>
                </div>
                <button className="btn btn-info mx-2" onClick={handleUpcase}>toUppercase</button>
                <button className="btn btn-info mx-2" onClick={handleLowerCase}>toLowerCase</button>
                <button className="btn btn-info mx-2" onClick={clearText}>Clear text</button>
                {/* <button className="btn btn-info mx-2" onClick={togglestyle} type="button">{btntext}</button> */}
                <button className="btn btn-info mx-2" onClick={removeSpaces} type="button">Delete Extraspaces</button>


                <div className="container my-3">
                    <h2> Your Text Summary</h2>
                    {/* function to count words   */}
                    <b>{text.trim()===""?0:text.match(/\S+/g).length} words and {text.length} letters </b>
                    <h3> Preview</h3>
                    <b>{text}</b>
                </div>
            </div>
        </>
    )
}
