import Image from 'next/image'
import {Poppins} from "next/font/google"
import { cn } from '@/lib/utils';

const font = Poppins({
    subsets: ["latin"],
    weight: ["400", "600"]
});
export default function Logo(){
    return <div className="hidden md:flex items-center gap-x-2">
        <Image
        src="/N no-background.png"
        height="40"
        width="40"
        alt="logo"
        className="dark:hidden"
        />

<Image
        src="/N dark no-background.png"
        height="60"
        width="60"
        alt="logo"
        className="hidden dark:block"
        />
        <p className={cn("font-semibold", font.className)}>Notion</p>
    </div>
}