import React ,{useState, useEffect}from 'react'
import { fetchApi } from './Api';
import './BankEnergi.css'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Elexon from './subcomponents/Elexon';
import Solar from './subcomponents/Solar';

const BankEnergi = () => {
    const [elexon, setElexon] = useState([]);
    const [solar, setSolar] = useState([])
    const [windOn, setWindOn] = useState([]);
    
    const[allWind, setAllWind] = useState([]);


    
    useEffect(() => {
        fetchApi('exlexon').then(data => {
            setElexon(data);
        })
        fetchApi('solar').then(data => {
            setSolar(data);
        })
        fetchApi('solar').then(data => {
            setSolar(data);
        })
    },[])
    return (
        <div className="bank--section ">
            <div className="bank--wrapper">
            <div>
                <h4>Elexon</h4>
            <Elexon  dataGiven={elexon} />

            </div>
            <div>
            <h4>Solar</h4>
            <Solar dataGiven={solar} />
            </div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            </div>
        </div>
    )
}

export default BankEnergi
