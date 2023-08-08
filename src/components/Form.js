import React from "react";

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movie: "",
      date: "",
      time: "",
      quantity: "",
      name: "",
      email: ""
    };
  }

  componentDidMount() {
    const savedData = localStorage.getItem("movieTicketFormData");
    if (savedData) {
      this.setState(JSON.parse(savedData));
    }
  }

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
localStorage.setItem("movieTicketFormData", JSON.stringify(this.state));
  }
  render(props) {
    return (
      <div className="container my-4">
        <h1 className="mt-4" style={{textAlign:"center"}}>Movie Ticket Reservation {this.props.movieName} </h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="movie">Movie:</label>
            <input type="text" className="form-control my-2" id="movie" name="movie" value={this.state.movie} onChange={this.handleChange} required />
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="date">Date:</label>
              <input type="date" className="form-control my-2" id="date" name="date" value={this.state.date} onChange={this.handleChange} required />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="time">Time:</label>
              <input type="time" className="form-control my-2" id="time" name="time" value={this.state.time} onChange={this.handleChange} required />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="quantity">Quantity:</label>
            <input type="number" className="form-control my-2" id="quantity" name="quantity" value={this.state.quantity} onChange={this.handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" className="form-control my-2" id="name" name="name" value={this.state.name} onChange={this.handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" className="form-control my-2" id="email" name="email" value={this.state.email} onChange={this.handleChange} required />
          </div>
          <button type="submit" className="btn btn-primary my-2">Submit</button>
        </form>
      </div>
    );
  }
}

export default Form;
