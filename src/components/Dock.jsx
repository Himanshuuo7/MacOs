import React from 'react';
import "./dock.scss"
import { github } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const Dock = ({windowState, setwindowState}) => {
  return (
    <footer className='dock'>
        <div 
        onClick={()=>{setwindowState(state=>({...state, github:true}))}}
        className="icon github"><img src="/doc-icon/github.svg" alt="" /></div>
        <div 
        onClick={()=>{setwindowState(state=>({...state, note:true}))}}
        className="icon note"><img src="/doc-icon/note.svg" alt="" /></div>
        <div 
        onClick={()=>{setwindowState(state=>({...state, resume:true}))}}
        className="icon pdf"><img src="/doc-icon/pdf.svg" alt="" /></div>
        <div 
        onClick={()=>{window.open("https://calendar.google.com/calendar/u/0/r?pli=1"),"_blank"}}
        className="icon calender"><img src="/doc-icon/calender.svg" alt="" /></div>
        <div 
        onClick={()=>{setwindowState(state=>({...state, spotify:true}))}}
        className="icon spotify"><img src="/doc-icon/spotify.svg" alt="" /></div>
        <div 
        onClick={()=>{window.open("mailto:himanshusonkusre8@gmail.com"),"_blank"}}
        className="icon mail"><img src="/doc-icon/mail.svg" alt="" /></div>
        <div 
        onClick={()=>{window.open("https://www.linkedin.com/in/himanshu-sonkusre/"),"_blank"}}
        className="icon link"><img src="/doc-icon/link.svg" alt="" /></div>
        <div 
        onClick={()=>{setwindowState(state=>({...state, cli:true}))}}
        className="icon cli"><img src="/doc-icon/cli.svg" alt="" /></div>
    </footer>
  );
}

export default Dock;
