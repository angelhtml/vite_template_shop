import { Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Select } from "@chakra-ui/react";
import ToggelSwitch from "./toggleSwitch";
import FilterStyle from "../styles/filters.module.css";

export default function Filters(){
    return(
        <div>
            <div className={FilterStyle.options_box}>
                    <Accordion allowToggle className={FilterStyle.accordion}>
                        <AccordionItem>

                                <AccordionButton className={FilterStyle.accordionButton}>
                                    <p>قیمت</p>
                                    <AccordionIcon/>
                                </AccordionButton>
       
                            <AccordionPanel>
                                <input type="number" className={FilterStyle.inputs} placeholder="بیشترین قیمت (تومان)"/>
                            </AccordionPanel>
                            <AccordionPanel>
                                <input type="number" className={FilterStyle.inputs} placeholder="کمترین قیمت (تومان)"/>
                            </AccordionPanel>
                        </AccordionItem>
                    </Accordion>
                    
                    <Select className={FilterStyle.select} icon={<></>} placeholder="جدید ترین">
                        <option value={"old"}>قدیمی ترین</option>
                    </Select>

                    <ToggelSwitch Callback={(i)=> console.log(i)} title="کالاهای موجود"/>

                    <ToggelSwitch Callback={(i)=> console.log(i)} title="تخفیف دار"/>
                </div>
        </div>
    )
}