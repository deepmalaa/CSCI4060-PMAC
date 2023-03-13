import React from 'react';
import s from '../styles/HomePage.module.css';
import campus from '../img/HomePage/campus.jpg';

function FormOne() {
    return ( 

        <div className={s.container}>
            
            <div className={s.navBar}>
                <div className={s.goldBars}> </div>
                    <div className={s.whiteBar}>


                    </div>
                <div className={s.goldBars}> </div>
            </div>

            <div className={s.picture}>
                <img src={campus} alt="file submit"/>
                <div className={s.goldBars}> </div>
            </div>
            
            <div className={s.contentBoxW}>

            </div>
            {/* break */}

            <div className={s.contentBoxG}>
            
            </div>
            {/* break */}

            <div className={s.contentBoxW}>

            </div>

            <div className={s.contentBoxG}>
            
            </div>
            {/* break */}





        </div>



            )

}

export default FormOne;