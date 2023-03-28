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
                        <div className={styles.halfSections}>
                            <label htmlFor='projectTitle'>Project Title</label>
                            <input type='text' name='projectTitle' placeholder='Enter Project Title' />
                        </div>
                        <div className={styles.halfSections}>
                            <label htmlFor='campaignLiveDate'>Campaign Live Date</label>
                            <input
                                type='date'
                                name='campaignLiveDate'
                                placeholder='DD-MM-YYYY' />
                        </div>
                    </div>
                </div>
            </form>
          </main>
        )
    };
  }

  export default BriefingForm;