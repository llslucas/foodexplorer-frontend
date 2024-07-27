import { Routes, Route, Navigate } from 'react-router-dom'

import { Home } from '../pages/Home'
import { New } from '../pages/New'
import { Edit } from '../pages/Edit'
import { Prato } from '../pages/Prato'

export function AppRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/new" element={<New />} />
            <Route path="/edit/:id" element={<Edit />} />
            <Route path="/prato/:id" element={<Prato />} />  
            <Route path="*" element={ <Navigate to="/" /> } />
        </Routes>
    )
}