<Popup>
        <div className="info-container">
          <div
            className="info-flag"
            style={{ backgroundImage: `url(${country.countryInfo.flag})` }}
          />
          <div className="info-name">{country.country}</div>
          <div className="info-confirmed">
            <span className="total">
              <CountUp
                start={0}
                end={country.cases}
                duration={2.5}
              /> 
            </span>
            <span className="total__text"> total cases</span> 
          </div>
          <div className="info-active">
            <span className="active">
            <CountUp
                start={0}
                end={country.active}
                duration={2.5}
              />
            </span>
            <span className="active__text"> active</span>
            <br />
            <span className="active__today">
              &nbsp; +
              <CountUp
                start={0}
                end={country.todayCases}
                duration={2.5}
              />
            </span>
          </div>
          <div className="info-recovered">
            <span className="recovered">
              <CountUp
                start={0}
                end={country.recovered}
                duration={2.5}
              />
            </span>
            <span className="total__text"> recovered</span>
            <br />
            <span className="recovered__today">
              &nbsp; +
              <CountUp
                start={0}
                end={country.todayRecovered}
                duration={2.5}
              />
            </span>
          </div>
          <div className="info-deaths">
            <span className="deaths">
              <CountUp
                start={0}
                end={country.deaths}
                duration={2.5}
              />
            </span>
            <span className="deaths__text"> deceased</span>
            <br />
            <span className="deaths__today">
              &nbsp; +
              <CountUp
                start={0}
                end={country.todayDeaths}
                duration={2.5}
              /></span>
            {/* (since 20 hrs ago) */}
          </div>
        </div>
      </Popup>