import React, {useState, useEffect} from 'react'
import {Card, CardContent, Typography} from '@material-ui/core'
import CountUp from 'react-countup'
import Trend from 'react-trend'
import "./InfoBox.css"
// import { css } from "@emotion/react";

const InfoBox = ({title, cases, total, active, isRed, isGrey, country,...props}) => {
    
    const [casesData, setCasesData] = useState([])
    const [recoveredData, setRecoveredData] = useState([])
    const [deathsData, setDeathsData] = useState([])        

    let trendCasesData = []
    let trendRecoveredData = []
    let trendDeathsData = []

    let lastCaseDataPoint;
    let lastRecoveryDataPoint;
    let lastDeathDataPoint;

    useEffect(() => {
        const fetchUrl = country === "worldwide" ? "https://disease.sh/v3/covid-19/historical/all?lastdays=30" 
        :  `https://disease.sh/v3/covid-19/historical/${country}?lastdays=30`
        // console.log(fetchUrl);

        if(fetchUrl === `https://disease.sh/v3/covid-19/historical/${country}?lastdays=30`){
            fetch(fetchUrl)
            .then(res => res.json())
            .then(data => {
                for(let key in data.timeline.cases){
                    if (lastCaseDataPoint) {
                        trendCasesData.push(data["timeline"]["cases"][key] - lastCaseDataPoint)
                    }
                    lastCaseDataPoint = data["timeline"]["cases"][key];
                }
                for(let key in data.timeline.cases){
                    if (lastRecoveryDataPoint) {
                        trendRecoveredData.push(data["timeline"]["recovered"][key] - lastRecoveryDataPoint)
                    }
                    lastRecoveryDataPoint = data["timeline"]["recovered"][key];
                }
                for(let key in data.timeline.cases){
                    if (lastDeathDataPoint) {
                        trendDeathsData.push(data["timeline"]["deaths"][key] - lastDeathDataPoint)
                    }
                    lastDeathDataPoint = data["timeline"]["deaths"][key];
                }
                
                setCasesData(trendCasesData)
                setRecoveredData(trendRecoveredData)
                setDeathsData(trendDeathsData)
            })
            .catch((err) => console.log("Lack of info >>>", err))
        }
        else {
            fetch(fetchUrl)
            .then(res => res.json())
            .then(data => {
                for(let key in data.cases){
                    if (lastCaseDataPoint) {
                        trendCasesData.push(data["cases"][key] - lastCaseDataPoint)
                    }
                    lastCaseDataPoint = data["cases"][key];
                }
                for(let key in data.cases){
                    if (lastRecoveryDataPoint) {
                        trendRecoveredData.push(data["recovered"][key] - lastRecoveryDataPoint)
                    }
                    lastRecoveryDataPoint = data["recovered"][key];
                }
                for(let key in data.cases){
                    if (lastDeathDataPoint) {
                        trendDeathsData.push(data["deaths"][key] - lastDeathDataPoint)
                    }
                    lastDeathDataPoint = data["deaths"][key];
                }
                setCasesData(trendCasesData)
                setRecoveredData(trendRecoveredData)
                setDeathsData(trendDeathsData)
            })
            .catch((err) => console.log("Lack of info >>>", err))
        }
        
        
    },[country])

    return (
        <>
            <Card 
                onClick={props.onClick}
                className={`infoBox
                ${active && "infoBox--selected"}
                ${isRed && "infoBox--red"}
                ${isGrey && "infoBox--grey"}
                `}
            >
                <CardContent className="infoContent">
                    <Typography 
                        className={`infoBox__title 
                        ${!isRed && "infoBox__title--green"} 
                        ${isGrey && "infoBox__title--grey"}
                        `}
                    >{title}</Typography>
                    <h2 
                        className={`infoBox__cases 
                        ${!isRed && "infoBox__cases--green"} 
                        ${isGrey && "infoBox__cases--grey"}
                        `}
                    > 
                        {cases && <CountUp
                            end={cases}
                            separator=","
                            duration={3}
                            prefix="+"
                        />}
                    </h2>
                    <Typography 
                        className={`infoBox__total 
                        ${!isRed && "infoBox__total--green"} 
                        ${isGrey && "infoBox__total--grey"}
                        `}
                    >
                        {total &&  <CountUp
                            end={total}
                            separator=","
                            duration={3}
                        />}
                    </Typography>
                    
                    {casesData,recoveredData, deathsData?.length > 0 &&
                        <Trend
                            className="trend"
                            smooth
                            autoDraw
                            autoDrawDuration={3000}
                            autoDrawEasing="ease-out"
                            data={props.className === "cases" ? casesData 
                            : props.className === "recovered" ? recoveredData : deathsData }
                            gradient={props.className === "cases" ? ['orange','red','#cc1034'] 
                            : props.className === "recovered" ? ['limegreen','green','darkgreen'] : ['lightgray','gray', 'black' ] }
                            radius={10}
                            strokeWidth={5}
                            strokeLinecap={'round'}
                        />
                    }
                    
                </CardContent>
            </Card>
        </>
    )
}

export default InfoBox
