import Link from "next/link";
import photo from "../public/profile.jpg";
import Image from "next/image";

export default function RootPage() {
 return (
  <div className="p-10 m-10 space-y-2rounded-xl">
   <div className="flex items-center gap-3 ">
    <div className="relative w-12 h-12">
     <Image className="rounded-full" fill src={photo} alt="" />
    </div>
    <div>
     <span className="block mb-0 text-xl">Liam Doyle</span>
     <span className="mt-0 text-sm font-medium">@limegorilla</span>
    </div>
   </div>
   <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl">
    You're <i>just</i> too early...
   </h1>
   <p className="mt-2">
    I've got some awesome things planned here - but until they are ready, feel free to download my resume, or get in
    touch!
   </p>
   <div className="flex flex-wrap gap-5 mt-5">
    <Link
     className="p-2 font-bold text-green-900 bg-green-200 whitespace-nowrap rounded-xl"
     href={"/resume.pdf"}
     download
    >
     Download my resume
    </Link>
    <Link
     className="p-2 font-bold text-green-900 bg-green-200 whitespace-nowrap rounded-xl"
     href={"mailto:liamdoyle@limegorilla.co.uk"}
    >
     Get in touch
    </Link>
   </div>
  </div>
 );
}
