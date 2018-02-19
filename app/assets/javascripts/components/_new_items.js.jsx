class NewItem extends React.Component {
  constructor(){
    super();
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(){
    let name = this.name.value
    let description = this.description.value
    let body = JSON.stringify({item: {name: name, description: description} })
    fetch('http://localhost:3000/api/v1/items', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: body,
    }).then((response) => {return response.json()})
    .then((item)=>{this.props.handleSubmit(item)})
    
  }

  render(){
    return(
      <div>
        <input ref={input => this.name = input} placeholder='Enter the name of the item'/>
        <input ref={input => this.description = input} placeholder='Enter a description' />
        <button onClick={this.handleClick}>Submit</button>
      </div>
    )
  }
}