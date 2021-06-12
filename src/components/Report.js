import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import './Report.css'
import numeral from 'numeral'


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '60%',
    flexShrink: 0,
    padding: 10
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
    padding: 10
  },
  content: {
    padding: 10,
  }
}));

const Report = ({countryInfo, country, vaccineDaily, vaccineTotal}) => {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);
  
  // console.log(vaccineTotal);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  
  return (
    <>
      <div className={classes.root}>
        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography className={classes.heading}>CUMMULATIVE DATA</Typography>
            <Typography className={classes.secondaryHeading}>
              Click here for {country === "worldwide" ? "Global Aggregate Data" : "Aggregate Data on "+country}
            </Typography>
          </AccordionSummary>
          <AccordionDetails >
            <Typography className={classes.content}>
              {/* <div className="table__report"> */}
                <table>
                  <tr>
                    <th>Confirmed</th>
                    <th>Active</th>
                    <th>Recovered</th>
                    <th>Critical</th>
                    <th>Deceased</th>
                    <th>Tested</th>
                    <th>Vaccine doses administered</th>
                  </tr>
                  <tr>
                    <td className="tooltip">
                      {numeral(countryInfo.cases).format("0.0a")}
                      <span class="tooltipText">No. of confirmed cases so far</span>
                    </td>
                    <td className="tooltip">
                      {numeral(countryInfo.active).format("0.0a")}
                      <span class="tooltipText">No. of active cases</span>
                    </td>
                    <td className="tooltip">
                      {numeral(countryInfo.recovered).format("0.0a")}
                      <span class="tooltipText">No. of recovered cases</span>
                    </td>
                    <td className="tooltip">
                      {numeral(countryInfo.critical).format("0a")}
                      <span class="tooltipText">No. of critical cases</span>
                    </td>
                    <td className="tooltip">
                      {numeral(countryInfo.deaths).format("0.0a")}
                      <span class="tooltipText">No. of deceased cases</span>
                    </td>
                    <td className="tooltip">
                      {numeral(countryInfo.tests).format("0.0a")}
                      <span class="tooltipText">No. of people tested so far</span>
                    </td>
                    <td className="tooltip">
                      {numeral(vaccineTotal).format("0.0a")}
                      <span class="tooltipText">No. of vaccine doses administered so far</span>
                    </td>
                    {/* <td>N.A.</td> */}
                  </tr>                
                </table>

              {/* </div> */}
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2bh-content"
            id="panel2bh-header"
          >
            <Typography className={classes.heading}>DAILY DATA</Typography>
            <Typography className={classes.secondaryHeading}>
            Click here for {country === "worldwide" ? "Global Daily Data" : "Daily Data on "+country}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className={classes.content}>
              <table>
                  <tr>
                    <th>Confirmed</th>
                    <th>Active</th>
                    <th>Recovered</th>
                    <th>Critical Cases</th>
                    <th>Deceased</th>
                    <th>Tested</th>
                    <th>Vaccine doses administered</th>
                  </tr>
                  <tr>
                    <td className="tooltip">
                      {numeral(countryInfo.todayCases + countryInfo.todayRecovered + countryInfo.todayDeaths).format('0.0a')}
                      <span class="tooltipText">Total no. of cases today</span>
                    </td>
                    <td className="tooltip">
                      {numeral(countryInfo.todayCases).format('0.0a')}
                      <span class="tooltipText">No. of infected cases today</span>
                    </td>
                    <td className="tooltip">
                      {numeral(countryInfo.todayRecovered).format('0.0a')}
                      <span class="tooltipText">No. of recovered cases today</span>
                    </td>
                    <td className="tooltip">
                      {/* {numeral(countryInfo.critical/countryInfo.cases).format('0.0a')}
                      <span class="tooltipText">% critical out of confirmed</span> */}
                      N.A.
                    </td>
                    <td className="tooltip">
                      {numeral(countryInfo.todayDeaths).format('0.0a')}
                      <span class="tooltipText">No. of deceased cases today</span>
                    </td>
                    <td className="tooltip">
                      {/* {numeral(countryInfo.tests/countryInfo.population).format('0.00%')}
                      <span class="tooltipText">% tested out of total population</span> */}
                      N.A.
                    </td>
                    <td className="tooltip">
                      {numeral(vaccineDaily).format("0.0a")}
                      <span class="tooltipText">No. of vaccine doses administered today</span>
                    </td>
                    {/* <td>N.A.</td> */}
                  </tr>                
                </table>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3bh-content"
            id="panel3bh-header"
          >
            <Typography className={classes.heading}>PERCENTAGE DATA</Typography>
            <Typography className={classes.secondaryHeading}>
            Click here for {country === "worldwide" ? "Global Percentage Data" : "Percentage Data on "+country}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className={classes.content}>
              <table>
                  <tr>
                    <th>Confirmed</th>
                    <th>Active</th>
                    <th>Recovered</th>
                    <th>Critical Cases</th>
                    <th>Deceased</th>
                    <th>Tested</th>
                    <th>Vaccine doses administered</th>
                  </tr>
                  <tr>
                    <td className="tooltip">
                      {numeral(countryInfo.cases/countryInfo.population).format('0.00%')}
                      <span class="tooltipText">% confirmed out of total population</span>
                    </td>
                    <td className="tooltip">
                      {numeral(countryInfo.active/countryInfo.cases).format('0.00%')}
                      <span class="tooltipText">% active out of confirmed</span>
                    </td>
                    <td className="tooltip">
                      {numeral(countryInfo.recovered/countryInfo.cases).format('0.00%')}
                      <span class="tooltipText">% recovered out of confirmed</span>
                    </td>
                    <td className="tooltip">
                      {numeral(countryInfo.critical/countryInfo.cases).format('0.00%')}
                      <span class="tooltipText">% critical out of confirmed</span>
                    </td>
                    <td className="tooltip">
                      {numeral(countryInfo.deaths/countryInfo.cases).format('0.00%')}
                      <span class="tooltipText">% deceased out of confirmed</span>
                    </td>
                    <td className="tooltip">
                      {numeral(countryInfo.tests/countryInfo.population).format('0.00%')}
                      <span class="tooltipText">% tested out of total population</span>
                    </td>
                    <td className="tooltip">
                      {numeral(vaccineTotal/(2*countryInfo.population)).format("0.%")}
                      <span class="tooltipText">% vaccinated out of total population (rough estimate)</span>
                    </td>
                    {/* <td>N.A.</td> */}
                  </tr>                
                </table>
            </Typography>
          </AccordionDetails>
        </Accordion>
        
      </div>
  
    </>
    
  );
}

export default Report