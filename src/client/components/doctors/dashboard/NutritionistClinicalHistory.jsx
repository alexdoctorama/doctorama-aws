import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation } from "react-router-dom";
import { JsonForms } from '@jsonforms/react';
import schema from './nutritionistclinicalhistoryschema.json';
import uischema from './nutritionistclinicalhistoryuischema.json';
import { makeStyles } from '@mui/styles';
import {
    materialRenderers,
    materialCells,
} from '@jsonforms/material-renderers';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { PDFDocument, rgb } from 'pdf-lib';

const useStyles = makeStyles({
    title: {
        textAlign: 'center',
        padding: '0.25em',
    },
    demoForm: {
        margin: 'auto',
        padding: '1rem',
        maxWidth: '600px',
    },
    group: {
        backgroundColor: '#f0f0f0',
        padding: '1rem',
        marginBottom: '1rem',
        borderRadius: '5px',
        textAlign: 'center',
    },
    card: {
        width: '80%',
        margin: 'auto',
        marginBottom: '1rem',
        textAlign: 'left',
    },
    cardContent: {
        padding: '1rem',
    }
});

const initialData = {
    doctorUuid: '',
    patientUuid: '',
    patientName: '',
    patientSurname: '',
    nie: '',
    patientDateOfBirth: '',
    phone: '',
    address: '',
    reasonForConsultation: '',
    currentIllness: '',
    hT: '',
    pathologyHistory: '',
    pharmacologicalTreatment: '',
    allergies: '',
    gynecologicalHistory: '',
    vaccinationStatus: '',
    TA: '',
    FC: '',
    FR: '',
    SAT: '',
    headAndNeck: '',
    thorax: '',
    abdomen: '',
    genitourinary: '',
    extremities: '',
    neurological: '',
    laboratoryTests: '',
    analysis: '',
    diagnosis: ''
};

const capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
};

const splitCamelCase = (str) => {
    return str.replace(/([a-z])([A-Z])/g, '$1 $2');
};

