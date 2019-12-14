
import React, {Component} from 'react';
import "./AvailableCategories.css";
import SubjectCard from "../SubjectCard/SubjectCard";

// Class Based React Component
class AvailableCategories extends Component{
  constructor(props){
    super(props);
    console.log(props);

    // Default CSS class to apply to the Component
    this.state = {
      classList: "AvailableCategories"
    };
  }


  // Runs after Component is loaded in the broswer
  componentDidMount(){}


  // Runs after a component has been updated
  componentDidUpdate(){}


  // Runs right before a component is removed from the DOM
  componentWillUnmount(){}

  render(){
    let categories = this.props.categories.map(val=>{
      let category = {
        title: val.category.properties.title,
        id: val.category.id
      };
      let subjects = val.subjects.map(subVal=>{
        let subject = {
          id: subVal.identity.low,
          title: subVal.properties.title
        }
        return <SubjectCard key={subject.id} id={subject.id} title={subject.title}/>
      })
      return <div key={category.id} className={"CategoryContainer"}>
              <h4 className={"CategoryHeader"}>{category.title}</h4>
              <div className={"CategorySubjectsContainer"}>
                {subjects}
              </div>
            </div>
    })
    return(
      <div className={this.state.classList}>
        {categories}
      </div>
    );
  }
}

export default AvailableCategories;
