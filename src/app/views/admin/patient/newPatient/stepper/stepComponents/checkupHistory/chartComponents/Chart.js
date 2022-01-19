import React from 'react';
import {
    Category,
    ChartComponent,
    DataLabel,
    Inject,
    Legend,
    LineSeries,
    SeriesCollectionDirective,
    SeriesDirective,
    Tooltip
} from "@syncfusion/ej2-react-charts";

const Chart = (props) => {
    let {xName, yName, name, title, xTitle, yTitle, dataSource} = props;

    return (
        <div>
            <ChartComponent
                title={title}
                primaryXAxis={{valueType: "Category", title: xTitle}}
                primaryYAxis={{title: yTitle}}
                legendSettings={{visibility: true}}
                tooltip={{enable: true}}
            >
                <Inject services={[LineSeries, Category, Legend, DataLabel, Tooltip]}></Inject>
                <SeriesCollectionDirective>
                    <SeriesDirective
                        type="Line"
                        dataSource={dataSource}
                        xName={xName}
                        yName={yName}
                        name={name}
                        marker={{dataLabel: {visible: true}, visibility: true}}
                    >
                    </SeriesDirective>
                </SeriesCollectionDirective>
            </ChartComponent>
        </div>
    );
};

export default Chart;