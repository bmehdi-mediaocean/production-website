import React from 'react';
import styles from "./BriefingForm.module.scss";

class BriefingForm extends React.Component {

    render() {
        return (
          <main>
            <form>
                <div className={styles.formBody}>
                    <h1>Briefing Form</h1>
                    <div className={styles.forms}>
                        <h2>Project Details</h2>
                        <div className={styles.halfSections + ' ' + styles.leftSections}>
                            <label htmlFor='projectTitle'>Project Title</label>
                            <input
                                type='text'
                                name='projectTitle'
                                placeholder='Enter Project Title'
                            />
                        </div>
                        <div className={styles.halfSections + ' ' + styles.rightSections}>
                            <label htmlFor='campaignLiveDate'>Campaign Live Date</label>
                            <input
                                type='date'
                                name='campaignLiveDate'
                                placeholder='DD-MM-YYYY'
                            />
                        </div>
                        <div className={styles.halfSections + ' ' + styles.leftSections}>
                            <label htmlFor='fullName'>Full Name</label>
                            <input
                                className={styles.halfInput + ' ' + styles.leftInput}
                                type='text'
                                name='firstName'
                                placeholder='First Name'
                            />
                            <input
                                className={styles.halfInput + ' ' + styles.rightInput}
                                type='text'
                                name='lastName'
                                placeholder='Last Name'
                            />
                        </div>
                    </div>
                </div>
            </form>
          </main>
        )
    };
  }

  export default BriefingForm;