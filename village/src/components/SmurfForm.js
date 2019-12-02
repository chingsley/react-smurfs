import React, { Component } from 'react';

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        name: '',
        alias: '',
        movies: [''],
        voicedBy: [''],
        description: '',
      },
    };
  }

  addMoreMovies = () => {
    this.setState(prevState => ({
        form: {
          ...prevState.form,
        movies: [...prevState.form.movies, '']
        }
      }));
  };

  addMoreVB  = () => {
    this.setState(prevState => ({
        form: {
          ...prevState.form,
        voicedBy: [...prevState.form.voicedBy, '']
        }
      }));
  };

  submitForm = event => {
    event.preventDefault();
    // console.log(this.state.form)
    const form = { ...this.state.form }  // This line creates a new form object stored in a different memory location that the state form object
    form.movies = form.movies.filter(movie => movie !== '');
    form.voicedBy = form.voicedBy.filter(vb => vb !== '');
    // console.log(form);
    this.setState({
      form: {
        name: '',
        alias: '',
        movies: [''],
        voicedBy: [''],
        description: '',
      }
    });
  }

  handleInputChange = e => {
    // e.persist();
    const {name, value: inputValue, attributes: { index }} = e.target;
    this.setState(prevState => {
      const frm = prevState.form;
      if(index) {
        frm[name][index.value] = inputValue;
      } else {
        frm[name] = inputValue;
      }
      return {
        form: frm,
      };
    });
  };

  render() {
    const {
      form: {
        name,
        alias,
        movies,
        voicedBy,
        description
      }
    } = this.state;
    return (
      <div className="SmurfForm">
        <div className="container">
          <div className="card">
            <h5 className="card-header">New Smurf</h5>
            <form className="smurf-form" onSubmit={this.submitForm}>
              <div className="form-group col-md-12">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Smurf name"
                  name="name"
                  value={name}
                  onChange={this.handleInputChange}
                />
              </div>
              <div className="form-group col-md-12">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Smurf alias"
                  name="alias"
                  value={alias}
                  onChange={this.handleInputChange}
                />
              </div>
              <div className="flex">
                {
                  movies.map((movie, movieIndex) => (
                    <div key={movieIndex} className="form-group col-md-4">
                      <input
                        index={movieIndex}
                        type="text"
                        className="form-control"
                        placeholder="Smurf movies"
                        name="movies"
                        value={movie}
                        onChange={this.handleInputChange}
                      />
                    </div>
                  ))
                }
                {
                  movies.length < 3 &&
                  <i className="fa fa-plus" onClick={this.addMoreMovies}></i>
                }
              </div>
              <div className="flex">
                {
                  voicedBy.map((vb, vbIndex) => (
                    <div key={vbIndex} className="form-group col-md-4">
                      <input
                        index={vbIndex}
                        type="text"
                        className="form-control"
                        placeholder="Voiced by"
                        name="voicedBy"
                        value={vb}
                        onChange={this.handleInputChange}
                      />
                    </div>
                  ))
                }
                {
                  voicedBy.length < 3 &&
                   <i className="fa fa-plus" onClick={this.addMoreVB}></i>
                }
              </div>
              <div className="form-group col-md-12">
                <textarea
                  className="form-control"
                  rows="3"
                  placeholder="Smurf description"
                  name="description"
                  value={description}
                  onChange={this.handleInputChange}
                />
              </div>
              <div className="form-group col-md-12">
                <button type="submit" className="btn-submit">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default SmurfForm;
