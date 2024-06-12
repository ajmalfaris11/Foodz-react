import React from 'react'
import itemStyle from './Items.module.css'; 
import { cat1, cat2, cat3, cat4, cat5, cat6, cat7, logo } from '../assets';

function Items() {
  return (
    <>
      <section className={itemStyle.wrapper}>
        <h3>What's on your mind?</h3>
        <section className={itemStyle.scrollSection}>
            <div className={itemStyle.scrollContainer}>
                
                <div className={itemStyle.item}>
                    <img src={cat1} alt="" />
                    <p>Kerala</p>
                </div>
                <div className={itemStyle.item}>
                    <img src={cat2} alt="" />
                    <p>Biriyani</p>
                </div>
                <div className={itemStyle.item}>
                    <img src={cat3} alt="" />
                    <p>Burger</p>
                </div>
                <div className={itemStyle.item}>
                    <img src={cat4} alt="" />
                    <p>Roll</p>
                </div>
                <div className={itemStyle.item}>
                    <img src={cat5} alt="" />
                    <p>Sandwitch</p>
                </div>
                <div className={itemStyle.item}>
                    <img src={cat6} alt="" />
                    <p>Chinees</p>
                </div>
                <div className={itemStyle.item}>
                    <img src={cat7} alt="" />
                    <p>North</p>
                </div>

            </div>
        </section>
      </section>
    </>
  )
}

export default Items;
