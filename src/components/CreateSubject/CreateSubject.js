import React, { Component } from "react";
import "./CreateSubject.css";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";

import api from "../../services/api";
// Class Based React Component
class CreateSubject extends Component {
  constructor(props) {
    super(props);
    console.log(props);

    // Default CSS class to apply to the Component
    this.state = {
      classList: "CreateSubject",
      open: false,
      createNewCategory: false,
      categories:[],
      selectedCategory:'',
      title:"",
      newCategory: false
    };
  }

  // Runs after Component is loaded in the broswer
  componentDidMount() {}

  // Runs after a component has been updated
  componentDidUpdate() {}

  //const [open, setOpen] = React.useState(false);

  handleClickOpen = () => {
    this.getCategories();
    this.setState({
      open: true
    });
  };

  handleClose = () => {
    this.setState({
      open: false,
      newCategory:false
    });
  };

  // Runs right before a component is removed from the DOM
  componentWillUnmount() {}


  submitForm=()=>{
    let createNewCategory = this.state.newCategory;
    let obj = {
      title:this.state.title,
      category:createNewCategory ? this.state.newCategoryField : this.state.categoryId,
      new: createNewCategory
    }
    api.createSubject(obj)
      .then(results=>{
        console.log(results);
        this.handleClose();
      })
  }



  handleChange = event => {
    let key = event.target.name;
    let value = event.target.value;
    if(key==="selectedCategory"){
      if(value === "createNewCategory"){
        this.setState({
          newCategory:true
        });
      }else{
        this.setState({
          [key]: value,
          categoryId:event.target.value.id
        });
      }
    }else if(key==="title" || key === "newCategoryField"){
      this.setState({
        [key]: value
      });
    }
  };

  getCategories = () => {
    api.getCategories()
      .then(results=>{
        console.log(results);
        let items = results.data.map(val => {
          return <MenuItem key={val.id} valuekey={val.id} value={val}>{val.title}</MenuItem>;
        });
        items.unshift(
          <MenuItem key="yolo" value="createNewCategory">
            <em>Create a new category</em>
          </MenuItem>
        );
        this.setState({
          categories:items
        })
      })
  };

  render() {
    let items = this.state.categories;
    let showCategories = !this.state.newCategory;
    let categories =  <FormControl>
                  <InputLabel id="demo-simple-select-label">Categories</InputLabel>
                  <Select
                  style={{width: "100%"}}
                    value={this.state.selectedCategory}
                    name="selectedCategory"
                    onChange={this.handleChange}
                    fullWidth={true}
                  >
                    {items}
                  </Select>
                </FormControl>;
    let createCategory =  <TextField
                  autoFocus
                  margin="dense"
                  id="name"
                  label="Category Name"
                  name="newCategoryField"
                  type="text"
                  onChange={this.handleChange}
                  fullWidth
                />
    let conditionalForm = showCategories ? categories : createCategory;
    return (
      <div>
        <Button
          variant="outlined"
          color="primary"
          onClick={this.handleClickOpen}
        >
          Create New Subject
        </Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Create New Subject</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Subject Title"
              name="title"
              type="text"
              onChange={this.handleChange}
              fullWidth
            />
            {conditionalForm}
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.submitForm} color="primary">
              Create Subject
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default CreateSubject;
