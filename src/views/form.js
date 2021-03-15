import React,{ Component } from 'react';
import styles from './form.css';
export default class Form extends Component {

  constructor(props){
    super(props)

    this.state = {
      categoryView : [],
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e){

    e.preventDefault();
    let selectBox = document.getElementById("selectme");
    let selectedIndex = selectBox.options[selectBox.selectedIndex].value;
    console.log(selectedIndex);
    let tmpView = this.props.categories;

    //filter view based on categoryView
    tmpView = tmpView.filter((item)=>{
       return item.name == selectedIndex
    });

    this.setState({
      categoryView: tmpView
    })

  }

  handleChange(e){
    e.preventDefault();
    let selectBox = document.getElementById("selectme");
    let selectedIndex = selectBox.options[selectBox.selectedIndex].value;
    console.log(selectedIndex);
    let tmpView = this.props.categories;

    //filter view based on categoryView
    tmpView = tmpView.filter((item)=>{
       return item.name == selectedIndex
    });

    this.setState({
      categoryView: tmpView
    })



  }
  render() {
    const { categoryView } = this.state;
    const categories = this.props.categories;
    console.log(categories.data)
    return (
      <div className="wrapper">
      <div className="styled-select">
        <form onSubmit={this.handleSubmit}>

        <label>
          Input
          <input type="text" />
        </label><br/>

          <label>
            Pick from the given categories :
              <select id="selectme"  onChange={this.handleChange}>
                {
                  (categories && categories.length > 0) && categories.map((data) => {
                    return (<option key={data.id} id={data.id} value={data.name}> {data.name}</option>);
                  })
                }
              </select>
          </label><br/>

          <input  type="submit" value="submit" /><br/>
        </form>


        <div><h1>View Portal</h1>
        You have selected the following:
        <ul>
        {
          (categoryView && categoryView.length > 0) && categoryView.map((data) => {
            return (<li key={'hellfrom-'+data.id} id={'hell-'+ data.id}> {data.name}</li>);
          })
        }
        </ul>
        </div>
      </div>

        </div>
    )
  }



}
