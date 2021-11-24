import React from 'react'
import Body from "../comps/Body"
import Footer from "../comps/Footer"
import Show from "../comps/Show"
import Sidebar from "../comps/Sidebar"
import Lowerbody from "../comps/Lowerbody"
import LoginCard from "../comps/Logincard"
import Header from "../comps/Header"

export default function ForEveryone() {
    return (
        <div>
            
            <Header />
            <Body />
            <Lowerbody />
            <Show />
            <Footer />
            
        </div>
    )
}
