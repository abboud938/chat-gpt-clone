
import { faDeleteLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function SideNavLink ({link , title , icon}) {
    return (<>
            <div className="flex gap-3 justify-start items-center ">
                <FontAwesomeIcon className="text-secondaryColor w-[15px] h-[15px]" icon={icon} />
                <Link href={link}>{title}</Link>
            </div>
    </>);
}