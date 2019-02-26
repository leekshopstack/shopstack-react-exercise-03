import React, { Component } from 'react';
import './VacancySign.css';

class VacancySign extends React.Component {
    render() {
        const hasvacancy = this.props.hasvacancy;
        const text = (hasvacancy) ? 'Vacancy' : 'No Vacancy';
        return (
            <div className="vacancy">
                <h1>Excercise 02</h1>
                <p>{text}</p>
            </div>
        );
    }
}

export default VacancySign;
