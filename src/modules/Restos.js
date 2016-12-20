import React from 'react'
import NavLink from './NavLink'

export default React.createClass({
  componentDidMount() {
    console.log("Restos did mount");
  },

  render() {

    var restos = [
      {
        id: "1",
        name: "Le Septime"
      },
      {
        id: "2",
        name: "Chez Momo"
      },
      {
        id: "3",
        name: "Couscous Déli"
      },
      {
        id: "4",
        name: "Le Rey"
      },
      {
        id: "5",
        name: "Hotdog Factory"
      },
      {
        id: "6",
        name: "Mon Beyrouth"
      },
      {
        id: "7",
        name: "Balls"
      },
      {
        id: "8",
        name: "L'Express Bar"
      }
    ];

    var listRestos = restos.map((resto) =>
      <li key={resto.id}>
        <NavLink to={`/restos/${resto.name}`}>
          {resto.name}
        </NavLink>
      </li>
    );

    console.log(listRestos);

    return (
      <div className="page page-restos">
        <h2>Restos</h2>
        <ul>
          {listRestos}
        </ul>
      </div>
    )
  }
})