const NutritionistClinicalHistory = () => {
    const location = useLocation();
    const [data, setData] = useState(initialData);
    const [response, setResponse] = useState(null);
    const classes = useStyles();

    const clinicalHistoryUuid = location.state.clinicalHistoryUuid;
    console.log(clinicalHistoryUuid);
    const appointmentUuid = location.state.appointmentUuid;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://ec2-16-171-147-152.eu-north-1.compute.amazonaws.com:8080/nutritionistclinicalhistory?nutritionistClinicalHistoryUuid=${clinicalHistoryUuid}`);
                setResponse(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        if (clinicalHistoryUuid !== 'uuid') {
            fetchData();
        }
    }, [clinicalHistoryUuid]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const flattenedData = {
                appointmentUuid: appointmentUuid,
                patientName: data.PatientData.Name,
                patientSurname: data.PatientData.Surname,
                passport: data.PatientData.Passport,
                patientDateOfBirth: data.PatientData.DateOfBirth,
                phone: data.PatientData.Phone,
                address: data.PatientData.Address,
                overweightOrObesity: data.FamilyBackground.OverweightOrObesity,
                heartProblems: data.FamilyBackground.HeartProblems,
                DMType1: data.FamilyBackground.DMType1,
                DMType2: data.FamilyBackground.DMType2,
                HTA: data.FamilyBackground.HTA,
                cancer: data.FamilyBackground.Cancer,
                hypertriglyceridemia: data.FamilyBackground.Hypertriglyceridemia,
                hypercholesterolemia: data.FamilyBackground.Hypercholesterolemia,
                kidneyInsufficiency: data.FamilyBackground.KidneyInsufficiency,
                respiratoryDiseases: data.FamilyBackground.RespiratoryDiseases,
                mentalIllnesses: data.FamilyBackground.MentalIllnesses,
                alcoholism: data.FamilyBackground.Alcoholism,
                asthma: data.FamilyBackground.Asthma,
                cirrhosis: data.FamilyBackground.Cirrhosis,
                anemia: data.FamilyBackground.Anemia,
                others: data.FamilyBackground.Others,
                diarrhea: data.PathologicalBackground.Diarrhea,
                hypertriglyceridemiaPathological: data.PathologicalBackground.Hypertriglyceridemia,
                gastritis: data.PathologicalBackground.Gastritis,
                sore: data.PathologicalBackground.Sore,
                overweightPathological: data.PathologicalBackground.Overweight,
                obesity: data.PathologicalBackground.Obesity,
                nausea: data.PathologicalBackground.Nausea,
                threwUp: data.PathologicalBackground.ThrewUp,
                colitis: data.PathologicalBackground.Colitis,
                DMType1Pathological: data.PathologicalBackground.DMType1,
                DMType2Pathological: data.PathologicalBackground.DMType2,
                hypercholesterolemiaPathological: data.PathologicalBackground.Hypercholesterolemia,
                anemiaPathological: data.PathologicalBackground.Anemia,
                bulimiaNervosa: data.PathologicalBackground.BulimiaNervosa,
                sedentarism: data.PathologicalBackground.Sedentarism,
                alcoholConsumption: data.NonPathological.AlcoholConsumption,
                alcoholConsumptionFrequency: data.NonPathological.AlcoholConsumptionFrequency,
                whatDrinksDoYouConsume: data.NonPathological.WhatDrinksDoYouConsume,
                smoking: data.NonPathological.Smoking,
                smokingFrequency: data.NonPathological.SmokingFrequency,
                previouslyOnADiet: data.Dietetics.PreviouslyOnADiet,
                dietWhen: data.Dietetics.DietWhen,
                dietResults: data.Dietetics.DietResults,
                appetite: data.Dietetics.Appetite,
                changedForWork: data.Dietetics.ChangeDietMotif.ChangedForWork,
                changedForStudy: data.Dietetics.ChangeDietMotif.ChangedForStudy,
                changedForMoving: data.Dietetics.ChangeDietMotif.ChangedForMoving,
                motif: data.Dietetics.ChangeDietMotif.Motif,
                cravingsTime: data.Dietetics.CravingsTime,
                favoriteFoods: data.Dietetics.FavoriteFoods,
                dislikedFoods: data.Dietetics.DislikedFoods,
                allergicFoods: data.Dietetics.AllergicFoods,
                dietarySupplement: data.Dietetics.DietarySupplement,
                foodPreparer: data.Dietetics.FoodPreparer,
                eatBetweenMeals: data.Dietetics.EatBetweenMeals,
                sugarInDrinks: data.Dietetics.SugarInDrinks,
                // Add more fields as needed
            };

            console.log(flattenedData);
            await axios.post('http://ec2-16-171-147-152.eu-north-1.compute.amazonaws.com:8080/nutritionistclinicalhistory', flattenedData);
            console.log('Data submitted successfully');
            window.location.href = '/doctor/doctor-dashboard';
        } catch (error) {
            console.error('Error submitting data:', error);
        }
    };

    const generatePDF = async () => {
        try {
            const pdfDoc = await PDFDocument.create();
            let page = pdfDoc.addPage();
            let { width, height } = page.getSize();
            const titleFontSize = 20;
            const attributeFontSize = 15;
            const valueFontSize = 12;
            const lineHeight = 20; // Adjust line height as needed

            const font = await pdfDoc.embedFont('Helvetica');

            // Title
            page.drawText('Nutritionist Clinical History', {
                x: 50,
                y: height - 50,
                size: titleFontSize,
                color: rgb(0, 0, 0),
                font: font,
            });

            // Position for attributes and values
            let yPosition = height - 100;

            // Iterate over response object
            for (const [key, value] of Object.entries(response)) {
                // Format attribute name
                const formattedAttribute = key.split(/(?=[A-Z])/).map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

                // Draw attribute name with larger font size
                page.drawText(formattedAttribute, {
                    x: 50,
                    y: yPosition,
                    size: attributeFontSize,
                    color: rgb(0, 0, 0),
                    font: font,
                });

                // Draw value below attribute name
                if (value !== null && value !== undefined) {
                    // Split value into paragraphs if it's too long
                    const paragraphs = value.toString().match(/.{1,100}/g) || [''];

                    // Draw each paragraph
                    for (const paragraph of paragraphs) {
                        page.drawText(paragraph, {
                            x: 70,
                            y: yPosition - lineHeight, // Adjust vertical position by line height
                            size: valueFontSize,
                            color: rgb(0, 0, 0),
                            font: font,
                        });

                        // Move to next line
                        yPosition -= lineHeight; // Adjust line spacing as needed

                        // Check if remaining space is enough for the next line
                        if (yPosition < lineHeight * 2) {
                            // Create a new page
                            page = pdfDoc.addPage();
                            ({ width, height } = page.getSize());

                            // Reset yPosition for the new page
                            yPosition = height - 50; // Adjust as needed

                            // Title for the new page
                            page.drawText('Nutritionist Clinical History (Continued)', {
                                x: 50,
                                y: height - 50,
                                size: titleFontSize,
                                color: rgb(0, 0, 0),
                                font: font,
                            });
                        }
                    }
                } else {
                    // If value is null or undefined, draw a placeholder
                    page.drawText('N/A', {
                        x: 70,
                        y: yPosition - lineHeight, // Adjust vertical position by line height
                        size: valueFontSize,
                        color: rgb(0, 0, 0),
                        font: font,
                    });

                    // Move to next line
                    yPosition -= lineHeight; // Adjust line spacing as needed
                }

                // Move to next line after drawing each attribute
                yPosition -= lineHeight; // Adjust line spacing as needed
            }

            const pdfBytes = await pdfDoc.save();
            const blob = new Blob([pdfBytes], { type: 'application/pdf' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'clinical_history.pdf';
            a.click();
        } catch (error) {
            console.error('Error generating PDF:', error);
        }
    };

    return (
        <div className={classes.group}>
            {response ? (
                <div>
                    <Button onClick={generatePDF}>Generate PDF</Button>
                    {Object.entries(response).map(([key, value]) => (
                        <Card key={key} className={classes.card}>
                            <CardContent className={classes.cardContent}>
                                <h1>{splitCamelCase(capitalizeFirstLetter(key))}</h1>
                                <p>{value}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            ) : clinicalHistoryUuid === 'uuid' ? (
                <div className={classes.demoForm}>
                    <JsonForms
                        schema={schema}
                        uischema={uischema}
                        data={data}
                        renderers={materialRenderers}
                        cells={materialCells}
                        onChange={({ data, errors }) => setData(data)}
                    />
                    <button onClick={handleSubmit}>Submit</button>
                </div>
            ) : null}
        </div>
    );
};

export default NutritionistClinicalHistory;
