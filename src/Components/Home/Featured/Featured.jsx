import Sectiontitle from "../../Shared/Sectiontitle/Sectiontitle";
import featuredimg from "../../../assets/home/featured.jpg"

import "./Featured.css"
const Featured = () => {
    return (
        <div className="featured-bg bg-fixed">
            <Sectiontitle heading={"Check it out"} subheading={"From our menu"}></Sectiontitle>

            <div className="flex justify-center items-center gap-10 bg-slate-500 bg-opacity-30">
                <div className="px-10 py-20">
                    <img src={featuredimg} alt="" />
                </div>

                <div className="text-white">
                    <p>Nov 24, 2023</p>
                    <p className="uppercase">Where can i get some</p>
                    <p className="py-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate dolor distinctio deleniti voluptates commodi perferendis debitis quasi dolorum, labore maxime itaque quam quas natus expedita ratione quidem ipsum reprehenderit delectus ullam autem, ipsam fuga alias incidunt suscipit. In architecto, voluptate repellat consequuntur non ipsam sed? A, magnam ipsa? Similique, blanditiis.</p>
                    <button className="btn btn-outline text-white border-0 border-b-4">Order now</button>
                </div>
            </div>
            
        </div>
    );
};

export default Featured;