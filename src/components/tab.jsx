import { useState } from "react";
import TabStyle from "../styles/tab.module.css";
import Product from "./product";

export default function Tab({width= "90%", tabs}){
    const [tab, setTab] = useState(tabs[0])

    return(
        <div style={{width:width, marginLeft:`calc((100% - ${width}) / 2)`}} className={TabStyle.tab_conatiner}>
            <div className={TabStyle.tabs}>
                {tabs && tabs.map(i => <button style={{color: tab == i ? "red" : "black"}} onClick={() => setTab(i)} key={i}>{i}</button>)}
            </div>
            <div className={TabStyle.content}>
                {/* category content */}
                {tab == tabs[0] && <>
                    <Product title="هدفون" through="900,000,000" price="100,000,000" image="/images/a64b345016e96adfb8849af5521c8e0ecfe8f027-555x555.webp" />
                    <Product title="هدفون" price="100,000,000" image="/images/a64b345016e96adfb8849af5521c8e0ecfe8f027-555x555.webp" />
                    <Product title="هدفون" through="900,000,000" price="100,000,000" image="/images/a64b345016e96adfb8849af5521c8e0ecfe8f027-555x555.webp" />
                    <Product title="هدفون" price="100,000,000" image="/images/a64b345016e96adfb8849af5521c8e0ecfe8f027-555x555.webp" />
                    <Product title="هدفون" through="900,000,000" price="100,000,000" image="/images/a64b345016e96adfb8849af5521c8e0ecfe8f027-555x555.webp" />
                    <Product title="هدفون" through="900,000,000" price="100,000,000" image="/images/a64b345016e96adfb8849af5521c8e0ecfe8f027-555x555.webp" />
                </>}

                {tab == tabs[1] && <>
                    <Product title="اسپیکر" through="900,000,000" price="100,000,000" image="/images/9fbb62343426e1f157144f26d9b59be1629ef7c1-600x600.webp" />
                    <Product title="اسپیکر" price="100,000,000" image="/images/9fbb62343426e1f157144f26d9b59be1629ef7c1-600x600.webp" />
                    <Product title="اسپیکر" price="100,000,000" image="/images/9fbb62343426e1f157144f26d9b59be1629ef7c1-600x600.webp" />
                    <Product title="اسپیکر" price="100,000,000" image="/images/9fbb62343426e1f157144f26d9b59be1629ef7c1-600x600.webp" />
                    <Product title="اسپیکر" through="900,000,000" price="100,000,000" image="/images/9fbb62343426e1f157144f26d9b59be1629ef7c1-600x600.webp" />
                    <Product title="اسپیکر" through="900,000,000" price="100,000,000" image="/images/9fbb62343426e1f157144f26d9b59be1629ef7c1-600x600.webp" />
                </>}

                {tab == tabs[2] && <>
                    <Product title="هندزفری" through="900,000,000" price="100,000,000" image="/images/07fd4b12012f56f93ee9c5090a09754b4d8ee9dd-600x600.webp" />
                    <Product title="هندزفری" through="900,000,000" price="100,000,000" image="/images/07fd4b12012f56f93ee9c5090a09754b4d8ee9dd-600x600.webp" />
                    <Product title="هندزفری" price="100,000,000" image="/images/07fd4b12012f56f93ee9c5090a09754b4d8ee9dd-600x600.webp" />
                    <Product title="هندزفری" price="100,000,000" image="/images/07fd4b12012f56f93ee9c5090a09754b4d8ee9dd-600x600.webp" />
                    <Product title="هندزفری" price="100,000,000" image="/images/07fd4b12012f56f93ee9c5090a09754b4d8ee9dd-600x600.webp" />
                    <Product title="هندزفری" through="900,000,000" price="100,000,000" image="/images/07fd4b12012f56f93ee9c5090a09754b4d8ee9dd-600x600.webp" />
                </>}
            
            </div>
        </div>
    )
}