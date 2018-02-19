class Body extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleSubmit(item){
    this.setState({items: this.state.items.concat(item)});
  }

  deleteItem(id){
    let newItems = this.state.items.filter((item)=> item.id != id)
    this.setState({items: newItems})
  }

  handleDelete(id){
    fetch(`http://localhost:3000/api/v1/items/${id}`, 
    {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response) => { 
        this.deleteItem(id)
      })
  }

  componentDidMount(){
    fetch('/api/v1/items.json')
      .then((response) => {return response.json()})
      .then((data) => {this.setState({ items: data }) });
  }

  render(){
    return(
      <div>
        <NewItem handleSubmit = {this.handleSubmit} />
        <AllItems items={this.state.items} handleDelete = {this.handleDelete}/>
      </div>
    )
  }
}