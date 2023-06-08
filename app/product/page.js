import Navbar from "../../components/layout/navbar/navbar";
import Footer from "../../components/layout/footer/footer";
import SingleProduct from "../../components/product/singleproduct";

export default function Home() {
    return (
        <>
            <Navbar />
                <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
                    <p>hello world.</p>
                </div>
                

                <SingleProduct/>
            <Footer />
        </>
    )
}