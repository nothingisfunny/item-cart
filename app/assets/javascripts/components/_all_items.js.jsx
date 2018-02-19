class AllItems extends React.Component {

  render(){
    var items = this.props.items.map((item) => {
      return(
        <div key={item.id}>
          <h3>{item.name}</h3>
          <p>{item.description}</p>
          <button onClick={() => this.props.handleDelete(item.id)}>Delete</button>
        </div>
      )
    })

    return(
      <div>
        {items}
      </div>
    )
  }
}