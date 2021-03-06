import React, {Component} from 'react'
import {SketchField, Tools} from 'react-sketch';

export default class SketchCard extends Component {
  render(){
    const sketch = this.props.sketch
    return(
      <table className="w3-table sketch-card-container">
        <tbody>
        <tr>
        <td>
          <SketchField
            ref="sketch"
            width='200px'
            height='200px'
            defaultData={sketch.data}
            defaultDataType="json"
            tool={Tools.Pan}
          />
        </td>
        <td className="sketch-info">
          <a href={"/sketches/" + sketch.id}><h1>{sketch.id}</h1></a>
          <h5>{sketch.created_at}</h5>
        </td>
        </tr>
        </tbody>
      </table>
    )
  }

}
