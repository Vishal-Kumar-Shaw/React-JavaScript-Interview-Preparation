import React, { useState } from 'react'
import Tab from './Tab';

const Tabs = ({tabs}) => {
    const [activeTabIndex, setActiveTabIndex] = useState(0);
    const ActiveTabComponent = tabs[activeTabIndex].Component;
   
  return (
    <div>
        <div style={{display:'flex', borderBottom:'1px solid #ddd'}}>
        {tabs.map((tab, index)=>(
            <Tab 
            key={index}
            name={tab.Name}
            isActive={activeTabIndex==index}
            Component={tab.Component}
            onClick = {()=>setActiveTabIndex(index)}
            />
        ))}
        </div>
        <div className='tab-content'>
            <ActiveTabComponent/>
        </div>
    </div>
  )
}

export default Tabs
