class Body extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(item){
    this.setState({items: this.state.items.concat(item)});
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
        <AllItems items={this.state.items}/>
      </div>
    )
  }
}