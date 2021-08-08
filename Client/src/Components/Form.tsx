import React from 'react';
import TextField from '@material-ui/core/TextField';

interface Element {
  label: string,
  value: string | number,
  onValueChange: (value: string) => void
}

interface FormProps {
  elements: Element[]
}

interface FormState {

}

class Form extends React.Component<FormProps, FormState> {

  constructor(props: FormProps) {
    super(props);

    this.state = {};
  }

  render() {
    return (
        <form noValidate>
          {this.props.elements.map(element => {
            return (
              <TextField 
                label={element.label} 
                onChange={(event) => element.onValueChange(event.target.value)} 
                value={element.value}
              />)
          })}
        </form>
      );
  }
}

export default Form;