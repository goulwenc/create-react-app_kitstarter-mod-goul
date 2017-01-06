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
        adress: "85, rue de Charonne",
        city: "PARIS",
        zipcode: "75020"
      },
      {
        id: "2",
        name: "Chez Momo",
        adress: "44, avenue de la République",
        city: "PARIS",
        zipcode: "75011"
      },
      {
        id: "3",
        name: "Couscous Déli",
        adress: "15, boulevard de Belleville",
        city: "PARIS",
        zipcode: "75010"
      },
      {
        id: "4",
        name: "Le Rey",
        adress: "1, place Léon Blum",
        city: "PARIS",
        zipcode: "75011"
      },
      {
        id: "5",
        name: "Hotdog Factory",
        adress: "11, avenue Parmentier",
        city: "PARIS",
        zipcode: "75011"
      },
      {
        id: "6",
        name: "Le Royal Beyrouth",
        adress: "2, rue de la Folie Méricourt",
        city: "PARIS",
        zipcode: "75011"
      },
      {
        id: "7",
        name: "Balls",
        adress: "56, rue Saint Maur",
        city: "PARIS",
        zipcode: "75011"
      },
      {
        id: "8",
        name: "L'Express Bar",
        adress: "79, rue Saint Maur",
        city: "PARIS",
        zipcode: "75011"
      }
    ];

    var listRestos = restos.map((resto) =>
      <li key={resto.id}>
        <NavLink to={{
            pathname: `/restos/${resto.name}`,
            state: {
              name: resto.name,
              adress: resto.adress,
              city: resto.city,
              zipcode: resto.zipcode
            }
          }}>
          {resto.name}
        </NavLink>
      </li>
    );

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
