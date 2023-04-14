import React, { useState, useEffect } from 'react';
import { getCurrentProfile } from '../../actions/profile';
import { getAllProfile, getSearchProfile } from '../../actions/profile';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getAllSchemas } from '../../actions/calendar';


const ScheduleAlg = ({ getAllProfile, profile: { profiles }, getAllSchemas }) => {
    const [schemas, setSchemas] = useState([]);

    useEffect(() => {
      getAllProfile();
      getAllSchemas().then(data => setSchemas(data));
    }, [profiles, getAllProfile, getAllSchemas]);

    
    var schedules = [{"_id":"64370342c673661097f54083","title":"fun","start":"2023-04-12T09:00:00-05:00","end":"2023-04-12T12:00:00-05:00","daysOfWeek":[3],"startTime":"09:00","endTime":"12:00","id":"357867594606","__v":0},{"_id":"6437038fc673661097f540c8","title":"asdf","start":"2023-04-13T11:00:00-05:00","end":"2023-04-13T14:00:00-05:00","daysOfWeek":[4],"startTime":"11:00","endTime":"14:00","id":"722919802900","__v":0},{"_id":"6437094cd6f6b4a1ce4b2a03","title":"Mine","start":"2023-04-11T08:30:00-05:00","end":"2023-04-11T13:00:00-05:00","daysOfWeek":[2],"startTime":"08:30","endTime":"13:00","id":"262871048253","__v":0},{"_id":"64370950d6f6b4a1ce4b2a05","title":"Mine","start":"2023-04-12T11:30:00-05:00","end":"2023-04-12T16:30:00-05:00","daysOfWeek":[3],"startTime":"11:30","endTime":"16:30","id":"418368433214","__v":0},{"_id":"64370b0dbdff7f571121a57f","user":"64061172bf34c33e0b09e967","title":"asdf","start":"2023-04-12T09:00:00-05:00","end":"2023-04-12T11:30:00-05:00","daysOfWeek":[3],"startTime":"09:00","endTime":"11:30","id":"536354149936","__v":0},{"_id":"6437127b17dd2844363b586f","title":"here","start":"2023-04-14T10:30:00-05:00","end":"2023-04-14T13:00:00-05:00","daysOfWeek":[5],"startTime":"10:30","endTime":"13:00","id":"224733574031","__v":0},{"_id":"6437136217dd2844363b58d6","title":"what what","start":"2023-04-10T09:00:00-05:00","end":"2023-04-10T13:30:00-05:00","daysOfWeek":[1],"startTime":"09:00","endTime":"13:30","id":"365565147271","__v":0},{"_id":"643713cd17dd2844363b58e0","title":"score","start":"2023-04-11T14:30:00-05:00","end":"2023-04-11T17:30:00-05:00","daysOfWeek":[2],"startTime":"14:30","endTime":"17:30","id":"297326125814","__v":0},{"_id":"643713ed17dd2844363b5906","title":"done","start":"2023-04-10T15:00:00-05:00","end":"2023-04-10T16:30:00-05:00","daysOfWeek":[1],"startTime":"15:00","endTime":"16:30","id":"297335959159","__v":0},{"_id":"6437150087224c1489067584","user":"64061172bf34c33e0b09e967","title":"here","start":"2023-04-13T10:30:00-05:00","end":"2023-04-13T14:30:00-05:00","daysOfWeek":[4],"startTime":"10:30","endTime":"14:30","id":"27516118680","__v":0},{"_id":"6437155a87224c14890675cf","user":"64175657c1f272fb5b492952","title":"A-mon","start":"2023-03-06","end":"2023-03-07","daysOfWeek":[1],"startTime":"18:00","endTime":"18:00","id":"919249237940","__v":0},{"_id":"6437175165d3b70c54b19ea0","user":"64175657c1f272fb5b492952","title":"wed","start":"2023-04-12T11:00:00-05:00","end":"2023-04-12T12:30:00-05:00","daysOfWeek":[3],"startTime":"11:00","endTime":"12:30","id":"859306392035","__v":0},{"_id":"6437177265d3b70c54b19eb0","user":"64370069d780f6a0e4bec8ae","title":"nice","start":"2023-04-13T11:30:00-05:00","end":"2023-04-13T14:30:00-05:00","daysOfWeek":[4],"startTime":"11:30","endTime":"14:30","id":"488350801316","__v":0},{"_id":"643717ad65d3b70c54b19edb","user":"64175657c1f272fb5b492952","title":"thurs","start":"2023-04-13T09:30:00-05:00","end":"2023-04-13T11:00:00-05:00","daysOfWeek":[4],"startTime":"09:30","endTime":"11:00","id":"995913715892","__v":0}];
    
    //schedules = JSON.stringify(schedules);
    //console.log(schemas);
    return (

        <>
        <div>
            <h1>
                {
                    
                }
            </h1>

        </div>
        
        </>

        );
    }


    ScheduleAlg.propTypes = {
        profile: PropTypes.object.isRequired,
        getAllProfile: PropTypes.func.isRequired,
        getAllSchemas: PropTypes.func.isRequired
      };
      
      const mapStateToProps = (state) => ({
        profile: state.profile,
        auth: state.auth,
        
      });
      
      export default connect(mapStateToProps, { getAllProfile, getAllSchemas })(
        ScheduleAlg
      );