import React, { useState } from 'react';

const Tab = () => {
    const [activeTab, setActiveTab] = useState("Tab1");

    const tabs = [
        {
            name: "Tab1",
            content: "This is the tab 1."
        },
        {
            name: "Tab2",
            content: "This is the tab 2."
        },
        {
            name: "Tab3",
            content: "This is the tab 3."
        }
    ];


    
    return (
        <div>
            <div>
                {tabs.map((tab) => (
                    <button className={`${tab.name === activeTab ? "activebtn" : "inactivebtn" }`} style={{marginLeft: '20px'}} key={tab.name} onClick={() => setActiveTab(tab.name)}>
                        {tab.name}
                    </button>
                ))}
            </div>
            {tabs.map((tab) =>
            (
                tab.name === activeTab && <p key={tab.name}>{tab.content}</p>
            )
            )}
        </div>
    );
};

export default Tab;
