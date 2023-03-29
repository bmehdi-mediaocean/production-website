import React from 'react';
import styles from './BriefingForm.module.scss';
import formImage from '../images/flashtalking_production_logo.png';
import { useFormik } from 'formik';
import * as Yup from 'yup';

function BriefingForm() {

    const yesterday = new Date(Date.now() -86400000);

    /* Formik Logic */
    const formik = useFormik({
        initialValues: {
            projectTitle: '', campaignLiveDate: '', firstName: '', lastName: '',
            email: '', mediaBuyer: '', mediaBuyerEmail: '', ftCMFirstName: '',
            ftCMLastName: '', adFileLimit: '', sizesRequired: '', addLanguages: '',
            dynVersions: '', noFeed: '', prodFeed: '', storeLocFeed: '',
            weatherFeed: '', eventFeed: '', otherFeed: '', projectDesc: '',
            businessObj: '', suppliedDesigns: '', brandGuidelines: '', brandFonts: '',
            logos: '', artwork: '', videos: '', messaging: '',
            assetsDate: '', signOffEmail: '', specFunc: '', specTrack: '',
            dynVerSetup: '', backupMessaging: '', assetLink: '', addNotes: '',
            addURL: ''
        },

        //Validate Form
        validationSchema: Yup.object({
            projectTitle: Yup.string().required('Project Title is required'),
            campaignLiveDate: Yup.date().min(yesterday, 'Date cannot be in the past').required('Campaign Live Date is required'),
            firstName: Yup.string().required('First Name is required'),
            lastName: Yup.string(),
            email: Yup.string().email('Must be a valid email').required('Email is required'),
            mediaBuyer: Yup.string(),
            mediaBuyerEmail: Yup.string().email('Must be a valid email'),
            ftCMFirstName: Yup.string().required('First Name is required'),
            ftCMLastName: Yup.string(),
            adFileLimit: Yup.string(),
            sizesRequired: Yup.string().required('Creative Sizes are required'),
            addLanguages: Yup.string(),
            dynVersions: Yup.string().oneOf(['Only a single version required', '2 - 5 versions', '6 - 20 versions', '20+ versions']),
            noFeed: Yup.boolean(),
            prodFeed: Yup.boolean(),
            storeLocFeed: Yup.boolean(),
            weatherFeed: Yup.boolean(),
            eventFeed: Yup.boolean(),
            otherFeed: Yup.boolean(),
            projectDesc: Yup.mixed().required('Project Description is required'),
            businessObj: Yup.mixed().required('Business Objective is required'),
            suppliedDesigns: Yup.string().oneOf(['Client', 'Flashtalking'], 'Designs To Be Supplied By').required('Designs Supplier is required'),
            brandGuidelines: Yup.boolean(),
            brandFonts: Yup.boolean(),
            logos: Yup.boolean(),
            artwork: Yup.boolean(),
            videos: Yup.boolean(),
            messaging: Yup.boolean(),
            assetsDate: Yup.date().min(yesterday, "Date cannot be in the past"),
            signOffEmail: Yup.string().email('Must be a valid email'),
            specFunc: Yup.mixed(),
            specTrack: Yup.mixed(),
            dynVerSetup: Yup.string().oneOf(['Flashtalking', 'Client', 'Creative Agency', 'Other']),
            backupMessaging: Yup.mixed(),
            assetLink: Yup.string().url('Must be a valid URL'),
            addNotes: Yup.mixed(),
            addURL: Yup.string().url('Must be a valid URL')
        }),

        //Submit Form
        onSubmit: (values) => {
            console.log(values);
        },
    });

    console.log(formik.errors);

    return (
        <main>

            <div className={styles.imageDiv}>
                <img
                    src={formImage}
                    className={styles.logo}
                    alt='flashtalking-production-logo'
                />
            </div>
            <form onSubmit={formik.handleSubmit}>

                <div className={styles.formBody}>

                    <h1>Briefing Form</h1>

                    <div className={styles.forms}>

                        <h2>Project Details</h2>
                        <div className={styles.halfSections + ' ' + styles.leftSections}>
                            <label
                                htmlFor='projectTitle' className={formik.touched.projectTitle && formik.errors.projectTitle ? styles.required : ''}>
                                {formik.touched.projectTitle && formik.errors.projectTitle ? formik.errors.projectTitle : 'Project Title'} <span className={styles.required}>*</span>
                            </label>
                            <input
                                type='text'
                                name='projectTitle'
                                value={formik.values.projectTitle}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                required
                            />
                        </div>
                        <div className={styles.halfSections + ' ' + styles.rightSections}>
                            <label
                                htmlFor='campaignLiveDate' className={formik.touched.campaignLiveDate && formik.errors.campaignLiveDate ? styles.required : ''}>
                                {formik.touched.campaignLiveDate && formik.errors.campaignLiveDate ? formik.errors.campaignLiveDate : 'Campaign Live Date'} <span className={styles.required}>*</span>
                            </label>
                            <input
                                type='date'
                                name='campaignLiveDate'
                                placeholder='DD-MM-YYYY'
                                value={formik.values.campaignLiveDate}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                required
                            />
                        </div>
                        <div className={styles.halfSections + ' ' + styles.leftSections}>
                            <label
                                htmlFor='firstName' className={formik.touched.firstName && formik.errors.firstName ? styles.required : ''}>
                                {formik.touched.firstName && formik.errors.firstName ? formik.errors.firstName : 'Full Name'} <span className={styles.required}>*</span>
                            </label>
                            <input
                                className={styles.halfInput + ' ' + styles.leftInput}
                                type='text'
                                name='firstName'
                                placeholder='First Name'
                                value={formik.values.firstName}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                required
                            />
                            <input
                                className={styles.halfInput + ' ' + styles.rightInput}
                                type='text'
                                name='lastName'
                                placeholder='Last Name'
                                value={formik.values.lastName}
                                onChange={formik.handleChange}
                            />
                        </div>
                        <div className={styles.halfSections + ' ' + styles.rightSections}>
                            <label
                                htmlFor='email' className={formik.touched.email && formik.errors.email ? styles.required : ''}>
                                {formik.touched.email && formik.errors.email ? formik.errors.email : 'Email'} <span className={styles.required}>*</span>
                            </label>
                            <input
                                type='email'
                                name='email'
                                placeholder='example@example.com'
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                required
                            />
                        </div>
                        <div className={styles.halfSections + ' ' + styles.leftSections}>
                            <label htmlFor='mediaBuyer'>Media Buyer</label>
                            <input
                                type='text'
                                name='mediaBuyer'
                                value={formik.values.mediaBuyer}
                                onChange={formik.handleChange}
                            />
                        </div>
                        <div className={styles.halfSections + ' ' + styles.rightSections}>
                            <label
                                htmlFor='mediaBuyerEmail' className={formik.touched.mediaBuyerEmail && formik.errors.mediaBuyerEmail ? styles.required : ''}>
                                {formik.touched.mediaBuyerEmail && formik.errors.mediaBuyerEmail ? formik.errors.mediaBuyerEmail : 'Media Buyer Email'} <span className={styles.required}>*</span>
                            </label>
                            <input
                                type='email'
                                name='mediaBuyerEmail'
                                placeholder='example@example.com'
                                value={formik.values.mediaBuyerEmail}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                        </div>
                        <div className={styles.halfSections + ' ' + styles.leftSections}>
                            <label
                                htmlFor='ftCM' className={formik.touched.ftCMFirstName && formik.errors.ftCMFirstName ? styles.required : ''}>
                                Flashtalking Campaign Manager <span className={styles.required}>*</span>
                            </label>
                            <input
                                className={styles.halfInput + ' ' + styles.leftInput}
                                type='text'
                                name='ftCMFirstName'
                                placeholder='First Name'
                                value={formik.values.ftCMFirstName}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                required
                            />
                            <input
                                className={styles.halfInput + ' ' + styles.rightInput}
                                type='text'
                                name='ftCMLastName'
                                placeholder='Last Name'
                                value={formik.values.ftCMLastName}
                                onChange={formik.handleChange}
                            />
                        </div>
                        <div className={styles.halfSections + ' ' + styles.rightSections}>
                            <label htmlFor='adFileLimit'>Ad File Size Limit</label>
                            <input
                                type='text'
                                name='adFileLimit'
                                value={formik.values.adFileLimit}
                                onChange={formik.handleChange}
                            />
                        </div>
                        <div className={styles.halfSections + ' ' + styles.leftSections}>
                            <label
                                htmlFor='sizesRequired' className={formik.touched.sizesRequired && formik.errors.sizesRequired ? styles.required : ''}>
                                {formik.touched.sizesRequired && formik.errors.sizesRequired ? formik.errors.sizesRequired : 'Creatives Sizes Required'} <span className={styles.required}>*</span>
                            </label>
                            <input
                                type='text'
                                name='sizesRequired'
                                value={formik.values.sizesRequired}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                required
                            />
                        </div>
                        <div className={styles.halfSections + ' ' + styles.rightSections}>
                            <label htmlFor='addLanguages'>Additional Languages</label>
                            <input
                                type='text'
                                name='addLanguages'
                                value={formik.values.addLanguages}
                                onChange={formik.handleChange}
                            />
                        </div>
                        <div className={styles.halfSections + ' ' + styles.leftSections}>
                            <label htmlFor='dynVersions'>Dynamic Messaging Versions</label>
                            <select
                                name='dynVersions'
                                className={styles.select}
                                value={formik.values.dynVersions}
                                onChange={formik.handleChange}
                            >
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
                                    value={formik.values.noFeed}
                                    onChange={formik.handleChange}
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
                                    value={formik.values.prodFeed}
                                    onChange={formik.handleChange}
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
                                    value={formik.values.storeLocFeed}
                                    onChange={formik.handleChange}
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
                                    value={formik.values.weatherFeed}
                                    onChange={formik.handleChange}
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
                                    value={formik.values.eventFeed}
                                    onChange={formik.handleChange}
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
                                    value={formik.values.otherFeed}
                                    onChange={formik.handleChange}
                                />
                                <label
                                    className={styles.checkboxLabel}
                                    htmlFor='otherFeed'
                                >Other Feed</label>
                            </div>
                        </div>
                        <div className={styles.fullSections}>
                            <label
                                htmlFor='projectDesc' className={formik.touched.projectDesc && formik.errors.projectDesc ? styles.required : ''}>
                                {formik.touched.projectDesc && formik.errors.projectDesc ? formik.errors.projectDesc : 'Project Description'} <span className={styles.required}>*</span>
                            </label>
                            <textarea
                                name='projectDesc'
                                rows='5'
                                placeholder='Type Here'
                                value={formik.values.projectDesc}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                required
                            ></textarea>
                        </div>
                        <div className={styles.fullSections}>
                            <label
                                htmlFor='businessObj' className={formik.touched.businessObj && formik.errors.businessObj ? styles.required : ''}>
                                {formik.touched.businessObj && formik.errors.businessObj ? formik.errors.businessObj : "Business Objective & KPI's"} <span className={styles.required}>*</span>
                            </label>
                            <textarea
                                name='businessObj'
                                rows='5'
                                placeholder='Type Here'
                                value={formik.values.businessObj}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                required
                            ></textarea>
                        </div>

                        <hr/>

                        <h2>Design</h2>
                        <div className={styles.halfSections + ' ' + styles.leftSections}>
                            <label
                                htmlFor='suppliedDesigns' className={formik.touched.suppliedDesigns && formik.errors.suppliedDesigns ? styles.required : ''}>
                                {formik.touched.suppliedDesigns && formik.errors.suppliedDesigns ? formik.errors.suppliedDesigns : 'Designs To Be Supplied By'} <span className={styles.required}>*</span>
                            </label>
                            <select
                                className={styles.select}
                                name='suppliedDesigns'
                                value={formik.values.suppliedDesigns}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                required
                            >
                                <option>----</option>
                                <option>Client</option>
                                <option>Flashtalking</option>
                            </select>
                        </div>
                        <div className={styles.halfSections + ' ' + styles.rightSections}>
                            <label>Assets To Be Supplied</label>
                            <div className={styles.checkbox}>
                                <input 
                                    className={styles.checkboxInput}
                                    type='checkbox'
                                    name='brandGuidelines'
                                    value={formik.values.brandGuidelines}
                                    onChange={formik.handleChange}
                                />
                                <label
                                    className={styles.checkboxLabel}
                                    htmlFor='brandGuidelines'
                                >Brand Guidelines</label>
                            </div>
                            <div className={styles.checkbox}>
                                <input 
                                    className={styles.checkboxInput}
                                    type='checkbox'
                                    name='brandFonts'
                                    value={formik.values.brandFonts}
                                    onChange={formik.handleChange}
                                />
                                <label
                                    className={styles.checkboxLabel}
                                    htmlFor='brandFonts'
                                >Brand Fonts</label>
                            </div>
                            <div className={styles.checkbox}>
                                <input 
                                    className={styles.checkboxInput}
                                    type='checkbox'
                                    name='logos'
                                    value={formik.values.logos}
                                    onChange={formik.handleChange}
                                />
                                <label
                                    className={styles.checkboxLabel}
                                    htmlFor='logos'
                                >Logos</label>
                            </div>
                            <div className={styles.checkbox}>
                                <input 
                                    className={styles.checkboxInput}
                                    type='checkbox'
                                    name='artwork'
                                    value={formik.values.artwork}
                                    onChange={formik.handleChange}
                                />
                                <label
                                    className={styles.checkboxLabel}
                                    htmlFor='artwork'
                                >Artwork</label>
                            </div>
                            <div className={styles.checkbox}>
                                <input 
                                    className={styles.checkboxInput}
                                    type='checkbox'
                                    name='videos'
                                    value={formik.values.videos}
                                    onChange={formik.handleChange}
                                />
                                <label
                                    className={styles.checkboxLabel}
                                    htmlFor='videos'
                                >Videos</label>
                            </div>
                            <div className={styles.checkbox}>
                                <input 
                                    className={styles.checkboxInput}
                                    type='checkbox'
                                    name='messaging'
                                    value={formik.values.messaging}
                                    onChange={formik.handleChange}
                                />
                                <label
                                    className={styles.checkboxLabel}
                                    htmlFor='messaging'
                                >Messaging</label>
                            </div>
                        </div>
                        <div className={styles.halfSections + ' ' + styles.leftSections}>
                            <label htmlFor='assetsDate'>Date Assets To Be Supplied</label>
                            <input
                                type='date'
                                name='assetsDate'
                                placeholder='DD-MM-YYYY'
                                value={formik.values.assetsDate}
                                onChange={formik.handleChange}
                            />
                        </div>
                        <div className={styles.halfSections + ' ' + styles.rightSections}>
                            <label htmlFor='signOffEmail'>Contact Email For Assets and Design Sign Off</label>
                            <input
                                type='email'
                                name='signOffEmail'
                                placeholder='example@example.com'
                                value={formik.values.signOffEmail}
                                onChange={formik.handleChange}
                            />
                        </div>

                        <hr/>

                        <h2>Production</h2>
                        <div className={styles.halfSections + ' ' + styles.leftSections}>
                            <label htmlFor='specFunc'>Any Specific Required Functionality</label>
                            <textarea
                                name='specFunc'
                                rows='5'
                                placeholder='Type Here'
                                value={formik.values.specFunc}
                                onChange={formik.handleChange}
                            ></textarea>
                        </div>
                        <div className={styles.halfSections + ' ' + styles.rightSections}>
                            <label htmlFor='specTrack'>Any Specific Required Tracking</label>
                            <textarea
                                name='specTrack'
                                rows='5'
                                placeholder='Type Here'
                                value={formik.values.specTrack}
                                onChange={formik.handleChange}
                            ></textarea>
                        </div>

                        <hr/>

                        <h2>Delivery</h2>
                        <div className={styles.halfSections + ' ' + styles.leftSections}>
                            <label htmlFor='dynVerSetup'>Dynamic Messaging Versions To Be Set Up By</label>
                            <select
                                className={styles.select}
                                name='dynVerSetup'
                                value={formik.values.dynVerSetup}
                                onChange={formik.handleChange}
                            >
                                <option>Flashtalking</option>
                                <option>Client</option>
                                <option>Creative Agency</option>
                                <option>Other</option>
                            </select>
                        </div>
                        <div className={styles.halfSections + ' ' + styles.rightSections}>
                            <label htmlFor='backupMessaging'>Backup Messaging</label>
                            <textarea
                                name='backupMessaging'
                                rows='5'
                                placeholder='Type Here'
                                value={formik.values.backupMessaging}
                                onChange={formik.handleChange}
                            ></textarea>
                        </div>

                        <hr/>

                        <h2>Additional Information</h2>
                        <div className={styles.fullSections}>
                            <label
                                htmlFor='assetLink' className={formik.touched.assetLink && formik.errors.assetLink ? styles.required : ''}>
                                {formik.touched.assetLink && formik.errors.assetLink ? formik.errors.assetLink : 'Please Send Us Anything Required Here (WeTransfer, DropBox etc.)'}
                            </label>
                            <input
                                type='text'
                                name='assetLink'
                                value={formik.values.assetLink}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                        </div>
                        <div className={styles.fullSections}>
                            <label htmlFor='addNotes'>Additional Notes</label>
                            <textarea
                                name='addNotes'
                                rows='5'
                                placeholder='Type Here'
                                value={formik.values.addNotes}
                                onChange={formik.handleChange}
                            ></textarea>
                        </div>
                        <div className={styles.fullSections}>
                            <label
                                htmlFor='addURL' className={formik.touched.addURL && formik.errors.addURL ? styles.required : ''}>
                                {formik.touched.addURL && formik.errors.addURL ? formik.errors.addURL : 'Additional URL'}
                            </label>
                            <input
                                type='text'
                                name='addURL'
                                value={formik.values.addURL}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                        </div>

                        <hr/>

                        <h2>Verification</h2> 

                        <div className={styles.fullSections + ' ' + styles.buttonDiv}>
                            <button
                                type='submit'
                                className={styles.button}
                            >Submit</button>
                        </div>

                    </div>
                </div>
            </form>
        </main>
    );
  }

  export default BriefingForm;