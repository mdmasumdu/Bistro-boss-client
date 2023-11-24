/* eslint-disable react/prop-types */


const Sectiontitle = ({heading,subheading}) => {

    return (
        <div className="text-center">
            <h1 className="text-yellow-600">---{heading}---</h1>

            <h1 className="uppercase border-y-2 md:w-4/12 mx-auto mb-10 font-bold text-3xl">{subheading}</h1>
            
        </div>
    );
};

export default Sectiontitle;