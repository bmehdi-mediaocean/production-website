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
                            <label htmlFor='projectTitle'>Project Title <span className={styles.required}>*</span></label>
                            <input
                                type='text'
                                name='projectTitle'
                                required
                            />
                        </div>
                        <div className={styles.halfSections + ' ' + styles.rightSections}>
                            <label htmlFor='campaignLiveDate'>Campaign Live Date <span className={styles.required}>*</span></label>
                            <input
                                type='date'
                                name='campaignLiveDate'
                                placeholder='DD-MM-YYYY'
                                required
                            />
                        </div>
                        <div className={styles.halfSections + ' ' + styles.leftSections}>
                            <label htmlFor='fullName'>Full Name <span className={styles.required}>*</span></label>
                            <input
                                className={styles.halfInput + ' ' + styles.leftInput}
                                type='text'
                                name='firstName'
                                placeholder='First Name'
                                required
                            />
                            <input
                                className={styles.halfInput + ' ' + styles.rightInput}
                                type='text'
                                name='lastName'
                                placeholder='Last Name'
                            />
                        </div>
                        <div className={styles.halfSections + ' ' + styles.rightSections}>
                            <label htmlFor='email'>Email <span className={styles.required}>*</span></label>
                            <input
                                type='email'
                                name='email'
                                placeholder='example@example.com'
                                required
                            />
                        </div>
                        <div className={styles.halfSections + ' ' + styles.leftSections}>
                            <label htmlFor='mediaBuyer'>Media Buyer</label>
                            <input
                                type='text'
                                name='mediaBuyer'
                            />
                        </div>
                        <div className={styles.halfSections + ' ' + styles.rightSections}>
                            <label htmlFor='mediaBuyerEmail'>Media Buyer Email</label>
                            <input
                                type='email'
                                name='mediaBuyerEmail'
                                placeholder='example@example.com'
                            />
                        </div>
                        <div className={styles.halfSections + ' ' + styles.leftSections}>
                            <label htmlFor='ftCM'>Flashtalking Campaign Manager <span className={styles.required}>*</span></label>
                            <input
                                className={styles.halfInput + ' ' + styles.leftInput}
                                type='text'
                                name='ftCMFirstName'
                                placeholder='First Name'
                                required
                            />
                            <input
                                className={styles.halfInput + ' ' + styles.rightInput}
                                type='text'
                                name='ftCMLastName'
                                placeholder='Last Name'
                            />
                        </div>
                        <div className={styles.halfSections + ' ' + styles.rightSections}>
                            <label htmlFor='adFileLimit'>Ad File Size Limit</label>
                            <input
                                type='text'
                                name='adFileLimit'
                            />
                        </div>
                        <div className={styles.halfSections + ' ' + styles.leftSections}>
                            <label htmlFor='sizesRequired'>Creative Sizes Required <span className={styles.required}>*</span></label>
                            <input
                                type='text'
                                name='sizesRequired'
                                required
                            />
                        </div>
                        <div className={styles.halfSections + ' ' + styles.rightSections}>
                            <label htmlFor='addLanguages'>Additional Languages</label>
                            <input
                                type='text'
                                name='addLanguages'
                            />
                        </div>
                        <div className={styles.halfSections + ' ' + styles.leftSections}>
                            <label htmlFor='dynVersions'>Dynamic Messaging Versions</label>
                            <select name='dynVersions'  className={styles.select}>
                                <option>Only a single version required</option>
                                <option>2 - 5 versions</option>
                                <option>6 - 20 versions</option>
                                <option>20+ versions</option>
                            </select>
                        </div>
                        <div className={styles.halfSections + ' ' + styles.rightSections}>
                            <label>Feed Integrations</label>
                            <div className={styles.checkbox}>
                                <input 
                                    className={styles.checkboxInput}
                                    type='checkbox'
                                    name='noFeed'
                                />
                                <label
                                    className={styles.checkboxLabel}
                                    htmlFor='noFeed'
                                >No Feed</label>
                            </div>
                            <div className={styles.checkbox}>
                                <input 
                                    className={styles.checkboxInput}
                                    type='checkbox'
                                    name='prodFeed'
                                />
                                <label
                                    className={styles.checkboxLabel}
                                    htmlFor='prodFeed'
                                >Product Feed (Retargeting)</label>
                            </div>
                            <div className={styles.checkbox}>
                                <input 
                                    className={styles.checkboxInput}
                                    type='checkbox'
                                    name='storeLocFeed'
                                />
                                <label
                                    className={styles.checkboxLabel}
                                    htmlFor='storeLocFeed'
                                >Store Locator Feed</label>
                            </div>
                            <div className={styles.checkbox}>
                                <input 
                                    className={styles.checkboxInput}
                                    type='checkbox'
                                    name='weatherFeed'
                                />
                                <label
                                    className={styles.checkboxLabel}
                                    htmlFor='weatherFeed'
                                >Weather Feed</label>
                            </div>
                            <div className={styles.checkbox}>
                                <input 
                                    className={styles.checkboxInput}
                                    type='checkbox'
                                    name='eventFeed'
                                />
                                <label
                                    className={styles.checkboxLabel}
                                    htmlFor='eventFeed'
                                >Live Event Feed</label>
                            </div>
                            <div className={styles.checkbox}>
                                <input 
                                    className={styles.checkboxInput}
                                    type='checkbox'
                                    name='otherFeed'
                                />
                                <label
                                    className={styles.checkboxLabel}
                                    htmlFor='otherFeed'
                                >Other Feed</label>
                            </div>
                        </div>
                        <div className={styles.fullSections}>
                            <label htmlFor='projectDesc'>Project Description <span className={styles.required}>*</span></label>
                            <textarea
                                name='projectDesc'
                                rows='5'
                                placeholder='Type Here'
                                required
                            ></textarea>
                        </div>
                        <div className={styles.fullSections}>
                            <label htmlFor='businessObj'>Business Objective & KPI's <span className={styles.required}>*</span></label>
                            <textarea
                                name='businessObj'
                                rows='5'
                                placeholder='Type Here'
                                required
                            ></textarea>
                        </div>
                        <hr/>
                        <h2>Design</h2>
                        <div className={styles.fullSections}>
                            <label htmlFor='suppliedDesigns'>Designs To Be Supplied By <span className={styles.required}>*</span></label>
                            <select name='suppliedDesigns'  className={styles.select}>
                                <option>Client</option>
                                <option>Flashtalking</option>
                            </select>
                        </div>
                    </div>
                </div>
            </form>
          </main>
        )
    };
  }

  export default BriefingForm;