import React from 'react'
import styles from "./Contact.module.css"
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "ContactUs",
};

export default function ContactUs() {
  return (
      <div className={styles.contactLayout}>
      <div className={styles.forTitleSection}>
        <h1 className={styles.forContactTitle}>Contact Details</h1>
         <h4 className={styles.forContactDetails}>Reach Out to Us:</h4><br/>
         <div className={styles.mainBox}>
             <div className={styles.box}> <p className={styles.forContactDetails}>
          For Enquiries:<br/>
          <span>+91-xxxxxxxxxx</span>
        </p> </div>
         <div className={styles.box}> <p className={styles.forContactDetails}>
          Mail Id:<br/>
          <span>abc@mail.com</span>
        </p> </div>

         </div>
        
                 
      </div>
      <div className={styles.forAddressSection}>
       
<h3 className={styles.forAddress}>Address:</h3><br/>
<p className={styles.forAddress}>Democart Pvt LTd,<br/>
  Street:abcd,<br/>
  Zone-00,ABC District,<br/>
  State:Abcd,<br/>
   pin:123123</p>

       
      </div>
    </div>
  )
}
