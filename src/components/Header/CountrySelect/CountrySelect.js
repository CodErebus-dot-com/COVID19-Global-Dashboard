import React, {useState, useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {Button, Dialog, DialogActions, DialogContent, DialogTitle, 
    FormControl, Radio, RadioGroup, FormControlLabel, TextField, Grid} from '@material-ui/core'
import {Language, SearchRounded} from '@material-ui/icons';
import CountUp from 'react-countup';
import {v4 as uuidv4} from 'uuid'
import covid19_icon from '../../../assets/imgs/covid19.png'

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        width: 550,
        height: 750,
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 480,        
    },
    country__header: {
        background: 'white',
        width: '100%',
        height: '100px',
        padding: '1rem',
        fontSize: 24,
        fontWeight: 700,
    },
    country__radio: {
        padding: "0 2rem",
        
    },
    search__icon: {
        verticalAlign: "middle",
        position: "relative",
        top: 15,
        fontSize: 26,
        color: "gray",
        borderRadius: "50%",
        boxShadow: "0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19)",
        padding: ".7rem",
        "&:hover": {
            boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
            color: "black",
            transition: ".3s"
        }
    },
    country__flag: {
        height: 70,
        width: 70,
        backgroundSize: "cover",
        borderRadius: "50%",
        float: "right",
    },
    worldwide:{
        marginTop: "3rem",
    }, 
    country__cases: {
        display: "block",
        marginBottom: "1rem",
        
    },
    worldwide__cases: {
        display: "flex",
        flexDirection: "column",
        marginBottom: "2rem"
    }
    
    
}));

const CountrySelect = ({country, onCountryChange, data, casesType, name}) => {
    

    const styleClasses = useStyles();
    const [open, setOpen] = useState(false);
    const [countryInput, setCountryInput] = useState("")
    const [flag, setFlag] = useState("")

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setCountryInput("")
        
    };

    const handleCountryInputChange = e => {
        setCountryInput(e.target.value.toUpperCase())
    };

    let  totalCasesCount = 0 
    let activeCasesCount = 0
    const countryNames = []
    let countries = []

    for (const [index, value] of data.entries()) {
        totalCasesCount = totalCasesCount + value.cases
        activeCasesCount = activeCasesCount + value.active
        countries.push({
            index: index,
            country: value.country,
            flag: value.countryInfo.flag,
            cases: value.cases
        })

    }

    countries = countries.filter(country => country.country.toUpperCase().includes(countryInput))

    let results = []
    for(let i in countries){
        results.push({
            index: i,
            country: countries[i].country,
            flag: countries[i].flag,
            cases: countries[i].cases
        })
        
    }
    for(let i in results){
    countryInput.length>0 ? (
        countryNames.push(<span key={uuidv4}>
        
            <div>
                <FormControlLabel 
                    value={results[i].country} 
                    control={<Radio/>} 
                    label={<span style={{ fontSize: 20 }}>{results[i].country}</span>}
                />
                
                <img src={results[i].flag} alt="country-flag" className={styleClasses.country__flag}/>
                <span className={styleClasses.country__cases} key={i}>
                    <span style={{color: "#CC1034"}}>
                        <CountUp
                            start={0}
                            end={results[i].cases}
                            duration={2.5}
                            separator=","
                        />
                    </span>
                    <span> &nbsp;total cases</span>
                </span>        
            </div>
        </span>)
    ) : (
        countryNames.push(<span key={uuidv4}>
        
            <div>
                <FormControlLabel  
                    value={countries[i].country} 
                    control={<Radio/>} 
                    label={<span style={{ fontSize: 20 }}>{countries[i].country}</span>}
                />
                
                <img src={countries[i].flag} alt="country-flag" className={styleClasses.country__flag}/>
                <span className={styleClasses.country__cases}>
                    <span style={{color: "#CC1034"}}>
                        <CountUp
                            start={0}
                            end={countries[i].cases}
                            duration={2.5}
                            separator=","
                        />
                    </span>
                    <span> &nbsp;total cases</span>
                </span>        
            </div>
        </span>)
    )
    }
    
    let countryFlags
    useEffect(() => {
        for(let i in data){
            if(country === data[i].country)
            {
                countryFlags = data[i].countryInfo.flag
                setFlag(countryFlags)
            }
        }     
    }, [country])
      

    return (
        <>
            <Button className={styleClasses.country__header} variant="contained" onClick={handleClickOpen}>
                {country === "worldwide" ? <Language fontSize="large"/> : <img src={flag} height="30px" width="50px" alt="Country Flag"/>}
                
                {
                    casesType === "cases" ? <span style={{color: "#CC1034", fontSize: "40px"}}>
                        C<img src={covid19_icon} style={{height: 50, width: 50, verticalAlign: "middle"}} alt="covid19 icon"/>VID19 {country}</span>  
                    : (casesType === "recovered" ? <span style={{color: "#7DD71D", fontSize: "40px"}}>
                        C<img src={covid19_icon} style={{height: 50, width: 50, verticalAlign: "middle"}} alt="covid19 icon"/>VID19 {country}</span> 
                    : <span style={{color: "gray", fontSize: "40px"}}>
                        C<img src={covid19_icon} style={{height: 50, width: 50, verticalAlign: "middle"}} alt="covid19 icon"/>VID19 {country}</span>)
                } 
                
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Selected: {countryInput ? countryInput : country}</DialogTitle>
                <DialogContent>
                    <form className={styleClasses.container}>
                        <FormControl className={styleClasses.formControl} component="fieldset">
                            <RadioGroup className={styleClasses.country__radio} aria-label="gender" name="gender1" value={country} onChange={onCountryChange}>
                                <Grid container alignItems="flex-end">
                                    <Grid item>
                                        <SearchRounded className={styleClasses.search__icon}/>
                                    </Grid>
                                    <Grid item>
                                        <TextField id="standard-basic" label="Search..." onChange={handleCountryInputChange}/>
                                    </Grid>
                                </Grid>    
                                <span className={styleClasses.worldwide__cases}>
                                    <FormControlLabel 
                                        className={styleClasses.worldwide} 
                                        value="worldwide"
                                        control={<Radio />} 
                                        label={<span style={{ fontSize: 20 }}>Worldwide</span>} 
                                    />
                                    <span>
                                        ACTIVE: &nbsp;&nbsp;
                                        <CountUp
                                            start={0}
                                            end={activeCasesCount}
                                            duration={2.5}
                                            separator=","
                                            style={{color: "#3457D5"}}
                                        />
                                        &nbsp;/
                                        <CountUp
                                            start={0}
                                            end={totalCasesCount}
                                            duration={2.5}
                                            separator=","
                                            style={{color: "#CC1034"}}
                                        />
                                    </span>
                                </span>
                                

                                {countryNames}
                            </RadioGroup>
                        </FormControl>
                    </form>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">OK</Button>
                    <Button onClick={handleClose} color="secondary">CANCEL</Button>
                </DialogActions>
            </Dialog>
        </>
    )
}

export default CountrySelect

























// import React from 'react'
// import {MenuItem, Select} from '@material-ui/core'

// const CountrySelect = ({countries, country, onCountryChange}) => {
//     return (
//         <>
//             <Select variant="outlined" value={country} onChange={onCountryChange}>
//                 <MenuItem value="worldwide">Worldwide</MenuItem>
//                 {countries.map(country => <MenuItem value={country.value} >{country.name}</MenuItem>)}
//             </Select>
//         </>
//     )
// }

// export default CountrySelect
