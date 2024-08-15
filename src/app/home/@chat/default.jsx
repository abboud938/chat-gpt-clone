import { faArrowCircleUp, faFileImage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function Default() {
    return(<>
        <div className="w-[75%] h-full flex self-center justify-center items-center gap-8">
            <div className="w-1/3 h-1/2 flex flex-col justify-center items-center rounded-3xl bg-primaryColor gap-4 shadow-xl" >
            {/* VECTOR */}
                <FontAwesomeIcon icon={faQuestionCircle} className="text-secondaryColor w-1/4 h-1/4"/>
                <div className="text-textColor uppercase text-sm"> Answering Your Questions </div>
            {/* TEXT */}
            </div>
            <div className="w-1/3 h-1/2 flex flex-col justify-center items-center rounded-3xl bg-primaryColor gap-4 shadow-xl" >
            {/* VECTOR */}
                <FontAwesomeIcon icon={faCode} className="text-secondaryColor w-1/4 h-1/4"/>
                <div className="text-textColor uppercase text-sm"> Writing Code </div>
            {/* TEXT */}
            </div>
            <div className="w-1/3 h-1/2 flex flex-col justify-center items-center rounded-3xl bg-primaryColor gap-4 shadow-xl" >
            {/* VECTOR */}
                <FontAwesomeIcon icon={faImages} className="text-secondaryColor w-1/4 h-1/4"/>
                <div className="text-textColor uppercase text-sm"> Interpreting Images </div>
            {/* TEXT */}
            </div>
        </div>
        <form  className="bg-primaryColor rounded-full h-[10%] w-1/2 flex items-center justify-between p-4 gap-2">
            <label htmlFor="file">
                <FontAwesomeIcon icon={faFileImage} className="text-secondaryColor w-[25px] h-[25px]"/>
            </label>
            <input type="file" hidden id="file" name="file"/>
            <input type="text" className="outline-none border-none w-full bg-transparent text-textColor" name="question" placeholder="Ask Any Thing ..." 
            />
            <button className="" type="submit">
                <FontAwesomeIcon icon={faArrowCircleUp} className="text-secondaryColor w-[25px] h-[25px]"/>
            </button>
        </form>
    </>)
}