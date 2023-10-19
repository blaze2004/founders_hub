import { CustomComponentProps } from "@/types";
import Footer from "./footer";
import Header from "./header";

const IndexLayout=({ children }: CustomComponentProps) => {
    return (
        <div>
            <Header />
            <div>
                {children}
            </div>
            <Footer />
        </div>
    );
}

export default IndexLayout;