import React from 'react';
import Button from './Button';
import './PlanBox.scss';

export default function PlanBox() {
    return (
        <div className="PlanBox">
            <div className="strip">
                <h2>My Plan</h2>
                <div className="actions">
                    <Button>Snapshot</Button>
                    <Button>Auto Place</Button>
                </div>
            </div>
            <div className="content">
                test
            </div>
        </div>
    );
}
