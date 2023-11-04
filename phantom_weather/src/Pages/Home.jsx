import CustomCard from '../Comp/CustomCard/index.jsx'
import CustomSubCard from '../Comp/CustomSubCard/index.jsx'
import CustomInput from '../Comp/Input/index.jsx'

////This page will consume three components, Input, Card and Sub Card
const Home = ()=>{
    return (
        <>
          <div className='d-flex justify-content-center'>
          <CustomInput/>
          </div> 
          <div className='d-flex justify-content-center'>
          <CustomCard/>
          </div> 
          <div className='d-flex justify-content-center p-5'>
          <CustomSubCard/>
          </div> 
        </>
    )
}

export default Home