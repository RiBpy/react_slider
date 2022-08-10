import React, { useEffect, useState } from 'react';
import { FaQuoteRight } from 'react-icons/fa';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import data from './data';
//import logo from "./images/logo.png";
function App() {
  const[peoples,setPeoples] = useState(data);
  const[index,setIndex] = useState(0);

  const prevSlide=()=>{
    if(index === 0){
      setIndex(peoples.length-1);
    }else{
      setIndex(index-1);
    }
  }
  const nextSlide=()=>{
    if(index === peoples.length-1){
      setIndex(0);
    }else{
      setIndex(index+1);
    }
  }
  useEffect(()=>{
    let slideInterval = setInterval(nextSlide,3000);
    return ()=>{ clearInterval(slideInterval);} //clear the memory and start new loop
  })
  return <section className="section">
   <div className="myLogo">
   <img  className="logo" src={require('./images/logo.png')} alt="logo"/>
   </div>
   <div className="vertical_line"></div>
    <div className="title">
      <hr className="hr_line"/>
      <h2>Reviews</h2>
      <hr className="hr_line"/>
    </div>
    <div className="section-center">
      {peoples.map((people,i)=>{
        let position ="nextSlide";
        if(i===index){
          position = "activeSlide";
        }else if(i===index-1 || (index===0 && i===peoples.length-1)){
          position="lastSlide";
        }
   
        const {id,image,name,title,quote} = people;
        return (
          <article className={position} key={id}>
            <img src={image} alt={name} className="person-img" />
            <h4>{name}</h4>
            <p className="title">{title}</p>
            <p className="text">{quote}</p>
            <FaQuoteRight className="icon" />
          </article>
        )
      })}
     
      <button className="prev" onClick={prevSlide}>
        <FiChevronLeft />
      </button>
      <button className="next" onClick={nextSlide}>
        <FiChevronRight />
      </button>
    </div>
  </section>;
}

export default App;
