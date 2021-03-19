import React from "react"
import RawData from "./RawData"
import CanvasJSReact from "../canvasjs.react"
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
const PieChart =()=> {

        
        const val = RawData.map(item=>(
           {y:parseInt(item["Percentage"].replace("%","")),label:item["Department Name"]}
        ))

		const options = {
            theme: "dark2",
			animationEnabled: true,
			exportFileName: "Department Details",
			exportEnabled: true,
			title:{
				text: "Department Details"
			},
			data: [{
				type: "pie",
				showInLegend: true,
				legendText: "{label}",
				toolTipContent: "{label}: <strong>{y}%</strong>",
				indexLabel: "{y}%",
                indexLabelPlacement: "inside",
				dataPoints: val
			}]
		}
		return (
		<div>
			<CanvasJSChart options = {options}/>
		</div>
		);
	}

export default PieChart