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
      title:""
    };
    this.getCategories();
  }

  // Runs after Component is loaded in the broswer
  componentDidMount() {}

  // Runs after a component has been updated
  componentDidUpdate() {}

  //const [open, setOpen] = React.useState(false);

  handleClickOpen = () => {
    this.setState({
      open: true
    });
  };

  handleClose = () => {
    this.setState({
      open: false
    });
  };

  // Runs right before a component is removed from the DOM
  componentWillUnmount() {}


  submitForm=()=>{
    let obj = {
      title:this.state.title,
      categoryId:''
    }
  }



  handleChange = event => {
    let key = event.target.name;
    console.log(key)
    this.setState({
      [key]: event.target.value
    });
  };

  getCategories = () => {
    api.getCategories()
      .then(results=>{
        console.log(results);
        let items = results.data.map(val => {
          return <MenuItem key={val.id} value={val.title}>{val.title}</MenuItem>;
        });
        items.unshift(
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
        );
        this.setState({
          categories:items
        })
      })
  };

  render() {
    let items = this.state.categories;

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
            <FormControl>
              <InputLabel id="demo-simple-select-label">Categories</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={this.state.selectedCategory}
                name="selectedCategory"
                onChange={this.handleChange}
                autoWidth
              >
                {items}
              </Select>
            </FormControl>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleClose} color="primary">
              Create Subject
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default CreateSubject;
