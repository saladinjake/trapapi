import React,{ Component } from 'react';

export default class Form extends Component {
  handleSubmit(){

  }

  handleChange(){

  }
  render() {
    const categories = this.props.categories;
    console.log(categories.data)
    return (
      <div>
        <form onSubmit={this.handleSubmit}>

        <label>
          Input
          <input type="text" />
        </label><br/>

          <label>
            Pick from the given categories :
              <select  onChange={this.handleChange}>
                {
                  (categories && categories.length > 0) && categories.map((data) => {
                    return (<option key={data.id} id={data.id} value={data.name}> {data.name}</option>);
                  })
                }
              </select>
          </label><br/>

          <input type="submit" value="submit" /><br/>
        </form>
      </div>
    )
  }



}
