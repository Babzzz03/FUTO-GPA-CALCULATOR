import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import CourseRowComponent from './CourseRowComponent'
import Options from './Options'
const Home = () => {

    useEffect(() => {
        gradeToNum('A')
    }, [])
    

const [gradeNumber, SetGradeNumber] = useState(5.0)
const [totalGradePoint, setTotalGradePoint] = useState(0)

    const [bio, setBio] = useState("A");
    const [bio_p, setBio_p] = useState("A");
    const [math, setMath] = useState("A");
    const [phy, setPhy] = useState("A");
    const [phy_p, setPhy_p] = useState("A");
    const [chm, setChm] = useState("A");
    const [chm_p, setChm_p] = useState("A");
    const [engine, setEngine] = useState("A");
    const [workshop, setWorkshop] = useState("A");
    const [philosophy, setPhilosophy] = useState("A");
    const [french, setFrench] = useState("A");
    const [english, setEnglish] = useState("A");


    const bio_unit=2;  
    const english_unit=2;  
    const maths_unit=4;  
    const phy_unit=3;  
    const chem_unit=3;  
    const eng_drawing_unit=1;  
    const workshop_unit=1;  
    const philosophy_unit=1;  
    const french_unit=1;
    const practical_unit=1;  

    let tgp=[];    let tcu=21;
    const gradeToNum = (grade) => {  
        let num = 0
            if(grade=="A"){        num=5      }     
             else if(grade=="B"){        num=4      }    
               else if(grade=="C"){        num=3      }    
                 else if(grade=="D"){        num=2      }    
                   else if(grade=="E"){        num=1      }    
                     else if(grade=="F"){        num=0       }    
                        return num
                        
                    }


const handleCalculate = () => {
   let sum = gradeToNum(math)*maths_unit + gradeToNum(phy)*phy_unit + gradeToNum(bio)*bio_unit + gradeToNum(chm)*chem_unit + gradeToNum(engine)*eng_drawing_unit + gradeToNum(workshop)*workshop_unit +  gradeToNum(philosophy)*philosophy_unit +  gradeToNum(french)*french_unit +  gradeToNum(bio_p)*practical_unit + gradeToNum(chm_p)*practical_unit + gradeToNum(phy_p)*practical_unit  + gradeToNum(english)*english_unit

    SetGradeNumber(sum/21)

window.scrollTo(0,0);
}


  return (
    <Component>
        <BackgroundImage>

        </BackgroundImage>
        <Header> <h3>1<sup>st</sup> Semester 100L GPA CALCULATOR</h3> </Header>
        <FormBody>
        <h1> Your GPA IS : {(Math.round((gradeNumber + Number.EPSILON) * 100) / 100) == 5 ? "5.0" : Math.round((gradeNumber + Number.EPSILON) * 100) / 100 }</h1>
       
<CourseRow>
    <CourseName>
        <p>MATHEMATICS</p>
    </CourseName>
       <select
              value={math}
              onChange={(e) => setMath(e.target.value)}
            //   onClick={() => gradeToNum(math)}
          
            >
              <Options/>
            </select>
</CourseRow>

<CourseRow>
<CourseName>
        <p>PHYSICS</p>
    </CourseName>
       <select
              value={phy}
              onChange={(e) => setPhy(e.target.value)}
            //   onClick={() => gradeToNum(phy)}
            >
              <Options/>
            </select>
</CourseRow>

<CourseRow>
<CourseName>
        <p>CHEMISTRY</p>
    </CourseName>
       <select
              value={chm}
              onChange={(e) => setChm(e.target.value)}
            //   onClick={() => gradeToNum(chm)}
            >
              <Options/>
            </select>
</CourseRow>
<CourseRow>
<CourseName>
        <p>BIOLOGY</p>
    </CourseName>
       <select
              value={bio}
              onChange={(e) => setBio(e.target.value)}
            //   onClick={() => gradeToNum(chm)}
            >
              <Options/>
            </select>
</CourseRow>

<CourseRow>
<CourseName>
        <p>ENGINE DRAWING</p>
    </CourseName>
       <select
              value={engine}
              onChange={(e) => setEngine(e.target.value)}
            //   onClick={() => gradeToNum(engine)}
            >
              <Options/>
            </select>
</CourseRow>

<CourseRow>
<CourseName>
        <p>ENGINE WORKSHOP</p>
    </CourseName>
       <select
              value={workshop}
              onChange={(e) => setWorkshop(e.target.value)}
            //   onClick={() => gradeToNum(workshop)}
            >
              <Options/>
            </select>
</CourseRow>
<CourseRow>
<CourseName>
        <p>PHILOSOPHY</p>
    </CourseName>
       <select
              value={philosophy}
              onChange={(e) => setPhilosophy(e.target.value)}
            //   onClick={() => gradeToNum(workshop)}
            >
              <Options/>
            </select>
</CourseRow>
<CourseRow>
<CourseName>
        <p>FRENCH</p>
    </CourseName>
       <select
              value={french}
              onChange={(e) => setFrench(e.target.value)}
            //   onClick={() => gradeToNum(workshop)}
            >
              <Options/>
            </select>
</CourseRow>
<CourseRow>
<CourseName>
        <p>ENGLISH</p>
    </CourseName>
       <select
              value={english}
              onChange={(e) => setEnglish(e.target.value)}
            //   onClick={() => gradeToNum(workshop)}
            >
              <Options/>
            </select>
</CourseRow>
<CourseRow>
<CourseName>
        <p>BIOLOGY PRACTICAL</p>
    </CourseName>
       <select
              value={bio_p}
              onChange={(e) => setBio_p(e.target.value)}
            //   onClick={() => gradeToNum(workshop)}
            >
              <Options/>
            </select>
</CourseRow>
<CourseRow>
<CourseName>
        <p>PHYSICS PRACTICAL</p>
    </CourseName>
       <select
              value={phy_p}
              onChange={(e) => setPhy_p(e.target.value)}
            //   onClick={() => gradeToNum(workshop)}
            >
              <Options/>
            </select>
</CourseRow>
<CourseRow>
<CourseName>
        <p>CHEMISTRY PRACTICAL</p>
    </CourseName>
       <select
              value={chm_p}
              onChange={(e) => setChm_p(e.target.value)}
            //   onClick={() => gradeToNum(workshop)}
          
            >
              <Options/>
            </select>
</CourseRow>

{/* <CourseRowComponent Title={'MATHEMATICS'} value={math} setvalue = ()=> {(e) => setMath(e.target.value)} />
<CourseRowComponent Title={'PHYSICS'} value={phy} setvalue={(e) => setPhy(e.target.value)} />
<CourseRowComponent Title={'CHEMISTRY'} value={chm} setvalue={(e) => setChm(e.target.value)} />
<CourseRowComponent Title={'BIOLOGY'} value={bio} setvalue={(e) => setBio(e.target.value)} /> */}
       
        <Button>
          <button onClick={handleCalculate} >Calculate</button>
        </Button>
      

        </FormBody>
        <Footer><p>Built with ❤️ by Babzz and Ojeh</p></Footer>
    </Component>
  )
}

