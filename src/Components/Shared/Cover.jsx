/* eslint-disable react/prop-types */
import { Parallax} from 'react-parallax';

const Cover = ({bgimg,title,description}) => {
    return (
        <div>

<Parallax className='h-[700px] flex items-center justify-center'
        blur={{ min: -15, max: 15 }}
        bgImage={bgimg}
        bgImageAlt="the dog"
        strength={200}
    >
      
             
        <div className="hero mx-auto w-[600px] h-[250px]">
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
      <p className="mb-5">{description}</p>
    </div>
  </div>
</div>
   

 
         

     
    </Parallax>
      
            
        </div>
    );
};

export default Cover;