import React from 'react'
import NavLink from './NavLink'

export default React.createClass({
  componentDidMount() {
    console.log("Restos did mount");
  },

  componentWillUnmount() {
    console.log("Restos did unmount");
  },

  render() {

    var restos = [
      {
        id: "1",
        name: "Le Septime",
        adress: "Avenue de la République"
      },
      {
        id: "2",
        name: "Chez Momo",
        adress: "Avenue de la République"
      },
      {
        id: "3",
        name: "Couscous Déli",
        adress: "Avenue de la République"
      },
      {
        id: "4",
        name: "Le Rey",
        adress: "Avenue de la République"
      },
      {
        id: "5",
        name: "Hotdog Factory",
        adress: "Avenue de la République"
      },
      {
        id: "6",
        name: "Mon Beyrouth",
        adress: "Avenue de la République"
      },
      {
        id: "7",
        name: "Balls",
        adress: "Avenue de la République"
      },
      {
        id: "8",
        name: "L'Express Bar",
        adress: "Avenue de la République"
      }
    ];

    var listRestos = restos.map((resto) =>
      <li key={resto.id}>
        <NavLink to={`/restos/${resto.name}`} data-adress={`${resto.adress}`}>
          {resto.name}
        </NavLink>
      </li>
    );

    console.log('listRestos : ', listRestos);

    return (
      <div className="page page-restos">
        <h2>Restos</h2>
        <ul>
          {listRestos}
        </ul>
        {this.props.children}
      </div>
    )
  }
})
