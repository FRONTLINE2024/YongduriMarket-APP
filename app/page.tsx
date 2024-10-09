'use client';


import ProductItem from "@/components/ProductItem";
import { Product } from "@/types/Product";
import TopBar from "@/components/TopBar";
import BottomBar from "@/components/BottomBar";

const mockData: Product[] = [
    {
        imageUrl: 'images/appleWatch.png',
        categoryText: "전자",
        productTitle: "애플워치",
        productDate: "3일 전",
        price: 40000,
        heart: 4,
        message: 11,
    },
    {
        imageUrl: 'images/iphone.png',
        categoryText: "시계",
        productTitle: "아이폰",
        productDate: "7일 전",
        price: 350000,
        heart: 9,
        message: 15,
    },
    {
        imageUrl: 'images/ipad.png',
        categoryText: "전자",
        productTitle: "아이패드",
        productDate: "4일 전",
        price: 500000,
        heart: 3,
        message: 2,
    },
    {
        imageUrl: 'images/moodLight.png',
        categoryText: "소품",
        productTitle: "무드등",
        productDate: "11일 전",
        price: 15000,
        heart: 1,
        message: 6,
    },
    {
        imageUrl: 'images/crayonShinchan.png',
        categoryText: "소품",
        productTitle: "짱구인형",
        productDate: "3시간 전",
        price: 21000,
        heart: 8,
        message: 5,
    },

];

//import SignIn from "@/pages/SignIn/SignIn";
//import SignUp from "@/pages/SignUp/SignUp";
//import ChangePwd from "@/pages/ChangePwd/ChangePwd";
//import SignUp from "@/pages/SignUp/SignUp";

export default function Home() {
    return (
        <main>
            <TopBar />
            {mockData.map((item) => (
                <ProductItem key={item.productTitle} product={item} />
            ))}
            <BottomBar/>
            {/*<SignUp/>*/}
        </main>
    );
}