export default Home

const Component = styled.div`
background-color: #282626;
color: #f1e7e7;
min-height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-start;
position: relative;
z-index: 22;

`;

const BackgroundImage = styled.div`
position: fixed;
background: no-repeat url("https://upload.wikimedia.org/wikipedia/en/1/16/FUTO_logo.png");
background-position: fixed;
z-index: -1;
inset: 0;
background-position: center;
filter: brightness(7%);
`;

const Header = styled.div`
display: flex;
align-items: center;
justify-content: center;
text-align: center;
h3{
    font-size: 30px;
    @media (max-width: 770px) {
        font-size: 24px;  
    }
}
`;

const FormBody = styled.div`
width: 60vw;
margin-bottom: 90px;
@media (max-width: 770px) {
    width: 80vw;  
    }
h1{
    @media (max-width: 770px) {
        font-size: 20px;  
    }
}
`;

const Button = styled.div`
padding: 20px 10px;
background-color: #363736;
display: flex;
justify-content: center;
align-items: center;

button{
    padding:10px 20px;
  font-size: 20px;
  color: white;
    border-radius: 7px;
    border: 1px solid orange;
background-color: #388838;
cursor: pointer;
:hover{
  transform: scale(1.04);
  transition: 0.4s ease-in-out;
}
}
`;

const CourseRow = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
select{
    width: 70px;
    height: 30px;
    padding: 1px;
    border-radius: 4px;

}
`;

const CourseName = styled.div``;


const Footer = styled.div`
color: #b7b3b3;
`;