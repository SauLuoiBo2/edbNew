import React from 'react';
import { ConfigView } from '../view';

type Props = {
    tab: number;
};

export const TabConfig = ({ tab }: Props) => {
    switch (tab) {
        case 0:
            return <ConfigView.ExamType />;
        case 1:
            return <ConfigView.ExamTime />;
        case 2:
            return <ConfigView.QuestionType />;
        case 3:
            return <ConfigView.CalculationType />;
        case 4:
            return <ConfigView.PercentQuestion />;
        case 5:
            return <ConfigView.TimeSentExam />;
        default:
            return <div>loading</div>;
    }
};
