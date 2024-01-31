import React from "react";
import Navbar from "./Components/Navbar";
import style from "./style.css";
import About from "./Components/About";
import Section from './Components/Section';
import Footer from "./Components/Footer";
const App=()=>{
    let sectionData=[
        {
            title:"Skills",
            description:"The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation"
        },
        {
            title:"Qualifications",
            description:"The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation"
        },
        {
            title:"Projects",
            description:"The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation"
        }
    ]
    return(
        <div>
          <Navbar />
          <About />
          {
            sectionData.map((item,index)=>{
                return(
                    <Section key={index} title={item.title} description={item.description} />
                )
            })
          }
          <Footer />
        </div>
    )}

export default App;



