import React from 'react'
import styled from 'styled-components';
import Options from './Options';

const CourseRowComponent = ({Title, value, setvalue}) => {
    console.log(setvalue, value)
  return (
   
    <CourseRow>
    <CourseName>
        <p>{Title}</p>
    </CourseName>
       <select
              value={{value}}
              onChange={setvalue}
            //   onClick={() => gradeToNum(math)}
          
            >
              <Options/>
            </select>
</CourseRow>
  )
}

export default CourseRowComponent


const CourseRow = styled.div`
display: flex;
justify-content: space-between;
select{
    width: 70px;
    height: 30px;
    padding: 1px;
    border-radius: 4px;

}
`;

const CourseName = styled.div``;